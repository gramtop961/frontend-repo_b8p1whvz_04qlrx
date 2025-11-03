import { User, Briefcase, Building2, ShieldCheck } from 'lucide-react'

const roles = [
  {
    key: 'candidate',
    title: 'Candidate / Professional',
    desc: 'Discover roles, auto-apply, track progress, and grow with skill analytics. Get verified via company domain to unlock professional status.',
    icon: User,
    accent: 'from-emerald-500 to-teal-400'
  },
  {
    key: 'recruiter',
    title: 'Recruiter',
    desc: 'Manage postings, pipelines, and talent search from a single, ATS-style dashboard. Requires verified company access.',
    icon: Briefcase,
    accent: 'from-violet-500 to-indigo-400'
  },
  {
    key: 'admin',
    title: 'Company Admin',
    desc: 'Oversee your organization: approve requests, manage teams, and control company settings with full transparency.',
    icon: Building2,
    accent: 'from-sky-500 to-blue-400'
  },
  {
    key: 'super',
    title: 'Super Admin',
    desc: 'Platform-wide oversight: stabilize operations, resolve inactive companies, and maintain ecosystem trust.',
    icon: ShieldCheck,
    accent: 'from-rose-500 to-pink-400'
  }
]

export default function RolesShowcase() {
  return (
    <section id="roles" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">One network. Four roles.</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Everyone plays a part: from candidates finding opportunities to admins managing company-wide hiring.</p>
          </div>
          <a href="#features" className="hidden md:inline-block text-sm font-semibold text-blue-700 hover:text-blue-800">See key features →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((r) => (
            <article key={r.key} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-tr ${r.accent} text-white grid place-items-center shadow-md shadow-black/5`}>
                <r.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{r.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              <div className="absolute inset-x-6 -bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
