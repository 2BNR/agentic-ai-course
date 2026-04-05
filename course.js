// ── SEO ──
const SITE_NAME = 'Agentic AI Course 2026';
const SITE_URL  = 'https://2bnr.github.io/agentic-ai-course'; // update before deploying

const SEO = {
  0:  {
    title: 'Agentic AI Course 2026 — Learn to Build AI Agents',
    description: 'A complete self-paced course on Agentic AI: from ML fundamentals to multi-agent systems, RAG, MCP, and production deployment. 16 sections with hands-on labs and quizzes.',
    slug: '',
  },
  1:  { description: 'Learn what Agentic AI is, how the perceive–reason–act loop works, and how agents differ from regular LLMs. Covers ReAct, tool use, and the agentic design vocabulary.', slug: 'sections/01-intro.html' },
  2:  { description: 'The ML fundamentals behind AI agents: supervised learning, neural networks, the Transformer architecture, tokenisation, and gradient descent.', slug: 'sections/02-ml-fundamentals.html' },
  3:  { description: 'Build a tool-using agent from scratch with the Anthropic SDK. Hands-on lab covers raw API calls, tool loops, LangChain, and LangGraph.', slug: 'sections/03-frameworks.html' },
  4:  { description: 'Deep dive into Large Language Models: attention, tokenisation, RLHF, prompt caching, and how to choose the right model for your use case.', slug: 'sections/04-llms.html' },
  5:  { description: 'Agent architectures in depth: ReAct, Reflexion, tool use patterns, and how to build agents that plan, act, and self-correct.', slug: 'sections/05-understanding-agents.html' },
  6:  { description: 'Give agents persistent memory: sliding-window context, episodic memory stores, and RAG-based retrieval with ChromaDB.', slug: 'sections/06-memory.html' },
  7:  { description: 'Agent decision-making and planning: Chain-of-Thought, Tree of Thought, Plan-and-Solve, and dynamic replanning when sub-tasks fail.', slug: 'sections/07-planning.html' },
  8:  { description: 'Prompt engineering for agents: few-shot prompting, chain-of-thought, structured output, and defending against prompt injection.', slug: 'sections/08-prompting.html' },
  9:  { description: 'How agents learn from feedback: RLHF pipeline, Constitutional AI, DPO, Reflexion self-improvement, and process reward models.', slug: 'sections/09-rl.html' },
  10: { description: 'Build a Retrieval-Augmented Generation system: chunking strategies, embeddings, hybrid search, LLM reranking, and RAG evaluation.', slug: 'sections/10-rag.html' },
  11: { description: 'Deploy AI agents to production: structured logging, exponential backoff, token budgets, iteration caps, eval datasets, and canary rollouts.', slug: 'sections/11-deployment.html' },
  12: { description: 'Real-world agent use cases: coding assistants, research agents, data pipelines, customer support automation, and when not to use agents.', slug: 'sections/12-real-world.html' },
  13: { description: 'Model Context Protocol (MCP): build an MCP server and client with FastMCP, expose tools and resources, connect agents to any external system.', slug: 'sections/13-mcp.html' },
  14: { description: 'Multi-agent orchestration: orchestrator–worker patterns, generator–critic loops, parallel fan-in, cost management, and agent trust hierarchies.', slug: 'sections/14-multi-agent.html' },
  15: { description: 'Agent security: OWASP LLM Top 10, direct and indirect prompt injection, sensitive data exposure, supply chain attacks, and defence in depth.', slug: 'sections/15-security.html' },
  16: { description: 'Long-horizon agents: durable state, milestone checkpointing, hierarchical summarisation, dynamic replanning, and SWE-bench evaluation.', slug: 'sections/16-long-horizon.html' },
};

function initSEO() {
  const sectionId = parseInt(document.body.dataset.section || '0');
  const data = SEO[sectionId] || SEO[0];
  const title = data.title || document.title;
  const description = data.description;
  const url = SITE_URL + (data.slug ? '/' + data.slug : '/');

  function meta(attrs) {
    // Skip if already present
    const key = attrs.name ? `meta[name="${attrs.name}"]` : `meta[property="${attrs.property}"]`;
    if (document.head.querySelector(key)) return;
    const el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }

  // Standard
  meta({ name: 'description', content: description });
  meta({ name: 'author', content: SITE_NAME });

  // Open Graph
  const ogImage = SITE_URL + '/images/og.png'; // export og.svg as og.png (1200x630) before deploying
  meta({ property: 'og:type',        content: sectionId === 0 ? 'website' : 'article' });
  meta({ property: 'og:site_name',   content: SITE_NAME });
  meta({ property: 'og:title',       content: title });
  meta({ property: 'og:description', content: description });
  meta({ property: 'og:url',         content: url });
  meta({ property: 'og:image',       content: ogImage });
  meta({ property: 'og:image:width', content: '1200' });
  meta({ property: 'og:image:height',content: '630' });
  meta({ property: 'og:image:alt',   content: 'Agentic AI Course 2026 — Build AI Agents That Actually Work' });

  // Twitter Card
  meta({ name: 'twitter:card',        content: 'summary_large_image' });
  meta({ name: 'twitter:title',       content: title });
  meta({ name: 'twitter:description', content: description });
  meta({ name: 'twitter:image',       content: ogImage });
  meta({ name: 'twitter:image:alt',   content: 'Agentic AI Course 2026 — Build AI Agents That Actually Work' });

  // Favicon
  function linkTag(attrs) {
    const sel = Object.entries(attrs).map(([k,v]) => `[${k}="${v}"]`).join('');
    if (document.head.querySelector('link' + sel)) return;
    const el = document.createElement('link');
    Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k,v));
    document.head.appendChild(el);
  }
  const faviconBase = sectionId === 0 ? '' : '..';
  linkTag({ rel: 'icon', type: 'image/svg+xml', href: faviconBase + '/favicon.svg' });
  linkTag({ rel: 'shortcut icon', href: faviconBase + '/favicon.svg' });

  // Canonical
  if (!document.head.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.head.appendChild(link);
  }

  // JSON-LD structured data — Course / LearningResource
  if (!document.head.querySelector('script[data-schema="main"]')) {
    const schema = sectionId === 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: SITE_NAME,
          description: description,
          url: url,
          provider: { '@type': 'Organization', name: SITE_NAME },
          numberOfCredits: 16,
          educationalLevel: 'Intermediate to Advanced',
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: title,
          description: description,
          url: url,
          isPartOf: { '@type': 'Course', name: SITE_NAME, url: SITE_URL + '/' },
          educationalLevel: 'Intermediate to Advanced',
          learningResourceType: sectionId % 3 === 0 ? 'Lab' : 'Lesson',
        };
    const mainEl = document.createElement('script');
    mainEl.type = 'application/ld+json';
    mainEl.setAttribute('data-schema', 'main');
    mainEl.textContent = JSON.stringify(schema);
    document.head.appendChild(mainEl);
  }

  // Theme color — colors browser chrome on Android Chrome and Safari
  meta({ name: 'theme-color', content: '#060609' });

  // WebSite schema — site identity, E-E-A-T signal
  if (!document.head.querySelector('script[data-schema="website"]')) {
    const wsEl = document.createElement('script');
    wsEl.type = 'application/ld+json';
    wsEl.setAttribute('data-schema', 'website');
    wsEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL + '/',
      author: { '@type': 'Person', name: '2BNR', url: 'https://github.com/2BNR' },
    });
    document.head.appendChild(wsEl);
  }

  // BreadcrumbList — section pages only (adds breadcrumb trails in Google results)
  if (sectionId > 0 && !document.head.querySelector('script[data-schema="breadcrumb"]')) {
    const pageTitle = document.title.split(' · ')[0]; // e.g. "01 — Intro to Agentic AI"
    const bcEl = document.createElement('script');
    bcEl.type = 'application/ld+json';
    bcEl.setAttribute('data-schema', 'breadcrumb');
    bcEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: pageTitle, item: url },
      ],
    });
    document.head.appendChild(bcEl);
  }
}

// ── READ TIME ──
function initReadTime() {
  const page = document.querySelector('.page');
  if (!page) return;
  const words = page.innerText.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  const breadcrumb = document.querySelector('.topbar-breadcrumb');
  if (!breadcrumb) return;
  const badge = document.createElement('span');
  badge.textContent = '\u00b7 ' + mins + ' min read';
  badge.style.cssText = 'color:var(--text-dim);font-family:var(--font-mono);font-size:0.65rem;margin-left:0.5rem;';
  breadcrumb.appendChild(badge);
}

// ── PREFETCH NEXT SECTION ──
function initPrefetch() {
  const nextLink = document.querySelector('a.nav-next');
  if (!nextLink) return;
  const href = nextLink.getAttribute('href');
  if (!href || href.includes('index.html')) return;
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

// ── FAQ SCHEMA (quiz sections) ──
function initFAQSchema() {
  const quizQs = document.querySelectorAll('.quiz-q');
  if (!quizQs.length) return;
  if (typeof QUIZ_ANSWERS === 'undefined') return;

  const entities = [];
  quizQs.forEach((qEl, i) => {
    const key = 'q' + (i + 1);
    const questionText = qEl.querySelector('.quiz-text')?.textContent?.trim();
    const correctLetter = QUIZ_ANSWERS[key];
    const correctInput = qEl.querySelector(`input[value="${correctLetter}"]`);
    const correctAnswerText = correctInput?.closest('label')?.querySelector('span')?.textContent?.trim();
    const rawExplanation = (typeof QUIZ_EXPLANATIONS !== 'undefined' && QUIZ_EXPLANATIONS[key]) || '';
    // Strip leading "Correct. " from explanation for cleaner schema output
    const answerText = rawExplanation
      ? rawExplanation.replace(/^Correct\.\s*/i, '')
      : correctAnswerText;
    if (!questionText || !answerText) return;
    entities.push({
      '@type': 'Question',
      name: questionText,
      acceptedAnswer: { '@type': 'Answer', text: answerText },
    });
  });

  if (!entities.length) return;

  const el = document.createElement('script');
  el.type = 'application/ld+json';
  el.setAttribute('data-schema', 'faq');
  el.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entities,
  });
  document.head.appendChild(el);
}

// ── ACRONYM EXPANSION ──
const ACRONYMS = {
  // AI / ML core
  'AI':    'Artificial Intelligence',
  'ML':    'Machine Learning',
  'NLP':   'Natural Language Processing',
  'LLM':   'Large Language Model',
  'SFT':   'Supervised Fine-Tuning',
  'GPT':   'Generative Pre-trained Transformer',
  'CNN':   'Convolutional Neural Network',
  'RNN':   'Recurrent Neural Network',
  'LSTM':  'Long Short-Term Memory (network)',
  'GPU':   'Graphics Processing Unit',
  'CPU':   'Central Processing Unit',
  'NMT':   'Neural Machine Translation',

  // Agent patterns
  'ReAct': 'Reason + Act (agent pattern)',
  'CoT':   'Chain-of-Thought',
  'ToT':   'Tree of Thought',
  'MDP':   'Markov Decision Process',

  // Training / alignment
  'RLHF':  'Reinforcement Learning from Human Feedback',
  'RLAIF': 'Reinforcement Learning from AI Feedback',
  'RLVR':  'Reinforcement Learning with Verifiable Rewards',
  'RL':    'Reinforcement Learning',
  'DPO':   'Direct Preference Optimization',
  'PPO':   'Proximal Policy Optimization',
  'KTO':   'Kahneman-Tversky Optimization',
  'CAI':   'Constitutional AI',
  'PRM':   'Process Reward Model',
  'ORM':   'Outcome Reward Model',
  'RM':    'Reward Model',
  'KL':    'Kullback–Leibler (divergence)',

  // Tokenisation
  'BPE':  'Byte Pair Encoding',

  // Retrieval / RAG
  'RAG':   'Retrieval-Augmented Generation',
  'ANN':   'Approximate Nearest Neighbor',
  'BM25':  'Best Match 25 (ranking function)',
  'HNSW':  'Hierarchical Navigable Small World (graph index)',
  'DPR':   'Dense Passage Retrieval',
  'FAISS': 'Facebook AI Similarity Search',

  // Protocols / APIs
  'MCP':   'Model Context Protocol',
  'API':   'Application Programming Interface',
  'SDK':   'Software Development Kit',
  'HTTP':  'HyperText Transfer Protocol',
  'HTTPS': 'HyperText Transfer Protocol Secure',
  'SSE':   'Server-Sent Events',
  'JSON':  'JavaScript Object Notation',
  'RPC':   'Remote Procedure Call',
  'URI':   'Uniform Resource Identifier',
  'MIME':  'Multipurpose Internet Mail Extensions',
  'XML':   'Extensible Markup Language',
  'HTML':  'HyperText Markup Language',
  'CSV':   'Comma-Separated Values',
  'PDF':   'Portable Document Format',
  'ASCII': 'American Standard Code for Information Interchange',
  'UTF':   'Unicode Transformation Format',
  'JS':    'JavaScript',
  'CLI':   'Command-Line Interface',
  'PR':    'Pull Request',

  // Cloud / infra
  'AWS':   'Amazon Web Services',
  'GCP':   'Google Cloud Platform',
  'SQS':   'Amazon Simple Queue Service',
  'CDN':   'Content Delivery Network',
  'APM':   'Application Performance Monitoring',
  'CNCF':  'Cloud Native Computing Foundation',
  'RPA':   'Robotic Process Automation',

  // Security
  'OWASP': 'Open Web Application Security Project',
  'XSS':   'Cross-Site Scripting',
  'SSRF':  'Server-Side Request Forgery',
  'PII':   'Personally Identifiable Information',
  'CSP':   'Content Security Policy',
  'SRI':   'Subresource Integrity',
  'SQL':   'Structured Query Language',

  // Engineering / dev
  'SWE':   'Software Engineering',
  'CI':    'Continuous Integration',
  'CD':    'Continuous Deployment',
  'TRL':   'Transformers Reinforcement Learning (HuggingFace library)',
  'UI':    'User Interface',
  'UX':    'User Experience',

  // Conferences
  'ICLR':  'International Conference on Learning Representations',
  'ICML':  'International Conference on Machine Learning',
  'NeurIPS': 'Conference on Neural Information Processing Systems',
};

function initAcronyms() {
  // Elements whose text content should not be touched
  const SKIP = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'ABBR', 'INPUT',
                        'TEXTAREA', 'NAV', 'TITLE', 'A']);

  // Build regex: longest terms first so RLHF matches before RL, HTTPS before HTTP, etc.
  const terms = Object.keys(ACRONYMS).sort((a, b) => b.length - a.length);
  // Escape any regex special chars in term names, allow optional trailing 's'
  const escaped = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp('\\b(' + escaped.join('|') + ')s?\\b', 'g');

  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      pattern.lastIndex = 0;
      if (!pattern.test(text)) return;

      pattern.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0, match;

      while ((match = pattern.exec(text)) !== null) {
        const term   = match[1];             // acronym without trailing s
        const full   = match[0];             // full matched text (may include s)
        const def    = ACRONYMS[term];
        if (!def) continue;

        if (match.index > last) {
          frag.appendChild(document.createTextNode(text.slice(last, match.index)));
        }
        const abbr = document.createElement('abbr');
        abbr.title = def;
        abbr.textContent = full;
        frag.appendChild(abbr);
        last = match.index + full.length;
      }

      if (last === 0) return; // nothing matched
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);

    } else if (node.nodeType === Node.ELEMENT_NODE && !SKIP.has(node.tagName)) {
      // Snapshot childNodes before walking — DOM mutations invalidate live lists
      Array.from(node.childNodes).forEach(walk);
    }
  }

  // Only process the main content column, not the sidebar nav
  const target = document.querySelector('.page') || document.querySelector('.main') || document.body;
  walk(target);
}

// ── PROGRESS TRACKING ──
const TOTAL_SECTIONS = 16;

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem('completed') || '[]');
  } catch { return []; }
}

function setCompleted(arr) {
  localStorage.setItem('completed', JSON.stringify(arr));
}

function markComplete(sectionId) {
  const completed = getCompleted();
  if (!completed.includes(sectionId)) {
    completed.push(sectionId);
    setCompleted(completed);
  }
  refreshUI();
}

function unmarkComplete(sectionId) {
  const completed = getCompleted().filter(id => id !== sectionId);
  setCompleted(completed);
  refreshUI();
}

function refreshUI() {
  const completed = getCompleted();
  const pct = Math.round((completed.length / TOTAL_SECTIONS) * 100);

  // Progress bar
  const fill = document.getElementById('progressFill');
  const count = document.getElementById('progressCount');
  if (fill) fill.style.width = pct + '%';
  if (count) count.textContent = completed.length + ' / ' + TOTAL_SECTIONS;

  // Nav items
  document.querySelectorAll('.nav-item[data-section]').forEach(item => {
    const id = parseInt(item.dataset.section);
    item.classList.toggle('completed', completed.includes(id));
  });

  // Complete button on current page
  const btn = document.getElementById('completeBtn');
  if (btn) {
    const sId = parseInt(btn.dataset.section);
    const isDone = completed.includes(sId);
    btn.textContent = isDone ? '✓ Completed' : 'Mark Complete';
    btn.className = isDone ? 'btn btn-green' : 'btn btn-outline';
  }
}

// ── STEP CHECKBOXES ──
function initStepTracking(sectionId) {
  const key = 'steps_' + sectionId;
  let stepsDone;
  try { stepsDone = JSON.parse(localStorage.getItem(key) || '[]'); }
  catch { stepsDone = []; }

  document.querySelectorAll('.step-check').forEach((cb, i) => {
    cb.checked = stepsDone.includes(i);
    const step = cb.closest('.step');
    if (cb.checked && step) step.classList.add('done');

    cb.addEventListener('change', () => {
      if (cb.checked) {
        if (!stepsDone.includes(i)) stepsDone.push(i);
        if (step) step.classList.add('done');
      } else {
        stepsDone = stepsDone.filter(x => x !== i);
        if (step) step.classList.remove('done');
      }
      localStorage.setItem(key, JSON.stringify(stepsDone));
    });
  });
}

// ── COPY CODE ──
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'COPIED!';
    btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = 'COPY'; btn.style.color = ''; }, 1500);
  });
}


// ── COMPLETE BUTTON ──
function initCompleteButton() {
  const btn = document.getElementById('completeBtn');
  if (!btn) return;
  const sId = parseInt(btn.dataset.section);
  btn.addEventListener('click', () => {
    const completed = getCompleted();
    if (completed.includes(sId)) {
      unmarkComplete(sId);
    } else {
      markComplete(sId);
    }
  });
}

// ── ACTIVE NAV ──
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-item[data-section]').forEach(item => {
    const href = item.getAttribute('href') || '';
    if (path.includes(href.replace('../', '').replace('./', ''))) {
      item.classList.add('active');
    }
  });
}

// ── KEYBOARD SHORTCUTS ──
function initKeyboardNav() {
  const prev = document.querySelector('a.nav-prev');
  const next = document.querySelector('a.nav-next');
  if (!prev && !next) return;

  document.addEventListener('keydown', e => {
    // Don't fire inside inputs, textareas, or with modifier keys
    const tag = document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key === 'ArrowLeft' && prev)  { e.preventDefault(); window.location.href = prev.href; }
    if (e.key === 'ArrowRight' && next) { e.preventDefault(); window.location.href = next.href; }
  });
}

// ── BACK TO TOP ──
function initBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  btn.style.cssText = [
    'position:fixed', 'bottom:1.5rem', 'right:1.5rem',
    'width:2.4rem', 'height:2.4rem', 'border-radius:50%',
    'background:var(--surface3)', 'border:1px solid var(--border2)',
    'color:var(--text-muted)', 'font-size:1rem', 'cursor:pointer',
    'opacity:0', 'pointer-events:none',
    'transition:opacity 0.25s ease', 'z-index:200',
    'display:flex', 'align-items:center', 'justify-content:center',
  ].join(';');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── MOBILE NAV ──
function initMobileNav() {
  const topbar = document.querySelector('.topbar');
  const sidebar = document.querySelector('.sidebar');
  if (!topbar || !sidebar) return;

  // Inject hamburger button at start of topbar
  const menuBtn = document.createElement('button');
  menuBtn.className = 'btn btn-outline menu-btn';
  menuBtn.id = 'menuBtn';
  menuBtn.setAttribute('aria-label', 'Open navigation');
  menuBtn.textContent = '☰';
  topbar.insertBefore(menuBtn, topbar.firstChild);

  // Inject overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  function openMenu() {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);

  // Close on nav item click (user tapped a link)
  sidebar.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', closeMenu);
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initSEO();
  initFAQSchema();
  initReadTime();
  initPrefetch();
  initAcronyms();
  refreshUI();
  setActiveNav();
  initCompleteButton();
  initMobileNav();
  initKeyboardNav();
  initBackToTop();

  // Skip-to-content link for keyboard / screen reader users
  const main = document.querySelector('main') || document.querySelector('[role="main"]');
  if (main) {
    if (!main.id) main.id = 'main-content';
    const skip = document.createElement('a');
    skip.href = '#main-content';
    skip.className = 'skip-link';
    skip.textContent = 'Skip to main content';
    document.body.insertBefore(skip, document.body.firstChild);
  }

  // Prevent reverse tabnapping on all external links
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    if (!a.rel.includes('noopener')) a.rel = 'noopener noreferrer';
  });

  const sectionId = document.body.dataset.section;
  if (sectionId) initStepTracking(parseInt(sectionId));

  // Register service worker for offline support
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
});
