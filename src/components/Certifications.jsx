import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section.jsx";
import { certifications, credlyProfile } from "../content.js";

export default function Certifications() {
  return (
    <Section id="certifications" index="03" title="Certifications">
      <div className="certs">
        {certifications.map((c) => (
          <a
            key={c.url}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cert"
          >
            <img src={c.image} alt={`${c.name} badge`} width="120" height="120" loading="lazy" />
            <div className="cert__body">
              <span className="tag">{c.issuer}</span>
              <h3 className="cert__name">{c.name}</h3>
              <p className="cert__meta">
                Issued {c.issued}
                {c.expires && <> · Valid till {c.expires}</>}
              </p>
            </div>
            <FiArrowUpRight className="card__arrow cert__arrow" aria-hidden="true" />
          </a>
        ))}
      </div>
      <a className="text-link" href={credlyProfile} target="_blank" rel="noopener noreferrer">
        Verify on Credly <FiArrowUpRight aria-hidden="true" />
      </a>
    </Section>
  );
}
