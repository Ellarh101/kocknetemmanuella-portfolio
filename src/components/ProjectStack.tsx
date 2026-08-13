import { useEffect, useRef } from "react";
import { projects } from "@/data/site";
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
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Projects</h2>
    </Reveal>
  );

  if (reduced) {
    return (
      <section id="projects" className="py-24 sm:py-32">
        {header}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-5 sm:px-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.github} project={p} index={i} />
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
                  key={p.github}
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
    </section>
  );
}
