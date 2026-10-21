"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGS, langOf, switchPath } from "@/lib/i18n";

// EN / বাংলা toggle. Links to the same page in the other language when a
// translation exists, otherwise to that language's home page.
export default function LanguageSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const current = langOf(pathname);
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
      {LANGS.map((l) => (
        <Link
          key={l.code}
          href={switchPath(pathname, l.code)}
          hrefLang={l.hreflang}
          lang={l.hreflang}
          className={l.code === current ? "is-active" : undefined}
          aria-current={l.code === current ? "true" : undefined}
          onClick={onNavigate}
          title={l.label}
        >
          {l.short}
        </Link>
      ))}
    </div>
  );
}
