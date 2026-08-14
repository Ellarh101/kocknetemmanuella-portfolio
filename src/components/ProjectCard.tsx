import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="surface flex h-full flex-col gap-6 rounded-2xl p-6 sm:p-9 lg:flex-row lg:items-stretch lg:gap-10">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3">
          <span className="eyebrow-plain text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-gold to-transparent" />
          <span className="eyebrow-plain">{project.accentLabel}</span>
        </div>


        <h3 className="mt-5 text-xl font-semibold text-foreground sm:text-2xl lg:text-[1.75rem] lg:leading-tight">
          {project.title}
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[0.7rem] tracking-wide text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-6 pt-7">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="link-arrow text-sm font-medium"
          >
            View on GitHub <ArrowUpRight size={15} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="link-arrow text-sm font-medium"
            >
              Live demo <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      <div
        aria-hidden
        className="relative hidden w-[38%] shrink-0 overflow-hidden rounded-xl border border-border bg-onyx/60 lg:block"
      >
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-mono text-[0.7rem] tracking-[0.3em] text-muted-foreground uppercase">
            {project.accentLabel}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/70 to-transparent" />
      </div>
    </article>
  );
}
