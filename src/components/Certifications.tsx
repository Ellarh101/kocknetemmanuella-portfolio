import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react";
import { certifications } from "@/data/site";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Credentials</p>
          <h2 className="text-angular-soft mt-3 text-3xl font-semibold sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Every certificate is hosted here directly — open or download the original
            document, no external account required.
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 70}>
              <a
                href={c.fileUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="surface group flex h-full items-start gap-4 rounded-xl p-5 transition-colors hover:border-gold/50"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  {c.kind === "pdf" ? <FileText size={17} /> : <ImageIcon size={17} />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold text-foreground">
                    {c.title}
                  </span>
                  <span className="mt-1 block text-sm text-ash/80">{c.issuer}</span>
                  {c.date && (
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {c.date}
                    </span>
                  )}
                  <span className="link-arrow mt-3 text-xs">
                    View certificate <ArrowUpRight size={13} />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <Link to="/certificates" className="link-arrow mt-6 inline-flex text-sm">
            Browse the full certificate archive <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
