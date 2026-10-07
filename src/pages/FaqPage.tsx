import { FaqAccordion } from "../components/sections/FaqAccordion";
import { Button } from "../components/shared/Button";
import { Container } from "../components/shared/Container";
import { faqClosing, faqIntro, faqItems } from "../content/faq";

export function FaqPage() {
  return (
    <>
      <section className="bg-process py-[clamp(4rem,7vw,6.75rem)] text-cream">
        <Container>
          <div className="max-w-[52rem]">
            <h1 className="max-w-[50rem] text-[clamp(2.6rem,4.65vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              {faqIntro.heading}
            </h1>
            <p className="mt-7 max-w-[38rem] text-base leading-7 text-cream/78 sm:text-lg sm:leading-8">
              {faqIntro.body}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-[clamp(2.5rem,4vw,4rem)] pt-[clamp(3rem,5.5vw,5.5rem)]">
        <Container>
          <div className="max-w-[52rem]">
            <FaqAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-[clamp(1.75rem,3vw,3.25rem)]">
        <Container>
          <div className="mx-auto max-w-[72rem] bg-beige-panel px-[clamp(1.75rem,5vw,5rem)] py-[clamp(2.75rem,5vw,4.5rem)] text-beige-text">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-8">
              <div className="max-w-[46rem]">
                <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  {faqClosing.heading}
                </h2>
                <p className="mt-5 max-w-[44rem] leading-7 opacity-80">
                  {faqClosing.body}
                </p>
              </div>
              <Button to="/contact" className="shrink-0">
                {faqClosing.cta}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
