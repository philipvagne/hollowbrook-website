import ctaImage from "../../assets/images/homepage/Homepage3.png";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";

export function ContactCta() {
  return (
    <section className="overflow-hidden bg-cream pb-[clamp(2.25rem,4vw,4rem)] pt-0">
      <Container>
        <div className="relative mr-auto flex max-w-[78rem] flex-col pt-0 lg:block lg:min-h-[30rem] lg:pt-12">
          <div className="beige-panel-extension relative ml-auto bg-beige-panel px-7 pb-12 pt-8 text-beige-text sm:px-12 sm:pb-14 sm:pt-10 lg:-ml-16 lg:mr-0 lg:w-[calc(100%+4rem)] lg:px-16 lg:pb-14 lg:pl-[53%] lg:pt-14">
            <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Ready to rethink your outdoor space?
            </h2>
            <p className="mt-5 max-w-lg leading-7 opacity-80">
              Tell us what you are considering, and we will start with a
              conversation about your property, priorities, and possibilities.
            </p>
            <Button to="/contact" className="mt-8">
              Book a Consultation
            </Button>
          </div>

          <div className="order-first bg-beige-panel px-7 pt-7 sm:px-12 sm:pt-12 lg:absolute lg:-left-10 lg:top-4 lg:order-none lg:h-[29rem] lg:w-[47%] lg:bg-transparent lg:p-0">
            <div className="h-52 w-full border border-frame-accent bg-cream p-2 sm:h-72 sm:p-2.5 lg:h-full">
              <img
                src={ctaImage}
                alt="Finished stone terrace framed by mature trees and layered garden planting"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
