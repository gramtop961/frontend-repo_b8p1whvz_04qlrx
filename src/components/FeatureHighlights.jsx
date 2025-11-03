import { BarChart3, Search, FileText, Sparkles } from 'lucide-react'

const items = [
  {
    title: 'AI Career Snapshot',
    desc: 'Fit scores, top roles, and improvement areas built from your profile and market data.',
    icon: Sparkles
  },
  {
    title: 'Auto Apply + Tracker',
    desc: 'Automate submissions on eligible roles and watch progress update live.',
    icon: FileText
  },
  {
    title: 'Recruiter Analytics',
    desc: 'Applicants per job, top roles, and real-time funnel metrics for your team.',
    icon: BarChart3
  },
  {
    title: 'Talent Search',
    desc: 'Powerful filters for skills, experience, and location — request contact in one click.',
    icon: Search
  }
]

export default function FeatureHighlights() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">Feature highlights</h2>
          <p className="mt-3 text-gray-600">From discovery to hiring to company management — everything you need in a single, transparent system.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition shadow-black/5">
              <div className="h-10 w-10 rounded-xl bg-gray-900 text-white grid place-items-center">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href="#start" className="px-5 py-3 rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-black">Create your profile</a>
          <button className="px-5 py-3 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-50">Post a job</button>
        </div>
      </div>
    </section>
  )
}
