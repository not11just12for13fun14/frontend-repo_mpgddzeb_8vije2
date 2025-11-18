export default function Footer() {
  const links = [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ]

  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 items-center">
        <div className="text-2xl font-bold tracking-tight text-white">ReplyRate</div>
        <div className="mt-6 md:mt-0 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="hover:text-white transition-colors">{l.name}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
