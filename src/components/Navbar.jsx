import { Briefcase, Building2, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 grid place-items-center text-white shadow-lg shadow-blue-500/20">
            <ShieldCheck size={20} />
          </div>
          <span className="font-semibold text-gray-900 text-lg">WorkCircuit</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#roles" className="hover:text-gray-900 transition-colors flex items-center gap-1"><Briefcase size={16}/> Roles</a>
          <a href="#features" className="hover:text-gray-900 transition-colors flex items-center gap-1"><Building2 size={16}/> Features</a>
          <a href="#start" className="hover:text-gray-900 transition-colors">How it works</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</button>
          <button className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-black">Get started</button>
        </div>
      </div>
    </header>
  )
}
