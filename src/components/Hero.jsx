import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { devName } from "../constants";
import { styles } from "../styles";
import { AnimationCanvas, Particles } from "./canvas";

const Hero = () => {
  const hasSnappedRef = useRef(false);

  useEffect(() => {
    const isAtTop = () => window.scrollY < 100;
    const goToAbout = () => {
      const el = document.querySelector('#about');
      if (!el) return;
      hasSnappedRef.current = true;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      cleanup();
    };

    const onWheel = (e) => {
      if (hasSnappedRef.current) return;
      if (!isAtTop()) return;
      if (e.deltaY > 0) {
        e.preventDefault();
        goToAbout();
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e) => {
      touchStartY = e.touches?.[0]?.clientY ?? 0;
    };
    const onTouchMove = (e) => {
      if (hasSnappedRef.current) return;
      if (!isAtTop()) return;
      const currentY = e.touches?.[0]?.clientY ?? 0;
      const deltaY = touchStartY - currentY;
      if (deltaY > 10) {
        e.preventDefault();
        goToAbout();
      }
    };

    const cleanup = () => {
      window.removeEventListener('wheel', onWheel, { passive: false });
      window.removeEventListener('touchstart', onTouchStart, { passive: true });
      window.removeEventListener('touchmove', onTouchMove, { passive: false });
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return cleanup;
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="relative w-full h-[600px]">
        {/* Particles Layer */}
        <div className="absolute inset-0 w-full h-screen">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Animation Canvas Layer */}
        {/* <div className="absolute inset-0 w-full h-full pointer-events-auto z-20">
          <AnimationCanvas />
        </div> */}

        {/* Hero Content */}
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          {/* Side Accent */}
          <div className="flex flex-col items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>

          {/* Main Text */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">{devName}</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a software engineer.
            </p>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
