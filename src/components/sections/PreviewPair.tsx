import { Link } from "react-router-dom";
import projectImage from "../../assets/images/projects/Projects – Moreland Hills Backyard.png";
import serviceImage from "../../assets/images/services/Service - lighting design.png";
import { Container } from "../shared/Container";

const previews = [
  {
    eyebrow: "Featured project",
    title: "Moreland Hills Outdoor Living",
    description:
      "A considered backyard environment shaped for gathering, dining, and daily life.",
    cta: "View Projects",
    to: "/projects",
    image: projectImage,
    alt: "Completed Moreland Hills patio with timber pergola, stone fireplace, and layered planting",
  },
  {
    eyebrow: "Featured service",
    title: "Landscape Design",
    description:
      "Cohesive outdoor environments planned around the property, architecture, and the way you live.",
    cta: "Explore Services",
    to: "/services",
    image: serviceImage,
    alt: "Premium residential landscape illuminated with layered outdoor lighting at dusk",
  },
] as const;

export function PreviewPair() {
  return (
    <section
      aria-label="Explore projects and services"
      className="bg-cream py-[clamp(2.25rem,4vw,4rem)]"
    >
      <Container>
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-10 lg:gap-16">
          {previews.map((preview, index) => (
            <Link
              key={preview.to}
              to={preview.to}
              className={`preview-destination group block focus-visible:outline-offset-8 ${
                index === 1 ? "md:mt-16" : ""
              }`}
            >
              <div className="relative aspect-[25/27] border border-frame-accent bg-cream p-2 sm:p-2.5">
                <img
                  src={preview.image}
                  alt={preview.alt}
                  className="h-full w-full object-cover"
                />
                <div className="preview-overlay absolute inset-2 flex flex-col justify-end bg-gradient-to-t from-olive/75 via-olive/10 to-transparent p-6 text-cream sm:inset-2.5 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/80">
                    {preview.eyebrow}
                  </p>
                  <h2 className="mt-2 max-w-md text-2xl font-semibold sm:text-3xl">
                    {preview.title}
                  </h2>
                  <div className="preview-details">
                    <p className="mt-4 max-w-md text-sm leading-6 text-cream/90 sm:text-base">
                      {preview.description}
                    </p>
                    <span className="mt-5 inline-flex border-b border-cta pb-1 text-sm font-semibold">
                      {preview.cta}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
