import { ArrowUpRight } from "lucide-react";
import type { TimelineItem } from "@/data/site";
import { Reveal } from "./Reveal";

export function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <Reveal>
        <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
      </Reveal>
      <ol className="mt-6 border-l border-border">
        {items.map((item, i) => (
          <Reveal as="li" key={item.title + item.period} delay={i * 70}>
            <div className={`relative pb-9 pl-6 last:pb-0 ${item.label ? "text-sm" : ""}`}>
              <span className="absolute top-1.5 -left-[4.5px] h-2 w-2 rounded-full bg-gold" />
              <div className={item.label ? "surface rounded-md p-4" : undefined}>
                {item.label && (
                  <p className="mb-2 inline-flex rounded-sm border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[0.65rem] text-primary">
                    {item.label}
                  </p>
                )}
                <p className="eyebrow-plain">{item.period}</p>
                <p className="mt-2 text-base font-semibold text-foreground">{item.org}</p>
                <p className="text-sm text-ash/80">{item.title}</p>

                {item.detail && (
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-arrow mt-3 text-sm"
                  >
                    Details on LinkedIn <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
