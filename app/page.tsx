'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, Zap, Droplets, Paintbrush, Wind, Home, Trees, Lock,
  CheckCircle, ArrowRight, Star, MapPin, Shield, Clock,
  Phone, Search, Users, Award
} from 'lucide-react';

const services = [
  { id: 'plumbing', name: 'Plumbing', icon: Droplets, color: 'from-blue-500 to-cyan-600', desc: 'Repairs, installations, emergencies' },
  { id: 'electrical', name: 'Electrical', icon: Zap, color: 'from-yellow-500 to-amber-600', desc: 'Wiring, panels, lighting' },
  { id: 'hvac', name: 'HVAC', icon: Wind, color: 'from-teal-500 to-emerald-600', desc: 'Heating, cooling, ventilation' },
  { id: 'painting', name: 'Painting', icon: Paintbrush, color: 'from-rose-500 to-pink-600', desc: 'Interior, exterior, commercial' },
  { id: 'roofing', name: 'Roofing', icon: Home, color: 'from-slate-500 to-gray-600', desc: 'Repairs, replacements, inspections' },
  { id: 'landscaping', name: 'Landscaping', icon: Trees, color: 'from-green-500 to-lime-600', desc: 'Design, maintenance, hardscaping' },
  { id: 'locksmith', name: 'Locksmith', icon: Lock, color: 'from-purple-500 to-violet-600', desc: '24/7 emergency, installations' },
  { id: 'handyman', name: 'Handyman', icon: Wrench, color: 'from-orange-500 to-red-600', desc: 'General repairs, installations' },
];

const stats = [
  { value: '10,000+', label: 'Verified Pros' },
  { value: '50+', label: 'Service Categories' },
  { value: '4.8/5', label: 'Average Rating' },
  { value: '24/7', label: 'Emergency Service' },
];

const features = [
  { icon: Shield, title: 'Verified Professionals', desc: 'Background checked and insured contractors' },
  { icon: Star, title: 'Genuine Reviews', desc: 'Real reviews from verified customers' },
  { icon: Clock, title: 'Fast Response', desc: 'Get quotes within hours, not days' },
  { icon: Award, title: 'Satisfaction Guarantee', desc: 'We stand behind the work done' },
];

export default function HomeServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-orange-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Javari Home</span>
                <span className="text-orange-400 text-xs block -mt-1">by CR AudioViz AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#pros" className="text-gray-300 hover:text-white transition">For Pros</a>
              <a href="#find" className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Find a Pro
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm text-orange-300 mb-8"
          >
            <Shield className="w-4 h-4" />
            <span>All pros are verified and insured</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Find Trusted<br/>
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 bg-clip-text text-transparent">
              Home Service Pros
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Connect with verified contractors, plumbers, electricians, and more. 
            Get free quotes from top-rated professionals in your area.
          </motion.p>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                value={selectedService || ''}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-500"
              >
                <option value="">Select Service</option>
                {services.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Find Pros
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-3">Free quotes • No obligation • Compare prices</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Services</h2>
            <p className="text-xl text-gray-400">Find the right professional for any home project</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedService(service.id)}
                className={`p-6 bg-white/5 border rounded-xl text-left transition-all hover:scale-105 ${
                  selectedService === service.id ? 'border-orange-500 bg-orange-500/10' : 'border-white/10'
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-3`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{service.name}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Get connected in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Tell Us Your Project', desc: 'Describe your home service needs and provide your location', icon: Search },
              { step: 2, title: 'Get Matched', desc: 'We connect you with verified professionals in your area', icon: Users },
              { step: 3, title: 'Compare & Choose', desc: 'Review quotes, read reviews, and pick the best pro for you', icon: CheckCircle },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 bg-slate-900/50 border border-white/10 rounded-2xl"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <item.icon className="w-10 h-10 text-orange-400 mb-4 mt-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl text-center"
              >
                <feature.icon className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="find" className="py-20 bg-gradient-to-r from-orange-900/50 to-red-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Find trusted pros for your next home project</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/find" className="px-8 py-4 bg-white text-orange-900 font-semibold rounded-xl hover:bg-gray-100 transition flex items-center gap-2">
              Find a Pro Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/pros" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition">
              Join as a Pro
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Wrench className="w-6 h-6 text-orange-400" />
              <span className="text-white font-semibold">Javari Home</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
