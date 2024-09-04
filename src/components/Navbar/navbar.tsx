import Image from 'next/image'
import { LanguageSelection } from './languageSelection'
import { img } from '@/assets'
import { NavigationMenu } from './navigationMenu'

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-background px-14 py-3">
      <LanguageSelection />

      <Image
        src={img.porscheLogo}
        alt="Logo da Porsche"
        className="translate--1/2 absolute right-1/2 top-2/4 -translate-y-1/2 translate-x-1/2"
      />

      <NavigationMenu />
    </header>
  )
}
