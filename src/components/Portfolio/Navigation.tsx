import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["Work", "/#work"],
  ["Services", "/#services"],
  ["Approach", "/#approach"],
  ["About", "/about"],
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="shell navigation" aria-label="Main navigation">
          <a href="/" className="wordmark" aria-label="Dennis Muchai home">
            <span className="monogram">dm.</span>
            <span>
              Dennis Muchai
              <span className="wordmark-sub">Software & automation</span>
            </span>
          </a>
          <div className="desktop-links">
            {links.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
          <a className="button button-small desktop-cta" href="/#contact">
            Discuss your project <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-links shell"
            aria-label="Mobile navigation"
          >
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)}>
              Discuss your project ↗
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
