import { useEffect, useRef, useState } from "react";
import bainbridgeImage from "../assets/images/projects/Projects – Bainbridge Pergola & Kitchen.png";
import chagrinFallsImage from "../assets/images/projects/Projects - Chagrin Falls Terrace Renovation.png";
import gatesMillsImage from "../assets/images/projects/Projects – Gates Mills Backyard Redesign.png";
import huntingValleyImage from "../assets/images/projects/Projects – Hunting Valley Fire Patio.png";
import morelandHillsImage from "../assets/images/projects/Projects – Moreland Hills Backyard.png";
import { Button } from "../components/shared/Button";
import { Container } from "../components/shared/Container";

type Project = {
  alt: string;
  description: string;
  descriptor: string;
  image: string;
  title: string;
};

const projects: Project[] = [
  {
    title: "Gates Mills Backyard Redesign",
    descriptor: "Landscape design · Stonework · Planting",
    image: gatesMillsImage,
    alt: "Completed residential backyard landscape in Gates Mills",
    description:
      "The backyard was reworked as one connected environment, with new stone terraces, planting, and gathering areas shaped around the existing home. Changes in level are used deliberately, creating distinct places to sit and move through the garden without making the property feel divided.",
  },
  {
    title: "Moreland Hills Outdoor Living",
    descriptor: "Pergola · Patio · Outdoor living",
    image: morelandHillsImage,
    alt: "Completed Moreland Hills patio with a timber pergola and integrated landscape",
    description:
      "The pergola creates a sheltered place for dining and gathering, while the surrounding patio, stonework, and planting connect it naturally to the home and garden. The result is an outdoor space designed to feel comfortable for everyday use, not just special occasions.",
  },
  {
    title: "Hunting Valley Fire Patio",
    descriptor: "Natural stone · Fire feature · Planting",
    image: huntingValleyImage,
    alt: "Completed natural-stone fire patio in Hunting Valley",
    description:
      "The stone fireplace forms a natural gathering point within the garden, surrounded by layered planting that gives the patio a sense of enclosure without closing it off from the wider property. Natural materials and warm lighting make the space feel equally inviting during the day and after sunset.",
  },
  {
    title: "Bainbridge Pergola",
    descriptor: "Pergola · Outdoor kitchen · Patio",
    image: bainbridgeImage,
    alt: "Completed Bainbridge outdoor kitchen and patio beneath a timber pergola",
    description:
      "Designed as an extension of the home, the pergola brings cooking, dining, and gathering together beneath one sheltered structure. The integrated outdoor kitchen and generous dining area create a space that works naturally for both everyday meals and larger gatherings.",
  },
  {
    title: "Chagrin Falls Terrace",
    descriptor: "Terrace · Stonework · Landscape",
    image: chagrinFallsImage,
    alt: "Completed residential terrace renovation in Chagrin Falls",
    description:
      "The terrace was reshaped to make the transition between home and garden feel more natural, using broad stone steps and layered planting to soften the change in level. Generous paved areas provide room to gather while the surrounding landscape keeps the space connected to the garden.",
  },
];

type ProjectCardProps = {
  className?: string;
  onOpen: (trigger: HTMLButtonElement) => void;
  project: Project;
};

function ProjectCard({ className = "", onOpen, project }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={(event) => onOpen(event.currentTarget)}
      className={`preview-destination group relative z-10 block w-full cursor-pointer text-left focus-visible:outline-offset-8 ${className}`}
      aria-label={`View ${project.title}`}
    >
      <div className="relative z-10 aspect-[4/5] border border-[#2F4034] bg-cream p-2 shadow-[0_5px_18px_rgba(35,54,40,0.07)] sm:p-2.5">
        <img
          src={project.image}
          alt={project.alt}
          width="1536"
          height="1024"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="preview-overlay absolute inset-2 flex flex-col justify-end bg-gradient-to-t from-olive/80 via-olive/15 to-transparent p-5 text-cream sm:inset-2.5 sm:p-6">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.1em] text-cream/80 max-lg:text-balance lg:tracking-[0.16em]">
            {project.descriptor}
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
            {project.title}
          </h2>
          <div className="preview-details">
            <span className="mt-4 inline-flex border-b border-cta pb-1 text-sm font-semibold">
              View Project
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

type ProjectModalProps = {
  onClose: () => void;
  project: Project;
};

function ProjectModal({ onClose, project }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-olive/85 p-4 sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative h-[min(82vh,52rem)] w-full max-w-[86rem] overflow-hidden bg-olive"
      >
        <img
          src={project.image}
          alt={project.alt}
          width="1536"
          height="1024"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-olive/90 via-olive/20 to-transparent" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center border border-cream/55 bg-olive/35 text-2xl leading-none text-cream transition-colors duration-200 hover:bg-olive/65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream sm:right-6 sm:top-6"
          aria-label={`Close ${project.title}`}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="absolute inset-x-0 bottom-0 p-6 text-cream sm:p-10 lg:p-14">
          <h2
            id="project-dialog-title"
            className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          >
            {project.title}
          </h2>
          <span
            aria-hidden="true"
            className="mt-4 block h-px w-14 bg-cta"
          />
          <p className="mt-5 max-w-2xl text-sm leading-6 text-cream/88 sm:text-base sm:leading-7">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  function openProject(project: Project, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setActiveProject(project);
  }

  function closeProject() {
    setActiveProject(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  }

  return (
    <>
      <section className="bg-process pb-[clamp(5rem,8vw,8rem)] pt-[clamp(4rem,7vw,6.75rem)] text-cream">
        <Container>
          <div className="max-w-[52rem]">
            <h1 className="max-w-[50rem] text-[clamp(2.6rem,4.65vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              Outdoor environments, brought to life.
            </h1>
            <p className="mt-7 max-w-[37rem] text-base leading-7 text-cream/78 sm:text-lg sm:leading-8">
              A selection of completed landscapes shaped around the home, the
              property, and the way each space is meant to be used.
            </p>
          </div>
        </Container>
      </section>

      <section
        aria-label="Selected projects"
        className="relative z-10 bg-cream pb-[clamp(1rem,1.5vw,1.5rem)]"
      >
        <Container>
          <div className="relative -translate-y-[clamp(2.5rem,5vw,4.5rem)]">
            <div className="mx-auto grid max-w-[88rem] gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-6 lg:gap-x-10 lg:gap-y-11">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onOpen={(trigger) => openProject(project, trigger)}
                  className={`lg:col-span-2 ${
                    index === 3
                      ? "lg:col-start-2"
                      : index === 4
                        ? "md:col-span-2 md:w-[calc(50%-1.25rem)] md:justify-self-center lg:col-span-2 lg:col-start-4 lg:w-full"
                        : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-[clamp(2.5rem,4vw,4.5rem)]">
        <Container>
          <div className="mx-auto max-w-[72rem] bg-beige-panel px-[clamp(1.75rem,5vw,5rem)] py-[clamp(2.75rem,5vw,4.5rem)] text-beige-text">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-8">
              <div className="max-w-[46rem]">
                <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  Let’s shape what comes next.
                </h2>
                <p className="mt-5 max-w-[42rem] leading-7 opacity-80">
                  Start with a conversation about your property, your
                  priorities, and what the outdoor space could become.
                </p>
              </div>
              <Button to="/contact" className="shrink-0 lg:-translate-y-6">
                Book a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={closeProject} />
      ) : null}
    </>
  );
}
