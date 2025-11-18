import { ClipboardEdit, Gauge, Sparkles } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      title: 'Paste Your Message',
      desc: 'Drop in a LinkedIn DM, InMail, or connection request.',
      icon: ClipboardEdit,
    },
    {
      title: 'Get Your Reply Score (%)',
      desc: 'AI predicts how likely the prospect is to reply.',
      icon: Gauge,
    },
    {
      title: 'Improve Instantly',
      desc: 'See reasons for low reply rate and a stronger version.',
      icon: Sparkles,
    },
  ]

  return (
    <section id="how" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">How It Works</h2>
          <p className="mt-4 text-slate-600">Three simple steps to send better outreach.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Step {i + 1} — {s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
