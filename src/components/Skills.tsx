import { skillGroups } from "@/data/site";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Toolkit</p>
          <h2 className="text-angular-soft mt-3 text-3xl font-semibold sm:text-4xl">
            Skills
          </h2>
        </Reveal>


        <dl className="mt-10 divide-y divide-border border-y border-border">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 70}>
              <div className="grid gap-4 py-6 transition-colors hover:bg-gold/[0.04] sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8">
                <dt className="font-display text-base font-semibold text-gold-soft">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[0.72rem] tracking-wide text-ash transition-colors hover:border-gold/60 hover:text-gold-soft"
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
