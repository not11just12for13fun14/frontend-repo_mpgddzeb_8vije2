export default function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      blurb: '10 message predictions/day',
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$29/mo',
      blurb: 'Unlimited predictions',
      cta: 'Get Started',
      highlight: true,
    },
    {
      name: 'Agency',
      price: '$99/mo',
      blurb: 'Team seats + analytics',
      cta: 'Get Started',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Pricing</h2>
          <p className="mt-4 text-slate-300">Pick a plan that fits your volume.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`${t.highlight ? 'ring-2 ring-blue-600' : 'border border-slate-800'} rounded-2xl bg-slate-900 p-6 shadow-sm`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${t.highlight ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>{t.highlight ? 'Popular' : ' '}</span>
              </div>
              <div className="mt-4 text-3xl font-extrabold text-white">{t.price}</div>
              <p className="mt-2 text-slate-300">{t.blurb}</p>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 font-semibold transition-colors ${t.highlight ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
