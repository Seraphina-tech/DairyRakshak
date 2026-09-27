import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

// Premium Bold Filled Icon Components (Heroicons / Phosphor Solid Style)
const ClockAlertSolid = () => (
  <svg className="w-[26px] h-[26px] text-[#d97706]" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
    <circle cx="18.5" cy="5.5" r="3" className="fill-[#b45309]" />
    <path d="M18.5 3.8v2.2M18.5 7.2v.3" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const EyeSlashSolid = () => (
  <svg className="w-[26px] h-[26px] text-[#7c3aed]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.241-.827c4.664 0 8.675 2.87 10.676 8.803ZM5.882 7.003 4.102 5.223A11.266 11.266 0 0 0 1.324 12c2.001 5.933 6.012 8.803 10.676 8.803 1.942 0 3.752-.5 5.34-1.396l-1.92-1.92a5.25 5.25 0 0 1-7.538-7.538V7.003Z" />
    <path d="M14.88 16.94a3.75 3.75 0 0 1-5.82-4.94l5.82 4.94Z" />
  </svg>
);

const DisconnectedNodesSolid = () => (
  <svg className="w-[26px] h-[26px] text-[#2563eb]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
    <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.738a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.372-.737Z" />
    <path d="M3.265 15.852l7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.738a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.372-.737Z" />
  </svg>
);

const UserAlertSolid = () => (
  <svg className="w-[26px] h-[26px] text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
    <circle cx="18.5" cy="5.5" r="3" className="fill-[#047857]" />
    <path d="M18.5 3.8v2.2M18.5 7.2v.3" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const Problem = () => {
  const cards = [
    {
      IconComponent: ClockAlertSolid,
      containerClasses: "bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100/80 border border-amber-300/70 shadow-[0_2px_8px_rgba(217,119,6,0.15)] group-hover:shadow-[0_4px_14px_rgba(217,119,6,0.25)]",
      title: "Late Detection",
      body: "By the time symptoms are visible, milk yield has already dropped up to 30% and treatment is reactive — not preventive.",
      footer: "ISSUE #1 • 7–14 DAY DETECTION LAG"
    },
    {
      IconComponent: EyeSlashSolid,
      containerClasses: "bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100/80 border border-purple-300/70 shadow-[0_2px_8px_rgba(124,58,237,0.15)] group-hover:shadow-[0_4px_14px_rgba(124,58,237,0.25)]",
      title: "Subclinical Cases Go Unnoticed",
      body: "Many cows show no visible symptoms. Without SCC/CMT verification paired with AI signal analysis, the hidden risk is missed entirely.",
      footer: "ISSUE #2 • SILENT INFECTION"
    },
    {
      IconComponent: DisconnectedNodesSolid,
      containerClasses: "bg-gradient-to-br from-blue-100 via-blue-50 to-sky-100/80 border border-blue-300/70 shadow-[0_2px_8px_rgba(37,99,235,0.15)] group-hover:shadow-[0_4px_14px_rgba(37,99,235,0.25)]",
      title: "Fragmented Farm Data",
      body: "Collar telemetry, milk conductivity, udder temperature, environment, health history, and lab records sit in disconnected silos. No single model sees the whole cow.",
      footer: "ISSUE #3 • DATA SILOS"
    },
    {
      IconComponent: UserAlertSolid,
      containerClasses: "bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100/80 border border-emerald-300/70 shadow-[0_2px_8px_rgba(5,150,105,0.15)] group-hover:shadow-[0_4px_14px_rgba(5,150,105,0.25)]",
      title: "One Size Fits All",
      body: "Every cow has a different normal. Fixed population thresholds produce false alarms on healthy cows and silently miss early disease on others.",
      footer: "ISSUE #4 • NO PER-COW BASELINE"
    }
  ];

  return (
    <section 
      id="problem" 
      style={{ scrollMarginTop: '90px' }}
      className="py-16 sm:py-20 bg-[var(--bg-main)] border-t border-emerald-900/10 relative"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-[760px] mx-auto mb-10 sm:mb-12"
        >
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300/80 shadow-2xs text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>⚠ THE DETECTION GAP</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#0B1E19] tracking-tight mb-3.5 leading-snug">
            By the time it's visible, it's already cost the farmer.
          </h2>
          
          {/* Subheading */}
          <p className="max-w-[720px] mx-auto text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Bovine mastitis is usually detected only after clinical symptoms appear — 7–14 days after the biological signal was already there. Milk yield drops up to 30%, antibiotic treatment becomes reactive, and smallholder income takes the hit.
          </p>
        </motion.div>

        {/* Wide Problem Banner Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ 
            border: '1px solid rgba(11, 74, 47, 0.12)', 
            borderRadius: '20px' 
          }}
          className="w-full bg-white rounded-[20px] shadow-sm overflow-hidden mb-10 sm:mb-12 group"
        >
          {/* Image Container with Aspect Ratio (16:9 on desktop, 4:3 on mobile) */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-gray-900">
            <img 
              src="/images/problem/problem-traditional.png" 
              alt="Traditional Reactive Bovine Mastitis Detection Gap" 
              className="w-full h-full object-cover block transition-transform duration-400 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Subtle Gradient Overlay for Readability */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.55), transparent 40%)'
              }}
            />

            {/* Overlay Chip (Top-Left) */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <span 
                style={{ backgroundColor: 'rgba(220, 38, 38, 0.85)' }}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-[11px] sm:text-[13px] font-semibold uppercase tracking-wider backdrop-blur-md shadow-md"
              >
                ⚠ DETECTED TOO LATE
              </span>
            </div>

            {/* Overlay Chips (Bottom-Left, Stacked Vertically) */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex flex-col gap-2 sm:gap-2.5 items-start">
              <span 
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
                className="inline-flex items-center px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-white text-[11px] sm:text-[13px] font-medium backdrop-blur-md shadow-sm"
              >
                Day 0 — Clinical symptoms visible
              </span>
              <span 
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
                className="inline-flex items-center px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-white text-[11px] sm:text-[13px] font-medium backdrop-blur-md shadow-sm"
              >
                ₹15,000+ loss per cow
              </span>
              <span 
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
                className="inline-flex items-center px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-white text-[11px] sm:text-[13px] font-medium backdrop-blur-md shadow-sm"
              >
                Reactive antibiotics, rising AMR
              </span>
            </div>
          </div>

          {/* Below the Image: Centered Caption Area */}
          <div className="bg-white py-4 sm:py-5 px-4 text-center">
            <p 
              style={{ color: '#0B4A2F', letterSpacing: '0.02em' }}
              className="text-[14px] sm:text-[15px] font-bold"
            >
              By the time it's visible, it's already too late.
            </p>
          </div>
        </motion.div>

        {/* 4 Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-gray-100 rounded-[18px] shadow-sm hover:shadow-md p-6 sm:p-7 flex flex-col transition-all duration-200 hover:-translate-y-1 group"
            >
              {/* 56px Container with 14px radius, soft tinted gradient, inner border & hover scale */}
              <div className={`w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-105 shrink-0 ${card.containerClasses}`}>
                <card.IconComponent />
              </div>
              
              {/* Card Title (min-height ensures alignment across row) */}
              <h3 className="text-[18px] font-bold text-[#0B1E19] mb-2 leading-snug min-h-[48px] flex items-center">
                {card.title}
              </h3>
              
              {/* Card Body */}
              <p className="text-[13.5px] sm:text-[14px] text-gray-600 leading-relaxed font-normal mb-5">
                {card.body}
              </p>

              {/* Card Footer with Divider (margin-top: auto keeps all 4 footers horizontally aligned) */}
              <div className="border-t border-gray-100 pt-3.5 mt-auto">
                <span className="text-[11px] sm:text-[12px] font-bold text-gray-400 uppercase tracking-[0.08em] block">
                  {card.footer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result Verdict Line Below Grid */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Result: lost milk, higher treatment cost, rising antimicrobial use — and a farmer who never saw it coming.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Problem;
