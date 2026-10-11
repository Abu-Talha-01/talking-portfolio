"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/lib/data";

export function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [menuOpen]);

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-stone-50/90 backdrop-blur-sm">
            <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-3 py-4 sm:px-5 lg:px-8">
                <a href="#top" className="text-lg font-semibold tracking-[-0.05em] text-zinc-900">
                    Abu Talha
                </a>

                <div className="hidden items-center gap-6 md:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <a
                        href="/documents/resume.pdf"
                        className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:border-zinc-800 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
                    >
                        Résumé
                    </a>
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((current) => !current)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-900 transition hover:border-zinc-800 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
                >
                    <span className="sr-only">Toggle navigation menu</span>
                    <span className="flex flex-col gap-1.5">
                        <span className={`block h-0.5 w-5 rounded-full bg-zinc-900 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                        <span className={`block h-0.5 w-5 rounded-full bg-zinc-900 transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`block h-0.5 w-5 rounded-full bg-zinc-900 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                    </span>
                </button>
            </nav>

            {menuOpen ? (
                <div id="mobile-menu" className="border-t border-zinc-200 bg-stone-50 md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="rounded-xl px-3 py-2 text-base font-medium text-zinc-700 hover:bg-stone-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/documents/resume.pdf"
                            className="mt-2 inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-medium text-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
                            onClick={() => setMenuOpen(false)}
                        >
                            Download Résumé
                        </a>
                    </div>
                </div>
            ) : null}
        </header>
    );
}
