import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { additionalServiceLinks } from "../navigation/config";

const handbookLinks = [
  ["Masters Hand Book", "https://onewindow.co/masters-handbook/"],
  ["Bachelors Hand Book", "https://onewindow.co/bachelors-handbook/"],
  ["Visa Cheat Sheet", "https://onewindow.co/visa-cheat-sheet/"],
] as const;

const quickLinks = [
  ["Blog", "/blog"], ["Courses", "https://onewindow.co/major-and-degrees/"], ["Countries", "/countries"],
  ["For Schools", "https://onewindow.co/for-schools/"], ["Test Prep", "https://onewindow.co/test-prep/"], ["IELTS", "https://onewindow.co/ielts/"],
  ["Scholarship", "https://onewindow.co/scholarship/"], ["Student Recruitment", "https://onewindow.co/student-recruitment/"], ["Event", "https://onewindow.co/events/"],
  ["Resources", "https://onewindow.co/resources/"], ["Alumni Connect", "https://onewindow.co/alumni-connect/"], ["SOP Review", "https://onewindow.co/review-your-statement-of-purpose/"],
] as const;

const studyLinks = [
  ["Study in USA", "https://onewindow.co/countries/study-abroad-usa/"],
  ["Study in Canada", "https://onewindow.co/countries/study-abroad-canada/"],
  ["Study in UK", "https://onewindow.co/study-abroad-united-kingdom/"],
  ["Study in Australia", "https://onewindow.co/countries/study-abroad-australia/"],
  ["Study in New Zealand", "https://onewindow.co/countries/study-abroad-new-zealand/"],
  ["Study in France", "https://onewindow.co/countries/study-abroad-france/"],
  ["Study in Netherlands", "https://onewindow.co/study-abroad-netherland/"],
  ["Study in Italy", "https://onewindow.co/study-abroad-italy/"],
  ["Study in Singapore", "https://onewindow.co/"],
  ["Study in Dubai", "https://onewindow.co/"],
  ["Study in Europe", "https://onewindow.co/"],
] as const;

const supportLinks = [
  ["About Us", "https://onewindow.co/about-us/"], ["Contact Us", "https://onewindow.co/contact/"], ["Services", "https://onewindow.co/services/"],
  ["Careers", "https://onewindow.co/career/"], ["Financial Award Policy", "https://onewindow.co/financial-award-policy/"],
  ["Refund Policy", "https://onewindow.co/refund-policy/"], ["Privacy Policy", "https://onewindow.co/privacy-policy/"],
  ["Terms & Conditions", "https://onewindow.co/terms-and-conditions/"],
] as const;

function FooterLinks({ links }: { links: readonly (readonly [string, string])[] }) {
  return <>{links.map(([label, href]) => href.startsWith("/") ? <Link href={href} key={href}>{label}</Link> : <a href={href} key={href}>{label}</a>)}</>;
}

function SocialIcon({ name }: { name: "youtube" | "instagram" | "linkedin" | "x" | "facebook" }) {
  if (name === "youtube") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.58 7.19a2.8 2.8 0 0 0-1.97-1.98C17.88 4.75 12 4.75 12 4.75s-5.88 0-7.61.46a2.8 2.8 0 0 0-1.97 1.98A29 29 0 0 0 1.96 12a29 29 0 0 0 .46 4.81 2.8 2.8 0 0 0 1.97 1.98c1.73.46 7.61.46 7.61.46s5.88 0 7.61-.46a2.8 2.8 0 0 0 1.97-1.98A29 29 0 0 0 22.04 12a29 29 0 0 0-.46-4.81ZM9.99 15.75v-7.5L16.49 12l-6.5 3.75Z" /></svg>;
  if (name === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.1 8.2H1.8V22h3.3V8.2ZM3.45 2A2 2 0 1 0 3.4 6a2 2 0 0 0 .05-4ZM8.2 8.2V22h3.3v-6.84c0-1.8.34-3.54 2.57-3.54 2.2 0 2.23 2.05 2.23 3.66V22h3.3v-7.44c0-3.65-.78-6.46-5-6.46-2.03 0-3.39 1.12-3.95 2.19h-.05V8.2H8.2Z" /></svg>;
  if (name === "facebook") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.1 22v-8h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.55-1.5h1.67V4.63A22 22 0 0 0 14.9 4c-2.4 0-4.05 1.47-4.05 4.17v2.33H8.14V13h2.71v9h3.25Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" d="m4 4 16 16M20 4 4 20" /></svg>;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-contact">
          <Link className="brand footer-brand" href="/">
            <img
              className="brand-logo brand-logo-dark"
              src="/Logos/OW%20web%20desktop%20logos%20(200%20x%2040%20px)/OW%20White%20Logo%20desktop.png"
              alt="One Window"
            />
          </Link>
          <div className="footer-socials" aria-label="One Window social links">
            <a href="https://www.youtube.com/@onewindowedu" aria-label="YouTube"><SocialIcon name="youtube" /></a>
            <a href="https://www.instagram.com/onewindowedu/" aria-label="Instagram"><SocialIcon name="instagram" /></a>
            <a href="https://www.linkedin.com/company/one-window-overseas-education-pvt-ltd./posts/?feedView=all" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a>
            <a href="https://x.com/onewindowhyd" aria-label="X"><SocialIcon name="x" /></a>
            <a href="https://www.facebook.com/onewindow" aria-label="Facebook"><SocialIcon name="facebook" /></a>
          </div>
          <a href="tel:+919154898944"><Phone size={16} aria-hidden="true" />091548 98944</a>
          <a href="mailto:info@onewindow.co"><Mail size={16} aria-hidden="true" />info@onewindow.co</a>
        </div>
        <div>
          <strong>Hand Book</strong>
          <FooterLinks links={handbookLinks} />
        </div>
        <div>
          <strong>Quick Links</strong>
          <FooterLinks links={quickLinks} />
        </div>
        <div>
          <strong>Study Abroad</strong>
          <FooterLinks links={studyLinks} />
        </div>
        <div>
          <strong>Support</strong>
          <FooterLinks links={supportLinks} />
          <strong className="footer-additional-title">Additional services</strong>
          {additionalServiceLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </div>
      </div>
      <div className="shell footer-bottom">
        © One Window. All rights reserved.
      </div>
    </footer>
  );
}
