import { motion } from 'framer-motion'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { CONFIG } from '@/config/content'

const WHATSAPP_GREEN = '#25D366'

export function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={CONFIG.SCHEDULE_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar Avaliação pelo WhatsApp"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 z-50 flex items-center md:bottom-6 md:right-6"
    >
      <span
        className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-lg md:h-[4.5rem] md:w-[4.5rem]"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        <WhatsAppIcon className="h-12 w-12 text-white md:h-[3.4rem] md:w-[3.4rem]" />
      </span>

      <span
        className="-ml-6 flex flex-col justify-center rounded-full py-1 pl-9 pr-5 leading-tight shadow-lg md:pl-10 md:pr-6 md:py-1.5"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        <span className="text-xs font-bold uppercase text-white md:text-sm">
          Agendar
        </span>
        <span className="text-xs font-bold uppercase text-white md:text-sm">
          Avaliação
        </span>
      </span>
    </motion.a>
  )
}
