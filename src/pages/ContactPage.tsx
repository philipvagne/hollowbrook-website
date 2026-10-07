import { ConsultationForm } from "../components/sections/ConsultationForm";
import { Container } from "../components/shared/Container";
import { contactDetails, contactIntro } from "../content/contact";

export function ContactPage() {
  return (
    <section className="bg-cream pb-[clamp(4rem,7vw,7rem)] pt-[clamp(3.5rem,6vw,6rem)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h1 className="text-[clamp(2.4rem,4.4vw,4rem)] font-semibold leading-[1.03] tracking-[-0.04em]">
              {contactIntro.heading}
            </h1>
            <p className="mt-6 max-w-[28rem] text-base leading-7 text-olive/85 sm:text-lg sm:leading-8">
              {contactIntro.body}
            </p>
            <dl className="mt-10 grid gap-5 border-t border-utility-neutral pt-8">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-sm font-medium text-olive/70">{detail.label}</dt>
                  <dd className="mt-1 text-base font-medium">
                    {"href" in detail ? (
                      <a
                        href={detail.href}
                        className="underline-offset-4 hover:underline"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
