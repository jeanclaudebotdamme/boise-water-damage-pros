import type { Metadata } from 'next'
import { Phone, Clock, Droplets, CheckCircle, Shield, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Water Damage Restoration Boise | 24/7 Emergency Service',
  description: 'Professional water damage restoration in Boise, ID. Fast response, insurance billing, complete water extraction and drying services.',
}

export default function WaterDamagePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            24/7 Emergency Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Water Damage Restoration in Boise</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Fast, professional water damage restoration. We extract water, dry your property, and restore your home to pre-damage condition.
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

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Professional Water Damage Restoration Services</h2>
            
            <p className="text-gray-600 mb-6">
              When water damage strikes your Boise home or business, every minute counts. Our certified water damage restoration team responds 24/7 to extract water, prevent mold growth, and restore your property quickly and effectively.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <Droplets className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Rapid Water Extraction</h3>
                <p className="text-gray-600 text-sm">Industrial-grade pumps and vacuums remove standing water quickly to minimize damage.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Mold Prevention</h3>
                <p className="text-gray-600 text-sm">Thorough drying prevents mold growth within the critical 24-48 hour window.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Types of Water Damage We Handle</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Burst pipes and plumbing leaks',
                'Flooding from storms or heavy rain',
                'Sewage backup and contaminated water',
                'Appliance leaks (dishwasher, washing machine, water heater)',
                'Roof leaks and ice dams',
                'Foundation seepage and groundwater',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold mb-4">Why Choose Our Boise Water Damage Team?</h3>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <ul className="space-y-4">
                {[
                  { title: '60-Minute Response Time', desc: 'We arrive quickly to minimize damage and start restoration immediately.' },
                  { title: 'IICRC Certified Technicians', desc: 'Our team follows industry best practices for water damage restoration.' },
                  { title: 'Insurance Direct Billing', desc: 'We work directly with your insurance company to simplify the claims process.' },
                  { title: 'Complete Restoration', desc: 'From water extraction to final repairs, we handle the entire process.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4">Our Water Damage Restoration Process</h3>
            <ol className="space-y-4 mb-8">
              {[
                { title: 'Emergency Contact', desc: 'Call us 24/7. We gather information and dispatch our team immediately.' },
                { title: 'Inspection & Assessment', desc: 'We use moisture meters and thermal imaging to assess the full extent of damage.' },
                { title: 'Water Removal', desc: 'Powerful pumps and vacuums extract thousands of gallons of water quickly.' },
                { title: 'Drying & Dehumidification', desc: 'Industrial equipment dries walls, floors, and hidden moisture pockets.' },
                { title: 'Cleaning & Sanitizing', desc: 'Antimicrobial treatments prevent mold and bacteria growth.' },
                { title: 'Restoration', desc: 'We repair or replace damaged materials to restore your property.' },
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
              <h3 className="text-2xl font-bold mb-4">Need Emergency Water Damage Help?</h3>
              <p className="text-gray-300 mb-6">Our team is standing by 24/7 to respond to water damage emergencies in Boise.</p>
              <a 
                href="tel:208-555-0123" 
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (208) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}