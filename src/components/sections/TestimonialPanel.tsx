import { useEffect, useState } from "react";
import { testimonials } from "../../content/home";
import { Container } from "../shared/Container";

export function TestimonialPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerReset, setTimerReset] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const rotationTimer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 10_000);

    return () => window.clearTimeout(rotationTimer);
  }, [activeIndex, isPaused, timerReset]);

  const selectTestimonial = (index: number) => {
    setActiveIndex(index);
    setTimerReset((current) => current + 1);
  };

  const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  };

  return (
    <section
      className="bg-cream pb-12 pt-section sm:pb-14 lg:pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={handleBlur}
    >
      <Container>
        <div className="relative ml-auto max-w-[78rem] pb-5 lg:min-h-[29rem] lg:py-6">
          <div className="beige-panel-extension relative bg-beige-panel px-7 pb-20 pt-12 text-beige-text sm:px-12 sm:pb-24 sm:pt-14 lg:absolute lg:-right-24 lg:left-[4%] lg:top-12 lg:h-80 lg:px-16 lg:py-16">
            <h2 className="max-w-md text-3xl font-semibold sm:text-4xl">
              Outdoor spaces that feel considered from every angle.
            </h2>
            <p className="mt-5 max-w-sm leading-7 opacity-75">
              Homeowners share what it was like to move from an early idea to
              a finished landscape.
            </p>
          </div>

          <div
            className="relative -mt-12 ml-auto mr-0 min-h-[22rem] w-[calc(100%-1rem)] px-7 py-10 text-olive sm:-mt-16 sm:w-[78%] sm:px-10 lg:absolute lg:-right-8 lg:top-0 lg:mt-0 lg:h-[26rem] lg:min-h-0 lg:w-[49%] lg:px-14 lg:py-14"
            aria-live="polite"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-0 h-12 bg-beige-panel sm:h-16 lg:h-12 lg:bg-cream"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 top-12 z-0 bg-cream sm:top-16 lg:bottom-12 lg:top-12 lg:bg-beige-panel"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 z-0 hidden h-12 bg-cream lg:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 border border-frame-accent"
            />
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-9 z-30 text-7xl font-semibold leading-none text-frame-accent sm:-left-5 sm:-top-11 sm:text-8xl"
            >
              “
            </span>
            <div
              className="absolute inset-x-7 inset-y-10 z-30 flex flex-col justify-center sm:inset-x-10 lg:inset-x-14 lg:inset-y-12"
            >
              <blockquote
                key={activeIndex}
                className="testimonial-content flex min-h-0 flex-1 flex-col justify-center"
              >
                <p className="text-lg leading-8 sm:text-xl">
                  {activeTestimonial.quote}
                </p>
                <footer className="mt-7 text-sm font-medium">
                  — {activeTestimonial.attribution}
                </footer>
              </blockquote>

              <div
                className="mt-7 flex items-center gap-1"
                aria-label="Choose testimonial"
              >
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.attribution}
                    type="button"
                    onClick={() => selectTestimonial(index)}
                    className="group/indicator inline-flex min-h-11 min-w-8 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-olive"
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    aria-current={activeIndex === index ? "true" : undefined}
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-2 border border-frame-accent transition-[width,background-color,opacity,transform] duration-200 ease-out group-hover/indicator:scale-[1.12] group-hover/indicator:opacity-100 group-focus-visible/indicator:scale-[1.12] ${
                        activeIndex === index
                          ? "w-5 bg-frame-accent"
                          : "w-2 bg-transparent opacity-55"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-14 right-1 z-30 text-7xl font-semibold leading-none text-frame-accent sm:-bottom-16 sm:right-3 sm:text-8xl"
            >
              ”
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
