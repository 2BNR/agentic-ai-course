# Agentic AI Course 2026

🌐 **Live:** [2bnr.github.io/agentic-ai-course](https://2bnr.github.io/agentic-ai-course)

---

## What is this course?

Most AI tutorials teach you how to call an API and get a response. This course teaches something different — how to build systems that think in steps, use tools, remember context, and complete complex tasks on their own.

That's what an AI agent is. Not a chatbot that answers questions, but a system that autonomously plans a sequence of actions, executes them, observes the results, and adjusts its approach until a goal is reached. By 2026, this pattern is at the core of the most capable AI products being built — coding assistants, research pipelines, customer support systems, data processing workflows, and more.

This course takes you from the foundations all the way to production. You'll understand why agents work the way they do, how to build them from scratch, and how to deploy them in a way that's reliable, cost-efficient, and secure.

---

## Who is this for?

Developers and engineers who want to move beyond using AI tools and start building them. The theory sections are written to be accessible without a machine learning background — every concept is explained from first principles. The labs require Python and assume you're comfortable reading and writing code, but no prior AI or ML experience is needed.

---

## What you'll learn

### The foundations of modern AI
Before building agents, you need to understand what's inside them. The course opens with the machine learning concepts that power every modern AI system — how neural networks learn from data, what gradient descent actually does, how the Transformer architecture processes language, and what tokenisation means for how a model reads your input. These aren't abstract concepts here — they're explained in terms of what they mean for agent behaviour.

### How large language models work
A deep dive into LLMs as practical systems: how attention mechanisms work, why context windows matter and what happens when they fill up, how RLHF shapes model behaviour, and what you control at runtime through temperature, system prompts, and tool definitions. This section gives you the mental model you need to use LLMs effectively as agent reasoning engines.

### Agent architectures and patterns
The core of the course. You'll learn how agents are structured — the perceive → reason → act loop, the ReAct pattern (Reason + Act), Reflexion and self-correction, tool use at the API level, and how to build agents that don't just execute steps but recover from failures. You'll also learn the honest answer to when you should and shouldn't use an agent at all.

### Memory, knowledge, and context
How agents remember things — in-context memory (the prompt window), external semantic memory (vector stores), episodic memory (what happened in past sessions), and procedural memory (learned skills). You'll build a sliding-window memory agent and connect it to a ChromaDB knowledge base.

### Planning and decision-making
How agents break down complex goals: Chain-of-Thought reasoning, Plan-and-Solve for structured execution, Tree of Thoughts for exploring multiple paths, and dynamic replanning when sub-tasks fail. You'll build an agent that creates a plan, executes it with tools, detects failures, and replans on the fly.

### Prompt engineering
How to write system prompts that produce consistent, reliable agent behaviour. Role definition, constraint setting, few-shot examples, structured output formats, and how to defend against prompt injection attacks — including indirect injection through data the agent retrieves from the web or databases.

### How agents improve
The training techniques that make models better: the full RLHF pipeline, Constitutional AI, Direct Preference Optimization, Reflexion-style self-improvement through verbal feedback, and Process Reward Models that evaluate reasoning steps rather than just final answers.

### Retrieval-Augmented Generation (RAG)
How to give agents access to large knowledge bases without fine-tuning. Document chunking strategies, embedding models, vector databases, hybrid BM25 + semantic search, LLM reranking, and how to measure whether your RAG pipeline is actually working.

### Deploying agents to production
What changes when you move from a prototype to a real system: structured logging and tracing for debugging agent loops, exponential backoff and retry logic for transient failures, token budgets and iteration caps to control costs, evaluation datasets for regression testing, and canary rollouts for safe deployments.

### Real-world applications
How the patterns you've learned show up in production systems — coding assistants, research agents, data pipeline automation, and enterprise customer support. What actually breaks after launch, what metrics matter, and the most important architectural decision you'll make (that most tutorials skip entirely).

### Model Context Protocol (MCP)
The open standard that lets agents connect to any external system through a unified interface. How MCP works — hosts, clients, and servers — and how to build your own MCP server with FastMCP to expose tools, resources, and prompts to any MCP-compatible agent.

### Multi-agent orchestration
When one agent isn't enough. Orchestrator–worker patterns, generator–critic loops, parallel fan-in for tasks that can be split across multiple agents, how agents pass information between each other, and how trust hierarchies prevent one compromised agent from taking down the whole system.

### Agent security
The OWASP LLM Top 10 applied to agents. Direct and indirect prompt injection, sensitive data exposure through over-permissioned tools, supply chain attacks through third-party MCP servers, and a defence-in-depth approach that treats security as an architecture decision, not an afterthought.

### Long-horizon agents
Agents that run for minutes to hours across multiple sessions — spanning dozens of steps, tool calls, and potential failures. Durable state management outside the context window, milestone checkpointing, hierarchical summarisation to prevent context overflow, dynamic replanning, and how SWE-bench evaluates agents on real software engineering tasks.

---

## How the course is structured

16 sections, split into 9 hands-on labs and 7 knowledge-check quizzes.

**Labs** walk you through building a real system step by step — a ReAct agent with explicit reasoning traces, a RAG pipeline from scratch, an MCP server, a three-agent research pipeline, and more. Every code example uses real SDKs and runs without modification.

**Quizzes** test your understanding with 8 questions per section, instant feedback, and explanations that reference the actual source material — not just "correct" or "incorrect."

Every factual claim in this course is grounded in a real source: arXiv papers, official documentation from Anthropic, OpenAI, Google, and Microsoft, or verified open-source repositories. Concepts are tagged with recency indicators so you know what's an established pattern versus what's still emerging.

---

*By [@2BNR](https://github.com/2BNR)*
