type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    light?: boolean;
};

export function SectionHeading({
    eyebrow,
    title,
    description,
    light = false,
}: SectionHeadingProps) {
    const eyebrowClass = light ? "text-zinc-300" : "text-zinc-500";
    const titleClass = light ? "text-stone-50" : "text-zinc-950";
    const descriptionClass = light ? "text-zinc-300" : "text-zinc-600";

    return (
        <div className="mb-10 max-w-2xl">
            <p className={`mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${eyebrowClass}`}>
                {eyebrow}
            </p>
            <h2 className={`text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${titleClass}`}>
                {title}
            </h2>
            {description ? (
                <p className={`mt-4 text-base leading-7 ${descriptionClass}`}>{description}</p>
            ) : null}
        </div>
    );
}

