import { useState } from "react";
import { FiCopy, FiCheck, FiSend } from "react-icons/fi";
import Section from "./Section.jsx";
import { site } from "../content.js";

// No backend needed: the form opens the visitor's mail app with everything pre-filled.
export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [copied, setCopied] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <Section id="contact" index="06" title="Contact">
      <p className="contact__big">
        Want to say something? <em>Drop me a line.</em>
      </p>

      <div className="contact__email">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <button className="icon-btn" onClick={copy} aria-label="Copy email address">
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
        <span className="sr-only" aria-live="polite">{copied ? "Email copied" : ""}</span>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <label className="field">
          <span>Your name</span>
          <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
        </label>
        <label className="field">
          <span>Message</span>
          <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
        </label>
        <button className="btn btn--primary" type="submit">
          Send via email <FiSend aria-hidden="true" />
        </button>
      </form>
    </Section>
  );
}
