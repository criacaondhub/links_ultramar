import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

interface BannerLinkProps {
  image: string
  alt: string
  title: ReactNode
  titleClassName?: string
  ctaLabel: string
  ctaHref: string
  ctaIcon?: ReactNode
  ctaIconPosition?: 'left' | 'right'
  borderColor?: string
  delay?: number
}

export function BannerLink({
  image,
  alt,
  title,
  titleClassName = 'text-left text-[36px] leading-tight font-normal text-[var(--color-text)]',
  ctaLabel,
  ctaHref,
  ctaIcon,
  ctaIconPosition = 'left',
  borderColor = 'var(--color-primary)',
  delay = 0,
}: BannerLinkProps) {
  const icon = ctaIcon ?? (
    <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
  )

  return (
    <motion.a
      href={ctaHref}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative mx-auto block aspect-[1300/360] w-full max-w-[1200px] overflow-hidden border-2"
      style={{ borderColor, borderRadius: '5.154% / 18.611%' }}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex h-full max-w-[62%] flex-col justify-center gap-[30px] pl-4 md:max-w-[52%] md:pl-10">
        <div className={titleClassName}>{title}</div>
        <span
          className="inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-[8px] font-bold tracking-wide whitespace-nowrap text-[var(--color-text)] uppercase md:gap-2.5 md:px-6 md:py-3.5 md:text-base"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          {ctaIconPosition === 'left' && icon}
          {ctaLabel}
          {ctaIconPosition === 'right' && icon}
        </span>
      </div>
    </motion.a>
  )
}
