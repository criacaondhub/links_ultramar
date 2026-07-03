import { motion } from 'framer-motion'
import Beams from '@/components/ui/Beams'

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1080px] px-4 pt-6 md:px-8">
      <div className="relative aspect-[1536/724] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#cb3131"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          src="assets/Banner-Hero.png"
          alt="Dr. Rafael Ultramar"
          className="absolute inset-0 z-10 h-full w-full object-contain"
        />
      </div>
    </section>
  )
}
