import Link from "next/link";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <img
              className="brand-logo brand-logo-dark"
              src="/Logos/OW%20web%20desktop%20logos%20(200%20x%2040%20px)/OW%20White%20Logo%20desktop.png"
              alt="One Window"
            />
          </Link>
          <p>Expert guidance and technology for your study abroad journey.</p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/#destinations">Study destinations</Link>
          <Link href="/countries">Universities</Link>
          <Link href="/#consultation">Course guidance</Link>
          <Link href="/careers">Careers</Link>
        </div>
        <div>
          <strong>Connect</strong>
          <a href="https://onewindow.co/contact/">Contact</a>
          <a href="mailto:info@onewindow.co">Email us</a>
          <a href="https://onewindow.co/privacy-policy/">Privacy policy</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        © One Window. All rights reserved.
      </div>
    </footer>
  );
}
