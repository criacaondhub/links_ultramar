import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface BannerLinkProps {
  image: string
  mobileImage?: string
  alt: string
  title: ReactNode
  titleClassName?: string
  ctaLabel: string
  ctaHref: string
  ctaIcon?: ReactNode
  ctaIconPosition?: 'left' | 'right'
  ctaBgColor?: string
  ctaTextColor?: string
  borderColor?: string
  contentMaxWidth?: string
  clipToImage?: boolean
  delay?: number
}

export function BannerLink({
  image,
  mobileImage,
  alt,
  title,
  titleClassName = 'text-left text-[11px] leading-tight font-normal text-[var(--color-text)] md:text-[32px]',
  ctaLabel,
  ctaHref,
  ctaIcon,
  ctaIconPosition = 'left',
  ctaBgColor = 'var(--color-primary)',
  ctaTextColor = 'var(--color-text)',
  borderColor = 'var(--color-primary)',
  contentMaxWidth = 'max-w-[68%] md:max-w-[60%]',
  clipToImage = true,
  delay = 0,
}: BannerLinkProps) {
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
      className={`relative mx-auto block w-full max-w-[1020px] ${mobileImage ? 'aspect-[788/440] md:aspect-[1300/360]' : 'aspect-[1300/360]'} ${clipToImage ? `overflow-hidden border-2 ${mobileImage ? 'rounded-[1.269%/2.273%] md:rounded-[5.154%/18.611%]' : ''}` : ''}`}
      style={
        clipToImage
          ? {
              borderColor,
              borderRadius: mobileImage ? undefined : '5.154% / 18.611%',
            }
          : undefined
      }
    >
      {mobileImage ? (
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileImage} />
          <img
            src={image}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      ) : (
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div
        className={`relative z-10 flex h-full flex-col justify-center gap-[30px] py-6 pl-[90px] md:py-10 ${contentMaxWidth}`}
      >
        <div className={titleClassName}>{title}</div>
        <span
          className="inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-[7px] font-bold tracking-wide whitespace-nowrap uppercase md:gap-2.5 md:px-5 md:py-3 md:text-sm"
          style={{ backgroundColor: ctaBgColor, color: ctaTextColor }}
        >
          {ctaIconPosition === 'left' && ctaIcon}
          {ctaLabel}
          {ctaIconPosition === 'right' && ctaIcon}
        </span>
      </div>
    </motion.a>
  )
}
