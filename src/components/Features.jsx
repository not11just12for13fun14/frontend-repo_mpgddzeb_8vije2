import { Activity, Stars, Wand2, UserRoundCheck } from 'lucide-react'

export default function Features() {
  const items = [
    { title: 'Real-Time Reply Prediction', desc: 'Instant score as you type — no waiting.', icon: Activity },
    { title: 'Message Quality Score', desc: 'Clarity, brevity, tone, and value measured.', icon: Stars },
    { title: 'Instant Improvements', desc: 'One-click suggestions that boost replies.', icon: Wand2 },
    { title: 'Personalization Suggestions', desc: 'Smart cues to make it feel 1:1.', icon: UserRoundCheck },
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Features</h2>
          <p className="mt-4 text-slate-600">Everything you need to increase replies.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
