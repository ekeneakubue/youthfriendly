import HeroSlider from "../components/HeroSlider";

export default function Home() {
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
            <img src="/images/1.webp" />
            <img src="/images/2.webp" />
            <img src="/images/3.webp" />
            <img src="/images/4.webp" />            
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Services</h2>
          <p className="mt-2 text-foreground/70 max-w-2xl">
            Practical programs and resources tailored for youth.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Health & Wellness",
                desc: "Peer education, counseling referrals, and wellbeing workshops.",
              },
              {
                title: "Skills Development",
                desc: "Digital literacy, leadership, entrepreneurship training and internship opportunities.",
              },
              {
                title: "Food Bank",
                desc: "Supporting University of Nigeria students (UNN, UNEC, Ituku-Ozalla) with essential food supplies. Helping students focus on their education without worrying about their next meal.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-background">
                <div className="h-10 w-10 rounded bg-emerald-600 mb-4" />
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
              </div>
            ))}
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
            <img src="/images/5.webp" />
            <img src="/images/6.webp" />
            <img src="/images/7.webp" />
            <img src="/images/8.webp" />
            <img src="/images/9.webp" />
            <img src="/images/10.webp" />
            <img src="/images/11.webp" />
            <img src="/images/12.webp" />
            <img src="/images/13.webp" />
            <img src="/images/14.webp" />
            <img src="/images/15.webp" />
            <img src="/images/16.webp" />
            <img src="/images/17.webp" />
            <img src="/images/18.webp" />
            <img src="/images/19.webp" />
            <img src="/images/20.webp" />
            <img src="/images/21.webp" />
            <img src="/images/22.webp" />
            <img src="/images/23.webp" />
            <img src="/images/24.webp" />
            <img src="/images/25.webp" />
            <img src="/images/26.webp" />
            <img src="/images/27.webp" />
            <img src="/images/28.webp" />
            <img src="/images/29.webp" />
            <img src="/images/30.webp" />
            <img src="/images/31.webp" />
            <img src="/images/32.webp" />
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
