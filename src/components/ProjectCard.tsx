type ProjectCardProps = {
    name: string;
    type: string;
    description: string;
    stack: readonly string[];
};

export function ProjectCard({ name, type, description, stack }: ProjectCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-4 shadow-[0_18px_45px_-35px_rgba(24,24,27,0.35)] transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_28px_60px_-40px_rgba(24,24,27,0.45)] sm:p-5">
            <div className="mb-5 rounded-[1.25rem] border border-zinc-200 bg-stone-100 p-4">
                <div className="mb-4 flex items-center justify-between text-[0.65rem] font-medium uppercase tracking-[0.18em] text-zinc-500">
                    <span>Illustrative preview</span>
                    <span>{type}</span>
                </div>

                <div className="rounded-[1rem] border border-zinc-200 bg-white p-3 shadow-inner">
                    <div className="mb-3 flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                    </div>

                    <div className="space-y-3">
                        <div className="h-2.5 w-2/3 rounded-full bg-zinc-200" />
                        <div className="grid grid-cols-3 gap-2">
                            <div className="h-16 rounded-xl bg-zinc-100" />
                            <div className="h-16 rounded-xl bg-zinc-200" />
                            <div className="h-16 rounded-xl bg-zinc-100" />
                        </div>
                        <div className="grid gap-2">
                            <div className="h-2.5 w-full rounded-full bg-zinc-200" />
                            <div className="h-2.5 w-5/6 rounded-full bg-zinc-200" />
                            <div className="h-2.5 w-4/6 rounded-full bg-zinc-200" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-zinc-950">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {stack.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-zinc-200 bg-stone-100 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-zinc-700"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
