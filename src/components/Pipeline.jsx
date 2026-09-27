import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Wifi, 
  Database, 
  BarChart2, 
  TrendingUp, 
  Sparkles, 
  Bell, 
  ShieldCheck, 
  RotateCcw 
} from 'lucide-react';

const Pipeline = () => {
  const stages = [
    {
      num: 1,
      title: "Sense",
      caption: "Collar, milk & udder telemetry",
      icon: Cpu
    },
    {
      num: 2,
      title: "Connect",
      caption: "LoRaWAN & edge synchronization",
      icon: Wifi
    },
    {
      num: 3,
      title: "Store",
      caption: "Secure time-series repository",
      icon: Database
    },
    {
      num: 4,
      title: "Analyze",
      caption: "Multimodal fusion & normalization",
      icon: BarChart2
    },
    {
      num: 5,
      title: "Predict",
      caption: "LightGBM 7–14 day hazard model",
      icon: TrendingUp
    },
    {
      num: 6,
      title: "Explain",
      caption: "TreeSHAP feature attribution",
      icon: Sparkles
    },
    {
      num: 7,
      title: "Alert",
      caption: "Voice calls, SMS & milking light",
      icon: Bell
    },
    {
      num: 8,
      title: "Verify",
      caption: "Field CMT/SCC diagnostic review",
      icon: ShieldCheck
    },
    {
      num: 9,
      title: "Learn",
      caption: "Closed-loop retraining & calibration",
      icon: RotateCcw
    }
  ];

  return (
    <section 
      id="pipeline" 
      style={{ scrollMarginTop: '90px' }}
      className="py-16 sm:py-20 bg-[var(--bg-main)] border-t border-emerald-900/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300/80 shadow-2xs text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>THE DAIRYRAKSHAK PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#0B1E19] tracking-tight mb-3">
            Nine stages. One continuous loop.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
            From edge sensory intake to veterinary verification and automated model retraining — a complete, closed-loop health intelligence architecture.
          </p>
        </div>

        {/* Desktop 9-Stage Horizontal Stepper */}
        <div className="hidden lg:block relative">
          
          {/* Connecting Line running through all 9 nodes */}
          <div className="absolute top-6 left-8 right-8 h-[3px] bg-emerald-200/80 -z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-emerald-500 via-[#10B981] to-[#114232]"
            />
          </div>

          <div className="grid grid-cols-9 gap-2 relative z-10">
            {stages.map((st, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                className="flex flex-col items-center text-center px-1 group"
              >
                {/* Numbered Node Circle */}
                <div className="w-12 h-12 rounded-full bg-[#114232] text-white flex items-center justify-center font-black text-sm shadow-md ring-4 ring-white group-hover:scale-110 group-hover:bg-[#059669] transition-all duration-200">
                  {st.num}
                </div>

                {/* Stage Title */}
                <h3 className="text-sm font-bold text-[#0B1E19] mt-3 group-hover:text-emerald-700 transition-colors">
                  {st.title}
                </h3>

                {/* Static Micro-Caption */}
                <p className="text-[11px] text-gray-500 leading-tight mt-1 max-w-[110px]">
                  {st.caption}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Mobile / Tablet Vertical Stepper */}
        <div className="lg:hidden relative max-w-md mx-auto pl-4">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-emerald-200 pointer-events-none"></div>

          <div className="space-y-5 relative z-10">
            {stages.map((st, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {/* Number Circle */}
                <div className="w-10 h-10 rounded-full bg-[#114232] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm ring-4 ring-white">
                  {st.num}
                </div>

                {/* Content */}
                <div className="pt-1 bg-white/80 p-3 rounded-xl border border-gray-100 flex-1 shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0B1E19]">
                    {st.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {st.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pipeline;
