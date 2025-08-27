import { useState, useMemo } from 'react'
import Reveal from '../components/Reveal.jsx'

function Input({ label, required=false, ...props }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium">{label}{required && ' *'}</span>
      <input {...props} className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wicys-purple/40" />
    </label>
  )
}

function Select({ label, children, required=false, ...props }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium">{label}{required && ' *'}</span>
      <select {...props} className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wicys-purple/40">
        {children}
      </select>
    </label>
  )
}

export default function JoinUs() {
  const initial = useMemo(() => ({
    fullName: '',
    email: '',
    major: '',
    gradYear: '',
    interests: '',
    membershipType: 'free',
    consent: false,
  }), [])
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.fullName || !form.email || !form.major || !form.gradYear || !form.consent) return
    const list = JSON.parse(localStorage.getItem('wicysMembers') || '[]')
    list.push({ ...form, submittedAt: new Date().toISOString() })
    localStorage.setItem('wicysMembers', JSON.stringify(list))
    setSubmitted(true)
  }

  const reset = () => {
    setForm(initial)
    setSubmitted(false)
  }

  const faqs = [
    ['Who can join?', 'All UH students interested in cybersecurity are welcome, regardless of major or experience level.'],
    ['When does membership start?', 'Your membership begins immediately after form submission and payment (if Premium).'],
    ['How do I access Premium benefits?', 'After Premium payment confirmation, you will receive access credentials via email.'],
    ['Can I upgrade later?', 'Yes! Free members can upgrade to Premium membership at any time.'],
  ]

  return (
    <div id="join" className="mx-auto container-wide px-4 md:px-6 py-12">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-bold">Join WiCyS UH</h1>
        <p className="mt-3 text-gray-600 max-w-prose">
          Join our vibrant community of women in cybersecurity at the University of Houston.
          Choose the membership tier that best fits your needs and start your cybersecurity journey today.
        </p>
      </Reveal>

      {/* Official UH Campus Labs Registration */}
      <section className="mt-12">
        <Reveal>
          <div className="bg-gradient-to-r from-wicys-purple to-purple-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Official UH Student Organization Registration</h2>
            <p className="text-lg mb-6 opacity-90">
              Join WiCyS UH as an official UH student organization member through Campus Labs
            </p>
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4">How to Join:</h3>
              <ol className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="bg-white text-wicys-purple rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span>Access UH login at <a href="https://uh.campuslabs.com/engage/organization/wicsuh" target="_blank" rel="noreferrer" className="underline font-semibold">Campus Labs</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-wicys-purple rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span>Go to "Get Involved" section</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-wicys-purple rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span>Search for "wicsuh"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-wicys-purple rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <span>Click "Join" to become an official member</span>
                </li>
              </ol>
            </div>
            <a 
              href="https://uh.campuslabs.com/engage/organization/wicsuh" 
              target="_blank" 
              rel="noreferrer"
              className="bg-wicys-green text-ink-900 font-bold px-8 py-3 rounded-md shadow-lg hover:opacity-90 transition-opacity inline-block"
            >
              Join WiCyS UH on Campus Labs →
            </a>
          </div>
        </Reveal>
      </section>

      <div className="mt-10 grid lg:grid-cols-3 gap-8">
        {/* Membership Tiers */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-xl border p-6 bg-white">
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-bold">Free Student Membership</h2>
                <span className="text-gray-500">$0</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Access to all chapter sessions and events',
                  'Basic educational resources',
                  'Community Discord access',
                  'Chapter email updates',
                  'Networking opportunities',
                  'Resume review sessions',
                ].map(benefit => (
                  <li key={benefit} className="flex gap-3 items-start">
                    <svg className="w-5 h-5 text-wicys-purple flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <label className="mt-6 flex items-center gap-3">
                <input
                  type="radio"
                  name="membershipType"
                  value="free"
                  checked={form.membershipType === 'free'}
                  onChange={onChange}
                  className="text-wicys-purple"
                />
                <span className="text-sm font-medium">Select Free Membership</span>
              </label>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border-2 border-wicys-purple p-6 bg-gradient-to-br from-purple-50 to-white">
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-bold text-wicys-purple">Premium Membership</h2>
                <span className="text-wicys-purple font-medium">$19/year</span>
              </div>
              <ul className="mt-6 space-y-3">
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
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <label className="mt-6 flex items-center gap-3">
                <input
                  type="radio"
                  name="membershipType"
                  value="premium"
                  checked={form.membershipType === 'premium'}
                  onChange={onChange}
                  className="text-wicys-purple"
                />
                <span className="text-sm font-medium">Select Premium Membership</span>
              </label>
            </div>
          </Reveal>
        </div>

        {/* Membership Form */}
        <div className="lg:col-span-1">
          <Reveal delay={0.2}>
            {submitted ? (
              <div className="rounded-xl border p-6 bg-green-50">
                <h2 className="font-semibold text-green-700">Thank you for joining!</h2>
                <p className="mt-1 text-green-700">
                  We received your membership form. Check your email for next steps and payment instructions
                  {form.membershipType === 'premium' ? ' for Premium membership' : ''}.
                </p>
                <div className="mt-4 flex gap-3">
                  <a className="bg-wicys-purple text-white px-4 py-2 rounded-md" href="https://discord.com" target="_blank" rel="noreferrer">Join Discord</a>
                  <button className="px-4 py-2 rounded-md border" onClick={reset}>Submit another</button>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border p-6 bg-white">
                <h2 className="font-semibold text-wicys-purple text-lg">Additional Registration Form</h2>
                <p className="text-sm text-gray-600 mt-1 mb-4">
                  Complete this form for additional benefits and chapter communications
                </p>
                <form className="mt-4 grid gap-4" onSubmit={onSubmit}>
                  <Input label="Full Name" name="fullName" required value={form.fullName} onChange={onChange} placeholder="First Last" />
                  <Input label="Email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="name@uh.edu" />
                  <Input label="Major" name="major" required value={form.major} onChange={onChange} placeholder="Computer Science" />
                  <Select label="Graduation Year" name="gradYear" required value={form.gradYear} onChange={onChange}>
                    <option value="">Select year</option>
                    {Array.from({ length: 8 }, (_, i) => 2025 + i).map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </Select>
                  <label className="grid gap-1 text-sm">
                    <span className="font-medium">Interests</span>
                    <textarea
                      name="interests"
                      value={form.interests}
                      onChange={onChange}
                      rows={4}
                      className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wicys-purple/40"
                      placeholder="Cloud, blue team, CTFs, networking, leadership..."
                    />
                  </label>
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} className="mt-1" />
                    <span>I agree to receive emails about WiCyS UH events and updates.</span>
                  </label>
                  <div className="flex gap-3">
                    <button
                      className="bg-wicys-purple text-white font-semibold px-4 py-2 rounded-md disabled:opacity-50"
                      disabled={!form.fullName || !form.email || !form.major || !form.gradYear || !form.consent}
                    >
                      Submit
                    </button>
                    <button type="button" className="px-4 py-2 rounded-md border" onClick={reset}>Reset</button>
                  </div>
                </form>
              </div>
            )}
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="mt-12 rounded-xl border p-8 bg-gray-50">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {faqs.map(([q, a], i) => (
              <div key={q} className="space-y-1">
                <h3 className="font-semibold text-wicys-purple">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}