"use client";

import { Languages } from "lucide-react";

import { useTranslation } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

/**
 * Language toggle — flips the app between Spanish (default) and
 * English. Mirrors ModeToggle's single-button pattern: one click
 * swaps locale and persists the choice to localStorage.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useTranslation();
  const goingTo = locale === "es" ? "en" : "es";
  const label = locale === "es" ? t("nav.switchToEnglish") : t("nav.switchToSpanish");

  return (
    <button
      type="button"
      onClick={() => setLocale(goingTo)}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-10 items-center justify-center gap-1.5 rounded-md px-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className,
      )}
    >
      <Languages className="h-5 w-5" />
      <span className="uppercase">{locale}</span>
    </button>
  );
}
