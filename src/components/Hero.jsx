import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { hero, site } from "../content.js";
import { useTypewriter } from "../hooks.js";
import portrait from "../assets/portrait.jpg";

export default function Hero() {
  const typed = useTypewriter(hero.rotating);

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {site.role} · {site.location}
          </p>
          <h1 className="hero__title">
            {hero.greeting}
            <br />
            <em className="hero__typed" aria-live="polite">
              {typed}
              <span className="caret" aria-hidden="true" />
            </em>
          </h1>
          <p className="hero__blurb">{hero.blurb}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href={site.portfolioUrl}>
              View my portfolio <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <figure className="hero__photo">
          <img
            src={portrait}
            alt="Black and white portrait of Soumallya looking to the side"
            width="750"
            height="1000"
            fetchPriority="high"
          />
        </figure>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to About">
        <FiArrowDown />
      </a>
    </section>
  );
}
