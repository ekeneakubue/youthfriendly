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
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Get in touch</h2>
            <p className="mt-2 text-foreground/70">Have questions or want to partner with us? Send a message.</p>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="name">Name</label>
                <input id="name" name="name" className="h-10 rounded border border-black/15 dark:border-white/15 bg-background px-3" placeholder="Your name" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="h-10 rounded border border-black/15 dark:border-white/15 bg-background px-3" placeholder="you@example.com" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="min-h-28 rounded border border-black/15 dark:border-white/15 bg-background px-3 py-2" placeholder="How can we help?" />
              </div>
              <button className="mt-2 h-10 px-4 rounded bg-emerald-600 text-white hover:bg-emerald-700 w-fit">Send</button>
            </form>
          </div>
          <div className="grid gap-4 content-start">
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-background">
              <h3 className="font-semibold">Visit Us</h3>
              <p className="mt-2 text-sm text-foreground/70">Youth Friendly Resource Center, University of Nigeria, Nsukka</p>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-background">
              <h3 className="font-semibold">Contact</h3>
              <p className="mt-2 text-sm text-foreground/70">youthfriendly@unn.edu.ng</p>
              <p className="text-sm text-foreground/70">+234 803 868 4409</p>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                  Connect with us
                </p>
                <div className="mt-2 flex gap-3">
                  <a
                    href="#"
                    aria-label="Visit our Facebook page"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.77 3.44 8.72 7.94 9.6v-6.79H7.66v-2.81h2.15V9.41c0-2.13 1.27-3.31 3.22-3.31.93 0 1.91.17 1.91.17v2.1h-1.08c-1.07 0-1.41.67-1.41 1.36v1.64h2.39l-.38 2.81h-2.01v6.79c4.5-.88 7.94-4.83 7.94-9.6Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Visit our Instagram profile"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M7 3C4.24 3 2 5.24 2 8v8c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3Zm9.5 1a1.5 1.5 0 0 0-1.06 2.56A1.5 1.5 0 1 0 16.5 6Zm-5.5 1.5A4.5 4.5 0 0 0 6.5 12 4.5 4.5 0 0 0 11 16.5 4.5 4.5 0 0 0 15.5 12 4.5 4.5 0 0 0 11 7.5Zm0 2A2.5 2.5 0 0 1 13.5 12 2.5 2.5 0 0 1 11 14.5 2.5 2.5 0 0 1 8.5 12 2.5 2.5 0 0 1 11 9.5Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Visit our X (Twitter) profile"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M18.5 3h-3l-3.03 4.39L9 3H5.5L10 9.79 5 17h3l3.22-4.67L15 17h3.5L13.5 9.21 18.5 3Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
