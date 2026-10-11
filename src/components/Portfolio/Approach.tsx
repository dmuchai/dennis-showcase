const steps = [
  [
    "Understand",
    "We discuss your workflow, the friction, and what a useful result would look like.",
  ],
  [
    "Define",
    "You receive a scope with deliverables, milestones, costs, and acceptance criteria.",
  ],
  [
    "Build & review",
    "Review working progress and test it against the real tasks your team needs to complete.",
  ],
  [
    "Launch & support",
    "Agree the handover, training, and ongoing support your system needs.",
  ],
];
export default function Approach() {
  return (
    <section id="approach" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The approach</p>
          <h2>
            Clear scope.
            <br />
            <span className="serif-accent">Shared progress.</span>
          </h2>
        </div>
        <p>
          You should know what is being built, why it matters, and what happens
          next.
        </p>
      </div>
      <ol className="approach-grid">
        {steps.map(([title, description], i) => (
          <li key={title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
