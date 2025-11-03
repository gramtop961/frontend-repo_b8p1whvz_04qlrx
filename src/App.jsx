import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RolesShowcase from './components/RolesShowcase'
import FeatureHighlights from './components/FeatureHighlights'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <RolesShowcase />
      <FeatureHighlights />
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} WorkCircuit. All rights reserved.</p>
          <div className="text-sm text-gray-600">Built for transparent careers and hiring.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
