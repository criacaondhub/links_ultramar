import { motion } from 'framer-motion'

export function Header() {
  return (
    <header className="flex justify-center pt-8 pb-6 px-6 md:pt-10">
      <motion.img
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        src="assets/logo-rafael-ultramar.svg"
        alt="Rafael Ultramar"
        className="h-8 w-auto md:h-10"
      />
    </header>
  )
}
