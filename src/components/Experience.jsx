import Section from "./Section.jsx";
import { experience } from "../content.js";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li
            key={job.company}
            className={`timeline__item ${job.current ? "is-current" : ""}`}
          >
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`logo-tile ${job.logoFit === "cover" ? "logo-tile--fill" : ""}`}
              aria-label={`${job.company} website`}
            >
              <img src={job.logo} alt="" loading="lazy" />
            </a>
            <div className="timeline__body">
              <div className="timeline__head">
                <h3 className="timeline__company">{job.company}</h3>
                {job.period && (
                  <span className={job.current ? "badge badge--live" : "timeline__meta"}>
                    {job.current && <span className="status-dot" aria-hidden="true" />}
                    {job.period}
                  </span>
                )}
              </div>
              {job.role && <p className="timeline__role">{job.role}</p>}
              {job.points?.length > 0 && (
                <ul className="timeline__points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
