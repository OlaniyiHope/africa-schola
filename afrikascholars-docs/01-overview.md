# 1. Overview

[← Back to Index](./README.md)

---

The original AfrikaScholars project was built as a monolith — HTML, CSS, and PHP all served together from the same files. While functional, this approach made it difficult to build a modern, interactive UI.

This document covers the decision made to:

- Keep PHP as the backend but convert it into a proper **REST API** (JSON-over-HTTP)
- Replace the HTML/CSS frontend with a **React application** that consumes those endpoints

---

## What Changed

> **PHP now acts purely as a backend** — it reads data, processes requests, and returns JSON.
> React handles all UI rendering and calls the PHP endpoints via `fetch()`.
> **No PHP is ever sent to the browser.**

### Before (Monolith)

```
Browser request
      │
      ▼
  PHP file
  ├── SQL / CSV query
  ├── HTML output
  └── CSS inline
```

### After (Decoupled)

```
Browser
  │
  ├── React App (Vite / Vercel)
  │     └── fetch() ──────────────────┐
  │                                   ▼
  │                          PHP REST API (cPanel)
  │                          └── JSON response ──┐
  └──────────────────────────────────────────────┘
```

---

## Stack at a Glance

| Layer | Technology | Host |
|-------|-----------|------|
| Frontend | React 18 + TypeScript + Vite | Vercel |
| Backend API | PHP (router-based REST) | cPanel Shared Hosting |
| Payments | Paystack (via PHP webhook) | — |
| Data store | CSV files + (future) MySQL | cPanel |

---

[Next: Backend File Structure →](./02-backend-structure.md)
