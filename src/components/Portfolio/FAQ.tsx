const questions = [
  [
    "Do I need to know exactly what I want built?",
    "No. Start with the problem you are trying to solve. The initial conversation helps establish whether software, automation, or an improvement to your current tools is the right next step.",
  ],
  [
    "Can you work with our existing systems?",
    "That depends on the platform, its integration options, and the access available. These are reviewed before an implementation is proposed.",
  ],
  [
    "How much does a project cost?",
    "Pricing follows a defined scope. Your proposal sets out deliverables, milestones, and costs. Hosting, messaging, AI usage, and other third-party charges are identified separately where applicable.",
  ],
  [
    "What happens after launch?",
    "Handover, documentation, and any training are agreed as part of the engagement. Ongoing maintenance and optimisation can be scoped separately.",
  ],
  [
    "Who owns the software and accounts?",
    "Ownership, licences, source-code handover, and access to accounts are agreed in writing before work starts. Third-party services remain subject to their own terms.",
  ],
  [
    "Where are you based?",
    "I am based in Nairobi, Kenya, and can work remotely with businesses elsewhere. Meetings and collaboration arrangements are agreed around the project.",
  ],
];
export default function FAQ() {
  return (
    <section className="section shell faq-grid">
      <div>
        <p className="eyebrow">Before we begin</p>
        <h2>
          A few useful
          <br />
          <span className="serif-accent">answers.</span>
        </h2>
      </div>
      <div>
        {questions.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
