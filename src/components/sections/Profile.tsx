import { motion } from 'framer-motion'

export function Profile() {
  return (
    <section className="flex flex-col items-center px-2 py-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        className="relative flex h-28 w-28 items-center justify-center rounded-full md:h-36 md:w-36"
        style={{
          background: 'linear-gradient(180deg, #CB2C30 0%, #111111 100%)',
        }}
      >
        <img
          src="assets/foto-youtube-ultramar.png"
          alt="Dr. Rafael Ultramar"
          className="h-[92%] w-[92%] rounded-full object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        className="mt-5 text-2xl font-normal text-[var(--color-text)] md:text-3xl"
      >
        Dr. Rafael Ultramar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        className="mt-1 text-sm font-bold text-[var(--color-text)] md:text-base"
      >
        @dr.rafaelultramar
      </motion.p>

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
