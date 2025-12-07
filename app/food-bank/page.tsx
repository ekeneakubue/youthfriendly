"use client";

type Stat = {
  label: string;
  value: string;
  helper: string;
  icon: string;
};

type Donor = {
  name: string;
  contribution: string;
  date: string;
  type: string;
  icon: string;
};

type Beneficiary = {
  name: string;
  campus: string;
  support: string;
  note: string;
};

type Distribution = {
  title: string;
  date: string;
  location: string;
  focus: string;
  status: string;
  statusType: "upcoming" | "completed";
};

const stats: Stat[] = [
  { label: "Students fed in 2025", value: "1,840", helper: "Average 210 served monthly", icon: "users" },
  { label: "Meal kits this month", value: "620", helper: "Rice, beans, protein, hygiene", icon: "package" },
  { label: "Active donors", value: "38", helper: "Alumni, student groups, partners", icon: "heart" },
];

const donors: Donor[] = [
  { name: "UNN Alumni Association", contribution: "₦850,000 + 40 meal kits", date: "Dec 5, 2025", type: "Partner", icon: "building" },
  { name: "Mrs. Adaeze Obi", contribution: "25 bags of rice", date: "Dec 2, 2025", type: "Individual", icon: "user" },
  { name: "Lion's Den Fellowship", contribution: "200 hygiene packs", date: "Nov 27, 2025", type: "Faith-based group", icon: "users" },
  { name: "Okeke Foods Ltd.", contribution: "150 cartons of noodles", date: "Nov 25, 2025", type: "Corporate", icon: "building" },
  { name: "Student Union (UNN)", contribution: "₦300,000 pantry support", date: "Nov 20, 2025", type: "Student group", icon: "users" },
  { name: "Green Market Hub", contribution: "120 crates of eggs", date: "Nov 15, 2025", type: "Market partner", icon: "store" },
];

const beneficiaries: Beneficiary[] = [
  {
    name: "Chidera, 200L Pharmacy",
    campus: "Nsukka",
    support: "Exam-week meal kits",
    note: "Saved transport money during exam season and stayed on campus to study.",
  },
  {
    name: "Ifeanyi, 300L Engineering",
    campus: "Nsukka",
    support: "Rice + protein staples",
    note: "Balanced class projects with part-time work; the pantry bridged the gap.",
  },
  {
    name: "Amarachi, 400L Nursing",
    campus: "UNEC",
    support: "Ready-to-cook packs",
    note: "Clinical rotations left little time for cooking; quick meals kept energy up.",
  },
  {
    name: "Hauwa, 200L Veterinary Medicine",
    campus: "Ituku-Ozalla",
    support: "Hygiene + grain packs",
    note: "Reduced monthly spend on essentials while preparing for professional exams.",
  },
  {
    name: "Collins, 100L Mass Communication",
    campus: "Nsukka",
    support: "Starter pantry kit",
    note: "First-year student adjusting to campus life; avoided skipping meals.",
  },
];

const distributions: Distribution[] = [
  {
    title: "Exam Week Pantry",
    date: "Dec 12, 2025",
    location: "Ekpo Ref, Nsukka",
    focus: "Staples + protein packs for late-study weeks",
    status: "Upcoming",
    statusType: "upcoming",
  },
  {
    title: "Evening Pantry",
    date: "Dec 2, 2025",
    location: "UNEC YRC Hub",
    focus: "Ready-to-cook packs and water",
    status: "Completed · 240 students",
    statusType: "completed",
  },
  {
    title: "Mobile Pantry",
    date: "Nov 22, 2025",
    location: "Ituku-Ozalla Clinical Campus",
    focus: "Grains, gari, beans, hygiene",
    status: "Completed · 120 students",
    statusType: "completed",
  },
  {
    title: "Nutrition & Budgeting Clinic",
    date: "Nov 15, 2025",
    location: "Campus Main Hall, Nsukka",
    focus: "Meal planning + small pantry giveaway",
    status: "Completed · 310 students",
    statusType: "completed",
  },
];

// Icon components
const Icon = ({ name, className = "" }: { name: string; className?: string }) => {
  const icons: Record<string, JSX.Element> = {
    users: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    package: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    heart: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    building: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    user: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    store: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    calendar: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    location: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    clock: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

export default function FoodBankPage() {
  return (
    <main>
      {/* Hero Section - Enhanced with gradient and better layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs uppercase tracking-wider text-white/90 mb-6">
                <Icon name="heart" className="w-4 h-4" />
                Food Bank Initiative
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight">
              Supporting UNN students with essential food supplies. 
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl">
              Helping students focus on their education without worrying about their next meal.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#donors"
                  className="group px-6 py-3.5 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  See recent donors
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="/#contact"
                  className="px-6 py-3.5 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 hover:border-white/60 transition-all"
                >
                  Donate or volunteer
                </a>
              </div>
            </div>

            {/* Hero Stats Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="group rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/20">
                    <Icon name="users" className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-white/70 font-medium">2025 Impact</p>
                </div>
                <div className="text-5xl font-bold mb-2">1,840</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Students supported in 2025. Focused on exam periods, new intakes, and students balancing classes with part-time work.
                </p>
              </div>
              
              <div className="group rounded-2xl bg-emerald-800/50 backdrop-blur-lg p-6 border border-white/20 hover:bg-emerald-800/60 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/20">
                    <Icon name="clock" className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-emerald-50/70 font-medium">This Week</p>
                </div>
                <div className="text-3xl font-bold mb-2">Exam Pantry</div>
                <p className="text-sm text-emerald-50/80 mb-3">
                  Staples and protein packs ready for evening pickups
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-100 bg-white/10 rounded-lg px-3 py-2">
                  <Icon name="calendar" className="w-4 h-4" />
                  Dec 12 · Ekpo Ref, Nsukka
                </div>
              </div>
              
              <div className="sm:col-span-2 rounded-2xl bg-white text-emerald-900 p-6 border border-white/30 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-100">
                    <Icon name="package" className="w-5 h-5 text-emerald-700" />
                  </div>
                  <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">Impact Snapshot</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <div className="text-3xl font-bold text-emerald-800">620</div>
                    <p className="text-sm text-emerald-700/80 mt-1">Meal kits this month</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-800">3</div>
                    <p className="text-sm text-emerald-700/80 mt-1">Campuses served</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-800">72</div>
                    <p className="text-sm text-emerald-700/80 mt-1">Student volunteers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced with icons and hover effects */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Impact by Numbers</h2>
            <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">Real-time data showing the difference we're making in students' lives</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-background p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <Icon name={stat.icon} className="w-8 h-8" />
                </div>
                <div className="text-sm uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold mb-3">
                  {stat.label}
                </div>
                <div className="text-5xl font-bold text-foreground mb-3">{stat.value}</div>
                <p className="text-sm text-foreground/70 leading-relaxed">{stat.helper}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donors Section - Enhanced with icons and better cards */}
      <section id="donors" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-start justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-wider font-semibold mb-4">
                <Icon name="heart" className="w-4 h-4" />
                Gratitude
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Recent Donors</h2>
              <p className="mt-3 text-lg text-foreground/70 max-w-2xl">
                Partners, alumni, families, and student groups who gave in the last four weeks. Their support turns into
                kits for students who need steady meals.
              </p>
            </div>
            <a
              href="/#contact"
              className="group px-6 py-3 rounded-lg border-2 border-emerald-600 text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-emerald-600 hover:text-white transition-all"
            >
              Offer support
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {donors.map((donor) => (
              <article
                key={`${donor.name}-${donor.date}`}
                className="group relative rounded-xl border border-black/10 dark:border-white/10 bg-background p-6 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                <div className="relative">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                      <Icon name={donor.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200 font-medium">
                      {donor.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{donor.name}</h3>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{donor.contribution}</p>
                  <div className="flex items-center gap-2 text-xs text-foreground/60 uppercase tracking-wide">
                    <Icon name="calendar" className="w-4 h-4" />
                    {donor.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficiaries Section - Testimonial style */}
      <section id="beneficiaries" className="py-20 bg-gradient-to-b from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-wider font-semibold mb-4">
              <Icon name="users" className="w-4 h-4" />
              Student Voices
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Student Beneficiaries</h2>
            <p className="mt-3 text-lg text-foreground/70 max-w-2xl mx-auto">
              Stories from students across campuses who recently received pantry support.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficiaries.map((b) => (
              <article
                key={`${b.name}-${b.campus}`}
                className="group relative rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-6xl text-emerald-200 dark:text-emerald-900/50 font-serif leading-none">"</div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {b.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{b.name}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-foreground/70">
                        <Icon name="location" className="w-3.5 h-3.5" />
                        {b.campus}
                      </div>
                    </div>
                  </div>
                  
                  <span className="inline-block mb-3 text-xs px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200 font-medium">
                    {b.support}
                  </span>
                  
                  <p className="text-sm text-foreground/80 leading-relaxed italic">
                    "{b.note}"
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Events - Timeline style */}
      <section id="events" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs uppercase tracking-wider font-semibold mb-4">
              <Icon name="calendar" className="w-4 h-4" />
              Distribution Schedule
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Food Distribution Events</h2>
            <p className="mt-3 text-lg text-foreground/70 max-w-2xl mx-auto">
              Upcoming and recent events across campuses. Each distribution pairs food support with brief check-ins and
              wellbeing resources.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {distributions.map((d, index) => (
              <article
                key={`${d.title}-${d.date}`}
                className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-background p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="calendar" className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{d.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{d.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Icon name="location" className="w-4 h-4" />
                      {d.location}
                    </div>
                  </div>
                  <span
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold ${
                      d.statusType === "upcoming"
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
                        : "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200"
                    }`}
                  >
                    <Icon name={d.statusType === "upcoming" ? "clock" : "check"} className="w-3.5 h-3.5" />
                    {d.status.split("·")[0].trim()}
                  </span>
                </div>
                
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-black/5 dark:border-white/5">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    <strong className="text-foreground">Focus:</strong> {d.focus}
                  </p>
                </div>
                
                {d.statusType === "completed" && d.status.includes("·") && (
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    <Icon name="users" className="w-4 h-4" />
                    {d.status.split("·")[1].trim()}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced design */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs uppercase tracking-wider text-white/90 mb-4">
              <Icon name="heart" className="w-4 h-4" />
              How you can help
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Keep the Pantry Stocked</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Monetary gifts, bulk staples, or student volunteer hours all make the pantry reliable. Let us know how
              you would like to contribute.
            </p>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 mt-6 px-8 py-4 rounded-lg bg-white text-emerald-700 font-bold hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Talk with the team
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-white/20 p-8 bg-white/10 backdrop-blur-lg hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <Icon name="heart" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fund a Meal Kit</h3>
              <p className="text-white/90 leading-relaxed">
                ₦5,000 covers one balanced meal kit. Pledge monthly or give one-time support.
              </p>
            </div>
            
            <div className="group rounded-2xl border border-white/20 p-8 bg-white/10 backdrop-blur-lg hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 rounded-xl bg-teal-500 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <Icon name="package" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Donate Staples</h3>
              <p className="text-white/90 leading-relaxed">
                Rice, beans, gari, noodles, protein, hygiene packs, and bottled water are priority items this month.
              </p>
            </div>
            
            <div className="group rounded-2xl border border-white/20 p-8 bg-white/10 backdrop-blur-lg hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 rounded-xl bg-emerald-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <Icon name="users" className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Volunteer</h3>
              <p className="text-white/90 leading-relaxed">
                Join packing shifts, distributions, or outreach calls to identify students needing support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

