import React from 'react';
import { FileText, Download, ArrowLeft, Mail } from 'lucide-react';

export default function WhitepaperPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background matching Identiq Labs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-purple" />
        <div className="glow-orb glow-orb-cyan" />
        <div className="absolute inset-0 grid-cyber opacity-20" />
      </div>

      {/* Navigation matching Identiq Labs nav */}
      <nav className="relative z-50 nav-glass">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold shadow-lg shadow-purple-500/30">
              I
            </div>
            <span className="text-xl font-bold nav-logo">Identiq Labs</span>
          </a>
          
          <div className="flex items-center gap-6">
            <a href="/" className="nav-link flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="w-full max-w-6xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
            <FileText className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-semibold">Technical White Paper</span>
          </div>
          
          {/* Title */}
          <h1 className="hero-title">
            PRISM
          </h1>
          
          <p className="text-2xl md:text-3xl text-purple-300 font-semibold">
            The Missing Layer of the OSI Model
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/PRISM_White_Paper_Final.pdf"
              download
              className="btn-primary inline-flex items-center gap-2"
            >
              Download PDF
              <Download className="w-5 h-5" />
            </a>
            <button 
              onClick={() => window.print()}
              className="btn-secondary inline-flex items-center gap-2"
            >
              Print
            </button>
          </div>

          {/* Metadata */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400 pt-4">
            <span>Identiq Labs, Inc.</span>
            <span className="hidden sm:inline">•</span>
            <span>December 2025</span>
            <span className="hidden sm:inline">•</span>
            <span>teamprism@identiqlabs.com</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="card-glow p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-6 text-glow">Table of Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Executive Summary', id: 'executive-summary' },
              { title: 'The Problem', id: 'problem' },
              { title: 'Market Opportunity', id: 'market' },
              { title: 'The Solution', id: 'solution' },
              { title: 'How It Works', id: 'how-it-works' },
              { title: 'Performance', id: 'performance' },
              { title: 'Competitive Advantages', id: 'moat' },
              { title: 'Go-to-Market', id: 'gtm' },
              { title: 'Funding Strategy', id: 'funding' },
              { title: 'Team', id: 'team' },
              { title: 'Conclusion', id: 'conclusion' },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-gray-300 hover:text-purple-400 transition-colors pl-4 border-l-2 border-transparent hover:border-purple-400 py-2"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <article className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-20">
        
        {/* Executive Summary */}
        <section id="executive-summary" className="scroll-mt-24">
          <h2 className="section-title">Executive Summary</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              <strong className="text-purple-300">PRISM is identity resolution infrastructure</strong> - the missing layer of the OSI model. It provides cross-platform identity resolution at internet scale with sub-200ms latency and 99.9% availability.
            </p>
            <p>
              Traditional identity verification requires users to prove who they are through explicit authentication. PRISM takes a different approach: comprehensive cross-platform analysis that discovers identity patterns with mathematical precision.
            </p>
            
            {/* Key Capabilities Card */}
            <div className="card-glow p-8 mt-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Key Capabilities</h3>
              <ul className="space-y-4">
                {[
                  'Platform-independent architecture (no API dependencies)',
                  'Advanced computational methods optimized for real-time performance',
                  'Distributed processing architecture with sub-200ms P99 latency',
                  'Mathematical precision through multi-stage validation',
                  'Network effects creating irreversible platform lock-in'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section id="problem" className="scroll-mt-24">
          <h2 className="section-title">The Problem: Fragmented Digital Identity</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="text-xl text-purple-300 font-semibold">
              Digital identity fragmentation is not merely a technical inconvenience - it enables criminal activity, threatens national security, and undermines democratic institutions.
            </p>
            <p>
              Every major societal problem involving digital identity exists because we cannot reliably resolve identity across platforms.
            </p>

            {/* Impact Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: 'Criminal Activity',
                  items: [
                    'Identity theft ($56B annual losses)',
                    'Drug trafficking coordination',
                    'Human trafficking networks',
                    'Organized crime',
                    'Money laundering'
                  ]
                },
                {
                  title: 'National Security',
                  items: [
                    'Foreign influence operations',
                    'Terrorist recruitment',
                    'Espionage via fake identities',
                    'Cyber warfare attribution',
                    'Military OPSEC violations'
                  ]
                },
                {
                  title: 'Child Safety',
                  items: [
                    'CSAM distribution networks',
                    'Predator identification',
                    'Grooming prevention',
                    'Missing children recovery',
                    'Online exploitation'
                  ]
                },
                {
                  title: 'Democratic Integrity',
                  items: [
                    'Election interference',
                    'Coordinated disinformation',
                    'Foreign state actors',
                    'Astroturfing detection',
                    'Platform manipulation'
                  ]
                },
                {
                  title: 'Financial Integrity',
                  items: [
                    'Cryptocurrency fraud',
                    'Investment fraud',
                    'Ponzi schemes',
                    'Market manipulation'
                  ]
                },
                {
                  title: 'Personal Safety',
                  items: [
                    'Cyberstalking prevention',
                    'Domestic abuse tracking',
                    'Restraining orders',
                    'Harassment detection'
                  ]
                }
              ].map((category) => (
                <div key={category.title} className="feature-card group">
                  <h3 className="text-xl font-bold mb-4 text-purple-300">{category.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="market" className="scroll-mt-24">
          <h2 className="section-title">The Market Opportunity</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              While traditional market analysis identifies specific verticals - fraud prevention ($10B), cybersecurity ($100B+), regulatory compliance ($75B), and marketing verification ($50B) - PRISM's true addressable market transcends these categories.
            </p>
            <div className="card-glow p-8 my-8 border-l-4 border-purple-500">
              <p className="text-2xl font-bold text-purple-200 italic">
                "This is not a market opportunity. This is critical infrastructure for digital civilization."
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="scroll-mt-24">
          <h2 className="section-title">Conclusion: Building Permanent Infrastructure</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="text-2xl font-bold text-purple-300">
              PRISM is not a product. It is infrastructure.
            </p>
            <p>
              Like TCP/IP, GPS, and HTTP before it, PRISM will become foundational internet infrastructure that cannot be removed once integrated.
            </p>
            <div className="card-glow p-8 my-8 border-l-4 border-purple-500">
              <p className="text-2xl font-bold text-purple-200 italic">
                "We are not building a company that might get acquired. We are building permanent infrastructure for civilization."
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="card-glow p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-glow">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            For partnership discussions, enterprise inquiries, or investment opportunities
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:teamprism@identiqlabs.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a 
              href="/"
              className="btn-secondary"
            >
              Visit identiqlabs.com
            </a>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/20 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p className="mb-2">© 2025 Identiq Labs, Inc. All rights reserved.</p>
          <p className="text-sm">PRISM is a trademark of Identiq Labs, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
