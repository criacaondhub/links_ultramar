import { motion } from 'framer-motion'
import { SocialIconLink } from '@/components/ui/SocialIconLink'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import { LinkedInIcon } from '@/components/ui/LinkedInIcon'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { CONFIG } from '@/config/content'

export function SocialBar() {
  return (
    <section className="flex flex-col items-center px-4 py-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex w-full max-w-[1200px] flex-col items-center gap-5 rounded-3xl border-2 px-[103px] py-6 md:gap-6 md:py-8"
        style={{
          borderColor: 'var(--color-primary)',
          background:
            'linear-gradient(135deg, #232323 0%, #0a0a0a 60%, #000000 100%)',
        }}
      >
        <h3 className="text-center text-xs font-bold uppercase text-[var(--color-text)] md:text-lg">
          Siga nossas redes ou entre em contato
        </h3>

        <div className="flex items-center gap-3 md:gap-4">
          <SocialIconLink
            href={CONFIG.INSTAGRAM_URL}
            label="Instagram"
            delay={0}
          >
            <InstagramIcon className="h-5 w-5 md:h-6 md:w-6" />
          </SocialIconLink>

          <SocialIconLink
            href={CONFIG.LINKEDIN_URL}
            label="LinkedIn"
            delay={0.05}
          >
            <LinkedInIcon className="h-5 w-5 md:h-6 md:w-6" />
          </SocialIconLink>

          <SocialIconLink
            href={CONFIG.SOCIAL_WHATSAPP_URL}
            label="WhatsApp"
            delay={0.1}
          >
            <WhatsAppIcon className="h-5 w-5 md:h-6 md:w-6" />
          </SocialIconLink>

          <SocialIconLink
            href={CONFIG.CLINICA_ULTRAMAR_URL}
            label="Clínica Ultramar"
            delay={0.15}
          >
            <img
              src="assets/icon-clinica-ultramar.png"
              alt=""
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </SocialIconLink>

          <SocialIconLink
            href={CONFIG.TRANSPLANT_METHOD_URL}
            label="Rafael Ultramar"
            delay={0.2}
          >
            <img
              src="assets/icon-clinica-rafael.png"
              alt=""
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </SocialIconLink>
        </div>
      </motion.div>
    </section>
  )
}
