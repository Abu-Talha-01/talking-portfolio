"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const [visible, setVisible] = useState(prefersReducedMotion);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [prefersReducedMotion]);

    return (
        <div
            ref={ref}
            className={`${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 ease-out ${className}`}
        >
            {children}
        </div>
    );
}

