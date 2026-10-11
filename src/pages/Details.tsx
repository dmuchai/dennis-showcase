import { type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Portfolio/Navigation";
import Footer from "@/components/Portfolio/Footer";
import PageMetadata from "@/components/PageMetadata";
import Projects from "@/components/Portfolio/Projects";
import { work } from "@/lib/work";
import { services } from "@/lib/services";
import photo from "@/assets/profile-photo.jpg";
import { databaseMode } from "@/lib/enquiry";
import NotFound from "./NotFound";
function Layout({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <>
      <PageMetadata
        title={`${title} | Dennis Muchai`}
        description={description}
      />
      <Navigation />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
const projectCTA = (
  <div className="detail-cta">
    <h2>Have a similar challenge?</h2>
    <p>Let's discuss what would make a useful difference to your business.</p>
    <a className="button" href="/#contact">
      Discuss your project <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  </div>
);
export function CaseStudy() {
  const { slug } = useParams();
  const item = work.find((entry) => entry.slug === slug);
  if (!item) return <NotFound />;
  return (
    <Layout title={item.name} description={item.summary}>
      <section className="shell detail-hero">
        <Link to="/work" className="text-link">
          <ArrowLeft size={16} aria-hidden="true" /> All work
        </Link>
        <p className="eyebrow">{item.status}</p>
        <h1>{item.headline}</h1>
        <p className="lead">{item.summary}</p>
        <div className="detail-meta">
          <span>
            <small>Project</small>
            {item.name}
          </span>
          <span>
            <small>My role</small>
            {item.role}
          </span>
          <a
            className="text-link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View public website <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="shell case-content">
        <div className={`case-screenshot ${item.slug}`}>
          <img
            src={item.image}
            width="524"
            height="586"
            alt={`${item.name} public website screenshot`}
          />
          <span>Public website · October 2026</span>
        </div>
        <div className="case-narrative">
          <h2>The business need</h2>
          <p>{item.challenge}</p>
          <h2>The approach</h2>
          <p>{item.solution}</p>
          <h2>
            {item.slug === "landee"
              ? "Product focus"
              : "Public website capabilities"}
          </h2>
          <ul>
            {item.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <h2>What this work brings to your project</h2>
          <p>{item.learning}</p>
          <p>{item.transfer}</p>
          <aside className="evidence-note">{item.note}</aside>
        </div>
      </section>
      <div className="shell">{projectCTA}</div>
    </Layout>
  );
}
export function ServiceDetail() {
  const { slug } = useParams();
  const item = services.find((entry) => entry.slug === slug);
  if (!item) return <NotFound />;
  return (
    <Layout title={item.title} description={item.description}>
      <section className="shell detail-hero">
        <a href="/#services" className="text-link">
          <ArrowLeft size={16} aria-hidden="true" /> All services
        </a>
        <p className="eyebrow">Ways I can help</p>
        <h1>{item.title}</h1>
        <p className="lead">{item.detail}</p>
      </section>
      <section className="shell service-detail">
        <div>
          <h2>A typical engagement</h2>
          <ul>
            {item.deliverables.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Start with a clear scope</h2>
          <p>
            The first conversation establishes the business need and whether
            there is a fit. A proposal then sets out the deliverables,
            milestones, price, and acceptance criteria.
          </p>
          <p>
            Delivery timelines, access requirements, third-party costs, and
            support are agreed for your specific project.
          </p>
        </div>
      </section>
      <div className="shell">{projectCTA}</div>
    </Layout>
  );
}
export function WorkPage() {
  return (
    <Layout
      title="Selected work"
      description="Explore Dennis Muchai's own business and product work across commerce, property, and logistics."
    >
      <Projects />
      <section className="section shell">
        <p className="eyebrow">Other product work</p>
        <h2>More from the workbench.</h2>
        <div className="other-work">
          <article>
            <h3>KejaLink</h3>
            <p>
              A property marketplace project around listings, discovery, and
              enquiries.
            </p>
            <a
              className="text-link"
              href="https://kejalink.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View website ↗
            </a>
            <a
              href="https://github.com/dmuchai/kejalink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code ↗
            </a>
          </article>
          <article>
            <h3>MoveLink Moving Planner</h3>
            <p>
              A relocation planning project exploring mover discovery,
              estimates, and AI-assisted planning.
            </p>
            <a
              className="text-link"
              href="https://moving-planner-ke.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View website ↗
            </a>
            <a
              href="https://github.com/dmuchai/kenya-movers-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code ↗
            </a>
          </article>
        </div>
        <p className="small-note">
          These are product projects, not external client commissions.
          Availability and production readiness vary by project.
        </p>
        {projectCTA}
      </section>
    </Layout>
  );
}
export function AboutPage() {
  return (
    <Layout
      title="About"
      description="Meet Dennis Muchai, Director of Cody Digital Ventures Ltd, business owner and software engineer based in Nairobi."
    >
      <section className="shell detail-hero">
        <p className="eyebrow">About Dennis</p>
        <h1>
          Technology grounded
          <br />
          in business experience.
        </h1>
        <p className="lead">
          I approach software as a tool for running a better business. The
          starting point is understanding how people work and where a useful
          change can be made.
        </p>
      </section>
      <section className="shell about-grid section">
        <div className="portrait">
          <img src={photo} alt="Dennis Muchai" width="400" height="440" />
          <span>
            Dennis Muchai
            <br />
            <small>Director, Cody Digital Ventures Ltd</small>
          </span>
        </div>
        <div className="case-narrative">
          <h2>Understanding the business</h2>
          <p>
            My experience at Family Bank included relationship management and
            operations. It shaped how I listen to business owners, understand
            their priorities, and work through the details behind a request.
          </p>
          <h2>Working with what matters</h2>
          <p>
            I also run Denncathy Fresh Basket, a grocery supply business.
            Working with customers, orders, and fulfilment keeps my perspective
            connected to the demands of daily operations.
          </p>
          <h2>Building and delivering</h2>
          <p>
            My ALX software engineering and AI-for-developers training supports
            hands-on work across web applications, databases, integrations, and
            automation. Landee is my current property management product work.
          </p>
          <p>
            Through Cody Digital Ventures Ltd, I bring these perspectives
            together. You work directly with me, with scope, responsibilities,
            and support agreed around your project.
          </p>
        </div>
      </section>
      <div className="shell">{projectCTA}</div>
    </Layout>
  );
}
export function PrivacyPage() {
  return (
    <Layout
      title="Enquiry privacy"
      description="How project enquiry information is used on Dennis Muchai's website."
    >
      <section className="shell detail-hero">
        <p className="eyebrow">Project enquiries</p>
        <h1>Enquiry privacy notice.</h1>
        <div className="prose-body">
          <p>
            The enquiry form asks for your name, email address, brief, and any
            optional business, budget, or timeframe details you provide. These
            details help Dennis Muchai, through Cody Digital Ventures Ltd,
            review and respond to your enquiry and discuss a potential
            engagement.
          </p>
          <p>
            {databaseMode
              ? "Submitted enquiries are stored using Supabase."
              : "The form prepares an email draft in your browser. It does not submit the details to a website database. You choose whether to open your email app and send the draft. Once sent, the enquiry is handled through email."}{" "}
            Please do not include passwords, payment credentials, or
            confidential customer records.
          </p>
          <p>
            For questions about your submitted information, or to request
            correction or deletion, contact{" "}
            <a href="mailto:dmmuchai@gmail.com">dmmuchai@gmail.com</a>.
          </p>
          <p>
            This notice covers the project enquiry form. Any additional data
            handling required for an engagement will be discussed separately.
          </p>
        </div>
      </section>
    </Layout>
  );
}
