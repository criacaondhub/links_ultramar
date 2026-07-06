import { Hero } from './components/sections/Hero'
import { Header } from './components/sections/Header'
import { Profile } from './components/sections/Profile'
import { LinkBanners } from './components/sections/LinkBanners'
import { SocialBar } from './components/sections/SocialBar'
import { FloatingWhatsAppButton } from './components/ui/FloatingWhatsAppButton'

function App() {
  return (
    <main className="min-h-screen bg-transparent text-[var(--color-text)]">
      <Hero />
      <Header />
      <Profile />
      <LinkBanners />
      <SocialBar />
      {/* Próximas seções serão adicionadas aqui conforme aprovadas */}
      <FloatingWhatsAppButton />
    </main>
  )
}

export default App
