import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Clock, Facebook, Instagram, MapPin, Menu as MenuIcon, MessageCircle, Phone, Mail, Star, X, ArrowRight, Quote } from "lucide-react";
import { categories, contact, hours, menu, offers, testimonials, whatsappLink, type Category } from "@/data/site";
import hero from "@/assets/hero.jpg";
import coffee from "@/assets/coffee.jpg";
import food from "@/assets/food.jpg";
import drinks from "@/assets/drinks.jpg";
import burger from "@/assets/burger.jpg";
import dessert from "@/assets/dessert.jpg";
import galleryPlatter from "@/assets/gallery-platter.jpg";
import galleryMural from "@/assets/gallery-mural.webp";
import galleryFridge from "@/assets/gallery-fridge.jpg";
import logo from "@/assets/logo.png";

const nav = [
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "offers", label: "Offers" },
  { id: "reviews", label: "Reviews" },
  { id: "visit", label: "Visit" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

function SectionTitle({ eyebrow, title, light, children }: { eyebrow: string; title: ReactNode; light?: boolean; children?: ReactNode }) {
  return (
    <div className="reveal mx-auto mb-14 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-medium leading-tight md:text-6xl ${light ? "text-cream" : "text-primary"}`}>{title}</h2>
      {children && <p className={`mt-5 text-base leading-relaxed ${light ? "text-cream/70" : "text-muted-foreground"}`}>{children}</p>}
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-espresso/95 py-3 shadow-soft backdrop-blur" : "py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Harmony Cafe home">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-cream p-1">
            <img src={logo} alt="Harmony Cafe logo" className="h-full w-full object-contain" width={44} height={44} />
          </span>
          <span className="font-display text-2xl tracking-wide text-cream">Harmony <em className="text-gold">Cafe</em></span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm tracking-wide text-cream/80 transition hover:text-gold">{n.label}</a>
          ))}
          <a href="#reserve" className="rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-espresso transition hover:scale-105">Reserve a Table</a>
        </nav>
        <button className="text-cream lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>
      <div className={`grid overflow-hidden transition-all duration-500 lg:hidden ${open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-4">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="border-b border-cream/10 py-3 font-display text-2xl text-cream">{n.label}</a>
          ))}
          <a href="#reserve" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-gold-gradient py-3 text-center font-semibold text-espresso">Reserve a Table</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso">
      <img src={hero} alt="Latte art cappuccino on a marble table inside Harmony Cafe" className="animate-slow-zoom absolute inset-0 h-full w-full object-cover" width={1920} height={1088} fetchPriority="high" />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-8 md:pb-28">
        <p className="eyebrow reveal">Adama · Since day one</p>
        <h1 className="reveal mt-6 max-w-4xl text-5xl font-light leading-[0.95] text-cream sm:text-7xl md:text-8xl">
          Where every cup <br className="hidden sm:block" />
          finds its <em className="text-gold-gradient font-medium">harmony.</em>
        </h1>
        <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-cream/75">
          Slow-roasted Ethiopian coffee, hearty breakfasts, wood-fired pizzas and vibrant mojitos — served in a warm, welcoming room.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-4">
          <a href="#menu" className="group inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 font-semibold text-espresso shadow-soft transition hover:scale-105">
            Explore Our Menu <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-8 py-4 font-medium text-cream backdrop-blur transition hover:border-gold hover:text-gold">
            <MessageCircle className="h-4 w-4" /> Book on WhatsApp
          </a>
        </div>
        <div className="reveal mt-16 flex flex-wrap gap-10 border-t border-cream/15 pt-8 text-cream">
          {[["4.8★", "Google rating"], ["70+", "Dishes & drinks"], ["7", "Days a week"]].map(([a, b]) => (
            <div key={b}><p className="font-display text-4xl text-gold">{a}</p><p className="mt-1 text-xs uppercase tracking-[0.25em] text-cream/60">{b}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Macchiato", "Special Fetira", "Harmony Pizza", "Mango Mojito", "Peanut Macchiato", "Harmony Burger", "Avocado Juice", "Buna Ceremony"];
  return (
    <div className="overflow-hidden border-y border-gold/30 bg-primary py-5">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl italic text-cream/90">
        {[...words, ...words].map((w, i) => (<span key={i} className="flex items-center gap-12">{w}<span className="text-gold">✦</span></span>))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-28 md:px-8 lg:grid-cols-2">
      <div className="reveal relative">
        <img src={coffee} alt="Traditional Ethiopian coffee ceremony" loading="lazy" width={1024} height={1024} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
        <img src={dessert} alt="Fruit salad, chocolate cake and macchiato" loading="lazy" width={1024} height={1024} className="absolute -bottom-10 -right-4 hidden w-1/2 rounded-[1.5rem] border-8 border-background object-cover shadow-soft sm:block" />
        <div className="absolute -left-4 top-10 rounded-2xl bg-espresso px-6 py-5 text-cream shadow-soft">
          <p className="font-display text-4xl text-gold">100%</p>
          <p className="text-xs uppercase tracking-widest text-cream/70">Ethiopian beans</p>
        </div>
      </div>
      <div className="reveal">
        <p className="eyebrow">Our story</p>
        <h2 className="mt-4 text-4xl font-medium leading-tight text-primary md:text-6xl">A gathering place, <em className="text-accent">crafted with care.</em></h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Harmony Cafe was born from a simple idea — that good coffee brings people together. Our symbol, two hands joined inside the H, says it all: friends meeting, families sharing, neighbours becoming regulars.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          From the first macchiato at sunrise to late-evening mojitos, everything is made fresh in our kitchen with honest ingredients and a generous Ethiopian spirit.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[["Fresh", "Baked daily"], ["Local", "Farm produce"], ["Warm", "Family service"]].map(([a, b]) => (
            <div key={a} className="rounded-2xl border bg-card p-5 text-center">
              <p className="font-display text-2xl text-primary">{a}</p><p className="mt-1 text-xs text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const [active, setActive] = useState<Category | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const items = useMemo(() => menu.filter((m) => active === "all" || m.category === active), [active]);
  const visible = active === "all" && !showAll ? items.filter((m) => m.signature) : items;
  return (
    <section id="menu" className="bg-espresso py-28 text-cream">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle eyebrow="The menu" title={<>Taste the <em className="text-gold-gradient">harmony</em></>} light>
          Signature favourites from our kitchen and bar. Prices in Ethiopian Birr.
        </SectionTitle>
        <div className="reveal -mx-5 mb-12 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:justify-center md:px-0">
          {categories.map((c) => (
            <button key={c.id} onClick={() => { setActive(c.id); setShowAll(false); }}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition ${active === c.id ? "border-transparent bg-gold-gradient font-semibold text-espresso" : "border-cream/20 text-cream/80 hover:border-gold hover:text-gold"}`}>
              {c.label}
            </button>
          ))}
        </div>
        <div key={active + String(showAll)} className="grid gap-x-14 gap-y-2 md:grid-cols-2">
          {visible.map((m, i) => (
            <div key={m.name} className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both group border-b border-cream/10 py-5" style={{ animationDelay: `${i * 30}ms`, animationDuration: "500ms" }}>
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-2xl text-cream transition group-hover:text-gold">{m.name}</h3>
                {m.signature && <span className="rounded-full border border-gold/50 px-2 py-0.5 text-[10px] uppercase tracking-widest text-gold">Signature</span>}
                <span className="flex-1 translate-y-[-4px] border-b border-dotted border-cream/20" />
                <span className="font-display text-2xl text-gold">{m.price}</span>
              </div>
              {m.note && <p className="mt-1 text-sm text-cream/55">{m.note}</p>}
            </div>
          ))}
        </div>
        {active === "all" && (
          <div className="mt-12 text-center">
            <button onClick={() => setShowAll(!showAll)} className="rounded-full border border-gold/60 px-8 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-espresso">
              {showAll ? "Show signatures only" : `View full menu (${menu.length} items)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: galleryPlatter, alt: "Fresh Harmony platter with dips", cls: "col-span-2" },
    { src: galleryMural, alt: "Our hand-painted Harmony wall", cls: "" },
    { src: galleryFridge, alt: "Inside the Harmony kitchen", cls: "" },
  ];
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-28 md:px-8">
      <SectionTitle eyebrow="Gallery" title={<>Moments at <em className="text-accent">Harmony</em></>} />
      <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px]">
        {imgs.map((g, i) => (
          <figure key={i} className={`reveal group relative overflow-hidden rounded-3xl ${g.cls}`}>
            <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-[1.2s] group-hover:scale-110" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-espresso/90 to-transparent p-5 font-display text-xl text-cream transition duration-500 group-hover:translate-y-0">{g.alt}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href={contact.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"><Instagram className="h-4 w-4" /> Follow @harmony_cafe_adama</a>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section id="offers" className="relative overflow-hidden bg-secondary py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle eyebrow="Special offers" title={<>Little <em className="text-accent">indulgences</em></>}>Treat yourself — our current promotions.</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((o, i) => (
            <article key={o.title} className={`reveal group relative overflow-hidden rounded-[2rem] p-9 shadow-soft transition duration-500 hover:-translate-y-2 ${i === 1 ? "bg-espresso text-cream" : "bg-card"}`}>
              <p className="eyebrow">{o.tag}</p>
              <h3 className={`mt-5 text-4xl ${i === 1 ? "text-cream" : "text-primary"}`}>{o.title}</h3>
              <p className={`mt-4 leading-relaxed ${i === 1 ? "text-cream/70" : "text-muted-foreground"}`}>{o.text}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="font-display text-3xl text-gold">{o.price}</span>
                <a href={whatsappLink(`Hi! I'd like the "${o.title}" offer.`)} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-espresso transition group-hover:rotate-[-45deg]" aria-label={`Claim ${o.title}`}><ArrowRight className="h-5 w-5" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-28 md:px-8">
      <SectionTitle eyebrow="Google reviews" title={<>Loved by our <em className="text-accent">guests</em></>}>
        <span className="inline-flex items-center gap-2"><span className="flex text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span> 4.8 average from Google reviews</span>
      </SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="reveal rounded-[1.75rem] border bg-card p-8 transition duration-500 hover:shadow-soft">
            <Quote className="h-8 w-8 text-gold" />
            <blockquote className="mt-4 font-display text-xl leading-snug text-foreground">“{t.text}”</blockquote>
            <figcaption className="mt-6 flex items-center justify-between">
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">{t.name[0]}</span>
                <span className="text-sm font-semibold">{t.name}</span>
              </span>
              <span className="flex text-gold">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-espresso py-28 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-5">
        <div className="reveal lg:col-span-2">
          <p className="eyebrow">Visit us</p>
          <h2 className="mt-4 text-4xl font-medium md:text-6xl">Find your <em className="text-gold-gradient">seat.</em></h2>
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" /><a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold">{contact.address}</a></li>
            <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-gold" /><a href={`tel:+${contact.whatsapp}`} className="hover:text-gold">{contact.phone}</a></li>
            <li className="flex gap-4"><Mail className="mt-1 h-5 w-5 shrink-0 text-gold" /><a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a></li>
            <li className="flex gap-4"><Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div className="w-full space-y-2">{hours.map((h) => (<div key={h.day} className="flex justify-between gap-4 border-b border-cream/10 pb-2 text-sm"><span className="text-cream/70">{h.day}</span><span>{h.time}</span></div>))}</div>
            </li>
          </ul>
          <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-3 text-sm text-gold transition hover:bg-gold hover:text-espresso">Get directions <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="reveal overflow-hidden rounded-[2rem] border border-cream/10 lg:col-span-3">
          <iframe title="Harmony Cafe on Google Maps" src={contact.mapsEmbed} className="h-[420px] w-full grayscale-[40%] lg:h-full lg:min-h-[520px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}

function Reserve() {
  const [f, setF] = useState({ name: "", phone: "", date: "", time: "", guests: "2", note: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello Harmony Cafe! I'd like to reserve a table.\nName: ${f.name}\nPhone: ${f.phone}\nDate: ${f.date}\nTime: ${f.time}\nGuests: ${f.guests}${f.note ? `\nNote: ${f.note}` : ""}`;
    window.open(whatsappLink(msg), "_blank");
  };
  const field = "w-full rounded-xl border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30";
  return (
    <section id="reserve" className="relative overflow-hidden py-28">
      <img src={food} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div className="reveal">
          <p className="eyebrow">Reservations</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-primary md:text-6xl">Save a table, <em className="text-accent">we'll do the rest.</em></h2>
          <p className="mt-6 text-lg text-muted-foreground">Send your request and we'll confirm on WhatsApp within minutes. Birthdays, meetings and family gatherings welcome.</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground transition hover:scale-105"><MessageCircle className="h-5 w-5" /> Chat on WhatsApp</a>
        </div>
        <form onSubmit={submit} className="reveal grid gap-4 rounded-[2rem] border bg-card/95 p-7 shadow-soft backdrop-blur md:grid-cols-2 md:p-10">
          <input required placeholder="Your name" className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input required type="tel" placeholder="Phone number" className={field} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
          <input required type="date" aria-label="Date" className={field} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} />
          <input required type="time" aria-label="Time" className={field} value={f.time} onChange={(e) => setF({ ...f, time: e.target.value })} />
          <select aria-label="Guests" className={`${field} md:col-span-2`} value={f.guests} onChange={(e) => setF({ ...f, guests: e.target.value })}>
            {["1", "2", "3", "4", "5", "6", "8", "10+"].map((g) => <option key={g} value={g}>{g} {g === "1" ? "guest" : "guests"}</option>)}
          </select>
          <textarea placeholder="Special requests (optional)" rows={3} className={`${field} md:col-span-2`} value={f.note} onChange={(e) => setF({ ...f, note: e.target.value })} />
          <button type="submit" className="rounded-full bg-gold-gradient py-4 font-semibold text-espresso transition hover:scale-[1.02] md:col-span-2">Send reservation via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-espresso pb-10 pt-20 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-cream p-1.5"><img src={logo} alt="" className="h-full w-full object-contain" loading="lazy" /></span>
            <span className="font-display text-3xl">Harmony <em className="text-gold">Cafe</em></span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">Coffee, food and friendship in perfect harmony. Come as a guest, leave as family.</p>
          <div className="mt-6 flex gap-3">
            {[{ href: contact.instagram, Icon: Instagram, l: "Instagram" }, { href: contact.facebook, Icon: Facebook, l: "Facebook" }, { href: whatsappLink(), Icon: MessageCircle, l: "WhatsApp" }].map(({ href, Icon, l }) => (
              <a key={l} href={href} target="_blank" rel="noreferrer" aria-label={l} className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 transition hover:border-gold hover:bg-gold hover:text-espresso"><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">{nav.map((n) => <li key={n.id}><a href={`#${n.id}`} className="hover:text-gold">{n.label}</a></li>)}</ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li>{contact.address}</li><li><a href={`tel:+${contact.whatsapp}`} className="hover:text-gold">{contact.phone}</a></li><li><a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-3 border-t border-cream/10 px-5 pt-8 text-xs text-cream/40 md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Harmony Cafe. All rights reserved.</p><p>Crafted with love in Adama.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold-gradient text-espresso shadow-soft transition hover:scale-110">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export default function HarmonySite() {
  useReveal();
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero /><Marquee /><About /><MenuSection /><Gallery /><Offers /><Testimonials /><Visit /><Reserve />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
