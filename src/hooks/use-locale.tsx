"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { en } from "@/lib/i18n/dictionaries/en";
import { es } from "@/lib/i18n/dictionaries/es";

export type Locale = "es" | "en";

const STORAGE_KEY = "wacrm-locale";
// Spanish (LatAm/AR) is the app's primary language, so it's also what
// the server renders — keeps first paint and hydration in sync.
const DEFAULT_LOCALE: Locale = "es";

const dictionaries: Record<Locale, Record<string, string>> = { es, en };

function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en";
}

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // localStorage can throw in private-browsing / sandboxed contexts.
  }
  return DEFAULT_LOCALE;
}

type Translate = (key: string, vars?: Record<string, string | number>) => string;

function translate(locale: Locale, key: string, vars?: Record<string, string | number>): string {
  const value = dictionaries[locale][key] ?? dictionaries[DEFAULT_LOCALE][key] ?? key;
  if (!vars) return value;
  return Object.entries(vars).reduce(
    (acc, [name, val]) => acc.replaceAll(`{{${name}}}`, String(val)),
    value,
  );
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Translate;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Same private-browsing edge case as above; in-memory state still
      // updates so the current tab works for the session.
    }
  }, []);

  // Sync from other tabs — change language in tab A, tab B catches up
  // without a refresh.
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === STORAGE_KEY && isLocale(e.newValue) && e.newValue !== locale) {
        setLocaleState(e.newValue);
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback<Translate>((key, vars) => translate(locale, key, vars), [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    // Fallback for components rendered outside the provider (e.g. tests).
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: (key, vars) => translate(DEFAULT_LOCALE, key, vars),
    };
  }
  return ctx;
}
