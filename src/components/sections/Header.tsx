import { motion } from 'framer-motion'

export function Header() {
  return (
    <header className="relative z-10 -mt-6 flex flex-col items-center gap-[20px] px-6 pb-0 md:-mt-10">
      <motion.img
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        src="assets/logo-rafael-ultramar.svg"
        alt="Rafael Ultramar"
        className="h-11 w-auto md:h-16"
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className="text-sm font-bold text-[var(--color-text)] md:text-base"
      >
        <span className="text-[var(--color-primary)]">@</span>
        dr.rafaelultramar
      </motion.p>
    </header>
  )
}
