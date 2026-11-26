import Section from "./Section.jsx";
import { skills } from "../content.js";

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className="skills__group">
            <h3 className="skills__label">{g.group}</h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
