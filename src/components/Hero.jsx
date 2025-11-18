import { useState } from 'react'
import { Sparkles, Send, Gauge, Wand2, Loader2, AlertTriangle } from 'lucide-react'

const electricBlue = '#2563eb'

export default function Hero() {
  const [message, setMessage] = useState('Hi Sarah — loved your recent post about data-driven hiring. Quick idea: we helped Acme cut SDR ramp time by 27% with a simple enablement workflow. Open to a 7‑minute walkthrough next week?')
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(null)
  const [reasons, setReasons] = useState([])
  const [improved, setImproved] = useState('')
  const [error, setError] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const analyze = async () => {
    if (!message.trim()) return
    try {
      setLoading(true)
      setError(null)
      setScore(null)
      setReasons([])
      setImproved('')
      const res = await fetch(`${backend}/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      })

      // Surface non-200 errors to the UI
      if (!res.ok) {
        let detail = ''
        try {
          const errData = await res.json()
          detail = errData?.detail || ''
        } catch (_) {}
        throw new Error(detail || `Analyzer returned ${res.status}`)
      }

      const data = await res.json()
      setScore(typeof data.score === 'number' ? data.score : null)
      setReasons(Array.isArray(data.reasons) ? data.reasons : [])
      setImproved(typeof data.improved === 'string' ? data.improved : '')
    } catch (e) {
      const msg = e?.message || 'Analyzer is temporarily unavailable. Please try again.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-900" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_60%)]" />
      </div>

      {/* nav */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30 grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">ReplyRate</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#why" className="hover:text-white transition-colors">Why ReplyRate</a>
          <button className="ml-2 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors">
            <Send className="h-4 w-4" />
            Try ReplyRate Free
          </button>
        </div>
      </div>

      {/* hero content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-black px-3 py-1 text-xs text-slate-300 shadow-sm">
            <Gauge className="h-3.5 w-3.5 text-blue-400" />
            Real-time LinkedIn outreach analyzer
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Predict Your LinkedIn Reply Rate Before You Hit Send
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            The world’s first real-time outreach message analyzer. Paste your message, get an instant reply probability, and improve it in seconds.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors">
              <Send className="h-5 w-5" />
              Try ReplyRate Free
            </button>
            <p className="text-sm text-slate-400">No credit card required</p>
          </div>
        </div>

        {/* mockup card */}
        <div className="relative">
          <div className="absolute -inset-x-6 -inset-y-6 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_50%)]" />
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur shadow-xl">
            <div className="border-b border-slate-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                Live Analyzer
              </div>
              <div className="text-xs text-slate-500">Interactive</div>
            </div>
            <div className="p-4 md:p-6 grid gap-4">
              {/* input box */}
              <label className="text-sm font-medium text-slate-200">Your LinkedIn message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full rounded-xl border border-slate-800 bg-black p-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 shadow-inner"
                placeholder="Paste a LinkedIn DM, InMail, or connection message..."
              />

              {/* analyze button + error */}
              <div className="flex items-center gap-3">
                <button onClick={analyze} disabled={loading || !message.trim()} className="justify-center inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Analyzing…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Analyze
                    </>
                  )}
                </button>
                {error && (
                  <div className="inline-flex items-center gap-2 rounded-lg border border-rose-700/40 bg-rose-900/20 px-3 py-2 text-rose-300 text-sm">
                    <AlertTriangle className="h-4 w-4 text-rose-400" />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              {/* score + reasons */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="col-span-1 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-black p-4 min-h-[96px]">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Predicted Reply Chance</p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-4xl font-extrabold" style={{color: electricBlue}}>
                      {loading && score === null ? '…' : (score ?? '—')}
                    </span>
                    {typeof score === 'number' && (
                      <span className={`text-xs font-semibold ${score >= 70 ? 'text-emerald-400' : score >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>
                        {score >= 70 ? 'Good' : score >= 40 ? 'Okay' : 'Low'}
                      </span>
                    )}
                    {typeof score === 'number' && <span className="text-slate-400 ml-1 mb-[2px]">%</span>}
                  </div>
                </div>
                <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-900 p-4 min-h-[96px]">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Why your score isn’t higher</p>
                  <ul className="mt-2 text-sm text-slate-200 list-disc list-inside space-y-1 min-h-[60px]">
                    {loading ? (
                      <li className="text-slate-500">Analyzing your message…</li>
                    ) : reasons && reasons.length > 0 ? (
                      reasons.map((r, i) => <li key={i}>{r}</li>)
                    ) : (
                      <li className="text-slate-500">Enter a message and tap Analyze</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* improved output */}
              <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-blue-950 to-slate-900 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-100">
                  <Wand2 className="h-4 w-4 text-blue-400" />
                  Improved version
                </div>
                <p className="mt-2 text-slate-200 text-sm min-h-[60px]">
                  {loading ? 'Generating an improved version…' : (improved || 'Your improved message will appear here.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
