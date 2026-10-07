import crewImage from "../assets/images/about/About - Crew Working.png";
import daveImage from "../assets/images/about/About - Dave.png";
import { Container } from "../components/shared/Container";

type FramedImageProps = {
  alt: string;
  className?: string;
  src: string;
};

function FramedImage({ alt, className = "", src }: FramedImageProps) {
  return (
    <figure
      className={`border border-frame-accent bg-cream p-2 sm:p-2.5 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width="1536"
        height="1024"
        loading="lazy"
        className="aspect-[3/2] h-auto w-full object-cover"
      />
    </figure>
  );
}

export function AboutPage() {
  return (
    <>
      <section className="bg-process py-[clamp(4rem,7vw,6.75rem)] text-cream">
        <Container>
          <div className="max-w-[52rem]">
            <h1 className="max-w-[50rem] text-[clamp(2.6rem,4.65vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              Thoughtful landscapes, built to belong.
            </h1>
            <p className="mt-7 max-w-[35rem] text-base leading-7 text-cream/78 sm:text-lg sm:leading-8">
              Hollowbrook combines thoughtful design, skilled craftsmanship,
              and clear guidance to create outdoor environments that feel
              naturally connected to the home and the people who live there.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-[clamp(2.5rem,4vw,4rem)] pt-[clamp(3.5rem,5.5vw,5.5rem)]">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4 lg:ml-[8%] lg:w-[118%]">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Our story began with one decision.
                </h2>
                <div className="mt-6 max-w-xl space-y-5 lg:max-w-md leading-7 text-olive/78">
                  <p>
                    Hollowbrook began in 2011, after Dave was laid off and
                    decided to build a business of his own. What started as one
                    person taking on small jobs grew steadily through
                    relationships, referrals, and consistently doing good work.
                  </p>
                  <p>
                    Over time, the company deliberately stepped away from
                    smaller one-off jobs to focus on complete residential
                    outdoor environments. The work has changed, but the starting
                    point has not: understanding how homeowners live before deciding
                    what should be designed and built.
                  </p>
                </div>
              </div>

              <FramedImage
                src={daveImage}
                alt="Dave walking through a landscaped property with two homeowners during a consultation"
                className="lg:col-span-7 lg:col-start-6"
              />
            </div>
          </Container>
      </section>

      <section className="bg-cream pb-[clamp(3.5rem,5.5vw,5.75rem)] pt-2 sm:pt-4">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
              <FramedImage
                src={crewImage}
                alt="Hollowbrook crew carefully setting a large stone paver during patio construction"
                className="lg:col-span-6 lg:-ml-[3%]"
              />

              <div className="max-w-xl lg:col-span-5 lg:col-start-8 lg:max-w-lg">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Craftsmanship carried by people.
                </h2>
                <div className="mt-6 space-y-5 leading-7 text-olive/78">
                  <p>
                    Great outdoor spaces come from experienced people working
                    together. Dave still leads projects personally from the
                    earliest conversations, while Marcus, now in his eighth year
                    with Hollowbrook, guides much of the work in the field.
                  </p>
                  <p>
                    Across the wider team, the same care goes into preparation,
                    materials, transitions, and decisions meant to hold up over
                    time. Each person contributes to landscapes that feel
                    complete when the work is finished and continue to settle
                    naturally into the property.
                  </p>
                </div>
              </div>
            </div>
          </Container>
      </section>
    </>
  );
}
