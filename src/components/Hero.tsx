import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center pt-28 pb-20 sm:min-h-screen"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_35%,black,transparent_72%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="eyebrow animate-fade-in">Machine Learning Engineer</p>

        <h1
          className="mt-6 animate-fade-in text-4xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms", animationFillMode: "backwards" }}
        >
          {profile.name}
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-in text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "180ms", animationFillMode: "backwards" }}
        >
          {profile.tagline}
        </p>

        <div
          className="mt-10 flex animate-fade-in flex-wrap items-center gap-x-8 gap-y-4"
          style={{ animationDelay: "280ms", animationFillMode: "backwards" }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Email me <ArrowUpRight size={15} />
          </a>
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
      </div>
    </section>
  );
}
