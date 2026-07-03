import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SocialIconLinkProps {
  href: string
  label: string
  children: ReactNode
  delay?: number
}

export function SocialIconLink({
  href,
  label,
  children,
  delay = 0,
}: SocialIconLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[var(--color-text)] md:h-12 md:w-12"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      {children}
    </motion.a>
  )
}
