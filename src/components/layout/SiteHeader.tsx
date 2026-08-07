import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { headerNavigation } from "../../content/navigation";
import { Container } from "../shared/Container";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`z-30 w-full ${
        isHomePage
          ? "absolute inset-x-0 top-0 text-cream"
          : "border-b border-utility-neutral bg-cream text-olive"
      }`}
    >
      <Container className="flex min-h-20 items-center justify-between gap-8">
        <NavLink
          to="/"
          className={`max-w-48 text-base font-semibold leading-tight tracking-tight sm:max-w-none sm:text-lg ${
            isHomePage ? "text-cream" : "text-olive"
          }`}
          onClick={closeMenu}
        >
          Hollowbrook Outdoor Living
        </NavLink>

        <button
          type="button"
          className={`inline-flex min-h-11 min-w-11 items-center justify-center border lg:hidden ${
            isHomePage
              ? "border-cream/70 text-cream"
              : "border-frame-accent text-olive"
          }`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0.5 h-px w-5 bg-current transition-transform ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0.5 left-0 h-px w-5 bg-current transition-transform ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-20 z-10 flex-col border-b border-utility-neutral bg-cream px-6 py-5 text-olive lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 ${
            isHomePage ? "lg:text-cream" : "lg:text-olive"
          }`}
        >
          {headerNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                item.isCta
                  ? "mt-2 inline-flex min-h-10 items-center justify-center self-start bg-cta px-4 py-2 text-sm font-semibold text-cta-text hover:bg-cta/90 focus-visible:outline-cta-text lg:ml-2 lg:mt-0 lg:self-auto"
                  : `px-3 py-3 text-sm font-medium text-current underline-offset-8 lg:py-2 ${
                      isActive ? "underline decoration-2" : "hover:underline"
                    }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}
