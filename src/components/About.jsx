import Section from "./Section.jsx";
import { about } from "../content.js";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="prose">
        {about.paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "lead" : undefined}>{p}</p>
        ))}
      </div>
      <dl className="facts">
        {about.facts.map((f) => (
          <div key={f.label} className="facts__item">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
