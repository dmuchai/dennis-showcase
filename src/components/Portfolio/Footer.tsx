export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <a href="/" className="footer-name">
              Dennis Muchai<span>↗</span>
            </a>
            <p>
              Practical software. Thoughtful automation.
              <br />
              Delivered through Cody Digital Ventures Ltd.
            </p>
          </div>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/dmmuchai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/dmuchai"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a href="mailto:dmmuchai@gmail.com">Email ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Dennis Muchai · Cody Digital Ventures
            Ltd
          </span>
          <a href="/privacy">Enquiry privacy</a>
          <a href="/#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
