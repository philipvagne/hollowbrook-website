import type { ComponentPropsWithoutRef } from "react";
import { Container } from "./Container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  contained?: boolean;
};

export function Section({
  children,
  className = "",
  contained = true,
  ...props
}: SectionProps) {
  return (
    <section className={`py-section ${className}`} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
