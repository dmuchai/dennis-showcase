import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/lib/services";
export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Ways I can help</p>
            <h2>
              Start with the problem.
              <br />
              <span className="serif-accent">Build what helps.</span>
            </h2>
          </div>
          <p>
            A new system, a smarter workflow, or an improvement to what you
            already use. We start with your business needs.
          </p>
        </div>
        <div className="services-grid">
          {services.map((item, index) => (
            <article className="service-card" key={item.slug}>
              <div className="service-top">
                <item.icon size={27} strokeWidth={1.5} aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="service-examples">{item.examples}</p>
              <Link className="text-link" to={`/services/${item.slug}`}>
                See how it works <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
