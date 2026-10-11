export const databaseMode = import.meta.env.VITE_CONTACT_MODE === "database";
type Enquiry = {
  name: string;
  email: string;
  business: string;
  message: string;
  budget: string;
  timeframe: string;
};
export function buildEnquiryMessage(form: Enquiry) {
  return [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    `Business: ${form.business.trim() || "Not provided"}`,
    `Budget: ${form.budget || "Not provided"}`,
    `Timeframe: ${form.timeframe.trim() || "Not provided"}`,
    "",
    "Project brief:",
    form.message.trim(),
  ].join("\n");
}
export function buildEnquiryMailto(form: Enquiry) {
  const subject = form.business.trim()
    ? `Project enquiry — ${form.business.trim()}`
    : "Project enquiry";
  return `mailto:dmmuchai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEnquiryMessage(form))}`;
}
