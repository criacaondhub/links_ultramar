import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pt-6 md:px-8">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        src="assets/Banner-Hero.png"
        alt="Dr. Rafael Ultramar"
        className="block h-auto w-full"
      />
    </section>
  )
}
