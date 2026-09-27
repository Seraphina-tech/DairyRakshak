import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const steps = [
    {
      number: "1",
      title: "Step 1 — Sense",
      description: "IoT smart collar + milk + udder + environmental sensors continuously collect multimodal data."
    },
    {
      number: "2",
      title: "Step 2 — Fuse",
      description: "Data streams are synchronized and combined into one unified signal per animal."
    },
    {
      number: "3",
      title: "Step 3 — Forecast",
      description: "AI model compares against the animal's personalized baseline and predicts mastitis risk 7–14 days in advance."
    },
    {
      number: "4",
      title: "Step 4 — Act",
      description: "TreeSHAP explains the top contributing factors, and the farmer/vet receives a prioritized recommendation."
    }
  ];

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser blocks or file loads async
      });
    }
  };

  return (
    <section 
      id="how-it-works" 
      style={{ scrollMarginTop: '90px' }}
      className="w-full py-20 bg-[var(--bg-main)] border-t border-emerald-900/10 relative"
    >
      <div 
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className="w-full"
      >
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          {/* Row: Kicker on left, CONTINUOUS PIPELINE on right */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#10B981] uppercase">
                HOW IT WORKS
              </span>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">
              CONTINUOUS PIPELINE
            </span>
          </div>

          {/* Heading below kicker */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1E19] text-center tracking-tight max-w-3xl mx-auto leading-snug">
            From raw sensor signal to verified veterinary action.
          </h2>
        </div>

        {/* Video Wrapper — 16:9 full width of inner container, centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ aspectRatio: '16 / 9' }}
          className="w-full relative rounded-[20px] overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-950/10 ring-1 ring-emerald-500/20 bg-[#061812]"
        >
          {/* Native Video Element */}
          <video
            ref={videoRef}
            controls
            playsInline
            muted
            preload="metadata"
            poster="/images/video-poster.png"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          >
            <source src="/videos/gaurakshak-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Centered Play Button Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 pointer-events-none ${
              isPlaying ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="relative group pointer-events-auto">
              {/* Soft glow behind the button */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/25 blur-xl group-hover:bg-emerald-400/40 transition-all duration-200"></div>

              <button
                type="button"
                onClick={handlePlayClick}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-2xl transition-transform duration-200 ease-out group-hover:scale-105 cursor-pointer focus:outline-none"
                aria-label="Play demo video"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white translate-x-0.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 4-Step Vertical Stepper — Centered, max-width ~860px */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          style={{ maxWidth: '860px', margin: '40px auto 0 auto' }}
          className="w-full bg-white rounded-[20px] p-6 sm:p-8 shadow-xl border border-gray-100 relative"
        >
          <div className="space-y-6 sm:space-y-7 relative">
            {/* Thin vertical connecting line */}
            <div className="absolute left-4 top-4 bottom-5 w-[2px] bg-emerald-100 pointer-events-none"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-4">
                {/* Numbered circle: Dark green background, white bold number */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-[#114232] text-white font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm ring-4 ring-white">
                  {step.number}
                </div>

                {/* Step Content: Bold Title + Muted Description */}
                <div className="flex-1 pt-0.5">
                  <h4 className="text-sm sm:text-base font-bold text-[#0B1E19]">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
