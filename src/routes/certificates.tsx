import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { certifications, linkedinDetails, profile } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const title = "Certificates — Kocknet Emmanuella";
const description =
  "Archive of certifications and verified credentials held by Kocknet Emmanuella, Machine Learning Engineer.";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
      <Link to="/" className="link-arrow text-sm">
        <ArrowLeft size={15} /> Back to portfolio
      </Link>

      <Reveal>
        <p className="eyebrow mt-10">Archive</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Certificates</h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A single place for every credential. Each entry links to its verification
          page; certificate documents and video walkthroughs can be added here as they
          become available.
        </p>
      </Reveal>

      <ul className="mt-12 divide-y divide-border border-y border-border">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 70}>
            <a
              href={c.verifyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 transition-opacity hover:opacity-80"
            >
              <span className="min-w-0">
                <span className="block text-base font-medium text-foreground">
                  {c.title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {c.issuer}
                </span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-primary" />
            </a>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <div className="surface mt-12 rounded-xl p-6">
          <p className="text-sm text-muted-foreground">
            All credentials are also listed on{" "}
            <a
              href={linkedinDetails.certifications}
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:opacity-80"
            >
              LinkedIn
            </a>
            . To add certificate files or videos here, send them to{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-primary hover:opacity-80"
            >
              {profile.email}
            </a>{" "}
            and they can be embedded in this archive.
          </p>
        </div>
      </Reveal>
    </main>
  );
}
