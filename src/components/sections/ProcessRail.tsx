import { processSteps } from "../../content/home";
import { Container } from "../shared/Container";

export function ProcessRail() {
  return (
    <section className="overflow-hidden bg-process py-section text-cream">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            From first conversation to finished landscape.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-cream/70">
            A considered approach that keeps every stage clear, collaborative,
            and focused on the finished environment.
          </p>
        </div>
      </Container>

      <div
        className="process-scroll mt-10 flex snap-x snap-mandatory gap-0 overflow-x-auto px-page-x pb-4 lg:mx-auto lg:mt-12 lg:grid lg:max-w-site lg:grid-cols-4 lg:overflow-visible lg:pb-0"
        aria-label="The Hollowbrook process"
      >
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="w-[82vw] max-w-sm shrink-0 snap-start border-l border-cream/25 px-6 py-2 first:pl-0 first:border-l-0 sm:w-[56vw] lg:w-auto lg:max-w-none lg:px-8 lg:first:pl-0"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cream/75">
              Step {index + 1}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
            <span aria-hidden="true" className="mt-4 block h-px w-20 bg-cta" />
            <p className="mt-4 text-sm leading-6 text-cream/75">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
