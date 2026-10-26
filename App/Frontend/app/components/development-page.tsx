import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Footer } from "./footer";
import { Navigation } from "./navigation";

type Props = { eyebrow: string; title: string; description: string; accent: string };

export function DevelopmentPage({ eyebrow, title, description, accent }: Props) {
  return <main className="development-page"><Navigation /><section className={`development-hero ${accent}`}><div className="development-orb development-orb-one" /><div className="development-orb development-orb-two" /><div className="shell development-shell"><div className="development-icon" aria-hidden="true"><Sparkles size={22} /></div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="development-description">{description}</p><div className="development-actions"><Link className="button button-primary" href="/">Back to homepage <ArrowRight size={17} /></Link><Link className="development-text-link" href="/#consultation">Talk to a counsellor <ArrowRight size={16} /></Link></div><div className="development-status"><span className="development-status-dot" /> Building the next useful thing for your journey</div></div></section><Footer /></main>;
}
