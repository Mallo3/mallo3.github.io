import { useEffect, useState } from "react";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Cycles through phrases with a type/delete effect. */
export function useTypewriter(phrases, { typeMs = 70, deleteMs = 35, holdMs = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reducedMotion() ? phrases[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion()) {
      const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), 3000);
      return () => clearInterval(id);
    }
    const full = phrases[index];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === full) delay = holdMs;

    const id = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, phrases, typeMs, deleteMs, holdMs]);

  return reducedMotion() ? phrases[index] : text;
}

/** Fades in any element with [data-reveal] as it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (reducedMotion() || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Returns the id of the section currently in view. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light"
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  // Only persist an explicit choice, so untouched visitors keep following their OS setting
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    setTheme(next);
  };
  return [theme, toggle];
}
