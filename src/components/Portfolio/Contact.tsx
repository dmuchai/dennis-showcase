import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  buildEnquiryMessage,
  buildEnquiryMailto,
  databaseMode,
} from "@/lib/enquiry";
const initial = {
  name: "",
  email: "",
  business: "",
  message: "",
  budget: "",
  timeframe: "",
  website: "",
};
export default function Contact() {
  const [form, setForm] = useState(initial);
  const [state, setState] = useState<
    "idle" | "sending" | "success" | "error" | "draft"
  >("idle");
  const [draftHref, setDraftHref] = useState("");
  const update = (key: keyof typeof initial, value: string) =>
    setForm((previous) => ({ ...previous, [key]: value }));
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending" || form.website) return;
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    if (!databaseMode) {
      setDraftHref(buildEnquiryMailto(form));
      setState("draft");
      return;
    }
    setState("sending");
    try {
      // Preserve the existing database schema by keeping context with the brief.
      const message = buildEnquiryMessage(form);
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase
        .from("contact_submissions")
        .insert({ name: form.name.trim(), email: form.email.trim(), message });
      if (error) throw error;
      setState("success");
      setForm(initial);
    } catch {
      setState("error");
    }
  }
  return (
    <section id="contact" className="contact-section section">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">Let's build something useful</p>
          <h2>
            What would you
            <br />
            <span className="serif-accent">like to improve?</span>
          </h2>
          <p>
            Tell me where things get stuck, what you want to build, or what your
            current system is missing.
          </p>
          <p>
            We start with a conversation to understand the need and establish
            fit. If there is a clear way forward, the next step is a scoped
            proposal.
          </p>
          <div className="contact-direct">
            <a href="mailto:dmmuchai@gmail.com?subject=Project%20enquiry">
              dmmuchai@gmail.com <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href="tel:+254710583121">+254 710 583 121</a>
            <span>Nairobi, Kenya · Working remotely</span>
          </div>
        </div>
        <div className="enquiry-card">
          {state === "success" ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={36} aria-hidden="true" />
              <h3>Your enquiry has been received.</h3>
              <p>
                Thank you for sharing the brief. I'll review it and follow up
                using the email address you provided.
              </p>
              <button className="text-link" onClick={() => setState("idle")}>
                Send another enquiry{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            </div>
          ) : state === "draft" ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={36} aria-hidden="true" />
              <h3>Your email draft is ready.</h3>
              <p>
                Open it in your email app, review the details, and send it to
                Dennis. Your enquiry has not been sent yet.
              </p>
              <a href={draftHref} className="button">
                Open email draft <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <button className="text-link" onClick={() => setState("idle")}>
                Edit your details
              </button>
              <p className="small-note">
                No email app configured? Email dmmuchai@gmail.com directly with
                your project brief.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <h3>Start a project conversation</h3>
              <p className="form-intro">
                {databaseMode
                  ? "A few details are enough to get started."
                  : "Prepare an email brief to review and send in your email app."}{" "}
                Required fields are marked *.
              </p>
              <fieldset disabled={state === "sending"}>
                <div className="form-row">
                  <div>
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={120}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>
                </div>
                <label htmlFor="business">
                  Business name <span>(optional)</span>
                </label>
                <input
                  id="business"
                  name="business"
                  autoComplete="organization"
                  maxLength={200}
                  value={form.business}
                  onChange={(e) => update("business", e.target.value)}
                />
                <label htmlFor="message">
                  What would you like to improve? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={databaseMode ? 5000 : 1500}
                  rows={5}
                  placeholder="Describe the problem, idea, or workflow you have in mind."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                />
                <div className="form-row">
                  <div>
                    <label htmlFor="budget">
                      Budget <span>(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                    >
                      <option value="">Select a range</option>
                      <option>Below KES 50,000</option>
                      <option>KES 50,000–150,000</option>
                      <option>KES 150,000–500,000</option>
                      <option>Above KES 500,000</option>
                      <option>Let's discuss</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeframe">
                      Timeframe <span>(optional)</span>
                    </label>
                    <input
                      id="timeframe"
                      name="timeframe"
                      maxLength={100}
                      placeholder="e.g. Within three months"
                      value={form.timeframe}
                      onChange={(e) => update("timeframe", e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-trap" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                  />
                </div>
                <p className="privacy-note">
                  {databaseMode
                    ? "Your details will be used to respond to this enquiry."
                    : "This form prepares a draft. You send it from your email app."}{" "}
                  <a href="/privacy">Read the enquiry privacy notice.</a>
                </p>
                <button
                  className="button"
                  type="submit"
                  disabled={state === "sending"}
                >
                  {state === "sending"
                    ? "Sending…"
                    : databaseMode
                      ? "Send project enquiry"
                      : "Prepare email enquiry"}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </button>
              </fieldset>
              {state === "error" && (
                <p role="alert" className="form-error">
                  Your enquiry could not be saved. Your details are still here.
                  Please try again or{" "}
                  <a href="mailto:dmmuchai@gmail.com?subject=Project%20enquiry">
                    email me directly
                  </a>
                  .
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
