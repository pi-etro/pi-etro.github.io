import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { devName } from "../constants";
import { styles } from "../styles";
import { octocard, foilMask } from "../assets";

const TiltCard = () => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate rotation based on mouse position relative to card center
      const maxRotation = 15;
      const rotateY = ((e.clientX - centerX) / (window.innerWidth / 2)) * maxRotation;
      const rotateX = -((e.clientY - centerY) / (window.innerHeight / 2)) * maxRotation;

      setTransform({ rotateX, rotateY });

      // Calculate mouse position relative to card (0-100%)
      const cardRelativeX = ((e.clientX - rect.left) / rect.width) * 100;
      const cardRelativeY = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({
        x: Math.max(0, Math.min(100, cardRelativeX)),
        y: Math.max(0, Math.min(100, cardRelativeY)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[370px] cursor-pointer"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-150 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Main Card */}
        <img
          src={octocard}
          alt="Octocard"
          className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
        />

        {/* Iridescent Foil Effect - Full Coverage */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          style={{
            maskImage: `url(${foilMask})`,
            WebkitMaskImage: `url(${foilMask})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        >
          {/* Full coverage iridescent gradient */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
                radial-gradient(
                  circle at ${mousePosition.x}% ${mousePosition.y}%,
                  hsl(${(mousePosition.x * 3.6) % 360}, 100%, 80%) 0%,
                  hsl(${((mousePosition.x * 3.6) + 60) % 360}, 100%, 75%) 20%,
                  hsl(${((mousePosition.x * 3.6) + 120) % 360}, 100%, 70%) 40%,
                  hsl(${((mousePosition.x * 3.6) + 180) % 360}, 100%, 65%) 60%,
                  hsl(${((mousePosition.x * 3.6) + 240) % 360}, 100%, 70%) 80%,
                  hsl(${((mousePosition.x * 3.6) + 300) % 360}, 100%, 75%) 100%
                )
              `,
              mixBlendMode: "color-dodge",
              opacity: 0.5,
            }}
          />
          
          {/* Additional iridescent overlay for more depth */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
                radial-gradient(
                  circle at ${mousePosition.x}% ${mousePosition.y}%,
                  rgba(255, 255, 255, 0.4) 0%,
                  rgba(255, 255, 255, 0.2) 30%,
                  rgba(255, 255, 255, 0.1) 60%,
                  transparent 100%
                )
              `,
              mixBlendMode: "overlay",
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    </div>
  );
};

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
      <div className="relative w-full h-full">
        {/* Hero Content */}
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16`}
        >
          {/* Left Side - Text Content */}
          <div className="flex flex-row items-start gap-5">
            {/* Side Accent */}
            <div className="flex flex-col items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 h-40 sm:h-80 violet-gradient" />
            </div>

            {/* Main Text */}
            <div className="flex flex-col">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">{devName}</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I'm a software engineer.
              </p>
            </div>
          </div>

          {/* Right Side - Tilt Card */}
          <div className="flex-1 flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            <TiltCard />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Right Side */}
      <div className="absolute bottom-10 right-10 flex justify-end items-center">
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
