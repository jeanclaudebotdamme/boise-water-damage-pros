import type { Metadata } from 'next'
import { Phone, Clock, Home, CheckCircle, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flood Cleanup Boise | Emergency Flood Restoration',
  description: 'Emergency flood cleanup and restoration in Boise, ID. Fast water extraction, drying, and restoration. 24/7 response.',
}

export default function FloodCleanupPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            Emergency Flood Response
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Flood Cleanup in Boise</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rapid flood cleanup and restoration. We extract flood water, dry your property, and restore your home after any flooding emergency.
          </p>
          <a 
            href="tel:208-555-0123" 
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call (208) 555-0123
          </a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Emergency Flood Cleanup Services</h2>
          
          <p className="text-gray-600 mb-6">
            Flooding can cause devastating damage to your Boise home or business. Whether from heavy rains, storm surge, or plumbing failures, our emergency flood cleanup team responds 24/7 to extract water, prevent secondary damage, and restore your property.
          </p>

          <h3 className="text-2xl font-bold mb-4">Types of Flooding We Handle</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Storm Flooding', desc: 'Heavy rain, flash floods, and storm surge damage' },
              { title: 'Basement Flooding', desc: 'Groundwater seepage and foundation leaks' },
              { title: 'Sump Pump Failure', desc: 'Backup when your sump pump stops working' },
              { title: 'River Flooding', desc: 'Boise River overflow and natural flooding' },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 rounded-xl p-5">
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-4">Our Flood Cleanup Process</h3>
          <ol className="space-y-4 mb-8">
            {[
              { title: 'Emergency Response', desc: 'We arrive within 60 minutes to assess the situation and begin water extraction.' },
              { title: 'Water Extraction', desc: 'Powerful pumps remove standing flood water quickly from all affected areas.' },
              { title: 'Debris Removal', desc: 'We safely remove damaged materials, furniture, and contaminated items.' },
              { title: 'Drying & Dehumidification', desc: 'Industrial equipment thoroughly dries structures and prevents mold.' },
              { title: 'Sanitization', desc: 'Antimicrobial treatments eliminate bacteria and contaminants from flood water.' },
              { title: 'Restoration', desc: 'We rebuild and restore your property to pre-flood condition.' },
            ].map((step, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <div className="font-bold">{step.title}</div>
                  <div className="text-gray-600">{step.desc}</div>
                </div>
              </li>
            ))}
          </ol>

          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center my-12">
            <h3 className="text-2xl font-bold mb-4">Flooding Emergency? We're Here 24/7</h3>
            <p className="text-gray-300 mb-6">Fast response prevents mold growth and structural damage. Call now for immediate help.</p>
            <a 
              href="tel:208-555-0123" 
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Emergency Response
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}