import { ShoppingBag, UserRound } from 'lucide-react'
import Link from 'next/link'

export function NavigationMenu() {
  const navLinks = [
    {
      href: '/',
      icon: ShoppingBag,
      label: 'Shop',
    },
    {
      href: '/',
      icon: UserRound,
      label: 'My Porsche',
    },
  ]

  return (
    <nav className="flex items-center gap-6">
      {navLinks.map(({ href, icon: Icon, label }, index) => (
        <Link
          href={href}
          key={index}
          className="flex items-center gap-2 text-xs transition-transform hover:scale-105"
        >
          <Icon size={16} />
          {label}
        </Link>
      ))}
    </nav>
  )
}
