export default function Why() {
  const benefits = [
    'Stops you from sending bad outreach',
    'Saves time and increases replies',
    'Improves sales performance',
    'Perfect for founders, coaches, B2B, agencies, and job seekers',
  ]

  return (
    <section id="why" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Why ReplyRate?</h2>
            <p className="mt-4 text-slate-300">Send confident outreach that earns more replies. ReplyRate helps validate and improve messages before they land in busy inboxes.</p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                  <span className="text-slate-200">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-950 to-slate-900 p-6 shadow-sm">
            <p className="text-sm text-slate-200">“We cut our time editing cold messages by half and booked 2x more meetings in the first week. The instant feedback forces clarity.”</p>
            <div className="mt-4 text-sm text-slate-400">— Early beta user</div>
          </div>
        </div>
      </div>
    </section>
  )
}
