import { ContactCta } from "../components/sections/ContactCta";
import { HomeHero } from "../components/sections/HomeHero";
import { PreviewPair } from "../components/sections/PreviewPair";
import { ProcessRail } from "../components/sections/ProcessRail";
import { TestimonialPanel } from "../components/sections/TestimonialPanel";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <PreviewPair />
      <ProcessRail />
      <TestimonialPanel />
      <ContactCta />
    </>
  );
}
