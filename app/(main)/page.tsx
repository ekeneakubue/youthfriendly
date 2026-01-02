import HeroSlider from "../../components/HeroSlider";
import { getActiveServices } from "@/lib/actions/services";
import { Heart, BookOpen, HandHeart, Rocket, CheckCircle2 } from "lucide-react";

export default async function Home() {
  const services = await getActiveServices();

  const getIcon = (category: string) => {
    switch (category) {
      case "HEALTH": return <Heart className="h-6 w-6" />;
      case "EDUCATION": return <BookOpen className="h-6 w-6" />;
      case "WELFARE": return <HandHeart className="h-6 w-6" />;
      case "SKILLS": return <Rocket className="h-6 w-6" />;
      default: return <CheckCircle2 className="h-6 w-6" />;
    }
  };

  return (
    <main>
      <HeroSlider />

      {/* About */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">About Youth Friendly Resource Center, UNN</h2>
            <p className="mt-4 text-foreground/80">
              We are dedicated to empowering students at the University of Nigeria, Nsukka with
              health education, life skills, mentoring, and career development. Our team collaborates
              with campus partners to create inclusive, youth-centered programs and safe spaces.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#services" className="px-4 py-2 text-sm rounded bg-emerald-600 text-white hover:bg-emerald-700">Our Services</a>
              <a href="#contact" className="px-4 py-2 text-sm rounded border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">Contact Us</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/1.webp" alt="Youth Friendly Center 1" />
            <img src="/images/2.webp" alt="Youth Friendly Center 2" />
            <img src="/images/3.webp" alt="Youth Friendly Center 3" />
            <img src="/images/4.webp" alt="Youth Friendly Center 4" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Our Services</h2>
          <p className="mt-2 text-foreground/70 max-w-2xl">
            Practical programs and resources tailored for youth.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.length > 0 ? (
              services.map((s) => (
                <div key={s.id} className="rounded-2xl border border-black/10 dark:border-white/10 p-8 bg-background shadow-sm hover:shadow-md transition-all group">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {getIcon(s.category)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
                    {s.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed line-clamp-4">{s.description}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-foreground/50 italic border-2 border-dashed border-black/5 rounded-2xl">
                More services coming soon...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Upcoming Events</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Youth Health Week",
                date: "Nov 12, 2025",
                desc: "Workshops on mental health, nutrition, and sexual health education.",
              },
              {
                title: "Career Bootcamp",
                date: "Dec 3, 2025",
                desc: "Resume clinics, mock interviews, and alumni mentorship sessions.",
              },
            ].map((e) => (
              <article key={e.title} className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-background">
                <div className="text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-400">{e.date}</div>
                <h3 className="mt-1 font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{e.desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm text-emerald-600 hover:underline">Register interest →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Gallery</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32].map(num => (
              <img key={num} src={`/images/${num}.webp`} alt={`Gallery image ${num}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Get in touch with Youth Friendly RC, UNN</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl">
                Are you a student looking for support, a partner organization, or a potential donor?
                Reach out and we&apos;ll connect you with the right person or program.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-black/10 dark:border-white/10 bg-background p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                    For students
                  </p>
                  <h3 className="mt-2 font-semibold">Health, food bank &amp; counselling</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Get confidential, youth-friendly support for your wellbeing, academics and basic needs.
                  </p>
                </div>
                <div className="rounded-xl border border-black/10 dark:border-white/10 bg-background p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                    For partners
                  </p>
                  <h3 className="mt-2 font-semibold">Donors, NGOs &amp; campus units</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Collaborate with us on programmes, sponsorships, and volunteer opportunities for UNN students.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Open full contact page
                </a>
                <p className="text-xs text-foreground/60">
                  Prefer email?{" "}
                  <a href="mailto:youthfriendly@unn.edu.ng" className="text-emerald-700 hover:text-emerald-800 underline-offset-2 hover:underline">
                    youthfriendly@unn.edu.ng
                  </a>
                </p>
              </div>
            </div>

            <div className="grid gap-4 content-start">
              <div className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-background">
                <h3 className="font-semibold">Visit us on campus</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Youth Friendly Resource Center, University of Nigeria, Nsukka (UNN) Campus.
                  Walk in during office hours for one-on-one support and referrals.
                </p>
                <p className="mt-3 text-xs text-foreground/60">
                  Monday – Friday: 9:00am – 4:00pm (excluding public holidays)
                </p>
              </div>
              <div className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-background">
                <h3 className="font-semibold">Contact details</h3>
                <p className="mt-2 text-sm text-foreground/70">Email: youthfriendly@unn.edu.ng</p>
                <p className="text-sm text-foreground/70">Phone / WhatsApp: +234 803 868 4409</p>
                <p className="mt-3 text-xs text-foreground/60">
                  For emergencies or immediate danger, contact campus security or local emergency services first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
