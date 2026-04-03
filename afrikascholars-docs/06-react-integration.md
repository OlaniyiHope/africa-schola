# 6. React Frontend Integration

[← Back to Index](./README.md)

---

The React app communicates with the PHP backend exclusively through `fetch()` calls. There is no shared code, templates, or session between the two layers.

---

## 6.1 Base URL Configuration

A single constant holds the API base URL so it's easy to switch between development and production:

```js
// src/config/api.js
export const API_BASE = import.meta.env.VITE_API_URL || 'https://afrikascholars.com/api';
```

In development, create a `.env.local` file at the project root:

```env
VITE_API_URL=http://localhost:8001/api
```

> **Note:** Never commit `.env.local` to version control. It's already listed in `.gitignore`.

The production value is set in your hosting environment (e.g. Vercel environment variables):

```env
VITE_API_URL=https://afrikascholars.com/api
```

---

## 6.2 Generic Fetch Wrapper

The actual implementation in `src/lib/api.ts` uses a typed wrapper to keep all API calls consistent:

```ts
// src/lib/api.ts
const BASE_URL = import.meta.env.VITE_PHP_API_URL ?? 'http://localhost:8001/api';

async function apiFetch<T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> {
  const url = new URL(`${BASE_URL}/${endpoint}.php`);

  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== '') url.searchParams.set(k, String(v));
    });
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(err.error ?? `HTTP ${res.status}`);
  }

  const json = await res.json();
  return json.data as T;
}
```

---

## 6.3 Fetching Articles

```js
// src/hooks/useArticles.js
import { API_BASE } from '../config/api';

export async function fetchArticles({
  page = 1,
  per_page = 12,
  category,
  search,
  featured,
} = {}) {
  const params = new URLSearchParams({ page, per_page });

  if (category && category !== 'All') params.set('category', category);
  if (search)   params.set('search', search);
  if (featured) params.set('featured', '1');

  const res = await fetch(`${API_BASE}/articles.php?${params}`);

  if (!res.ok) throw new Error('Failed to fetch articles');

  const json = await res.json();

  if (!json.success) throw new Error(json.error || 'Unknown error');

  return json.data; // { items, total, page, per_page, total_pages }
}
```

---

## 6.4 Fetching a Single Article

```js
export async function fetchArticleById(id) {
  const res = await fetch(`${API_BASE}/articles.php?id=${id}`);

  if (!res.ok) throw new Error('Article not found');

  const json = await res.json();

  return json.data; // single article object
}
```

---

## 6.5 Auth — Login Example

```js
export async function loginScholar({ email, password }) {
  const res = await fetch(`${API_BASE}/sch-login`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ email, password }),
  });

  const json = await res.json();

  if (!json.success) throw new Error(json.message);

  return json; // { token, user, ... }
}
```

---

## 6.6 Using in a React Component

```jsx
import { useEffect, useState } from 'react';
import { fetchArticles } from '../hooks/useArticles';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [page,     setPage]     = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchArticles({ page })
      .then(data  => setArticles(data.items))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {articles.map(a => <li key={a.id}>{a.title}</li>)}
    </ul>
  );
}
```

---

## 6.7 React Query Hooks (Production Pattern)

The project uses `@tanstack/react-query` for caching and background refetching. Example pattern from `src/hooks/useApi.ts`:

```ts
import { useState, useEffect, useCallback } from 'react';

function useQuery<T>(fetcher: () => Promise<T>) {
  const [data,    setData]    = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  const run = useCallback(() => {
    setLoading(true);
    setError(null);
    fetcher()
      .then(setData)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [fetcher]);

  useEffect(() => { run(); }, [run]);

  return { data, loading, error, refetch: run };
}

// Usage
export function useArticles(params?: { page?: number; category?: string; search?: string }) {
  const fetcher = useCallback(() => articlesApi.getAll(params), [...]);
  return useQuery<PaginatedResponse<Article>>(fetcher);
}
```

---

[← Front Controller](./05-front-controller.md) · [Deployment →](./07-deployment.md)
