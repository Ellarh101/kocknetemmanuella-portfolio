import { skillGroups } from "@/data/site";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Toolkit</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Skills</h2>
        </Reveal>

        <dl className="mt-12 divide-y divide-border border-y border-border">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 70}>
              <div className="grid gap-4 py-7 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8">
                <dt className="font-display text-sm font-medium text-foreground">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[0.72rem] tracking-wide text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
