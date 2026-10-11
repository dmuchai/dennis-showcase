import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import photo from "@/assets/profile-photo.jpg";
export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="shell about-grid">
        <div className="portrait">
          <img
            src={photo}
            width="400"
            height="440"
            loading="lazy"
            alt="Dennis Muchai"
          />
          <span>
            Dennis Muchai
            <br />
            <small>Director, Cody Digital Ventures Ltd</small>
          </span>
        </div>
        <div>
          <p className="eyebrow">The person behind the work</p>
          <h2>
            Business understanding.
            <br />
            <span className="serif-accent">Hands-on delivery.</span>
          </h2>
          <p className="about-description">
            I run a business as well as build software. That keeps the work
            grounded in the details that matter: customers, payments, staff, and
            day-to-day operations.
          </p>
          <p>
            My experience in relationship management at Family Bank, running
            Denncathy, and training in software engineering at ALX informs how I
            approach each engagement. Through Cody Digital Ventures Ltd, you
            work directly with me from the first conversation to delivery.
          </p>
          <Link to="/about" className="text-link">
            More about my approach <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
