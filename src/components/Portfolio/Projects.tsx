import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/lib/work";
export default function Projects() {
  return (
    <section id="work" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>
            Real businesses.
            <br />
            <span className="serif-accent">Practical builds.</span>
          </h2>
        </div>
        <p>
          Two examples of turning business needs into digital products. My own
          business and product work, with the context behind each build.
        </p>
      </div>
      <div className="work-grid">
        {work.map((item) => (
          <article className="work-card" key={item.slug}>
            <Link
              className={`work-image ${item.slug}`}
              to={`/work/${item.slug}`}
              aria-label={`Read the ${item.name} case study`}
            >
              <img
                src={item.image}
                width="524"
                height="586"
                alt={`${item.name} public website`}
                loading="lazy"
              />
              <span className="image-label">{item.category}</span>
            </Link>
            <div className="work-copy">
              <p className="eyebrow">{item.status}</p>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              <Link to={`/work/${item.slug}`} className="text-link">
                Explore the case study{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="section-footnote">
        More from the workbench{" "}
        <Link to="/work">
          Explore other projects <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
