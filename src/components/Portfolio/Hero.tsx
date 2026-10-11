import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="hero shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Practical technology. Business first.
        </p>
        <h1>
          Better systems.
          <br />
          <span className="serif-accent">More room to grow.</span>
        </h1>
        <p className="hero-description">
          Custom software and AI automation for growing businesses. Turn manual
          processes into practical systems for customers, payments, and everyday
          operations.
        </p>
        <div className="actions">
          <a href="#contact" className="button">
            Discuss your project <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href="#work" className="text-link">
            Explore selected work <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="hero-byline">
          Work directly with Dennis Muchai.
          <br />
          <span>Director, Cody Digital Ventures Ltd · Nairobi, Kenya</span>
        </p>
      </div>
      <Link
        to="/work/landee"
        className="hero-product"
        aria-label="Explore the Landee property management project"
      >
        <div className="product-topline">
          <span className="tiny-dot" />
          <span>From the workbench</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </div>
        <div className="product-image">
          <img
            src="/work/landee.jpg"
            alt="Landee public homepage presenting property management software"
            width="1264"
            height="712"
          />
        </div>
        <div className="product-caption">
          <div>
            <span className="eyebrow">Property operations</span>
            <strong>Landee</strong>
          </div>
          <span>
            A product in development.
            <br />
            Built around real workflows.
          </span>
        </div>
      </Link>
    </section>
  );
}
