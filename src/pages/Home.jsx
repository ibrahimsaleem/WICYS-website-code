import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import heroImg from '../assets/memberUH.jpg'
import fairImg from '../assets/fair.jpg'
import sessionImg from '../assets/session.jpg'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero">
        <div className="mx-auto container-wide px-4 md:px-6 py-20 md:py-28 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Welcome to WiCyS UH Chapter</h1>
                <p className="mt-4 text-white/90 text-lg max-w-prose">
                  We recruit, retain, and advance women to build a robust cybersecurity workforce at the University of Houston. 
                  Join our community of 48+ passionate members across undergraduate and graduate programs.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/join" className="bg-wicys-green text-ink-900 font-bold px-6 py-3 rounded-md shadow hover:opacity-90 transition-opacity">Join Our Community</a>
                  <a href="/events" className="bg-white/90 text-wicys-purple font-semibold px-6 py-3 rounded-md shadow hover:bg-white transition-colors">Upcoming Events</a>
                  <a href="/resources" className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-white/15 transition-colors">Explore Resources</a>
                </div>
              </div>
            </Reveal>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <img src={heroImg} alt="Women of WiCyS UH at campus" className="col-span-2 h-64 md:h-72 w-full object-cover rounded-xl shadow-2xl ring-1 ring-white/20" />
                <img src={fairImg} alt="WiCyS UH at involvement fair" className="h-40 md:h-44 w-full object-cover rounded-xl shadow-xl ring-1 ring-white/20" />
                <img src={sessionImg} alt="Workshop session with members" className="h-40 md:h-44 w-full object-cover rounded-xl shadow-xl ring-1 ring-white/20" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto container-wide px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['48+', 'Active Members'],
              ['12', 'Graduate Students'],
              ['36', 'Undergraduates'],
              ['2', 'AI-Powered Tools'],
            ].map(([stat, label], i) => (
              <Reveal key={label} delay={i * 0.1}>
                <div className="p-4">
                  <div className="text-3xl md:text-4xl font-bold text-wicys-purple">{stat}</div>
                  <div className="text-gray-600 mt-1">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto container-wide px-4 md:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Choose Your Membership</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Whether you're just starting or ready to accelerate your cybersecurity career, 
                we have the perfect membership tier for you.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <div className="rounded-xl border bg-white p-8 shadow-sm">
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="text-2xl font-bold">Free Membership</h3>
                  <span className="text-2xl font-bold text-gray-600">$0</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Access to all chapter sessions and events',
                    'Basic educational resources',
                    'Community Discord access',
                    'Chapter email updates',
                    'Networking opportunities',
                    'Resume review sessions',
                  ].map(benefit => (
                    <li key={benefit} className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-wicys-green flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href="/join" className="block w-full text-center bg-gray-100 text-gray-900 font-semibold py-3 rounded-md hover:bg-gray-200 transition-colors">
                  Get Started Free
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-xl border-2 border-wicys-purple bg-gradient-to-br from-purple-50 to-white p-8 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-wicys-purple text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="text-2xl font-bold text-wicys-purple">Premium Membership</h3>
                  <span className="text-2xl font-bold text-wicys-purple">$19<span className="text-sm">/year</span></span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Everything in Free Membership',
                    'Full access to CareerPath AI tool',
                    'Full access to AI Resume Generator',
                    'Weekly cybersecurity newsletter',
                    'Weekly job opportunities newsletter',
                    'Priority access to workshops',
                    'Exclusive industry mentorship',
                    'Leadership opportunities',
                    'Committee participation',
                  ].map(benefit => (
                    <li key={benefit} className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-wicys-purple flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href="/join" className="block w-full text-center bg-wicys-purple text-white font-semibold py-3 rounded-md hover:bg-wicys-purple/90 transition-colors">
                  Upgrade to Premium
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto container-wide px-4 md:px-6 py-16">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission & Vision</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          <Reveal>
            <div className="rounded-xl border p-8 bg-white shadow-sm text-center">
              <div className="w-16 h-16 bg-wicys-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-wicys-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-wicys-purple mb-3">Mission</h3>
              <p className="text-gray-600">Recruit, retain and advance women to build a robust cybersecurity workforce.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl border p-8 bg-white shadow-sm text-center">
              <div className="w-16 h-16 bg-wicys-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-wicys-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-wicys-purple mb-3">Vision</h3>
              <p className="text-gray-600">A world where cybersecurity workforce is an inclusive space, powered by diverse perspectives.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-xl border p-8 bg-white shadow-sm text-center">
              <div className="w-16 h-16 bg-wicys-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-wicys-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-wicys-purple mb-3">Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Community first</li>
                <li>• Hands-on learning</li>
                <li>• Inclusive leadership</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI Tools Showcase */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="mx-auto container-wide px-4 md:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">AI-Powered Career Tools</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Get exclusive access to cutting-edge AI tools designed specifically for cybersecurity professionals. 
                <span className="text-wicys-purple font-semibold"> Premium members only.</span>
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-wicys-purple/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-wicys-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-wicys-purple">CareerPath AI</h3>
                    <p className="text-gray-600">Personalized roadmap advisor</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Generate custom learning paths</li>
                  <li>• Certification recommendations</li>
                  <li>• Multiple career tracks (Cybersecurity, AI, Data Analysis)</li>
                  <li>• Experience-based guidance</li>
                </ul>
                <a href="/join" className="inline-flex items-center text-wicys-purple font-semibold hover:underline">
                  Get Premium Access →
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-wicys-purple/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-wicys-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-wicys-purple">AI Resume Generator</h3>
                    <p className="text-gray-600">LaTeX resume optimization</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• ATS-optimized formatting</li>
                  <li>• Job description tailoring</li>
                  <li>• Professional LaTeX output</li>
                  <li>• Increase interview chances by 70-80%</li>
                </ul>
                <a href="/join" className="inline-flex items-center text-wicys-purple font-semibold hover:underline">
                  Get Premium Access →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto container-wide px-4 md:px-6 py-16">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Workshops & Labs', 
              desc: 'Hands-on labs in cloud, blue team, and appsec with real tools.',
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )
            },
            {
              title: 'Mentorship', 
              desc: 'Peer and industry mentorship to guide your goals.',
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              )
            },
            {
              title: 'Community', 
              desc: 'Supportive space to learn, build, and lead together.',
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i*0.1}>
              <div className="rounded-xl border p-8 bg-white shadow-sm text-center">
                <div className="w-16 h-16 bg-wicys-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 text-wicys-purple">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-wicys-purple mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto container-wide px-4 md:px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Highlights</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'WiCyS Global Conference 2025', date: 'Apr 2-5, 2025 • Dallas, TX', cta: 'Learn More', href: '/events' },
              { title: 'Officer Photo Shoot', date: 'Apr 2, 2025 • University of Houston', cta: 'View Gallery', href: '/gallery' },
              { title: 'Industrial Advisor Feature', date: 'June 12, 2025 • Isha Desai', cta: 'Read News', href: '/news' },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.1}>
                <div className="rounded-xl border p-8 bg-white hover:shadow-lg transition-shadow">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                  <a className="inline-flex items-center text-wicys-purple font-semibold hover:underline" href={item.href}>
                    {item.cta} →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Highlights */}
      <section className="mx-auto container-wide px-4 md:px-6 py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Photo Highlights</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="/gallery" className="text-wicys-purple font-semibold hover:underline">See all →</a>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[heroImg, fairImg, sessionImg, fairImg, sessionImg, heroImg].map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <img
                src={src}
                alt={
                  i % 3 === 0
                    ? 'WiCyS UH members'
                    : i % 3 === 1
                    ? 'Women at involvement fair'
                    : 'Hands-on workshop with women in cybersecurity'
                }
                className="h-48 md:h-56 w-full object-cover rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-wicys-purple to-purple-600 text-white">
        <div className="mx-auto container-wide px-4 md:px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Cybersecurity Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join 48+ women in cybersecurity at UH. Get access to AI tools, mentorship, workshops, 
              and a supportive community that will accelerate your career.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/join" className="bg-wicys-green text-ink-900 font-bold px-8 py-4 rounded-md shadow-lg hover:opacity-90 transition-opacity">
                Join WiCyS UH Today
              </a>
              <a href="/about" className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-white/15 transition-colors">
                Learn More About Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}