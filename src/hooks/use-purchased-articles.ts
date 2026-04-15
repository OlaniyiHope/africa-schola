import { useState, useEffect } from "react";

const STORAGE_KEY = "purchased_articles";

export function usePurchasedArticles() {
  const [purchased, setPurchased] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  });

  const addPurchased = (id: string) => {
    setPurchased((prev) => {
      const updated = [...new Set([...prev, id])];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const hasPurchased = (id: string) => purchased.includes(id);

  return { purchased, addPurchased, hasPurchased };
}