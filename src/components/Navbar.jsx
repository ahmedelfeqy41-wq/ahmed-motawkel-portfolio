import { Code2, FolderKanban, Home, Mail, Sparkles } from 'lucide-react'

const links = [
  { href: '#home', label: 'الرئيسية', icon: Home },
  { href: '#about', label: 'نبذة', icon: Sparkles },
  { href: '#skills', label: 'المهارات', icon: Code2 },
  { href: '#projects', label: 'المشاريع', icon: FolderKanban },
  { href: '#contact', label: 'تواصل', icon: Mail },
]

export default function Navbar() {
  return (
    <>
      <header className="topbar">
        <a href="#home" className="brand-mark" aria-label="Ahmed Motawkel home">
          Ahmed Motawkel
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <nav className="mobile-dock" aria-label="Mobile navigation">
        {links.map((link) => {
          const Icon = link.icon

          return (
            <a key={link.href} href={link.href}>
              <Icon size={22} strokeWidth={2.2} />
              <span>{link.label}</span>
            </a>
          )
        })}
      </nav>
    </>
  )
}
