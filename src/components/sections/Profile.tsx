import { motion } from 'framer-motion'

export function Profile() {
  return (
    <section className="flex flex-col items-center px-2 py-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        className="mt-5 text-sm font-bold text-[var(--color-text)] md:text-base"
      >
        <span className="text-[var(--color-primary)]">@</span>
        dr.rafaelultramar
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
        className="mt-4 h-px w-full max-w-[480px] md:max-w-3xl"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        className="mt-2 w-full max-w-[480px] text-[10.5px] leading-snug tracking-tight font-bold text-[var(--color-text)] md:max-w-3xl md:text-xl md:tracking-normal"
      >
        Reconstruo cabelos e transformo vidas{' '}
        <span className="text-[var(--color-primary)]">|</span> +1.500 cirurgias
        <br />
        executadas <span className="text-[var(--color-primary)]">|</span>{' '}
        Cirurgias sem raspagem{' '}
        <span className="text-[var(--color-primary)]">|</span> Alta densidade
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
        className="mt-4 rounded-full px-5 py-2"
        style={{
          backgroundColor: 'var(--color-primary)',
          boxShadow: '0 0 24px 4px rgba(203, 44, 48, 0.55)',
        }}
      >
        <p className="text-xs font-bold text-[var(--color-text)] md:text-sm">
          Mentor de médicos que querem se tornar referência em Transplante
          Capilar
        </p>
      </motion.div>
    </section>
  )
}
