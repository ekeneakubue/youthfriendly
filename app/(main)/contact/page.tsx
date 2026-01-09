export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-emerald-50 via-white to-sky-50">
      {/* Hero */}
      <section className="py-16 border-b border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-[1.3fr_minmax(0,1fr)] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700/80">
              Contact
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-emerald-950">
              Let&apos;s support UNN students together
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-900/80 max-w-xl">
              Whether you are a student seeking support, a partner organization, or a potential
              donor, we&apos;d love to hear from you. Share your questions, ideas, or feedback and
              our team will get back to you.
            </p>
            <dl className="mt-8 grid gap-4 text-sm text-emerald-950/80">
              <div>
                <dt className="font-medium text-emerald-900">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:youthfriendly@unn.edu.ng"
                    className="text-emerald-700 hover:text-emerald-800 underline-offset-2 hover:underline"
                  >
                    youthfriendly@unn.edu.ng
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-emerald-900">Phone / WhatsApp</dt>
                <dd className="mt-1">+234 803 868 4409</dd>
              </div>
              <div>
                <dt className="font-medium text-emerald-900">Location</dt>
                <dd className="mt-1">
                  Youth Friendly Resource Center, University of Nigeria, Nsukka (UNN) Campus
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-emerald-700/90">
                    Office hours
                  </dt>
                  <dd className="mt-1 text-emerald-950/80">
                    Mon – Fri: 9:00am – 4:00pm
                    <br />
                    Excluding public holidays
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-emerald-700/90">
                    Campus coverage
                  </dt>
                  <dd className="mt-1 text-emerald-950/80">
                    UNN Nsukka, UNEC Enugu &amp;
                    <br />
                    Ituku-Ozalla Campus
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Quick info card */}
          <div className="rounded-2xl bg-white/90 backdrop-blur shadow-lg border border-emerald-100/80 p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-emerald-950">
              Not sure what you need?
            </h2>
            <p className="mt-2 text-sm text-emerald-950/80">
              Share a brief description of your situation and we&apos;ll connect you with the right
              person or program at Youth Friendly Resource Center.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-emerald-950/80">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Confidential support for health and wellbeing.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Food bank, scholarships, and emergency support referrals.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Partnerships, volunteering, and campus collaborations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          {/* Contact form */}
          <div className="rounded-3xl bg-white shadow-xl border border-emerald-100/80 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-emerald-950">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-emerald-950/80">
              Fill in the form and we&apos;ll respond within 2–3 working days. For urgent matters,
              please call during office hours.
            </p>

            <form className="mt-6 grid gap-5">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-emerald-950">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  className="h-11 rounded-lg border border-emerald-300 bg-white px-3 text-base text-emerald-950 outline-none ring-emerald-500/50 focus:ring-2 focus:border-emerald-400 placeholder:text-emerald-900/40"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-emerald-950">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="h-11 rounded-lg border border-emerald-300 bg-white px-3 text-base text-emerald-950 outline-none ring-emerald-500/50 focus:ring-2 focus:border-emerald-400 placeholder:text-emerald-900/40"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-emerald-950">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="h-11 rounded-lg border border-emerald-300 bg-white px-3 text-base text-emerald-950 outline-none ring-emerald-500/50 focus:ring-2 focus:border-emerald-400 placeholder:text-emerald-900/40"
                    placeholder="+234..."
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="topic" className="text-sm font-medium text-emerald-950">
                  I&apos;m contacting you about
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="h-11 rounded-lg border border-emerald-300 bg-white px-3 text-base text-emerald-950 outline-none ring-emerald-500/50 focus:ring-2 focus:border-emerald-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="student-support">Student support / counselling</option>
                  <option value="food-bank">Food bank &amp; basic needs support</option>
                  <option value="volunteering">Volunteering / internship</option>
                  <option value="partnership">Partnership / sponsorship</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-emerald-950">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="min-h-[140px] rounded-lg border border-emerald-300 bg-white px-3 py-2 text-base text-emerald-950 outline-none ring-emerald-500/50 focus:ring-2 focus:border-emerald-400 resize-y placeholder:text-emerald-900/40"
                  placeholder="Tell us how we can help. You can include your campus, department, and level if relevant."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between pt-2">
                <p className="text-xs text-emerald-950/70">
                  By submitting this form you consent to Youth Friendly Resource Center contacting
                  you about your enquiry. Your details are kept confidential.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* Contact details / social */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-emerald-950 text-emerald-50 p-6 sm:p-7 shadow-xl">
              <h2 className="text-lg font-semibold">Visit our center</h2>
              <p className="mt-2 text-sm text-emerald-50/80">
                You can walk in during office hours for one-on-one support, referrals, and group
                programs.
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <p className="flex gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-emerald-700/70 inline-flex items-center justify-center text-xs">
                    📍
                  </span>
                  <span>
                    Youth Friendly Resource Center
                    <br />
                    University of Nigeria, Nsukka (UNN) Campus
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-emerald-700/70 inline-flex items-center justify-center text-xs">
                    🕒
                  </span>
                  <span>
                    Monday – Friday: 9:00am – 4:00pm
                    <br />
                    Saturday: Special programs only
                  </span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/90 border border-emerald-100/80 p-6 sm:p-7 shadow-md">
              <h3 className="text-sm font-semibold text-emerald-900 uppercase tracking-[0.18em]">
                Connect online
              </h3>
              <p className="mt-2 text-sm text-emerald-950/80">
                Stay updated on workshops, outreach programs, and volunteer opportunities.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#"
                  aria-label="Visit our Facebook page"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                >
                  <span className="sr-only">X (Twitter)</span>
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

            <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 p-5 text-xs text-emerald-950/75">
              <p className="font-semibold text-emerald-900">Safety &amp; confidentiality</p>
              <p className="mt-1.5">
                If you are in immediate danger or crisis, please contact campus security or local
                emergency services first. We provide non-judgmental, youth-friendly support but do
                not replace professional medical or emergency services.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}


