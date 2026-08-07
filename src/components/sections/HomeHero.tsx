import heroImage from "../../assets/images/hero/Homepage.png";
import { Container } from "../shared/Container";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[37rem] items-end overflow-hidden text-cream sm:min-h-[40rem] lg:min-h-[min(50rem,88svh)]">
      <img
        src={heroImage}
        alt="Illuminated stone patio and timber pergola beside a landscaped home at dusk"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,18,13,0.38)_0%,rgba(9,18,13,0.04)_34%,rgba(9,18,13,0.72)_100%)]" />
      <Container className="relative z-10 pb-20 pt-32 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl -translate-y-[5vh]">
          <h1 className="max-w-2xl text-[clamp(2.55rem,6.3vw,5.1rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            Outdoor spaces designed to feel at home.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-cream/90 sm:text-lg sm:leading-8">
            Thoughtful landscape design, natural stonework, and crafted outdoor
            living spaces for homes across Northeast Ohio.
          </p>
        </div>
      </Container>
    </section>
  );
}
