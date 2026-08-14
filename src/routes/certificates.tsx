import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, FileText, Download } from "lucide-react";
import { certifications, profile } from "@/data/site";
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
    <main className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <Link to="/" className="link-arrow text-sm">
        <ArrowLeft size={15} /> Back to portfolio
      </Link>

      <Reveal>
        <p className="eyebrow mt-10">Archive</p>
        <h1 className="text-angular-soft mt-3 text-4xl font-semibold sm:text-5xl">
          Certificates
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every credential in one place — hosted directly, so each document opens or
          downloads without needing an external account.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <article className="surface flex h-full flex-col overflow-hidden rounded-xl transition-colors hover:border-gold/50">
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-border bg-graphite/40">
                {c.kind === "image" ? (
                  <img
                    src={c.fileUrl}
                    alt={`${c.title} certificate issued by ${c.issuer}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center text-gold/70">
                    <FileText size={40} strokeWidth={1.2} />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-base font-semibold text-foreground">{c.title}</h2>
                <p className="mt-1 text-sm text-ash/80">{c.issuer}</p>
                {c.date && (
                  <p className="mt-1 text-xs text-muted-foreground">{c.date}</p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href={c.fileUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-arrow text-sm"
                  >
                    Open <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={c.fileUrl}
                    download
                    className="link-arrow text-sm"
                  >
                    Download <Download size={14} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="surface mt-12 rounded-xl p-6">
          <p className="text-sm text-muted-foreground">
            More certificates and video walkthroughs can be added to this archive — send
            the files to{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-gold-soft hover:opacity-80"
            >
              {profile.email}
            </a>
            .
          </p>
        </div>
      </Reveal>
    </main>
  );
}
