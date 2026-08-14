import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="glow-field pointer-events-none absolute inset-0 opacity-70"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="text-angular mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Let&rsquo;s build something intelligent.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-5 py-3 font-display text-base font-medium break-all text-gold-soft transition-colors hover:bg-gold/10 sm:text-xl"
          >
            {profile.email} <ArrowUpRight size={20} />
          </a>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-base font-medium text-ash transition-colors hover:text-gold-soft"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-base font-medium text-ash transition-colors hover:text-gold-soft"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>


        <p className="mt-14 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>

      </div>
    </section>
  );
}
