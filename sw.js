const CACHE = 'agentic-ai-v1';

const PRECACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/course.js',
  '/favicon.svg',
  '/manifest.json',
  '/images/og.svg',
  '/404.html',
  '/sections/01-intro.html',
  '/sections/02-ml-fundamentals.html',
  '/sections/03-frameworks.html',
  '/sections/04-llms.html',
  '/sections/05-understanding-agents.html',
  '/sections/06-memory.html',
  '/sections/07-planning.html',
  '/sections/08-prompting.html',
  '/sections/09-rl.html',
  '/sections/10-rag.html',
  '/sections/11-deployment.html',
  '/sections/12-real-world.html',
  '/sections/13-mcp.html',
  '/sections/14-multi-agent.html',
  '/sections/15-security.html',
  '/sections/16-long-horizon.html',
];

// Install — cache all static assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache-first, fall back to network
self.addEventListener('fetch', e => {
  // Only handle GET requests for same-origin resources
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
