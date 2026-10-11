import type { ReactNode } from "react";

type ActionLinkProps = {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    external?: boolean;
    download?: boolean;
    className?: string;
};

const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50";

export function ActionLink({
    href,
    children,
    variant = "primary",
    external = false,
    download = false,
    className = "",
}: ActionLinkProps) {
    const variantClasses = {
        primary: "bg-zinc-950 text-stone-50 shadow-sm hover:bg-zinc-800",
        secondary: "border border-zinc-300 bg-white text-zinc-900 hover:border-zinc-800 hover:bg-stone-100",
        ghost: "text-zinc-700 hover:text-zinc-950",
    };

    return (
        <a
            href={href}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            download={download || undefined}
        >
            {children}
        </a>
    );
}
