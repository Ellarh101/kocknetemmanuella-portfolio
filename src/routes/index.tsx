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

        <section id="about" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">About</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/90 sm:text-2xl sm:leading-[1.5]">
                I&rsquo;m a Machine Learning Engineer with a background in Mechatronics
                Engineering. I build intelligent systems that connect machine learning
                with real-world applications — from predictive maintenance models to
                offline AI assistants running on embedded hardware.
              </p>
            </Reveal>
          </div>
        </section>

        <ProjectStack />

        <Skills />

        <section id="experience" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">Background</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Experience &amp; Education
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
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
