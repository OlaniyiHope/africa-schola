// ============================================================
//  src/lib/api.ts
//  All API calls to the PHP backend in one place.
//  Update VITE_API_URL in your .env files to match your server.
// ============================================================

const BASE_URL = import.meta.env.VITE_PHP_API_URL ?? 'http://localhost:8001/api';

// ---- Generic fetch wrapper ----
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


// ============================================================
//  Types
// ============================================================
export interface Article {
  id:             number;
  title:          string;
  authors:        string[];
  year:           number;
  journal:        string;
  abstract:       string;
  category:       string;
  featured:       boolean;
  doi?:           string;
  type:           string;
  keywords:       string[];
  citations:      number;
  downloads:      number;
  views:          number;
  open_access:    boolean;
  published_date: string;
    volume?:        string;   // ← add this
  pages?:         string;   // ← add this

}

export interface Insight {
  id:        number;
  title:     string;
  excerpt:   string;
  date:      string;
  category:  string;
  image_alt: string;
  slug:      string;
}

export interface Journal {
  id:            number;
  name:          string;
  category:      string;
  issn:          string;
  impact_factor: string;
  open_access:   boolean;
  frequency:     string;
}

export interface CallForPapers {
  id:          number;
  journal:     string;
  title:       string;
  description: string;
  deadline:    string;
  topics:      string[];
  status:      'open' | 'upcoming';
}

export interface Manuscript {
  id:           number;
  title:        string;
  authors:      string;
  journal_id:   number;
  category:     string;
  abstract:     string;
  keywords:     string[];
  submitted_at: string;
  status:       string;
}

export interface ManuscriptSubmission {
  journal_id:          string;
  title:               string;
  abstract:            string;
  keywords:            string;
  article_type:        string;
  discipline:          string;
  authors:             string;
  affiliations:        string;
  corresponding_email: string;
  confirm_original:    boolean;
  confirm_ethics:      boolean;
  confirm_disclosure:  boolean;
}

export interface PaginatedResponse<T> {
  items:       T[];
  total:       number;
  page:        number;
  per_page:    number;
  total_pages: number;
}


// ============================================================
//  Articles
// ============================================================
export const articlesApi = {
  getAll: (params?: { page?: number; per_page?: number; category?: string; search?: string }) =>
    apiFetch<PaginatedResponse<Article>>('articles', params as Record<string, string | number>),

  getFeatured: (limit = 3) =>
    apiFetch<PaginatedResponse<Article>>('articles', { featured: '1', per_page: limit }),

  getById: (id: number) =>
    apiFetch<Article>('articles', { id }),
};


// ============================================================
//  Insights
// ============================================================
export const insightsApi = {
  getAll: (params?: { page?: number; per_page?: number }) =>
    apiFetch<PaginatedResponse<Insight>>('insights', params as Record<string, string | number>),

  getLatest: (limit = 3) =>
    apiFetch<Insight[]>('insights', { limit }),

  getById: (id: number) =>
    apiFetch<Insight>('insights', { id }),
};


// ============================================================
//  Categories
// ============================================================
export const categoriesApi = {
  getAll: () => apiFetch<string[]>('categories'),
};


// ============================================================
//  Journals
// ============================================================
export const journalsApi = {
  getAll: (params?: { category?: string; open_access?: string }) =>
    apiFetch<PaginatedResponse<Journal>>('journals', params as Record<string, string | number>),

  getById: (id: number) =>
    apiFetch<Journal>('journals', { id }),
};


// ============================================================
//  Call for Papers
// ============================================================
export const callForPapersApi = {
  getAll: (params?: { status?: 'open' | 'upcoming' }) =>
    apiFetch<PaginatedResponse<CallForPapers>>('call_for_papers', params as Record<string, string | number>),

  getById: (id: number) =>
    apiFetch<CallForPapers>('call_for_papers', { id }),
};


// ============================================================
//  Manuscripts
// ============================================================
export const manuscriptsApi = {
  getAll: (params?: { page?: number; per_page?: number; status?: string }) =>
    apiFetch<PaginatedResponse<Manuscript>>('manuscripts', params as Record<string, string | number>),

  submit: async (data: ManuscriptSubmission): Promise<{ id: number; title: string; status: string }> => {
    const res = await fetch(`${BASE_URL}/manuscripts`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.errors ? json.errors.join('\n') : json.error ?? 'Submission failed');
    }
    return json.data;
  },
};
