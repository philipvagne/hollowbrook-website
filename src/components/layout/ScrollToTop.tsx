import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "POP") return;

    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;

    if (target) {
      target.scrollIntoView({ behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, navigationType]);

  return null;
}
