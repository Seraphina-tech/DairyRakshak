import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  AlertTriangle, 
  Pill, 
  TrendingDown, 
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

// Semantic Filled Deep-Green Icons for GAURAKSHAK Side
const ChipWaveformSolid = () => (
  <svg className="w-5 h-5 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5v1.5h1.5a.75.75 0 0 1 0 1.5H18v3h1.5a.75.75 0 0 1 0 1.5H18v3h1.5a.75.75 0 0 1 0 1.5H18v1.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5V18H4.5a.75.75 0 0 1 0-1.5H6v-3H4.5a.75.75 0 0 1 0-1.5H6v-3H4.5a.75.75 0 0 1 0-1.5H6V4.5Zm1.5 1.5v12h9V6h-9Zm3 3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10.5 9Zm3-1.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm3 3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 16.5 10.5Z" clipRule="evenodd" />
  </svg>
);

const ChartDeviationSolid = () => (
  <svg className="w-5 h-5 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 19.5a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 0-1.5H3V3.75a.75.75 0 0 0-1.5 0v15.75ZM6.53 14.53a.75.75 0 0 0 1.06 0l3.97-3.97 3.47 3.47a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06l-4.47 4.47-3.47-3.47a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
    <circle cx="17.5" cy="5.5" r="2.5" className="fill-[#10B981]" />
  </svg>
);

const CalendarHazardSolid = () => (
  <svg className="w-5 h-5 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3a.75.75 0 0 1 1.5 0v1.5h1.5A2.25 2.25 0 0 1 21.75 6.75v12a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 18.75v-12A2.25 2.25 0 0 1 4.5 4.5H6V3a.75.75 0 0 1 .75-.75Zm13.5 6H3.75v10.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.25Zm-9 3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75Zm4.5 1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);

const ShieldCheckSolid = () => (
  <svg className="w-5 h-5 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);

const Solution = () => {
  return (
    <section 
      id="solution" 
      style={{ scrollMarginTop: '90px' }}
      className="py-16 sm:py-20 bg-[var(--bg-main)] border-t border-emerald-900/10 relative"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Visual Inflection Accent */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative text-center max-w-[780px] mx-auto mb-10 sm:mb-12"
        >
          {/* Subtle green-tinted glow badge behind heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-24 bg-emerald-200/30 blur-3xl pointer-events-none -z-10"></div>

          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300/80 shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>✔ THE DAIRYRAKSHAK PARADIGM</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#0B1E19] tracking-tight mb-3.5 leading-snug">
            Detect at Day 0. Treat at Day 14.
          </h2>
          
          {/* Subheading */}
          <p className="max-w-[720px] mx-auto text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            DAIRYRAKSHAK turns fragmented farm signals into a personalized, explainable, 7–14 day mastitis forecast — verified before treatment, and delivered to every farmer, smartphone or not.
          </p>
        </motion.div>

        {/* Addition 1: Hero Image Banner with Overlay Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ 
            border: '1px solid rgba(11, 74, 47, 0.12)', 
            borderRadius: '20px' 
          }}
          className="w-full max-w-full md:max-w-[640px] lg:max-w-[720px] mx-auto bg-white rounded-[20px] shadow-sm overflow-hidden mb-10 sm:mb-12 group"
        >
          {/* Image Container with Aspect Ratio (4:5) and Max Constraints */}
          <div className="relative w-full aspect-[4/5] max-h-[440px] md:max-h-[500px] lg:max-h-[560px] overflow-hidden bg-gray-900">
            <img 
              src="/images/problem/problem-gaurak.png" 
              alt="DAIRYRAKSHAK Predictive AI Herd Monitoring" 
              className="w-full h-full object-cover object-top block transition-transform duration-400 ease-out group-hover:scale-[1.02]"
              style={{ objectPosition: 'center top' }}
              loading="lazy"
            />

            {/* Subtle Gradient Overlay for Readability */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 45%)'
              }}
            />

            {/* Overlay Chip (Top-Left) */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <span 
                style={{ backgroundColor: 'rgba(11, 74, 47, 0.85)' }}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-[11px] sm:text-[13px] font-semibold uppercase tracking-wider backdrop-blur-md shadow-md"
              >
                ✅ LIVE MONITORING
              </span>
            </div>

            {/* Overlay Chips (Bottom-Left, Stacked Vertically) */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex flex-col gap-2 sm:gap-2.5 items-start">
              <span 
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
                className="inline-flex items-center px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-white text-[11px] sm:text-[13px] font-medium backdrop-blur-md shadow-sm"
              >
                Per-cow personalized baseline
              </span>
              <span 
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
                className="inline-flex items-center px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-white text-[11px] sm:text-[13px] font-medium backdrop-blur-md shadow-sm"
              >
                7–14 day mastitis forecast
              </span>
            </div>
          </div>
        </motion.div>

        {/* Side-by-Side Comparison Block */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10">
          
          {/* Left Panel: Traditional Reactive Care (Muted, Deprecated Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 opacity-85 bg-white/60 backdrop-blur-xs rounded-[20px] p-6 sm:p-7 border border-gray-200/80 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-gray-200/70">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-700">Traditional Reactive Care</h3>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Detection Lag Model</span>
              </div>
            </div>

            {/* 4 Muted Nodes with subtle strikethrough */}
            <div className="space-y-3">
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-50/90 border border-gray-200/60 text-gray-600">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-gray-500 line-through decoration-gray-400/50">1. Late Clinical Symptoms</span>
              </div>
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-50/90 border border-gray-200/60 text-gray-600">
                <AlertTriangle className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-gray-500 line-through decoration-gray-400/50">2. Post-Infection Detection</span>
              </div>
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-50/90 border border-gray-200/60 text-gray-600">
                <Pill className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-gray-500 line-through decoration-gray-400/50">3. Expensive Antibiotic Treatment</span>
              </div>
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-50/90 border border-gray-200/60 text-gray-600">
                <TrendingDown className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-xs sm:text-sm font-normal text-gray-500 line-through decoration-gray-400/50">4. Preventable Economic Loss</span>
              </div>
            </div>
          </motion.div>

          {/* Center Divider with Enlarge Arrow & Pulse Animation */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[56px] h-[56px] rounded-full bg-emerald-500 text-white shadow-lg flex items-center justify-center"
            >
              <div className="transform rotate-90 lg:rotate-0 flex items-center justify-center">
                <ArrowRight className="w-7 h-7 stroke-[2.5]" />
              </div>
            </motion.div>
            <span className="text-[11px] font-black text-[#0B4A2F] uppercase tracking-wider mt-2.5 text-center whitespace-nowrap">
              WITH DAIRYRAKSHAK
            </span>
          </div>

          {/* Right Panel: DAIRYRAKSHAK Predictive Care (Active Side with Left Accent & Scale) */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{ borderLeft: '3px solid #0B4A2F' }}
            className="lg:col-span-5 lg:scale-[1.02] bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30 rounded-[20px] p-6 sm:p-7 border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-emerald-100">
              <div className="w-8 h-8 rounded-lg bg-[#114232] flex items-center justify-center text-white shadow-xs">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1E19]">DAIRYRAKSHAK Predictive Care</h3>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">7–14 D Forecast Model</span>
              </div>
            </div>

            {/* 4 Active Nodes */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-200/80 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/70 flex items-center justify-center shrink-0 mt-0.5">
                  <ChipWaveformSolid />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1E19]">1. Continuous Multi-Sensor Telemetry</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Collar + milk + udder + environment sync</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-200/80 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/70 flex items-center justify-center shrink-0 mt-0.5">
                  <ChartDeviationSolid />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1E19]">2. Early Deviation from Personal Baseline</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Per-cow calibration, not generic population threshold</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-200/80 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/70 flex items-center justify-center shrink-0 mt-0.5">
                  <CalendarHazardSolid />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1E19]">3. AI Forecasting at 7–14 Day Horizon</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">LightGBM hazard model with TreeSHAP feature explainability</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-200/80 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/70 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheckSolid />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1E19]">4. Targeted Verification Before Treatment</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">CMT/SCC confirmation → timely preventive action (AMR reduction)</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Addition 3: Upgraded Highlighted Result Box */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ 
            backgroundColor: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(11, 74, 47, 0.15)',
            borderRadius: '12px'
          }}
          className="max-w-[900px] mx-auto p-4 sm:p-5 flex items-center justify-center gap-2.5 text-center shadow-xs"
        >
          <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#10B981] shrink-0" />
          <p className="text-[14px] sm:text-[15px] font-bold text-[#0B4A2F] leading-snug">
            Result: detection lead time moves from day 0 to day +7–14. Antibiotic use drops. Smallholders save milk and money.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Solution;
