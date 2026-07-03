import { motion } from 'framer-motion'
import Beams from '@/components/ui/Beams'

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="pointer-events-none absolute -top-16 right-0 z-0 h-[550px] w-[75vw] max-w-[1000px] md:h-[820px]">
        <Beams
          beamWidth={2}
          beamHeight={20}
          beamNumber={20}
          lightColor="#cb3131"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={20}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4 pt-6 md:px-8">
        <div className="relative aspect-[1536/724] w-full">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            src="assets/Banner-Hero.png"
            alt="Dr. Rafael Ultramar"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
