import { ArrowUpRight } from "lucide-react";
import { profile, mailtoHref } from "@/data/site";

const marks = [
  "Data pipelines",
  "Model training",
  "Evaluation",
  "Deployment",
  "Edge AI",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center pt-24 pb-14 sm:min-h-screen sm:pt-28"
    >
      <div aria-hidden className="glow-field pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_35%,black,transparent_72%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="eyebrow animate-fade-in">Machine Learning Engineer</p>

        <h1
          className="text-angular mt-5 animate-fade-in text-4xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms", animationFillMode: "backwards" }}
        >
          {profile.name}
        </h1>

        <p
          className="mt-4 animate-fade-in font-display text-lg leading-snug font-medium sm:text-2xl"
          style={{ animationDelay: "140ms", animationFillMode: "backwards" }}
        >
          <span className="text-angular-soft">
            Machine Learning Engineer — from data loading to deployment.
          </span>
        </p>

        <div
          aria-hidden
          className="rule-gradient mt-6 w-40 animate-fade-in sm:w-64"
          style={{ animationDelay: "180ms", animationFillMode: "backwards" }}
        />

        <p
          className="mt-5 max-w-xl animate-fade-in text-base leading-relaxed text-foreground/75 sm:text-lg"
          style={{ animationDelay: "220ms", animationFillMode: "backwards" }}
        >
          {profile.tagline} I design, train and ship models that survive contact with
          real hardware, real users and real data.
        </p>

        <ul
          className="mt-7 flex animate-fade-in flex-wrap gap-2"
          style={{ animationDelay: "300ms", animationFillMode: "backwards" }}
        >
          {marks.map((m) => (
            <li
              key={m}
              className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[0.7rem] tracking-wide text-gold-soft transition-colors hover:border-gold/60 hover:bg-gold/10"
            >
              {m}
            </li>
          ))}
        </ul>

        <div
          className="mt-9 flex animate-fade-in flex-wrap items-center gap-x-6 gap-y-4"
          style={{ animationDelay: "360ms", animationFillMode: "backwards" }}
        >
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Email me <ArrowUpRight size={15} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-gold-soft transition-colors hover:bg-gold/10"
          >
            View projects <ArrowUpRight size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground transition-colors hover:text-gold-soft"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground transition-colors hover:text-gold-soft"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
