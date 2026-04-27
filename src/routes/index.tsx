import { createFileRoute } from "@tanstack/react-router";

import bridalImage from "../assets/rajitha-bridal-makeup.jpg";
import partyImage from "../assets/rajitha-party-makeup.jpg";
import transformationImage from "../assets/rajitha-transformation.jpg";
import studioImage from "../assets/rajitha-studio.jpg";

const instagramUrl = "https://www.instagram.com/rajitha_makeup_artist1/";

const services = [
  ["Bridal Makeup", "Elegant South Indian bridal looks crafted for ceremony lights, photography, and all-day confidence."],
  ["Party Makeup", "Soft glam, smoky eyes, and radiant finishes for birthdays, receptions, and evening events."],
  ["Engagement Makeup", "Refined, camera-ready beauty that feels romantic, fresh, and personal to your style."],
  ["HD Makeup", "Seamless skin work and premium products designed for close-up photos and flawless wear."],
  ["Saree Draping", "Graceful draping with secure pleats and a polished finish for weddings and special occasions."],
];

const reasons = ["15+ Years Experience", "Premium Products Used", "Personalized Looks", "Client Satisfaction"];

const testimonials = [
  ["Priya", "Rajitha made my bridal look so graceful and natural. The makeup stayed perfect through the entire wedding."],
  ["Sneha", "Very professional, calm, and punctual. I loved the HD finish and received so many compliments."],
  ["Kavya", "She understood exactly what I wanted for my engagement and created a soft, elegant look."],
  ["Anusha", "The saree draping and party makeup were flawless. I felt confident all evening."],
];

const gallery = [
  [bridalImage, "South Indian bridal makeup by Rajitha Reddy"],
  [partyImage, "Party makeup with soft smoky eyes and nude pink tones"],
  [transformationImage, "Before and after HD makeup transformation"],
  [studioImage, "Premium makeup studio environment"],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajitha Reddy Makeup Artist | Bridal Makeup in Hyderabad" },
      {
        name: "description",
        content:
          "Book Rajitha Reddy Makeup Artist for bridal makeup in Hyderabad, professional makeup artist Kukatpally, HD makeup, party makeup, engagement makeup, and saree draping.",
      },
      { name: "keywords", content: "Makeup Artist near me, Bridal Makeup in Hyderabad, Professional Makeup Artist Kukatpally, Rajitha Reddy Makeup Artist" },
      { property: "og:title", content: "Rajitha Reddy Makeup Artist | Hyderabad" },
      { property: "og:description", content: "Luxury bridal, party, engagement, HD makeup, and saree draping in Hyderabad / Kukatpally with 15+ years of experience." },
      { property: "og:image", content: bridalImage },
      { name: "twitter:image", content: bridalImage },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Rajitha Reddy Makeup Artist",
          image: bridalImage,
          url: "https://www.instagram.com/rajitha_makeup_artist1/",
          sameAs: [instagramUrl],
          description:
            "Professional makeup artist serving Hyderabad and Kukatpally with 15+ years of experience in bridal makeup, party makeup, HD makeup, engagement makeup, and saree draping.",
          areaServed: ["Hyderabad", "Kukatpally"],
          priceRange: "$$$",
          makesOffer: services.map(([name, description]) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name, description },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center animate-soft-rise">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">{title}</h2>
      {copy && <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">{copy}</p>}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-ivory/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main navigation">
          <a href="#top" className="font-display text-lg font-bold text-rose-deep md:text-2xl">Rajitha Reddy</a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#services">Services</a>
            <a className="transition-colors hover:text-primary" href="#gallery">Gallery</a>
            <a className="transition-colors hover:text-primary" href="#reviews">Reviews</a>
          </div>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-luxury px-4 py-2 text-sm font-bold text-primary-foreground shadow-luxury transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
            <InstagramIcon /> Book
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-screen bg-hero-luxury pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,var(--blush),transparent_28%),radial-gradient(circle_at_80%_10%,var(--champagne),transparent_24%)] opacity-55" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:min-h-[calc(100vh-6rem)] md:grid-cols-[1fr_0.92fr] md:px-8">
          <div className="animate-soft-rise">
            <p className="mb-5 inline-flex rounded-full border border-gold/50 bg-ivory/70 px-4 py-2 text-sm font-bold text-rose-deep shadow-soft">Professional Makeup Artist · Hyderabad / Kukatpally</p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] text-foreground text-balance md:text-7xl">Enhancing Your Natural Beauty</h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-muted-foreground md:text-xl">Professional Makeup Artist with 15+ Years of Experience</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-luxury px-7 py-4 text-base font-extrabold text-primary-foreground shadow-luxury transition-all hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                <InstagramIcon /> Book via Instagram
              </a>
              <a href="#gallery" className="inline-flex items-center justify-center rounded-full border border-gold/60 bg-ivory/70 px-7 py-4 text-base font-bold text-rose-deep transition-all hover:-translate-y-1 hover:bg-champagne focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">View Gallery</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center">
              {[["15+", "Years"], ["5★", "Reviews"], ["Hyd", "Area"]].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-border/80 bg-ivory/70 p-4 shadow-soft backdrop-blur">
                  <p className="font-display text-3xl font-bold text-primary">{value}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg animate-float-luxe">
            <div className="absolute -inset-4 rounded-[2rem] bg-gold-sheen opacity-35 blur-2xl" />
            <img src={bridalImage} alt="South Indian bridal makeup by Rajitha Reddy Makeup Artist in Hyderabad" width={1344} height={1536} className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxury" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8" aria-labelledby="about-title">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <img src={studioImage} alt="Luxury makeup studio with premium beauty products" width={1536} height={1152} loading="lazy" className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-luxury" />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">About Rajitha</p>
            <h2 id="about-title" className="mt-3 font-display text-4xl font-bold md:text-5xl">Trusted beauty artistry with a calm, premium touch.</h2>
            <p className="mt-6 text-lg leading-9 text-muted-foreground">Rajitha Reddy brings over 15 years of professional makeup and beauty service experience to every client. Her approach blends refined technique, premium products, and a careful understanding of each person’s natural features, creating looks that feel elegant, comfortable, and photo-ready.</p>
            <p className="mt-4 text-lg leading-9 text-muted-foreground">Serving clients across Hyderabad and Kukatpally, Rajitha is known for professionalism, patience, hygiene, and dependable results for weddings, engagements, parties, and special occasions.</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-muted/55 px-5 py-20 md:px-8">
        <SectionHeader eyebrow="Services" title="Makeup for every beautiful moment" copy="From timeless bridal elegance to polished party glam, each service is tailored to your outfit, event, skin, and comfort." />
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(([name, description]) => (
            <article key={name} className="group rounded-[1.4rem] border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-2 hover:shadow-luxury">
              <div className="mb-6 h-1.5 w-14 rounded-full bg-gold-sheen transition-all group-hover:w-24" />
              <h3 className="font-display text-2xl font-bold text-rose-deep">{name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="px-5 py-20 md:px-8">
        <SectionHeader eyebrow="Gallery" title="Soft glam, bridal glow, polished transformations" copy="A portfolio-style glimpse of natural, feminine, high-end looks for local clients searching for a makeup artist near me." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {gallery.map(([src, alt], index) => (
            <figure key={alt} className={`${index > 1 ? "md:col-span-2" : ""} group overflow-hidden rounded-[1.75rem] bg-card shadow-soft`}>
              <img src={src} alt={alt} width={index > 1 ? 1536 : 1344} height={index > 1 ? 1152 : 1536} loading={index === 0 ? "eager" : "lazy"} className="h-full min-h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-rose-deep px-5 py-20 text-primary-foreground md:px-8">
        <SectionHeader eyebrow="Why choose us" title="Premium results, personal attention" />
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-[1.4rem] border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center backdrop-blur transition-transform hover:-translate-y-1">
              <p className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-sheen font-display text-xl font-bold text-accent-foreground">✦</p>
              <h3 className="text-lg font-extrabold">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="px-5 py-20 md:px-8">
        <SectionHeader eyebrow="Testimonials" title="Loved by local clients" copy="Realistic client feedback reflecting the care, finish, and trust Rajitha brings to every appointment." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {testimonials.map(([name, review]) => (
            <blockquote key={name} className="rounded-[1.4rem] border border-border bg-card p-6 shadow-soft">
              <p className="text-gold">★★★★★</p>
              <p className="mt-5 leading-8 text-muted-foreground">“{review}”</p>
              <footer className="mt-5 font-display text-xl font-bold text-rose-deep">{name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-hero-luxury p-8 text-center shadow-luxury md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">Instagram inquiries only</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Ready for your signature look?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Message Rajitha Reddy Makeup Artist on Instagram for bridal makeup in Hyderabad, professional makeup artist Kukatpally, party makeup, and saree draping bookings.</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-luxury px-8 py-4 text-base font-extrabold text-primary-foreground shadow-luxury transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
            <InstagramIcon /> Message on Instagram
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-ivory px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="font-display text-2xl font-bold text-rose-deep">Rajitha Reddy Makeup Artist</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-rose-deep"><InstagramIcon /> Instagram</a>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Rajitha Reddy Makeup Artist. All rights reserved.</p>
        </div>
      </footer>

      <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Message Rajitha Reddy Makeup Artist on Instagram" className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-luxury text-primary-foreground shadow-luxury transition-all hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
        <InstagramIcon className="h-7 w-7" />
      </a>
    </main>
  );
}