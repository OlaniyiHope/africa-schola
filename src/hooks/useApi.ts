// ============================================================
//  src/hooks/useApi.ts
//  Reusable React hooks for every endpoint
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import {
  articlesApi, insightsApi, categoriesApi,
  journalsApi, callForPapersApi, manuscriptsApi,
  Article, Insight, Journal, CallForPapers,
  ManuscriptSubmission, PaginatedResponse,
} from '@/lib/api';


// ---- Generic loading state ----
interface UseQueryState<T> {
  data:    T | null;
  loading: boolean;
  error:   string | null;
  refetch: () => void;
}

function useQuery<T>(fetcher: () => Promise<T>): UseQueryState<T> {
  const [data,    setData   ] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError  ] = useState<string | null>(null);

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


// ============================================================
//  Articles
// ============================================================
export function useArticles(params?: {
  page?: number; per_page?: number; category?: string; search?: string;
}) {
  const fetcher = useCallback(
    () => articlesApi.getAll(params),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params?.page, params?.per_page, params?.category, params?.search]
  );
  return useQuery<PaginatedResponse<Article>>(fetcher);
}

export function useFeaturedArticles(limit = 3) {
  const fetcher = useCallback(() => articlesApi.getFeatured(limit), [limit]);
  return useQuery<PaginatedResponse<Article>>(fetcher);
}

export function useArticle(id: number) {
  const fetcher = useCallback(() => articlesApi.getById(id), [id]);
  return useQuery<Article>(fetcher);
}


// ============================================================
//  Insights
// ============================================================
export function useLatestInsights(limit = 3) {
  const fetcher = useCallback(() => insightsApi.getLatest(limit), [limit]);
  return useQuery<Insight[]>(fetcher);
}

export function useInsights(params?: { page?: number; per_page?: number }) {
  const fetcher = useCallback(
    () => insightsApi.getAll(params),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params?.page, params?.per_page]
  );
  return useQuery<PaginatedResponse<Insight>>(fetcher);
}

export function useInsight(id: number) {
  const fetcher = useCallback(() => insightsApi.getById(id), [id]);
  return useQuery<Insight>(fetcher);
}


// ============================================================
//  Categories
// ============================================================
export function useCategories() {
  const fetcher = useCallback(() => categoriesApi.getAll(), []);
  return useQuery<string[]>(fetcher);
}


// ============================================================
//  Journals
// ============================================================
export function useJournals(params?: { category?: string; open_access?: string }) {
  const fetcher = useCallback(
    () => journalsApi.getAll(params),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params?.category, params?.open_access]
  );
  return useQuery<PaginatedResponse<Journal>>(fetcher);
}

export function useJournal(id: number) {
  const fetcher = useCallback(() => journalsApi.getById(id), [id]);
  return useQuery<Journal>(fetcher);
}


// ============================================================
//  Call for Papers
// ============================================================
export function useCallForPapers(status?: 'open' | 'upcoming') {
  const fetcher = useCallback(
    () => callForPapersApi.getAll(status ? { status } : undefined),
    [status]
  );
  return useQuery<PaginatedResponse<CallForPapers>>(fetcher);
}


// ============================================================
//  Manuscript Submission
// ============================================================
export function useSubmitManuscript() {
  const [loading, setLoading] = useState(false);
  const [error,   setError  ] = useState<string | null>(null);
  const [success, setSuccess] = useState<{ id: number; title: string } | null>(null);

  const submit = async (data: ManuscriptSubmission) => {
    setLoading(true);
    setError(null);
    try {
      const result = await manuscriptsApi.submit(data);
      setSuccess({ id: result.id, title: result.title });
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success };
}
