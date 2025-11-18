import { useState } from 'react'
import { Sparkles, Send, Gauge, Wand2 } from 'lucide-react'

const electricBlue = '#2563eb'

export default function Hero() {
  const [message, setMessage] = useState('Hi Sarah — loved your recent post about data-driven hiring. Quick idea: we helped Acme cut SDR ramp time by 27% with a simple enablement workflow. Open to a 7‑minute walkthrough next week?')

  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_60%)]" />
      </div>

      {/* nav */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30 grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">ReplyRate</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#why" className="hover:text-slate-900 transition-colors">Why ReplyRate</a>
          <button className="ml-2 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors">
            <Send className="h-4 w-4" />
            Try ReplyRate Free
          </button>
        </div>
      </div>

      {/* hero content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
            <Gauge className="h-3.5 w-3.5 text-blue-600" />
            Real-time LinkedIn outreach analyzer
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Predict Your LinkedIn Reply Rate Before You Hit Send
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            The world’s first real-time outreach message analyzer. Paste your message, get an instant reply probability, and improve it in seconds.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors">
              <Send className="h-5 w-5" />
              Try ReplyRate Free
            </button>
            <p className="text-sm text-slate-500">No credit card required</p>
          </div>
        </div>

        {/* mockup card */}
        <div className="relative">
          <div className="absolute -inset-x-6 -inset-y-6 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />
          <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-xl">
            <div className="border-b border-slate-100 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                Live Analyzer
              </div>
              <div className="text-xs text-slate-500">Mockup Preview</div>
            </div>
            <div className="p-4 md:p-6 grid gap-4">
              {/* input box */}
              <label className="text-sm font-medium text-slate-700">Your LinkedIn message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 shadow-inner"
                placeholder="Paste a LinkedIn DM, InMail, or connection message..."
              />

              {/* score + reasons */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="col-span-1 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Predicted Reply Chance</p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-4xl font-extrabold" style={{color: electricBlue}}>74%</span>
                    <span className="text-xs text-emerald-600 font-semibold">Good</span>
                  </div>
                </div>
                <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Why your score isn’t higher</p>
                  <ul className="mt-2 text-sm text-slate-700 list-disc list-inside space-y-1">
                    <li>Message feels slightly generic — missing 1:1 personalization</li>
                    <li>CTA asks for time without clear value exchange</li>
                    <li>Could be shorter by ~20% for skim readers</li>
                  </ul>
                </div>
              </div>

              {/* improved output */}
              <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                  <Wand2 className="h-4 w-4 text-blue-600" />
                  Improved version
                </div>
                <p className="mt-2 text-slate-700 text-sm">
                  Sarah — your post on data‑driven hiring was spot on. We helped Acme cut SDR ramp time 27% with a 2‑step enablement workflow. Would a 7‑min async walkthrough help you evaluate if it’s relevant?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
