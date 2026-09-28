import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Menu, Play, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "@/assets/insurance-summit-logo.png.asset.json";
import overview from "@/assets/overview.png.asset.json";
import chief from "@/assets/chief.png.asset.json";
import speakerAlok from "@/assets/speaker-alok.png.asset.json";
import speakerAshish from "@/assets/speaker-ashish.jpg.asset.json";
import speakerKamlesh from "@/assets/speaker-kamlesh.png.asset.json";
import speakerSumit from "@/assets/speaker-sumit.png.asset.json";
import glimpse1 from "@/assets/glimpse-1.jpg.asset.json";
import glimpse2 from "@/assets/glimpse-2.jpg.asset.json";
import glimpse3 from "@/assets/glimpse-3.jpg.asset.json";
import axisMax from "@/assets/axis-max.png.asset.json";
import hdfc from "@/assets/hdfc.png.asset.json";
import pwc from "@/assets/pwc.png.asset.json";
import skylineHero from "@/assets/summit-skyline-hero.jpg";
import awardsImage from "@/assets/insurance-awards.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "12th Edition ET Now Insurance Summit & Awards" },
      { name: "description", content: "Prevent | Protect — The New Insurance Directive. 18th December 2025, Mumbai." },
      { property: "og:title", content: "12th Edition ET Now Insurance Summit & Awards" },
      { property: "og:description", content: "Prevent | Protect — The New Insurance Directive. 18th December 2025, Mumbai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const topics = [
  "The transformation of insurance from risk coverage to risk prevention",
  "CEO and C-Suite perspectives on innovation, resilience, and future-readiness",
  "The role of technology, AI, and data in predicting and mitigating disruptive risks",
  "The rise of wellness-led, preventive health insurance models",
  "The evolution of distribution through digital ecosystems and bancassurance 2.0",
  "India’s ambitious journey toward “Insurance for All by 2047”",
  "Celebrating industry excellence through the ET Now Insurance Awards, in collaboration with PwC India",
];

const speakers = [
  { name: "ALOK RUNGTA", role: "MD & CEO", company: "Generali Central Life Insurance", image: speakerAlok.url },
  { name: "Ashish Vohra", role: "CEO & Executive Director", company: "Reliance Nippon Life Insurance", image: speakerAshish.url },
  { name: "Kamlesh Rao", role: "Managing Director and CEO", company: "Aditya Birla Sun Life Insurance", image: speakerKamlesh.url },
  { name: "Mr. Sumit Madan", role: "Managing Director & Chief Executive Officer", company: "Axis Max Life Insurance Ltd", image: speakerSumit.url },
];

const agenda = [
  ["09:00 — 10:00", "Registration"],
  ["10:00 — 10:15", "Keynote Address: Peril to Protection: Charting the Insurance Path"],
  ["10:15 — 10:30", "Inaugural Chief Guest: Insuring the Intelligent Future: Digital, Decisive, and Human"],
  ["10:30 — 11:20", "C-Suite Panel: Reimagining Life Insurance: Driving Growth and Resilience from the CEO’s Desk"],
  ["11:35 — 11:50", "Fireside Chat - Technology, Start-Up Thinking & Collaborative Innovation"],
  ["11:50 — 12:35", "Leadership Panel: Transforming Non-Life Insurance: Balancing Risk Management & Business Growth"],
  ["12:35 — 01:05", "Power Panel: The Tech Shield: Predicting and Preventing Risks in a Disrupted World"],
  ["03:50 — 04:45", "ET Now Insurance Awards"],
];

const navItems = [["About", "about"], ["Agenda", "agenda"], ["Speakers", "speakers"], ["Awards", "awards"], ["Gallery", "glimpses"], ["Partners", "partners"]];

function Index() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.default;
      gsap.registerPlugin(triggerModule.ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.from("[data-hero-reveal]", { y: 34, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.from(item, { y: 36, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 90%" } });
        });
        gsap.to("[data-parallax]", { yPercent: 10, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true } });
        gsap.utils.toArray<HTMLElement>("[data-float]").forEach((item, index) => {
          gsap.to(item, { yPercent: index % 2 ? -12 : 12, rotate: index % 2 ? 2 : -2, ease: "none", scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 1 } });
        });
      }, root);
      cleanup = () => ctx.revert();
    });
    return () => cleanup();
  }, []);

  return (
    <div ref={root} className="site-shell overflow-x-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 bg-hero/80 backdrop-blur-xl">
        <div className="mx-auto grid h-[72px] max-w-[1380px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 lg:px-10">
          <a href="#home" aria-label="Insurance Summit home"><img src={logo.url} alt="Insurance Summit & Awards" className="h-11 w-auto max-w-[190px] object-contain" /></a>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link text-[11px] font-semibold text-hero-foreground/80">{label}</a>)}
            <Button asChild className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"><a href="https://et-edge.com/conferences/insurance/enquire-now/">Register Now <ArrowRight size={14} /></a></Button>
          </div>
          <Button variant="outline" size="icon" className="border-hero-foreground/30 text-hero-foreground lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">{menuOpen ? <X size={19} /> : <Menu size={19} />}</Button>
        </div>
        {menuOpen && <div className="border-t border-hero-foreground/10 bg-hero px-5 py-6 lg:hidden"><div className="flex flex-col gap-5">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-hero-foreground">{label}</a>)}</div></div>}
      </nav>

      <header id="home" className="hero-cut relative min-h-[720px] overflow-hidden bg-hero pt-[72px] text-hero-foreground">
        <img data-parallax src={skylineHero} width={1920} height={1088} alt="Business leader overlooking Mumbai's financial skyline" className="absolute inset-0 h-[112%] w-full object-cover object-center" />
        <div className="hero-wash absolute inset-0" />
        <div className="hero-swoop" data-float />
        <div className="relative mx-auto flex min-h-[648px] max-w-[1380px] items-center px-5 pb-16 lg:px-10">
          <div className="max-w-xl pt-8">
            <p data-hero-reveal className="eyebrow text-hero-foreground/80">The Insurance Summit & Awards</p>
            <h1 data-hero-reveal className="mt-5 text-[3.6rem] leading-[0.88] sm:text-[5.4rem] lg:text-[6.5rem]">Prevent <em>|</em><br /><span>Protect</span></h1>
            <p data-hero-reveal className="mt-6 max-w-md text-base leading-7 text-hero-foreground/80">The New Insurance Directive</p>
            <div data-hero-reveal className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <span className="flex items-center gap-3"><CalendarDays className="text-accent" size={19} />18th December 2025</span>
              <span className="flex items-center gap-3 border-l border-hero-foreground/30 pl-8"><MapPin className="text-accent" size={19} />Mumbai</span>
            </div>
            <a data-hero-reveal href="#glimpses" className="mt-9 inline-flex items-center gap-3 text-xs font-semibold"><span className="grid h-10 w-10 place-items-center rounded-full border border-accent text-accent"><Play size={14} fill="currentColor" /></span>Watch Highlights</a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="light-band about-band relative py-24 lg:py-28">
          <div className="line-orbit line-orbit-left" />
          <div className="mx-auto grid max-w-[1380px] gap-12 px-5 lg:grid-cols-[1.05fr_0.9fr_0.45fr] lg:items-center lg:px-10">
            <div data-reveal><p className="eyebrow">About the summit</p><h2 className="editorial-title mt-4">A prestigious gathering for <span>innovators in insurance</span></h2><p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground">The Indian insurance sector stands at the threshold of a transformative decade. As the nation sets its sights on becoming a $10 trillion economy by 2047, insurance is rapidly evolving from being a reactive risk cover to becoming a proactive enabler of national resilience, financial empowerment, and inclusive growth. In this context, ET Edge is proud to present the 12th Edition of the ET Now Insurance Summit and Awards, a premier platform that brings together the brightest minds in insurance, technology, policy, and finance to shape the future of the industry.</p><Button asChild variant="outline" className="mt-8 rounded-full"><a href="#agenda">Learn More <ArrowRight size={14} /></a></Button></div>
            <div data-reveal className="about-picture relative"><img src={overview.url} alt="Insurance industry overview" className="h-full w-full object-cover" /><span className="about-orange" /></div>
            <div data-reveal className="stats-stack">
              {[["10", "Editions"], ["1470+", "Decision Makers"], ["294+", "Speakers"], ["1568+", "Delegates"]].map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </section>

        <section className="dark-band topics-band relative bg-hero py-24 text-hero-foreground">
          <div className="energy-ribbon energy-left" data-float />
          <div className="energy-ribbon energy-right" data-float />
          <div className="mx-auto grid max-w-[1380px] gap-10 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-10">
            <div data-reveal><p className="eyebrow">Key discussion points</p><h2 className="editorial-title mt-4 text-hero-foreground">What We’ll<br /><span>Explore</span></h2><a href="#agenda" className="mt-8 grid h-11 w-11 place-items-center rounded-full border border-accent text-accent"><ArrowRight size={17} /></a></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic, index) => <article data-reveal key={topic} className={`topic-card ${index === 6 ? "lg:col-span-3" : ""}`}><span>0{index + 1}</span><h3>{topic}</h3></article>)}
            </div>
          </div>
        </section>

        <section id="speakers" className="light-band speaker-band relative py-24">
          <div className="mx-auto grid max-w-[1380px] gap-10 px-5 lg:grid-cols-[0.55fr_1.45fr] lg:items-center lg:px-10">
            <div data-reveal><p className="eyebrow">The speakers</p><h2 className="editorial-title mt-4">Visionaries. Leaders.<br /><span>Change Makers.</span></h2><Button asChild variant="outline" className="mt-8 rounded-full"><a href="#speakers">View All Speakers <ArrowRight size={14} /></a></Button></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {speakers.map((speaker) => <article data-reveal key={speaker.name} className="speaker-card group"><div className="aspect-[4/4.4] overflow-hidden"><img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" /></div><div className="p-4"><h3 className="text-base font-semibold">{speaker.name}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{speaker.role}<br />{speaker.company}</p></div></article>)}
            </div>
          </div>
          <div data-reveal className="chief-strip mx-auto mt-14 grid max-w-[900px] grid-cols-[100px_1fr] items-center gap-6 px-5"><img src={chief.url} alt="Satyajit Tripathy" className="h-24 w-24 rounded-full bg-secondary object-cover" /><div><p className="eyebrow">Chief Guest</p><h3 className="mt-2 text-3xl">Satyajit Tripathy</h3><p className="mt-1 text-sm text-muted-foreground">Member Distribuition · Insurance Regulatory and Development Authority of India</p></div></div>
        </section>

        <section id="awards" className="award-band relative min-h-[470px] overflow-hidden bg-hero text-hero-foreground">
          <img src={awardsImage} loading="lazy" width={1920} height={960} alt="ET Now Insurance Awards ceremony" className="absolute inset-0 h-full w-full object-cover" />
          <div className="award-wash absolute inset-0" />
          <div className="relative mx-auto flex min-h-[470px] max-w-[1380px] items-center px-5 py-20 lg:px-10"><div data-reveal className="max-w-md"><p className="eyebrow">ET Now Insurance Awards</p><h2 className="editorial-title mt-4 text-hero-foreground">Recognising<br />Excellence.</h2><p className="mt-5 text-sm leading-7 text-hero-foreground/75">Celebrating industry excellence through the ET Now Insurance Awards, in collaboration with PwC India.</p><Button asChild variant="outline" className="mt-7 rounded-full border-accent text-hero-foreground"><a href="#agenda">Explore Awards <ArrowRight size={14} /></a></Button></div></div>
        </section>

        <section id="agenda" className="light-band agenda-band relative py-24">
          <div className="mx-auto grid max-w-[1380px] gap-12 px-5 lg:grid-cols-[0.62fr_1.38fr] lg:px-10">
            <div data-reveal><p className="eyebrow">Agenda</p><h2 className="editorial-title mt-4">One Day.<br /><span>Endless Possibilities.</span></h2><Button asChild variant="outline" className="mt-8 rounded-full"><a href="https://et-edge.com/conferences/insurance/agenda/">View Full Agenda <ArrowRight size={14} /></a></Button></div>
            <div className="grid gap-10 md:grid-cols-2">
              {[agenda.slice(0, 4), agenda.slice(4)].map((column, columnIndex) => <div key={columnIndex} data-reveal><div className="agenda-day"><strong>{columnIndex === 0 ? "Morning" : "Afternoon"}</strong><span>18 December 2025</span></div><div className="agenda-column">{column.map(([time, title]) => <div key={title} className="agenda-item"><time>{time}</time><p>{title}</p></div>)}</div></div>)}
            </div>
          </div>
        </section>

        <section id="glimpses" className="dark-band gallery-band relative bg-hero py-20 text-hero-foreground">
          <div className="mx-auto grid max-w-[1380px] gap-9 px-5 lg:grid-cols-[0.52fr_1.48fr] lg:items-center lg:px-10">
            <div data-reveal><p className="eyebrow">In the room</p><h2 className="editorial-title mt-4 text-hero-foreground">Relive the<br /><span>Moments</span></h2><p className="mt-5 max-w-sm text-sm leading-7 text-hero-foreground/65">A glimpse into the people, conversations, and ideas shaping insurance’s future.</p></div>
            <div className="photo-scatter"><img data-reveal src={glimpse1.url} alt="Insurance Summit gathering" /><img data-reveal src={glimpse2.url} alt="Insurance Summit stage" /><img data-reveal src={glimpse3.url} alt="Insurance Summit delegates" /><span className="gallery-play"><Play size={22} fill="currentColor" /></span></div>
          </div>
        </section>

        <section id="partners" className="partners-strip py-12"><div className="mx-auto grid max-w-[1380px] gap-8 px-5 lg:grid-cols-[0.45fr_1.55fr] lg:items-center lg:px-10"><div><h2 className="text-xl font-semibold">Our Partners</h2><p className="mt-2 text-xs text-muted-foreground">Industry leaders supporting the Summit.</p></div><div className="grid grid-cols-3 items-center gap-8">{[[axisMax.url, "Axis Max Life Insurance"], [hdfc.url, "HDFC Life"], [pwc.url, "PwC"]].map(([src, alt]) => <img key={alt} src={src} alt={alt} className="mx-auto h-12 max-w-[160px] object-contain" />)}</div></div></section>

        <section className="cta-band bg-primary py-10 text-primary-foreground"><div className="mx-auto grid max-w-[1380px] gap-8 px-5 sm:grid-cols-[auto_1fr_auto] sm:items-center lg:px-10"><img src={logo.url} alt="Insurance Summit & Awards" className="h-12 w-auto bg-background p-1" /><div><h2 className="text-2xl">Be a part of the change.</h2><p className="mt-1 text-sm text-primary-foreground/70">Join industry leaders, innovators and changemakers.</p></div><Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"><a href="https://et-edge.com/conferences/insurance/enquire-now/">Register Now <ArrowRight size={14} /></a></Button></div></section>
      </main>

      <footer className="bg-hero py-10 text-hero-foreground"><div className="mx-auto grid max-w-[1380px] gap-7 px-5 lg:grid-cols-[1fr_auto] lg:px-10"><div className="flex flex-wrap gap-5 text-xs text-hero-foreground/65">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><a className="text-sm" href="mailto:et.edge@timesgroup.com">et.edge@timesgroup.com</a><div className="border-t border-hero-foreground/10 pt-6 text-xs text-hero-foreground/45 lg:col-span-2">© Copyright 2025. All Rights Reserved. · +91 9137786272 / +91 9819321156 / +91 9773959354</div></div></footer>
    </div>
  );
}