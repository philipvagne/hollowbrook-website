export const contactIntro = {
  heading: "Book a consultation",
  body: "Tell us about your property and what you have in mind, and we will reply to arrange a visit.",
};

export const contactDetails = [
  { label: "Email", value: "hello@hollowbrook.example", href: "mailto:hello@hollowbrook.example" },
  { label: "Phone", value: "(440) 555-0142", href: "tel:+14405550142" },
  { label: "Service area", value: "Northeast Ohio" },
] as const;

export const contactNotice =
  "Hollowbrook Outdoor Living is a fictional company and this website is a design concept. This form does not send or store anything.";

export const projectTypes = [
  "Patio and stonework",
  "Pergola and outdoor living",
  "Planting and landscape design",
  "Landscape lighting",
  "Not sure yet",
] as const;

export const timingOptions = [
  "As soon as possible",
  "Within 3 months",
  "Within 6 months",
  "Just exploring",
] as const;

export const contactSuccess = {
  heading: "Thank you.",
  body: "This is a concept website, so your request was not sent.",
  button: "Back to the form",
};

export const contactSubmitLabel = "Request a consultation";
