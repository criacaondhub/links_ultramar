import { ArrowRight } from 'lucide-react'
import { BannerLink } from '@/components/ui/BannerLink'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
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
        ctaIcon={
          <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        }
        ctaHref={CONFIG.WHATSAPP_URL}
        delay={0}
      />

      <BannerLink
        image="assets/banner-link-02.png"
        alt="FUE Ultramar"
        title={
          <div className="flex flex-col gap-[30px]">
            <img
              src="assets/logo-fue-ultramar.png"
              alt="FUE Ultramar"
              className="h-auto w-[150px] md:w-[220px]"
            />
            <span className="text-[16px] leading-tight font-normal text-[var(--color-text)] md:text-[26px]">
              Entre para a lista de espera para
              <br />o meu programa de mentoria
            </span>
          </div>
        }
        titleClassName=""
        ctaLabel="Quero ser um médico renomado na área"
        ctaIcon={
          <ArrowRight className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        }
        ctaIconPosition="right"
        ctaBgColor="var(--color-secondary)"
        ctaTextColor="var(--color-text-on-secondary)"
        ctaHref={CONFIG.MENTORSHIP_URL}
        borderColor="var(--color-secondary)"
        delay={0.1}
      />

      <BannerLink
        image="assets/banner-link-03.png"
        alt="Conheça o Método Ultramar de Transplante Capilar"
        title={
          <>
            Conheça o Método Ultramar
            <br />
            de Transplante Capilar
          </>
        }
        ctaLabel="Acesse meu site"
        ctaHref={CONFIG.TRANSPLANT_METHOD_URL}
        delay={0.2}
      />
    </section>
  )
}
