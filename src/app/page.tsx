import { Hero } from '@/components/Hero'
import { Models } from '@/components/Models'

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center">
      <Hero />
      <Models />
    </main>
  )
}
