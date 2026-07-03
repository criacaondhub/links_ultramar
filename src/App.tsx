import { Header } from './components/sections/Header'
import { Profile } from './components/sections/Profile'
import { LinkBanners } from './components/sections/LinkBanners'

function App() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Header />
      <Profile />
      <LinkBanners />
      {/* Próximas seções serão adicionadas aqui conforme aprovadas */}
    </main>
  )
}

export default App
