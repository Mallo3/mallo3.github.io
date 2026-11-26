export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container section__grid">
        <header className="section__head" data-reveal>
          <span className="section__index">{index}</span>
          <h2 className="section__title">{title}</h2>
        </header>
        <div className="section__body" data-reveal>
          {children}
        </div>
      </div>
    </section>
  );
}
