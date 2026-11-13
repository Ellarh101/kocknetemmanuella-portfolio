import { useEffect, useRef } from "react";
import { compactProjects, projects } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function ProjectStack() {
  const reduced = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (reduced) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const raw = clamp(-rect.top / total, 0, 1);
      const p = raw * (projects.length - 1);

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const enter = i === 0 ? 1 : clamp(p - (i - 1), 0, 1);
        const depth = Math.max(0, p - i);
        const eased = enter * enter * (3 - 2 * enter);
        const translate = (1 - eased) * 105 - Math.min(depth, 3) * 2.2;
        const scale = 1 - Math.min(depth, 3) * 0.04;
        const opacity = Math.min(eased * 1.6, 1) * (1 - Math.min(depth, 3) * 0.16);

        el.style.transform = `translate3d(0, ${translate.toFixed(2)}%, 0) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.visibility = eased <= 0.001 ? "hidden" : "visible";
        el.style.pointerEvents = enter > 0.5 && depth < 0.6 ? "auto" : "none";

      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  const header = (
    <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
      <p className="eyebrow">Selected work</p>
      <h2 className="text-angular-soft mt-3 text-3xl font-semibold sm:text-4xl">
        Projects
      </h2>
    </Reveal>
  );


  if (reduced) {
    return (
      <section id="projects" className="py-24 sm:py-32">
        {header}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-5 sm:px-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="pt-24 sm:pt-32">
      {header}
      <div
        ref={wrapperRef}
        style={{ height: `${projects.length * 90 + 40}vh` }}
        className="relative mt-10"
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="relative h-[26rem] sm:h-[24rem]">
              {projects.map((p, i) => (
                <div
                  key={p.title}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  style={{ zIndex: i + 1, willChange: "transform, opacity" }}
                  className="absolute inset-0 transition-[opacity] duration-200 ease-out"
                >
                  <ProjectCard project={p} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-16 sm:grid-cols-2 sm:px-8">
        {compactProjects.map((project, index) => (
          <article
            key={project.title}
            className="surface rounded-xl p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center gap-3">
              <span className="eyebrow-plain text-primary">
                {String(projects.length + index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
              <span className="eyebrow-plain">{project.accentLabel}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[0.7rem] text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
