import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react";
import { useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { certifications, type Certification } from "@/data/site";
import { CertificateViewer } from "./CertificateViewer";
import { Reveal } from "./Reveal";

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState<Certification | null>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) =>
      (current + direction + certifications.length) % certifications.length,
    );
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.25) return;

    suppressClick.current = true;
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 300);
    move(dx < 0 ? 1 : -1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
  };

  const active = certifications[activeIndex];

  return (
    <section id="certifications" className="ambient-section relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Credentials</p>
          <h2 className="text-angular-soft mt-3 text-3xl font-semibold sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Professional learning across machine learning, AI, and engineering.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex max-w-3xl flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted-foreground" aria-live="polite" aria-atomic="true">
              {String(activeIndex + 1).padStart(2, "0")} / {String(certifications.length).padStart(2, "0")}
              <span className="ml-3 text-foreground">{active?.title}</span>
            </p>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous certificate"
                title="Previous certificate"
                onClick={() => move(-1)}
                className="border-border bg-card/70 hover:border-gold/50 hover:text-gold-soft"
              >
                <ArrowLeft />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next certificate"
                title="Next certificate"
                onClick={() => move(1)}
                className="border-border bg-card/70 hover:border-gold/50 hover:text-gold-soft"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>

          <div
            className="relative mt-3 h-[18rem] max-w-3xl touch-pan-y select-none sm:h-[21rem]"
            role="region"
            aria-label="Certificate carousel"
            aria-roledescription="carousel"
            tabIndex={0}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              pointerStart.current = null;
            }}
            onKeyDown={handleKeyDown}
          >
            {[2, 1, 0].map((offset) => {
              const certificate = certifications[(activeIndex + offset) % certifications.length];
              const isFront = offset === 0;
              const stackPosition =
                offset === 2
                  ? "translate-x-6 translate-y-4 scale-[0.94] rotate-2"
                  : "translate-x-3 translate-y-2 scale-[0.97] -rotate-1";

              return (
                <div
                  key={`certificate-stack-${offset}`}
                  aria-hidden={!isFront}
                  className={`surface absolute inset-0 overflow-hidden rounded-xl transition-transform duration-500 ease-out ${
                    isFront ? "z-30" : `pointer-events-none ${stackPosition}`
                  }`}
                >
                  {isFront ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (suppressClick.current) return;
                        setOpen(certificate);
                      }}
                      aria-label={`View certificate: ${certificate.title}`}
                      className="grid h-full w-full grid-cols-[minmax(0,1fr)_minmax(7.5rem,0.82fr)] text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                    >
                      <span className="flex min-w-0 flex-col justify-center p-4 sm:p-7">
                        <span className="eyebrow-plain text-primary">
                          {certificate.issuer}
                        </span>
                        <span className="mt-3 line-clamp-3 font-display text-lg font-semibold leading-snug text-foreground sm:text-2xl">
                          {certificate.title}
                        </span>
                        {certificate.date && (
                          <span className="mt-2 text-xs text-muted-foreground">
                            {certificate.date}
                          </span>
                        )}
                        <span className="link-arrow mt-5 text-xs sm:text-sm">
                          View certificate <ArrowUpRight size={14} />
                        </span>
                      </span>
                      <span className="relative grid h-full place-items-center overflow-hidden border-l border-border bg-secondary/40 p-2 sm:p-4">
                        {certificate.previewUrl ? (
                          <img
                            src={certificate.previewUrl}
                            alt=""
                            draggable={false}
                            className="max-h-full w-full rounded-sm object-contain shadow-lg"
                          />
                        ) : (
                          <span className="grid h-12 w-12 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold-soft">
                            {certificate.kind === "pdf" ? <FileText /> : <ImageIcon />}
                          </span>
                        )}
                      </span>
                    </button>
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-card via-secondary to-background" />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <Link to="/certificates" className="link-arrow mt-6 inline-flex text-sm">
            Browse the full certificate archive <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </div>
      <CertificateViewer cert={open} onClose={() => setOpen(null)} />
    </section>
  );
}