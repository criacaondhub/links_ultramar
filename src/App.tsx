import { Header } from './components/sections/Header'
import { Profile } from './components/sections/Profile'

function App() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Header />
      <Profile />
      {/* Próximas seções serão adicionadas aqui conforme aprovadas */}
    </main>
  )
}

export default App
