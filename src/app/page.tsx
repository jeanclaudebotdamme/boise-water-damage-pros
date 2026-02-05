'use client';

import { useState, useEffect } from 'react';
import { Phone, Clock, Shield, Award, MapPin, Droplets, Home as HomeIcon, AlertTriangle, CheckCircle, MessageCircle, X, Send, ChevronRight } from 'lucide-react';

// Chat Component
function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hi! Are you dealing with water damage right now? I'm here to help 24/7.", isUser: false }
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Auto-open after 5 seconds
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    
    // Simulate response (in production, this connects to me)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I understand. To connect you with the right specialist, can you tell me: 1) What type of water damage? (burst pipe, flooding, sewage) 2) Is your power still on? 3) Do you have homeowners insurance?", 
        isUser: false 
      }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg flex items-center gap-2 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold">Chat Now</span>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Emergency Support</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.isUser 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                onClick={handleSend}
                className="bg-primary hover:bg-primary-dark text-white p-2 rounded-lg"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Lead Form Component
function LeadForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    damageType: '',
    insurance: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this sends to me via email/API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Help is on the way!</h3>
        <p className="text-gray-600 mb-4">A restoration specialist will call you within 10 minutes.</p>
        <p className="text-sm text-gray-500">For immediate assistance: <a href="tel:208-555-0123" className="text-primary font-semibold">(208) 555-0123</a></p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-6">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>1</div>
        <div className="flex-1 h-1 bg-gray-200 rounded">
          <div className="h-full bg-primary rounded transition-all" style={{width: step === 1 ? '33%' : step === 2 ? '66%' : '100%'}}></div>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}>2</div>
        <div className="flex-1 h-1 bg-gray-200 rounded">
          <div className="h-full bg-primary rounded transition-all" style={{width: step >= 2 ? '50%' : '0%'}}></div>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200'}`}>3</div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">What's your emergency?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Burst Pipe', 'Flooding', 'Sewage Backup', 'Mold', 'Roof Leak', 'Appliance Leak'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => { setFormData({...formData, damageType: type}); setStep(2); }}
                  className={`p-4 border-2 rounded-xl text-left hover:border-primary transition-colors ${formData.damageType === type ? 'border-primary bg-blue-50' : 'border-gray-200'}`}
                >
                  <Droplets className={`w-5 h-5 mb-2 ${formData.damageType === type ? 'text-primary' : 'text-gray-400'}`} />
                  <span className="font-medium">{type}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Where are you located?</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="(208) 555-0123"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Property Address</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="123 Main St, Boise, ID"
              />
            </div>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Do you have insurance?</h3>
            <p className="text-gray-600 text-sm">We work directly with insurance companies to handle claims.</p>
            
            <div className="space-y-3">
              {['Yes - Homeowners Insurance', 'Yes - Renters Insurance', 'Not Sure', 'No Insurance'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFormData({...formData, insurance: option})}
                  className={`w-full p-4 border-2 rounded-xl text-left hover:border-primary transition-colors flex items-center gap-3 ${formData.insurance === option ? 'border-primary bg-blue-50' : 'border-gray-200'}`}
                >
                  <Shield className={`w-5 h-5 ${formData.insurance === option ? 'text-primary' : 'text-gray-400'}`} />
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-lg transition-colors text-lg"
            >
              Get Help Now
            </button>
            
            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to be contacted about restoration services.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Emergency Banner */}
      <div className="bg-secondary text-white py-2 px-4 text-center text-sm font-semibold">
        <Clock className="w-4 h-4 inline-block mr-2" />
        24/7 Emergency Service Available Now — Call (208) 555-0123
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Licensed & Insured
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Insurance Direct Billing
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Emergency Water Damage Restoration in{' '}
                <span className="text-blue-400">Boise</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300">
                Immediate 24/7 response to water damage emergencies. We work directly with your insurance. Free estimates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:208-555-0123" 
                  className="bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (208) 555-0123
                </a>
                <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/30 transition-colors">
                  Get Free Estimate
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">60min</div>
                  <div className="text-xs sm:text-sm text-gray-400">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">Availability</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:pl-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <Award className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="font-bold">IICRC Certified</div>
              <div className="text-sm text-gray-600">Industry Standard</div>
            </div>
            <div className="p-4">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="font-bold">Fully Insured</div>
              <div className="text-sm text-gray-600">Peace of Mind</div>
            </div>
            <div className="p-4">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="font-bold">24/7 Emergency</div>
              <div className="text-sm text-gray-600">Always Available</div>
            </div>
            <div className="p-4">
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="font-bold">Insurance Ready</div>
              <div className="text-sm text-gray-600">Direct Billing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Restoration Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete water damage restoration services for Boise homeowners and businesses. From emergency extraction to complete reconstruction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Droplets,
                title: 'Water Damage Restoration',
                desc: 'Rapid water extraction, drying, and restoration. We handle burst pipes, flooding, and leaks of any size.',
              },
              {
                icon: AlertTriangle,
                title: 'Mold Remediation',
                desc: 'Safe mold removal and prevention. Certified technicians protect your family from harmful mold exposure.',
              },
              {
                icon: HomeIcon,
                title: 'Flood Cleanup',
                desc: 'Emergency flood response. We extract water, dry structures, and prevent secondary damage.',
              },
              {
                icon: Shield,
                title: 'Sewage Backup Cleanup',
                desc: 'Hazardous sewage cleanup with full sanitization. We handle the dangerous stuff safely.',
              },
              {
                icon: MapPin,
                title: 'Crawl Space Drying',
                desc: 'Specialized equipment to dry crawl spaces and prevent long-term moisture problems.',
              },
              {
                icon: CheckCircle,
                title: 'Insurance Claims Help',
                desc: 'We document everything and work directly with your insurance for hassle-free claims.',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
                <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold mt-4 text-sm hover:underline">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our 5-Step Restoration Process</h2>
            <p className="text-gray-400">Professional restoration from emergency call to completion</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Emergency Call', desc: '24/7 response. We gather info and dispatch immediately.' },
              { step: '02', title: 'Assessment', desc: 'Thorough inspection and moisture detection.' },
              { step: '03', title: 'Water Removal', desc: 'Powerful extraction equipment removes standing water.' },
              { step: '04', title: 'Drying', desc: 'Industrial dehumidifiers and air movers dry everything.' },
              { step: '05', title: 'Restoration', desc: 'Repair and rebuild to pre-damage condition.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
            <p className="text-gray-600">We serve Boise and surrounding communities</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Boise', 'Meridian', 'Nampa', 'Eagle', 'Caldwell', 'Kuna'].map((city) => (
              <div key={city} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                <span className="font-medium">{city}, ID</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Water Damage Can't Wait</h2>
          <p className="text-lg text-gray-600 mb-8">
            Every minute counts when water is damaging your home. Our emergency team is ready to respond 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:208-555-0123" 
              className="bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now (208) 555-0123
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">Free estimates • Insurance direct billing • 60-minute response</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Boise Water Damage Pros</h4>
              <p className="text-sm">24/7 emergency water damage restoration serving Boise and surrounding areas.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Water Damage Restoration</li>
                <li>Mold Remediation</li>
                <li>Flood Cleanup</li>
                <li>Sewage Cleanup</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Areas Served</h4>
              <ul className="space-y-2 text-sm">
                <li>Boise, ID</li>
                <li>Meridian, ID</li>
                <li>Nampa, ID</li>
                <li>Eagle, ID</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm mb-2">24/7 Emergency Hotline:</p>
              <a href="tel:208-555-0123" className="text-white font-bold text-lg hover:text-blue-400">(208) 555-0123</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Boise Water Damage Pros. All rights reserved.</p>
            <p className="mt-2">Licensed & Insured • IICRC Certified</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:hidden z-40">
        <a 
          href="tel:208-555-0123" 
          className="bg-secondary text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full"
        >
          <Phone className="w-5 h-5" />
          Call Emergency Line
        </a>
      </div>
    </main>
  );
}