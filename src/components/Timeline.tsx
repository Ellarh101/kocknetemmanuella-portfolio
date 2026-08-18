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
            <div className="relative pb-9 pl-6 last:pb-0">
              <span className="absolute top-1.5 -left-[4.5px] h-2 w-2 rounded-full bg-gold" />
              <p className="eyebrow-plain">{item.period}</p>
              <p className="mt-2 text-base font-semibold text-foreground">{item.org}</p>
              <p className="text-sm text-ash/80">{item.title}</p>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
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
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
