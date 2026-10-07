import { NavLink } from "react-router-dom";
import { primaryNavigation } from "../../content/navigation";
import { Container } from "../shared/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-utility-neutral bg-cream py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold text-olive">Hollowbrook Outdoor Living</p>
          <p className="mt-2 text-sm text-olive/75">
            © {new Date().getFullYear()} Hollowbrook Outdoor Living
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-3 gap-x-4 md:flex md:flex-wrap md:gap-x-1 md:-mx-2 lg:mx-0 lg:gap-x-5 lg:gap-y-2">
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="inline-flex min-h-11 items-center md:px-2 text-sm font-medium text-olive underline-offset-4 hover:underline lg:min-h-0 lg:px-0"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
      <Container>
        <p className="mt-8 text-sm text-olive/75">
          Hollowbrook Outdoor Living is a fictional company created as a design concept.
        </p>
      </Container>
    </footer>
  );
}
