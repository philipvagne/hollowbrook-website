import landscapeDesignImage from "../assets/images/services/Service - Landscape Design.png";
import lightingDesignImage from "../assets/images/services/Service - lighting design.png";
import outdoorKitchenImage from "../assets/images/services/Service - Outdoor kitchen.png";
import patiosStoneworkImage from "../assets/images/services/Service - Patios & Natural Stonework.png";
import pergolasImage from "../assets/images/services/Service - Pergolas & Shade Structures.png";
import { Button } from "../components/shared/Button";
import { Container } from "../components/shared/Container";

type Service = {
  alt: string;
  body: string[];
  image: string;
  number: string;
  title: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Landscape & Outdoor Living Design",
    image: landscapeDesignImage,
    alt: "A completed residential landscape with layered planting, a stone terrace, and integrated outdoor living areas",
    body: [
      "This is the front end of most of Hollowbrook’s larger projects. The property is considered as one complete environment, tying patios, planting, structures, drainage, sunlight, and the architecture of the home into a clear plan.",
      "Many homeowners begin with a rough idea—such as wanting a patio—but are unsure how each decision should connect. The paid design phase creates that direction before construction begins. It takes time because the purpose is to solve the whole property, rather than provide a free estimate for individual features before the wider plan is understood.",
    ],
  },
  {
    number: "02",
    title: "Patios & Natural Stonework",
    image: patiosStoneworkImage,
    alt: "Detailed natural-stone patio and masonry work integrated into a residential landscape",
    body: [
      "Hollowbrook builds custom patios, walls, and steps using regional bluestone, fieldstone, and other materials selected to suit the home and wider landscape.",
      "Much of the most important work is the part no one sees. Proper excavation, drainage, and compaction create the foundation that helps keep stonework from settling or heaving after a few winters.",
      "That preparation is never optional. The finished work should feel substantial from the beginning and continue to perform over time.",
    ],
  },
  {
    number: "03",
    title: "Outdoor Kitchens & Fireplaces",
    image: outdoorKitchenImage,
    alt: "A built-in outdoor kitchen and fireplace arranged as part of a finished patio environment",
    body: [
      "Built-in kitchens and fire features are designed as part of the hardscape, rather than added as isolated objects afterward. Stone counters, integrated grills, storage, seating relationships, fireplaces, and other fire features are shaped around how the space will actually be used.",
      "The scope is often more substantial than homeowners first expect. Materials, utilities, layout, and investment are therefore discussed early, before the design moves forward.",
    ],
  },
  {
    number: "04",
    title: "Pergolas & Shade Structures",
    image: pergolasImage,
    alt: "A custom timber shade structure defining a comfortable residential outdoor gathering space",
    body: [
      "The purpose is simple: make an outdoor space more comfortable without fully enclosing it.",
      "Hollowbrook creates custom timber and cedar structures, from traditional open pergolas to retractable or adjustable louvered roofs that provide greater control over sun and shade. Each structure is considered in relation to the property’s orientation, the movement of the sun, and where people naturally gather.",
      "The goal is not simply to place a pergola over a table, but to create the right amount of shelter in the right place.",
    ],
  },
  {
    number: "05",
    title: "Outdoor Lighting Design",
    image: lightingDesignImage,
    alt: "Warm landscape lighting illuminating mature planting, stonework, and a residential outdoor living area after sunset",
    body: [
      "Low-voltage landscape and architectural lighting extends the use of an outdoor environment beyond daylight.",
      "It is usually considered alongside a larger hardscape or landscape project, allowing steps, paths, planting, structures, and gathering areas to be illuminated as one complete composition. Although lighting is often overlooked, it can have an outsized effect on how frequently the space is used and how the property feels after sunset.",
    ],
  },
];

function ServiceComposition({ service }: { service: Service }) {
  const imageIsLeft = Number(service.number) % 2 === 1;

  return (
    <section aria-labelledby={`service-${service.number}`}>
      <div
        className={`relative w-full lg:flex lg:min-h-[clamp(22rem,31vw,30rem)] lg:items-center lg:py-7 ${
          imageIsLeft ? "mr-auto" : "ml-auto"
        }`}
      >
        <figure
          className={`relative z-10 aspect-[4/3] w-[92%] sm:w-[76%] lg:absolute lg:top-1/2 lg:mx-0 lg:w-[38%] lg:-translate-y-1/2 lg:aspect-[5/4] ${
            imageIsLeft
              ? "left-0 mr-auto lg:[box-shadow:10px_12px_22px_rgba(35,54,40,0.08)]"
              : "right-0 ml-auto lg:[box-shadow:-10px_12px_22px_rgba(35,54,40,0.08)]"
          }`}
        >
          <img
            src={service.image}
            alt={service.alt}
            width="1536"
            height="1024"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </figure>

        <div
          className={`relative z-0 -mt-8 w-full border border-olive/65 px-6 pb-8 pt-14 sm:px-9 sm:pb-10 sm:pt-16 lg:mt-0 lg:w-[64%] lg:py-7 ${
            imageIsLeft
              ? "ml-auto lg:-translate-x-7 lg:pl-[calc(14%+1.75rem)] lg:pr-12"
              : "mr-auto lg:translate-x-7 lg:pl-12 lg:pr-[calc(14%+1.75rem)]"
          }`}
        >
          <div
            className={`max-w-[38rem] lg:max-w-none ${imageIsLeft ? "" : "lg:ml-auto"}`}
          >
            <h2
              id={`service-${service.number}`}
              className="text-[clamp(1.75rem,3vw,2.55rem)] font-semibold leading-[1.08] tracking-[-0.025em]"
            >
              {service.title}
            </h2>
            <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-olive/78">
              {service.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="bg-process py-[clamp(4rem,7vw,6.75rem)] text-cream">
        <Container>
          <div className="max-w-[52rem]">
            <h1 className="max-w-[50rem] text-[clamp(2.6rem,4.65vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              Every outdoor environment begins with the right decisions.
            </h1>
            <p className="mt-7 max-w-[38rem] text-base leading-7 text-cream/78 sm:text-lg sm:leading-8">
              From early planning through the final details, Hollowbrook brings
              design, materials, craftsmanship, and atmosphere together so each
              part of the property feels considered as a whole.
            </p>
          </div>
        </Container>
      </section>

      <div className="overflow-x-clip bg-cream pb-[clamp(1.25rem,2.5vw,2.5rem)] pt-[clamp(3.5rem,6vw,6.5rem)]">
        <div className="mx-auto w-full max-w-[100rem] space-y-[clamp(1.75rem,2.75vw,3rem)] px-page-x md:px-8 lg:px-8 xl:px-7">
          {services.map((service) => (
            <ServiceComposition key={service.number} service={service} />
          ))}
        </div>
      </div>

      <section className="bg-cream pb-[clamp(1.75rem,3vw,3.25rem)]">
        <Container>
          <div className="mx-auto max-w-[72rem] bg-beige-panel px-[clamp(1.75rem,5vw,5rem)] py-[clamp(2.75rem,5vw,4.5rem)] text-beige-text">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-8">
              <div className="max-w-[46rem]">
                <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  Bring the pieces together.
                </h2>
                <p className="mt-5 max-w-[44rem] leading-7 opacity-80">
                  Tell us what you are considering, and Hollowbrook will help
                  determine how design, materials, structures, and lighting can
                  work as one complete environment.
                </p>
              </div>
              <Button to="/contact" className="shrink-0">
                Book a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
