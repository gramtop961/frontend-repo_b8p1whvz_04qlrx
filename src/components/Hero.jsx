import Spline from '@splinetool/react-spline'
import { Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section id="start" className="relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            AI-driven career + hiring network
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
            Trust, speed, and transparency for your career journey
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            WorkCircuit unifies candidates, recruiters, and companies with domain verification, powerful analytics, and a seamless hiring flow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-black">
              <Rocket size={16} /> Launch Workspace
            </button>
            <a href="#roles" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
              Explore roles
            </a>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl border border-gray-200 bg-white/40 overflow-hidden">
          {/* 3D Spline Scene */}
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient glow overlay - does not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-blue-100/40" />
        </div>
      </div>
    </section>
  )
}
