import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section.jsx";
import { work } from "../content.js";

export default function Work() {
  return (
    <Section id="work" index="05" title="Work">
      <div className="cards">
        {work.map((w) => {
          const inner = (
            <>
              <div className="card__top">
                <span className="tag">{w.tag}</span>
                {w.link && <FiArrowUpRight className="card__arrow" aria-hidden="true" />}
              </div>
              <h3 className="card__title">{w.title}</h3>
              <p className="card__desc">{w.description}</p>
            </>
          );
          return w.link ? (
            <a key={w.title} href={w.link} className="card card--link">{inner}</a>
          ) : (
            <article key={w.title} className="card">{inner}</article>
          );
        })}
      </div>
    </Section>
  );
}
