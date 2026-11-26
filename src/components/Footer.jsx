import { FaGithub, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { site, socials } from "../content.js";

const icons = { github: FaGithub, facebook: FaFacebookF, linkedin: FaLinkedinIn, x: FaXTwitter };

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {site.name}. Built with React &amp; Vite.</p>
        <ul className="socials">
          {socials.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="icon-btn">
                  {Icon ? <Icon /> : s.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
