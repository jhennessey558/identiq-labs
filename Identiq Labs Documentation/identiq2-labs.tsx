// src/Identiq-labs.tsx
import { useState, useEffect, type FormEvent } from 'react'
import type { MousePosition, Principle } from '../src/types'
import { ArrowRight, Mail, Sparkles, CheckCircle, Cpu, Network } from 'lucide-react'

const Identiqlabs = () => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Beta signup:', email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 5000)
  }

  const principles: Principle[] = [
    { icon: Sparkles, text: 'High-signal identity resolution over brittle heuristics' },
    { icon: Network, text: 'Probabilistic systems designed for real-world data' },
    { icon: Cpu, text: 'Enterprise-grade architecture, not demos' },
    { icon: Network, text: 'Systems built to tolerate uncertainty, scale, and failure' },
  ]

  return (
    <div className="relative min-h-screen bg-Identiq-bg text-white overflow-hidden">
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0 grid-background"
          style={{
            transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)`,
          }}
        />
      </div>

      <nav className="relative z-50 nav-glass">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-Identiq-purple-600 flex items-center justify-center font-bold">
              I
            </div>
            <span className="text-xl font-semibold">Identiq Labs</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#philosophy" className="hover:text-white">Philosophy</a>
            <a href="mailto:hello@Identiq.io" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative z-10 min-h-screen flex items-center px-6">
        <div className="w-full max-w-6xl mx-auto text-center space-y-8">
          <span className="inline-block px-4 py-2 rounded-full text-sm border border-white/10 text-gray-300">
            Building the Future of Data Intelligence
          </span>

          <h1 className="font-bold tracking-tight gradient-text-primary text-4xl sm:text-6xl md:text-8xl">
            Identiq Labs
          </h1>

          <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
            Where advanced algorithms meet production-grade engineering.
            <br className="hidden sm:block" />
            We build systems that survive real data.
          </p>

          <div className="pt-10 max-w-3xl mx-auto">
            <div className="card p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-Identiq-amber-400" />
                <h2 className="text-2xl font-semibold">Prism</h2>
              </div>

              <p className="text-gray-300 mb-6">
                Identity resolution at enterprise scale. Launching soon.
              </p>

              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="input-primary w-full"
                  />
                  <button className="btn-primary w-full">
                    Join Beta <ArrowRight className="w-6 h-6" />
                  </button>
                </form>
              ) : (
                <div className="flex justify-center items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-5 h-5" />
                  Thanks. We’ll be in touch.
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-14 max-w-3xl mx-auto text-gray-400 text-sm">
            <div>30+ Years Experience</div>
            <div>100M+ API Calls</div>
            <div>Petabyte Scale</div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="section-spacing px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
            How We Build
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map(({ icon: Icon, text }, i) => (
              <div key={i} className="card-hover p-6">
                <div className="flex gap-4">
                  <Icon className="w-5 h-5 text-Identiq-purple-400 mt-1" />
                  <p className="text-gray-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>© 2024 Identiq Labs</span>
          <a href="mailto:hello@Identiq.io" className="hover:text-white flex items-center gap-2">
            <Mail className="w-4 h-4" />
            hello@Identiq.io
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Identiqlabs
