import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, CalendarDays, MapPin, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
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

function Index() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.from("[data-hero-reveal]", { y: 44, opacity: 0, duration: 1.1, stagger: 0.11, ease: "power3.out" });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.from(item, { y: 48, opacity: 0, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 88%" } });
        });
        gsap.to("[data-parallax]", { yPercent: 12, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true } });
      }, root);
      cleanup = () => ctx.revert();
    });
    return () => cleanup();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={root} className="overflow-x-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-hero/80 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-10">
          <a href="#home" className="min-w-0" aria-label="Insurance Summit home">
            <img src={logo.url} alt="ET Now Insurance Summit & Awards, 12th Edition" className="h-11 w-auto max-w-[190px] object-contain" />
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {[["About Summit", "about"], ["Agenda", "agenda"], ["Partners", "partners"], ["Speakers", "speakers"], ["Glimpses", "glimpses"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link text-xs font-bold uppercase text-hero-foreground/75">{label}</a>
            ))}
            <Button asChild><a href="https://et-edge.com/conferences/insurance/partner-with-us/">Partner with us <ArrowRight size={14} /></a></Button>
          </div>
          <Button variant="outline" className="h-10 w-10 border-hero-foreground/20 p-0 text-hero-foreground lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </Button>
        </div>
        {menuOpen && <div className="border-t border-border/30 bg-hero px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {["About Summit", "Agenda", "Partners", "Speakers", "Glimpses"].map((label) => <a key={label} href={`#${label.toLowerCase().split(" ")[0]}`} onClick={closeMenu} className="text-sm font-bold uppercase text-hero-foreground">{label}</a>)}
          </div>
        </div>}
      </nav>

      <header id="home" className="relative min-h-[94svh] overflow-hidden bg-hero pt-20 text-hero-foreground">
        <img data-parallax src={hero.url} alt="Insurance Summit audience and stage" className="absolute inset-0 h-[112%] w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[calc(94svh-5rem)] max-w-[1440px] flex-col justify-end px-5 pb-9 lg:px-10 lg:pb-14">
          <div className="mb-7 h-px w-full bg-hero-foreground/20" data-hero-reveal />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="min-w-0">
              <p data-hero-reveal className="mb-5 text-xs font-bold uppercase text-accent">12th Edition · ET Now Insurance Summit & Awards</p>
              <h1 data-hero-reveal className="max-w-[12ch] text-5xl font-semibold leading-[0.95] uppercase text-balance sm:text-7xl lg:text-[7.5rem]">Prevent <span className="text-accent">|</span> Protect</h1>
              <p data-hero-reveal className="mt-5 text-xl font-medium text-hero-foreground/75 sm:text-2xl">The New Insurance Directive</p>
            </div>
            <div data-hero-reveal className="border-l border-accent pl-6">
              <div className="mb-4 flex items-center gap-3 text-base"><CalendarDays className="text-accent" size={19} />18th December 2025</div>
              <div className="mb-7 flex items-center gap-3 text-base"><MapPin className="text-accent" size={19} />Mumbai</div>
              <Button asChild><a href="https://et-edge.com/conferences/insurance/enquire-now/">Enquire now <ArrowRight size={15} /></a></Button>
            </div>
          </div>
          <a href="#about" className="mt-12 flex w-fit items-center gap-3 text-xs font-bold uppercase text-hero-foreground/65"><ArrowDown size={15} /> Discover the summit</a>
        </div>
      </header>

      <main>
        <section id="about" className="py-24 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
            <div data-reveal className="relative overflow-hidden">
              <img src={overview.url} alt="Insurance industry overview" className="aspect-[4/5] h-full w-full object-cover" />
              <div className="absolute bottom-0 right-0 bg-primary px-7 py-6 text-primary-foreground"><span className="block text-5xl font-semibold">12</span><span className="text-xs font-bold uppercase">Editions</span></div>
            </div>
            <div data-reveal className="flex flex-col justify-center">
              <p className="section-kicker">About the summit</p>
              <h2 className="section-title">A Prestigious Gathering for Innovators in Insurance</h2>
              <p className="mt-8 max-w-[66ch] text-base leading-8 text-muted-foreground">The Indian insurance sector stands at the threshold of a transformative decade. As the nation sets its sights on becoming a $10 trillion economy by 2047, insurance is rapidly evolving from being a reactive risk cover to becoming a proactive enabler of national resilience, financial empowerment, and inclusive growth. In this context, ET Edge is proud to present the 12th Edition of the ET Now Insurance Summit and Awards, a premier platform that brings together the brightest minds in insurance, technology, policy, and finance to shape the future of the industry.</p>
              <div className="mt-12 grid grid-cols-2 border-y border-border sm:grid-cols-4">
                {[["10", "Editions"], ["1470+", "Decision Makers"], ["294+", "Speakers"], ["1568+", "Delegates"]].map(([n, label]) => <div key={label} className="border-border px-3 py-7 sm:border-r"><strong className="block text-3xl text-primary">{n}</strong><span className="text-[11px] font-bold uppercase text-muted-foreground">{label}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div data-reveal className="grid gap-7 border-b border-border pb-12 lg:grid-cols-[0.7fr_1.3fr]">
              <p className="section-kicker">The conversation</p>
              <h2 className="section-title max-w-[18ch]">Key discussion points</h2>
            </div>
            <div className="divide-y divide-border">
              {topics.map((topic, index) => <article data-reveal key={topic} className="group grid gap-5 py-7 sm:grid-cols-[80px_1fr_auto] sm:items-center lg:py-9"><span className="text-sm font-bold text-accent">0{index + 1}</span><h3 className="max-w-[46ch] text-xl font-medium leading-snug sm:text-2xl">{topic}</h3><ArrowRight className="hidden text-primary transition-transform group-hover:translate-x-2 sm:block" /></article>)}
            </div>
          </div>
        </section>

        <section id="speakers" className="bg-hero py-24 text-hero-foreground lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div data-reveal className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div><p className="section-kicker">Leadership voices</p><h2 className="section-title">Speakers</h2></div>
              <p className="max-w-md text-sm leading-7 text-hero-foreground/60">The brightest minds in insurance, technology, policy, and finance.</p>
            </div>
            <div className="grid gap-px bg-hero-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
              {speakers.map((speaker) => <article data-reveal key={speaker.name} className="speaker group relative overflow-hidden bg-hero"><div className="aspect-[4/5] overflow-hidden"><img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover object-top grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /></div><div className="absolute inset-x-0 bottom-0 bg-speaker-overlay p-6 pt-20"><h3 className="text-xl font-semibold">{speaker.name}</h3><p className="mt-2 text-sm text-hero-foreground/70">{speaker.role}<br />{speaker.company}</p></div></article>)}
            </div>
            <div data-reveal className="mt-14 grid gap-8 border-t border-hero-foreground/15 pt-12 lg:grid-cols-[1fr_2fr] lg:items-center">
              <div className="relative mx-auto max-w-[260px] overflow-hidden bg-hero-foreground/5"><img src={chief.url} alt="Satyajit Tripathy" className="w-full object-cover" /></div>
              <div><p className="section-kicker">Chief Guest</p><h3 className="text-4xl font-semibold sm:text-5xl">Satyajit Tripathy</h3><p className="mt-4 text-lg text-hero-foreground/65">Member Distribuition<br />Insurance Regulatory and Development Authority of India</p></div>
            </div>
          </div>
        </section>

        <section id="agenda" className="py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div data-reveal className="mb-14"><p className="section-kicker">One defining day</p><h2 className="section-title">Agenda</h2></div>
            <div className="border-t border-foreground">
              {agenda.map(([time, title]) => <div data-reveal key={title} className="agenda-row grid gap-3 border-b border-border py-6 sm:grid-cols-[180px_1fr_auto] sm:items-center"><time className="text-sm font-bold text-primary">{time}</time><h3 className="max-w-[62ch] text-lg font-medium sm:text-xl">{title}</h3><span className="hidden h-2 w-2 bg-accent sm:block" /></div>)}
            </div>
          </div>
        </section>

        <section id="partners" className="border-y border-border bg-secondary py-20">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div data-reveal className="mb-12"><p className="section-kicker">Industry support</p><h2 className="section-title">Partners</h2></div>
            <div className="grid gap-px bg-border md:grid-cols-3">
              {[["Presenting Partner", axisMax.url, "Axis Max Life Insurance"], ["Co-powered by", hdfc.url, "HDFC Life"], ["Knowledge Partner", pwc.url, "PwC"]].map(([label, src, alt]) => <div key={label} className="flex min-h-52 flex-col items-center justify-center bg-background p-8"><p className="mb-8 text-[10px] font-bold uppercase text-muted-foreground">{label}</p><img src={src} alt={alt} className="h-16 max-w-[200px] object-contain" /></div>)}
            </div>
          </div>
        </section>

        <section id="glimpses" className="bg-hero py-24 text-hero-foreground lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div data-reveal className="mb-14"><p className="section-kicker">In the room</p><h2 className="section-title">Glimpses</h2></div>
            <div className="grid gap-3 md:grid-cols-12">
              <img data-reveal src={glimpse1.url} alt="Insurance Summit gathering" className="h-80 w-full object-cover md:col-span-7 md:h-[520px]" />
              <div className="grid gap-3 md:col-span-5"><img data-reveal src={glimpse2.url} alt="Insurance Summit stage" className="h-[254px] w-full object-cover" /><img data-reveal src={glimpse3.url} alt="Insurance Summit delegates" className="h-[254px] w-full object-cover" /></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[1.4fr_0.6fr] lg:px-10">
          <div><p className="mb-4 text-xs font-bold uppercase text-accent">The New Insurance Directive</p><h2 className="max-w-[12ch] text-4xl font-semibold uppercase sm:text-6xl">Predict <span className="text-accent">|</span> Prevent <span className="text-accent">|</span> Protect</h2></div>
          <div className="lg:text-right"><p className="mb-5 text-xs font-bold uppercase text-accent">Contact us</p><a className="block text-lg" href="mailto:et.edge@timesgroup.com">et.edge@timesgroup.com</a><p className="mt-2 text-sm text-primary-foreground/65">+91 9137786272 / +91 9819321156<br />+91 9773959354</p></div>
          <div className="border-t border-primary-foreground/15 pt-7 text-xs text-primary-foreground/50 lg:col-span-2">© Copyright 2025. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}