import React, { useState, useEffect } from 'react'
import { ArrowRight, Mail, Sparkles, CheckCircle, Cpu, Network, Shield, Briefcase, Activity, Database, FileText, Download } from 'lucide-react'

type MousePosition = { x: number; y: number }

type SignupState = 'idle' | 'submitting' | 'success' | 'error'

const IdentiqLabs = () => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })
  const [email, setEmail] = useState('')
  const [signupState, setSignupState] = useState<SignupState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY })

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Client-side validation
    if (!email || !validateEmail(email)) {
      setErrorMessage('Please enter a valid email address')
      setSignupState('error')
      return
    }

    setSignupState('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json()

      if (response.ok) {
        setSignupState('success')
        setEmail('')
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
        setSignupState('error')
        
        // Reset error state after 5 seconds
        setTimeout(() => {
          setSignupState('idle')
          setErrorMessage('')
        }, 5000)
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.')
      setSignupState('error')
      
      setTimeout(() => {
        setSignupState('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* animated background with floating orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-purple" />
        <div className="glow-orb glow-orb-cyan" />
        <div
          className="absolute inset-0 grid-cyber opacity-20"
          style={{
            transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)`,
          }}
        />
      </div>

      {/* nav */}
      <nav className="relative z-50 nav-glass">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold shadow-lg shadow-purple-500/30">
              <img src="/img/identiq-labs-icon.jpg" alt="Identiq Labs Logo" className="w-5 h-5" />

            </div>
            <span className="text-xl font-bold nav-logo">Identiq Labs</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="/whitepaper" className="nav-link text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              White Paper
            </a>
          </div>
        </div>
      </nav>

      {/* hero */}
      <section className="relative z-10 flex items-center px-6 pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="w-full max-w-6xl mx-auto text-center space-y-10">
          <h1 className="hero-title">
            Identiq Labs
          </h1>

          <p className="hero-subtitle">
            The identity resolution layer.
            <br />
They demo it.
<br />
We built it.
       
          </p>

          <div className="max-w-xl mx-auto">
            {signupState === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-emerald-400" />
                <p className="text-2xl font-bold text-emerald-400">
                  You're signed up!
                </p>
                <p className="text-lg text-gray-300">
                  We'll be in contact when Beta goes live!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-row">
                  <input
                    className={`input-primary ${errorMessage ? 'border-red-500 focus:border-red-500' : ''}`}
                    placeholder="you@company.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={signupState === 'submitting'}
                    required
                  />
                 <button
  className="btn-primary whitespace-nowrap min-w-[14rem] px-10"
  type="submit"
  disabled={signupState === 'submitting'}
>
  {signupState === 'submitting' ? (
    <>
      <span className="animate-spin">⏳</span>
      Joining...
    </>
  ) : (
    <>Join Beta</>
  )}
</button>

                </div>
                {errorMessage && (
                  <p className="text-red-400 text-sm animate-fade-in">
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>


     {/* philosophy section - ENHANCED */}
<section className="px-6 pb-12 md:pb-16 relative z-10">

  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-0 md:mb-1">
      <h2 className="section-title">
        Built Different
      </h2>
      <p className="section-description">
        Identity resolution built for real-world big data.
      </p>
    </div>

    {/* Prism explainer – compact bridge */}
    <section className="relative pt-8 pb-2">
      <div className="max-w-4xl mx-auto">
        <div className="card-surface p-8 md:p-10 text-center">

          <h3 className="text-2xl font-semibold mb-3">
            Prism
          </h3>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Prism automatically discovers, links, and verifies your entire digital
            identity across platforms — so creators can prove real reach, and
            sponsors can trust what they're seeing.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left text-sm">

            <div className="flex gap-3">
              <Sparkles className="w-5 h-5 text-purple-400 mt-1 shrink-0" />
              <p className="text-gray-300">
               <span className="font-medium text-white block mb-1">
  Cross-platform discovery
</span>
<span className="text-gray-300 leading-relaxed">
  Starts from a single name and expands intelligently across platforms.
</span>


              </p>
            </div>

            <div className="flex gap-3">
              <Network className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
              <p className="text-gray-300">
                <span className="font-medium text-white block mb-1">
  Probabilistic verification
</span>
<span className="text-gray-300 leading-relaxed">
  Bayesian inference and record linkage score matches with measurable confidence.
</span>


              </p>
            </div>

            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
              <p className="text-gray-300">
               <span className="font-medium text-white block mb-1">
  Real reach only
</span>
<span className="text-gray-300 leading-relaxed">
 Mahanalobis Distance filters Bot networks and fake engagement out automatically at scale.
</span>


              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="pt-6 -mt-6">
 <div className="max-w-4xl mx-auto rounded-2xl bg-[#111114] border border-white/10 shadow-xl px-8 py-6">

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-gray-300 text-sm">
      
      <div className="flex flex-col items-center gap-3">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <Briefcase className="w-5 h-5 text-purple-400" />
        </div>
        <span className="font-semibold">30+ Years Experience</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <Activity className="w-5 h-5 text-cyan-400" />
        </div>
        <span className="font-semibold">100M+ API Calls</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <Database className="w-5 h-5 text-amber-400" />
        </div>
        <span className="font-semibold">Petabyte Scale</span>
      </div>

    </div>
  </div>
</div>
    </section>

    {/* panels come AFTER this */}

  </div>
</section>


          
          {/* Enhanced Cards Grid */}
          <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto px-4">            
            {/* Card 1: Unified Identity */}
            <div className="feature-card group">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <Sparkles className="feature-icon" />
                </div>
                <h3 className="feature-title">
                  Your Complete Digital Identity
                </h3>
              </div>
              <p className="feature-description">
                Connect once and Prism automatically discovers and links all your platforms—TikTok, Twitch, Kick, Instagram, YouTube, Twitter/X, and more.
              </p>
              <p className="feature-body">
                No more juggling analytics dashboards. See your entire creator presence unified in one place with real-time updates across every platform you're on.
              </p>
            </div>

            {/* Card 2: Smart Discovery */}
            <div className="feature-card group">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <Network className="feature-icon" />
                </div>
                <h3 className="feature-title">
                  Auto-Discovery That Actually Works
                </h3>
              </div>
              <p className="feature-description">
                Prism's discovery engine finds all your connected accounts automatically. It learns your patterns and gets smarter over time.
              </p>
              <p className="feature-body">
                Links your Linktree? Check. Bio cross-references? Found. Username variations? Matched. High-confidence scoring means you see what's actually yours.
              </p>
            </div>

            {/* Card 3: Production Ready */}
            <div className="feature-card group">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <Cpu className="feature-icon" />
                </div>
                <h3 className="feature-title">
                  Built for Real Creators
                </h3>
              </div>
              <p className="feature-description">
                Enterprise-grade architecture that handles millions of data points. Fast, reliable, and designed for creators who take their brand seriously.
              </p>
              <p className="feature-body">
                This isn't a beta toy—it's production infrastructure built by engineers who've scaled systems handling 100M+ daily requests. Your data deserves better.
              </p>
            </div>

            {/* Card 4: Always On */}
            <div className="feature-card group">
              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <Shield className="feature-icon" />
                </div>
                <h3 className="feature-title">
                  Zero Downtime, Zero Drama
                </h3>
              </div>
              <p className="feature-description">
                No platform API dependencies means when Instagram goes down, your dashboard stays up. Real-time updates without the fragility.
              </p>
              <p className="feature-body">
                Built to survive platform chaos. Bot filtering keeps fake engagement out. Distributed processing means your analytics never sleep, even when you do.
              </p>
            </div>

          </div>

          {/* WHITE PAPER CTA SECTION - NEW! */}
          <section className="relative px-6 py-24 md:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 grid-cyber opacity-10" />
            
            <div className="relative max-w-6xl mx-auto">
              <div className="card-glow p-12 md:p-16 text-center">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300 font-semibold">Technical White Paper</span>
                </div>

                {/* Main heading */}
                <h2 className="text-4xl md:text-6xl font-black mb-6 text-glow" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em'
                }}>
                  The Missing Layer of the OSI Model
                </h2>

                {/* Description */}
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Read our complete white paper on building permanent infrastructure for digital civilization. 
                  From mathematical foundations to civilization-scale impact.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="/whitepaper"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Read White Paper
                    <FileText className="w-5 h-5" />
                  </a>

                  <a 
                    href="/PRISM_White_Paper_Final.pdf"
                    download
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Download PDF
                    <Download className="w-5 h-5" />
                  </a>
                </div>

                {/* Bottom stats */}
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-glow" />
                    <span>15 minute read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow" />
                    <span>Technical + Executive Summary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse-glow" />
                    <span>December 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            {signupState === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-emerald-400" />
                <p className="text-2xl font-bold text-emerald-400">
                  You're all set!
                </p>
                <p className="text-lg text-gray-300">
                  Check your email for confirmation.
                </p>
              </div>
            ) : (
              <>
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                  </span>
                  <span className="text-sm font-bold text-purple-300">Limited Beta Access</span>
                </div>
                <p className="text-2xl font-bold text-white mb-8">
                  Stop switching between 10 different analytics dashboards.
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                  <div className="form-row">
                    <input
                      className={`input-primary ${errorMessage ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="you@company.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={signupState === 'submitting'}
                      required
                    />
                    <button
  className="btn-primary whitespace-nowrap min-w-[14rem] px-10 flex items-center justify-center gap-2"
  type="submit"
  disabled={signupState === 'submitting'}
>
  {signupState === 'submitting' ? (
    <>
      <span className="animate-spin">⏳</span>
      Requesting…
    </>
  ) : (
    <>
      Request Beta Access
      <ArrowRight className="w-5 h-5" />
    </>
  )}
</button>

                  </div>
                  {errorMessage && (
                    <p className="text-red-400 text-sm animate-fade-in">
                      {errorMessage}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        
      

      {/* footer */}
      <footer className="relative z-10 border-t border-white/5 py-10 px-6 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto flex justify-between">
          <span>© 2025 Identiq Labs</span>
          <a href="mailto:administrator@identiqlabs.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Mail className="w-4 h-4" /> administrator@identiqlabs.com
          </a>
        </div>
      </footer>
    </div>
  )
}

export default IdentiqLabs