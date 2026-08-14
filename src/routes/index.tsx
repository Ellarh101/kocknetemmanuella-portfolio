import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectStack } from "@/components/ProjectStack";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { education, experience } from "@/data/site";

const title = "Kocknet Emmanuella — Machine Learning Engineer";
const description =
  "Portfolio of Kocknet Emmanuella, a Machine Learning Engineer building intelligent systems from data to deployment.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        <section id="about" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">About</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/90 sm:text-2xl sm:leading-[1.5]">
                I&rsquo;m a Machine Learning Engineer with a background in Mechatronics
                Engineering. I build intelligent systems that connect machine learning
                with real-world applications — from{" "}
                <span className="text-gold-soft">predictive maintenance models</span> to{" "}
                <span className="text-gold-soft">offline AI assistants</span> running on
                embedded hardware.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Data → Deployment", v: "End-to-end ML ownership" },
                  { k: "Edge & Embedded", v: "Models that run offline" },
                  { k: "Applied Research", v: "Evaluated, explainable results" },
                ].map((c) => (
                  <div
                    key={c.k}
                    className="surface rounded-xl p-4 transition-colors hover:border-gold/40"
                  >
                    <p className="font-display text-sm font-semibold text-gold-soft">
                      {c.k}
                    </p>
                    <p className="mt-1 text-sm text-ash/80">{c.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <ProjectStack />

        <Skills />

        <section id="experience" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">Background</p>
              <h2 className="text-angular-soft mt-3 text-3xl font-semibold sm:text-4xl">
                Experience &amp; Education
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Timeline title="Experience" items={experience} />
              <Timeline title="Education" items={education} />
            </div>
          </div>
        </section>


        <Certifications />

        <Contact />
      </main>
    </>
  );
}
