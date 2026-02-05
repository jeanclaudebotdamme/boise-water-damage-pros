import type { Metadata } from 'next'
import { Phone, Clock, AlertTriangle, CheckCircle, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mold Remediation Boise | Professional Mold Removal',
  description: 'Certified mold remediation in Boise, ID. Safe mold removal, testing, and prevention. Free inspections available.',
}

export default function MoldRemediationPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Health Hazard - Act Fast
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Mold Remediation in Boise</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional mold removal and remediation. We safely eliminate mold, restore air quality, and prevent future growth.
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
          <h2 className="text-3xl font-bold mb-6">Professional Mold Remediation Services</h2>
          
          <p className="text-gray-600 mb-6">
            Mold can pose serious health risks to your family and cause significant damage to your property. Our certified mold remediation specialists in Boise safely remove mold, restore air quality, and implement preventive measures to keep your home mold-free.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 rounded-xl p-6">
              <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Signs of Mold</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Musty odors</li>
                <li>• Visible black/green spots</li>
                <li>• Allergy symptoms</li>
                <li>• Recent water damage</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <Shield className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Our Solution</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Containment & removal</li>
                <li>• Air filtration</li>
                <li>• Preventive treatments</li>
                <li>• Post-remediation testing</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Our Mold Remediation Process</h3>
          <ol className="space-y-4 mb-8">
            {[
              { title: 'Inspection & Testing', desc: 'We identify all mold-affected areas and test air quality to determine the extent of contamination.' },
              { title: 'Containment', desc: 'We seal off affected areas to prevent mold spores from spreading during removal.' },
              { title: 'Air Filtration', desc: 'HEPA air scrubbers filter mold spores from the air while we work.' },
              { title: 'Mold Removal', desc: 'We safely remove contaminated materials and clean surfaces with antimicrobial treatments.' },
              { title: 'Drying', desc: 'We eliminate moisture sources that allowed mold to grow.' },
              { title: 'Restoration', desc: 'We repair or replace damaged drywall, insulation, and other materials.' },
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
            <h3 className="text-2xl font-bold mb-4">Suspect Mold in Your Home?</h3>
            <p className="text-gray-300 mb-6">Don't risk your health. Get a professional mold inspection today.</p>
            <a 
              href="tel:208-555-0123" 
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Schedule Free Inspection
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}