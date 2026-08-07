export const primaryNavigation = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const headerNavigation = [
  { label: "Home", to: "/", isCta: false },
  { label: "About", to: "/about", isCta: false },
  { label: "Services", to: "/services", isCta: false },
  { label: "Projects", to: "/projects", isCta: false },
  { label: "FAQ", to: "/faq", isCta: false },
  { label: "Book a Consultation", to: "/contact", isCta: true },
] as const;
