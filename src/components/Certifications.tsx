import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/site";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Credentials</p>
          <h2 className="text-angular-soft mt-3 text-3xl font-semibold sm:text-4xl">
            Certifications
          </h2>
        </Reveal>


        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 70}>
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="surface flex h-full items-start justify-between gap-4 rounded-xl p-5 transition-colors hover:border-primary/40"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground">
                    {c.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {c.issuer}
                  </span>
                </span>
                <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-primary" />
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
