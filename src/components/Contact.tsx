import { ArrowUpRight, Mail, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { profile, gmailComposeHref } from "@/data/site";
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
          <ContactFormDialog>
            <Button
              variant="outline"
              className="mt-8 h-auto max-w-full whitespace-normal break-all rounded-full border-gold/40 bg-gold/5 px-5 py-3 text-left font-display text-base font-medium text-gold-soft hover:bg-gold/10 sm:text-xl"
            >
              {profile.email} <ArrowUpRight size={20} />
            </Button>
          </ContactFormDialog>
          <p className="mt-3 text-xs text-muted-foreground">
            No mail app?{" "}
            <a
              href={gmailComposeHref}
              target="_blank"
              rel="noreferrer noopener"
              className="text-gold-soft hover:opacity-80"
            >
              Compose in Gmail
            </a>
          </p>
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
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="text-base font-medium text-ash transition-colors hover:text-gold-soft"
            >
              View CV
            </a>
            <a
              href={profile.resume}
              download
              className="text-base font-medium text-ash transition-colors hover:text-gold-soft"
            >
              Download CV
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Open to ML Engineer roles and NYSC PPA placement in Port Harcourt, Rivers State
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <ContactFormDialog>
              <Button
                variant="outline"
                size="icon"
                aria-label="Send email"
                className="h-12 w-12 rounded-full border-gold/40 bg-gold/5 text-gold-soft transition-all hover:scale-110 hover:bg-gold/10 hover:text-gold"
              >
                <Mail size={22} />
              </Button>
            </ContactFormDialog>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold-soft transition-all hover:scale-110 hover:bg-gold/10 hover:text-gold"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold-soft transition-all hover:scale-110 hover:bg-gold/10 hover:text-gold"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View CV"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold-soft transition-all hover:scale-110 hover:bg-gold/10 hover:text-gold"
            >
              <FileText size={22} />
            </a>
          </div>
        </Reveal>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>

      </div>
    </section>
  );
}
