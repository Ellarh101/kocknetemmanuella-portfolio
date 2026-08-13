import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Let&rsquo;s build something intelligent.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <a
            href={`mailto:${profile.email}`}
            className="link-arrow mt-8 inline-flex font-display text-lg break-all sm:text-2xl"
          >
            {profile.email} <ArrowUpRight size={20} />
          </a>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <p className="mt-16 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  );
}
