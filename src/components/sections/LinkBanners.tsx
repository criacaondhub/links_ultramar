import { BannerLink } from '@/components/ui/BannerLink'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { CONFIG } from '@/config/content'

export function LinkBanners() {
  return (
    <section className="flex flex-col items-center gap-4 px-4 py-6 md:gap-6 md:px-10">
      <BannerLink
        image="assets/banner-link-00.png"
        mobileImage="assets/banner-link-00_mobile.png"
        alt="Uma Imersão online sobre cirurgias No Shave"
        title={
          <div className="flex flex-col items-start gap-[30px] text-left">
            <img
              src="assets/logo-imersao-no-shave.png"
              alt="Imersão"
              className="h-auto w-[190px] md:w-[280px]"
            />
            <h3 className="text-[12px] leading-tight font-normal text-[var(--color-text)] md:text-[32px]">
              Uma Imersão online comigo
              <br />
              sobre cirurgias{' '}
              <span className="font-bold text-[var(--color-secondary)]">
                No Shave
              </span>
            </h3>
          </div>
        }
        titleClassName=""
        contentMaxWidth="max-w-[70%] md:max-w-[68%]"
        ctaLabel="Garanta seu ingresso!"
        ctaIcon={
          <ArrowIcon className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        }
        ctaIconPosition="right"
        ctaBgColor="var(--color-secondary)"
        ctaTextColor="var(--color-text-on-secondary)"
        ctaHref={CONFIG.NO_SHAVE_IMMERSION_URL}
        borderColor="var(--color-secondary)"
        delay={0}
      />

      <BannerLink
        image="assets/banner-link-01.png"
        mobileImage="assets/banner-link-01_mobile.png"
        alt="Faça seu Transplante Capilar comigo"
        title={
          <>
            Faça seu <strong className="font-bold">Transplante</strong>
            <br />
            <strong className="font-bold">Capilar</strong> comigo
          </>
        }
        titleClassName="text-center text-[24px] leading-tight font-normal text-[var(--color-text)] md:text-left md:text-[32px]"
        contentMaxWidth="max-w-[98%] md:max-w-[60%]"
        ctaLabel="Agendar avaliação online e gratuita"
        ctaIcon={
          <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        }
        ctaHref={CONFIG.WHATSAPP_URL}
        delay={0.1}
      />

      <BannerLink
        image="assets/banner-link-02.png"
        mobileImage="assets/banner-link-02_mobile.png"
        alt="FUE Ultramar"
        title={
          <div className="flex flex-col items-center gap-[10px] md:items-start md:gap-[30px]">
            <img
              src="assets/logo-fue-ultramar.png"
              alt="FUE Ultramar"
              className="h-auto w-[100px] md:w-[220px]"
            />
            <span className="text-center text-[24px] leading-tight font-normal text-[var(--color-text)] md:text-left md:text-[23px]">
              Entre para a lista de espera para
              <br />o meu programa de mentoria
            </span>
          </div>
        }
        titleClassName=""
        contentMaxWidth="max-w-[98%] md:max-w-[62%]"
        ctaLabel="Quero ser um médico renomado na área"
        ctaIcon={
          <ArrowIcon className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        }
        ctaIconPosition="right"
        ctaBgColor="var(--color-secondary)"
        ctaTextColor="var(--color-text-on-secondary)"
        ctaHref={CONFIG.MENTORSHIP_URL}
        borderColor="var(--color-secondary)"
        delay={0.2}
      />

      <BannerLink
        image="assets/banner-link-03.png"
        mobileImage="assets/banner-link-03_mobile.png"
        alt="Conheça o Método Ultramar de Transplante Capilar"
        title={
          <>
            Conheça o <strong className="font-bold">Método Ultramar</strong>
            <br />
            de Transplante Capilar
          </>
        }
        titleClassName="text-center text-[24px] leading-tight font-normal text-[var(--color-text)] md:text-left md:text-[23px]"
        contentMaxWidth="max-w-[98%] md:max-w-[68%]"
        ctaLabel="Acesse meu site"
        ctaIcon={
          <ArrowIcon className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        }
        ctaIconPosition="right"
        ctaHref={CONFIG.TRANSPLANT_METHOD_URL}
        delay={0.3}
      />

      <BannerLink
        image="assets/banner-link-06.jpg"
        alt="A imersão no shave mais completa do Brasil"
        title={
          <div className="flex flex-col items-start gap-[30px] text-left">
            <img
              src="assets/logo-no-shave.png"
              alt="No Shave Experience"
              className="h-auto w-[180px] md:w-[260px]"
            />
            <h3 className="text-[12px] leading-tight font-normal text-[var(--color-text)] md:text-[23px]">
              A imersão no shave{' '}
              <span className="font-bold text-[var(--color-secondary)]">
                mais
                <br />
                completa do Brasil
              </span>
            </h3>
          </div>
        }
        titleClassName=""
        contentMaxWidth="max-w-[66%] md:max-w-[68%]"
        ctaLabel="Garanta sua vaga"
        ctaIcon={
          <ArrowIcon className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        }
        ctaIconPosition="right"
        ctaBgColor="var(--color-secondary)"
        ctaTextColor="var(--color-text-on-secondary)"
        ctaHref={CONFIG.NO_SHAVE_EXPERIENCE_URL}
        borderColor="var(--color-secondary)"
        delay={0.35}
      />

      <BannerLink
        image="assets/banner-link-04.png"
        mobileImage="assets/banner-link-04_mobile.png"
        alt="Palestras, eventos exclusivos, congressos e mais"
        title={
          <>
            Palestras, eventos exclusivos,
            <br />
            congressos e mais
          </>
        }
        titleClassName="text-center text-[24px] leading-tight font-normal text-[var(--color-text)] md:text-left md:text-[23px]"
        contentMaxWidth="max-w-[98%] md:max-w-[68%]"
        ctaLabel="Fale com minha assessoria de imprensa"
        ctaIcon={
          <ArrowIcon className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        }
        ctaIconPosition="right"
        ctaHref={CONFIG.PRESS_OFFICE_URL}
        delay={0.4}
      />

      <BannerLink
        image="assets/banner-link-05.png"
        mobileImage="assets/banner-link-05_mobile.png"
        alt="Onde a Clínica Ultramar está localizada"
        title={
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:gap-3 md:text-left">
            <h3 className="text-[24px] leading-tight font-normal text-[var(--color-text)] md:text-[28px]">
              Onde a Clínica Ultramar
              <br />
              está localizada:
            </h3>
            <h4 className="text-[13px] leading-snug font-normal text-[var(--color-text)] md:text-[14px]">
              R. Manuel da Nóbrega, 1986 - Vila Mariana, São Paulo
              <br />
              (Em frente ao Parque Ibirapuera - SP)
            </h4>
          </div>
        }
        titleClassName=""
        contentMaxWidth="max-w-[92%] md:max-w-[60%]"
        ctaLabel="Confira no mapa"
        ctaHref={CONFIG.MAPS_URL}
        clipToImage={false}
        delay={0.5}
      />
    </section>
  )
}
