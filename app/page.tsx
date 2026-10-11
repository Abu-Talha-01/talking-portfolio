import Image from "next/image";
import { ActionLink } from "@/components/Buttons";
import { HeroVideo } from "@/components/HeroVideo";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";

export default function Home() {
  return (
    <div id="top" className="bg-stone-50 text-zinc-900">
      <Navigation />

      <main className="overflow-x-clip">
        <section id="hero" className="mx-auto max-w-6xl px-3 pb-14 pt-8 sm:px-5 sm:pb-18 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="order-2 lg:order-1">
              <div className="max-w-[460px] lg:ml-2 lg:mr-4">
                <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  Full Stack Developer & AI/ML Engineer
                </p>
                <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-5xl lg:text-6xl">
                  Abu Talha
                </h1>
                <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg">
                  {profile.objective}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ActionLink href="#projects">Explore Projects</ActionLink>
                  <ActionLink href="#contact" variant="secondary">
                    Contact Me
                  </ActionLink>
                  <ActionLink href="/documents/resume.pdf" download variant="ghost">
                    Download Résumé
                  </ActionLink>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-600">
                  <span>{profile.location}</span>
                  <a href={`mailto:${profile.email}`} className="transition hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50">
                    {profile.email}
                  </a>
                  <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="transition hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50">
                    {profile.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <div className="mx-auto w-full max-w-[500px] lg:ml-auto lg:mr-0">
                <HeroVideo />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-3 py-14 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-[0_25px_80px_-45px_rgba(24,24,27,0.75)]">
                <Image
                  src="/images/character.png"
                  alt="Portrait of Abu Talha"
                  width={640}
                  height={800}
                  className="h-full w-full rounded-[1.5rem] object-cover"
                  priority
                />
              </div>
            </Reveal>

            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="Building reliable web experiences and AI-driven product ideas."
                description="From healthcare systems and HR tools to machine learning experiments, I work across the stack to ship useful, production-minded software."
              />

              <div className="space-y-5 text-base leading-7 text-zinc-600">
                <p>{profile.objective}</p>
                <p>
                  I combine frontend, backend, and AI/ML fundamentals to deliver systems that are practical,
                  maintainable, and grounded in real user needs.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Location
                  </p>
                  <p className="mt-2 text-base font-medium text-zinc-900">{profile.location}</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Studies
                  </p>
                  <p className="mt-2 text-base font-medium text-zinc-900">B.Tech CSE</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Availability
                  </p>
                  <p className="mt-2 text-base font-medium text-zinc-900">Available to join immediately</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href={profile.linkedinUrl} variant="secondary" external>
                  LinkedIn
                </ActionLink>
                <ActionLink href={profile.githubUrl} variant="secondary" external>
                  GitHub
                </ActionLink>
                <ActionLink href={profile.portfolioUrl} variant="secondary" external>
                  Portfolio
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="bg-zinc-950 py-14 text-stone-100 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-3 sm:px-5 lg:px-8">
            <SectionHeading
              eyebrow="Skills"
              title="Core technologies, frameworks, and AI workflows."
              description="Skills are organized from the résumé and kept aligned with the practical stack used across projects and internships."
              light
            />

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <Reveal key={group.title} className="h-full">
                  <div className="h-full rounded-[1.6rem] border border-white/10 bg-white/3 p-5 backdrop-blur-sm">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-medium text-white">{group.title}</h3>
                      <span className={`rounded-full px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.2em] ${group.tone === "learning" ? "bg-amber-400/20 text-amber-200" : "bg-stone-200/10 text-stone-200"}`}>
                        {group.tone === "learning" ? "Learning" : "Core"}
                      </span>
                    </div>

                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-white/10 bg-stone-100/5 px-2.5 py-1.5 text-xs text-stone-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-3 py-14 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work across web apps, AI, and data-driven products."
            description="Each card reflects the actual résumé project names, technology stacks, and descriptions without implying a public deployment that is not verified."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <Reveal key={project.name} className="h-full">
                <ProjectCard
                  name={project.name}
                  type={project.type}
                  description={project.description}
                  stack={project.stack}
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="certifications" className="bg-zinc-100 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-3 sm:px-5 lg:px-8">
            <SectionHeading
              eyebrow="Certifications"
              title="Verified credentials and language proficiency."
            />

            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(24,24,27,0.6)]">
                <ul className="space-y-4">
                  {certifications.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-6 text-zinc-700">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-zinc-900" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(24,24,27,0.6)]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Languages
                </p>
                <ul className="mt-4 space-y-3">
                  {languages.map((language) => (
                    <li key={language} className="rounded-full border border-zinc-200 bg-stone-50 px-3 py-2 text-sm text-zinc-700">
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-3 py-14 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Experience & Education"
            title="A timeline of practical work, mentoring, and study."
          />

          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-zinc-200" aria-hidden="true" />

            <div className="space-y-8">
              {experience.map((item) => (
                <Reveal key={`${item.role}-${item.company}`} className="relative pl-10">
                  <span className="absolute left-0 top-3 h-4 w-4 rounded-full border-4 border-stone-50 bg-zinc-900" aria-hidden="true" />
                  <article className="rounded-[1.6rem] border border-zinc-200 bg-white p-5 shadow-[0_18px_40px_-35px_rgba(24,24,27,0.7)] sm:p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          {item.period}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-zinc-950">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600">{item.company}</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(24,24,27,0.6)]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">Education</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-zinc-950">
                  {education[0].degree}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{education[0].institution}</p>
              </div>
              <div className="text-sm text-zinc-600">
                <p>{education[0].period}</p>
                <p className="mt-1">{education[0].result}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-zinc-950 py-20 text-stone-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build useful products and thoughtful experiences."
                description="I’m open to software engineering roles and collaborative product work with a strong emphasis on clean systems, user experience, and practical AI integration."
                light
              />
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <a href={`mailto:${profile.email}`} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">Email</p>
                <p className="mt-3 text-base font-medium text-white">{profile.email}</p>
              </a>

              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">Phone</p>
                <p className="mt-3 text-base font-medium text-white">{profile.phone}</p>
              </a>

              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">LinkedIn</p>
                <p className="mt-3 text-base font-medium text-white">linkedin.com/in/abu-talha-22968128b</p>
              </a>

              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">GitHub</p>
                <p className="mt-3 text-base font-medium text-white">github.com/abu-talha-01</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-stone-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-zinc-500 sm:px-6 lg:px-8">
          <p>© Abu Talha</p>
          <a href="#top" className="font-medium text-zinc-700 transition hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
