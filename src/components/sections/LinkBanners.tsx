import { ArrowRight } from 'lucide-react'
import { BannerLink } from '@/components/ui/BannerLink'
import { CONFIG } from '@/config/content'

export function LinkBanners() {
  return (
    <section className="flex flex-col items-center gap-4 px-4 py-6 md:gap-6 md:px-10">
      <BannerLink
        image="assets/banner-link-01.png"
        alt="Faça seu Transplante Capilar comigo"
        title={
          <>
            Faça seu <strong className="font-bold">Transplante</strong>
            <br />
            <strong className="font-bold">Capilar</strong> comigo
          </>
        }
        ctaLabel="Agendar avaliação online e gratuita"
        ctaHref={CONFIG.WHATSAPP_URL}
        delay={0}
      />

      <BannerLink
        image="assets/banner-link-02.png"
        alt="FUE Ultramar"
        title={
          <img
            src="assets/logo-fue-ultramar.png"
            alt="FUE Ultramar"
            className="h-auto w-[130px] md:w-[220px]"
          />
        }
        titleClassName="flex items-center"
        ctaLabel="Quero ser um médico renomado na área"
        ctaIcon={
          <ArrowRight className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        }
        ctaIconPosition="right"
        ctaHref={CONFIG.MENTORSHIP_URL}
        borderColor="var(--color-secondary)"
        delay={0.1}
      />
    </section>
  )
}
