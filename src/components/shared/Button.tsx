import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

const buttonStyles =
  "group inline-flex min-h-11 items-center justify-center bg-cta px-6 py-3 text-sm font-semibold text-cta-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive disabled:cursor-not-allowed disabled:opacity-60";

function ButtonLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">
      {children}
    </span>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  to?: undefined;
};

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
};

export function Button(props: ButtonProps | ButtonLinkProps) {
  if (typeof props.to === "string") {
    const { children, className = "", to } = props;
    return (
      <Link className={`${buttonStyles} ${className}`} to={to}>
        <ButtonLabel>{children}</ButtonLabel>
      </Link>
    );
  }

  const { children, className = "", type = "button", ...buttonProps } = props;
  return (
    <button
      className={`${buttonStyles} ${className}`}
      type={type}
      {...buttonProps}
    >
      <ButtonLabel>{children}</ButtonLabel>
    </button>
  );
}
