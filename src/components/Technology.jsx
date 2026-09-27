import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Brain, 
  Monitor, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  ArrowDown, 
  Code, 
  Server, 
  Star
} from 'lucide-react';

// Lightweight animated stat counter for Block 1
const StatCounter = ({ target, prefix = '', suffix = '', duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 30);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{prefix}{count}{suffix}</span>;
};

const Technology = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Hard Numbers Strip Data (Block 1)
  const hardNumbers = [
    { value: 9, label: "STAGES", caption: "in the pipeline", isCounter: true },
    { value: 14, label: "SENSORS", caption: "per cow, across 3 devices", isCounter: true },
    { value: 4, label: "RISK TIERS", caption: "No / Low / Moderate / High", isCounter: true },
    { value: 5, label: "ALERT CHANNELS", caption: "app, dashboard, SMS, IVR, milking-point", isCounter: true },
    { value: "₹10K–15K", label: "PROTOTYPE", caption: "cost per farm", isCounter: false }
  ];

  // 4-Layer Architecture Data (Block 2)
  const architectureLayers = [
    {
      name: "Edge Layer",
      icon: Cpu,
      subItems: [
        "Animal & Farm Sensors",
        "ESP32 Edge Gateway",
        "Anomaly Filtering"
      ],
      tooltip: "Preprocessing happens on-device — low bandwidth, low latency, works offline.",
      isCore: false
    },
    {
      name: "Backend & Data",
      icon: Database,
      subItems: [
        "FastAPI Ingestion Engine",
        "PostgreSQL / TimescaleDB",
        "Dynamic Feature Pipeline"
      ],
      tooltip: "Time-series optimized storage. Every reading tied to a cow ID and timestamp.",
      isCore: false
    },
    {
      name: "AI Services",
      icon: Brain,
      subItems: [
        "Personalized Baselines",
        "LightGBM Hazard Model",
        "TreeSHAP Explainability",
        "Isotonic Calibration"
      ],
      tooltip: "Calibrated 7–14 day risk. Explainable per-cow. Compared against the cow's own normal.",
      isCore: true
    },
    {
      name: "Application Layer",
      icon: Monitor,
      subItems: [
        "Interactive AI Dashboard",
        "Alerts & Priority Queue",
        "CMT/SCC Verification Loop"
      ],
      tooltip: "Farmer + vet interface. Multilingual. No-smartphone alerts via voice / SMS / light.",
      isCore: false
    }
  ];

  // 4 Semantic Category Cards (Block 3)
  const techCategories = [
    {
      title: "SOFTWARE",
      icon: Code,
      isCore: false,
      items: [
        { name: "React + Tailwind CSS", starred: false },
        { name: "Python + FastAPI", starred: false },
        { name: "PostgreSQL + TimescaleDB", starred: false },
        { name: "Pandas + NumPy", starred: false }
      ]
    },
    {
      title: "AI / ML",
      icon: Brain,
      isCore: true,
      items: [
        { name: "LightGBM — primary risk model", starred: true },
        { name: "XGBoost — comparison baseline", starred: false },
        { name: "Discrete-Time Hazard Model — 7d / 14d horizon", starred: true },
        { name: "Isotonic Calibration — calibrated probabilities", starred: true },
        { name: "TreeSHAP — explainability", starred: true }
      ]
    },
    {
      title: "HARDWARE & IoT",
      icon: Cpu,
      isCore: false,
      items: [
        { name: "ESP32-C6 — edge controller", starred: false },
        { name: "MLX90614 × 4 — udder quarter IR", starred: false },
        { name: "LIS3DH / MPU6050 — IMU", starred: false },
        { name: "TMP117 × 2 — body temp", starred: false },
        { name: "SHT31 — ambient temp + humidity", starred: false }
      ]
    },
    {
      title: "INFRASTRUCTURE",
      icon: Server,
      isCore: false,
      items: [
        { name: "AWS / Azure — cloud", starred: false },
        { name: "MQTT over TLS — messaging", starred: false },
        { name: "LoRaWAN / BLE / Wi-Fi — uplink", starred: false },
        { name: "Leaflet / OpenStreetMap — GIS", starred: false },
        { name: "PWA / Flutter — mobile", starred: false }
      ]
    }
  ];

  // Defensible Choices Rows (Block 4)
  const defensibleChoices = [
    {
      choice: "LightGBM",
      alternative: "Neural Network",
      reason: "Works well on small structured data, explainable, fast inference"
    },
    {
      choice: "MQTT over TLS",
      alternative: "HTTP Polling",
      reason: "Low bandwidth for rural connectivity, token-authenticated, no PII in payload"
    },
    {
      choice: "TreeSHAP",
      alternative: "Black-box AI",
      reason: "Farmer trust, auditable decisions, regulatory-friendly"
    },
    {
      choice: "Isotonic Calibration",
      alternative: "Raw Probability",
      reason: 'Calibrated output — "88%" means 88% in the real world'
    },
    {
      choice: "ESP32 Edge",
      alternative: "Cloud-only",
      reason: "Works offline, reduces cloud cost, low latency"
    },
    {
      choice: "LoRaWAN + BLE",
      alternative: "Wi-Fi Only",
      reason: "Barns without reliable Wi-Fi; collar BLE for short-range config"
    }
  ];

  return (
    <section 
      id="technology" 
      style={{ scrollMarginTop: '90px' }}
      className="w-full pt-10 sm:pt-12 pb-10 sm:pb-12 bg-[var(--bg-main)] border-t border-emerald-900/10 relative"
    >
      <div 
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className="w-full"
      >
        
        {/* ======================================================== */}
        {/* EXISTING SECTION HEADER: Kept strictly unchanged         */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="section-heading text-3xl sm:text-4xl font-extrabold text-[#0B1E19] tracking-tight mb-3">
            Technology Architecture
          </h2>
          <p className="section-description mx-auto text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
            Built on a modern, scalable, and robust software stack designed for real-time IoT ingestion and high-performance ML inference.
          </p>
        </div>

        {/* ======================================================== */}
        {/* BLOCK 1: Hard Numbers Strip                             */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full bg-white/80 backdrop-blur-xs rounded-[20px] p-6 sm:py-8 border border-emerald-900/10 shadow-sm mb-10 sm:mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-emerald-900/10 text-center">
            {hardNumbers.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center px-3">
                <div className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#0B4A2F] tracking-tight leading-none mb-1.5">
                  {stat.isCounter ? (
                    <StatCounter target={stat.value} />
                  ) : (
                    <span>{stat.value}</span>
                  )}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#059669] mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-500 font-medium">
                  {stat.caption}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* BLOCK 2: Upgraded 4-Layer Architecture Card              */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full bg-white rounded-[20px] p-6 sm:p-8 lg:p-9 shadow-xl border border-gray-100 mb-10 sm:mb-12 relative"
        >
          <h3 className="text-base sm:text-lg font-black text-[#0B1E19] uppercase tracking-wide mb-6">
            Technical Architecture & Data Pipeline
          </h3>

          {/* 4 Layers Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {architectureLayers.map((layer, idx) => {
              const LayerIcon = layer.icon;
              return (
                <div key={idx} className="relative flex flex-col">
                  {/* Layer Card */}
                  <div
                    onMouseEnter={() => setActiveTooltip(idx)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onClick={() => setActiveTooltip(activeTooltip === idx ? null : idx)}
                    className={`h-full rounded-[16px] p-5 sm:p-6 transition-all duration-200 cursor-pointer relative group flex flex-col justify-between ${
                      layer.isCore
                        ? 'bg-emerald-50/60 border-2 border-[#10B981] shadow-md ring-1 ring-emerald-500/20 hover:-translate-y-1 hover:shadow-lg'
                        : 'bg-gray-50/70 hover:bg-white border border-gray-200/80 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    <div>
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center mb-3.5 transition-colors ${
                        layer.isCore
                          ? 'bg-[#10B981] text-white shadow-xs'
                          : 'bg-emerald-100/70 text-emerald-800'
                      }`}>
                        <LayerIcon className="w-5 h-5" />
                      </div>

                      {/* Layer Name */}
                      <h4 className="text-sm sm:text-base font-black text-[#0B1E19] uppercase tracking-tight mb-3">
                        {layer.name}
                      </h4>

                      {/* Sub-items */}
                      <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                        {layer.subItems.map((item, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tooltip trigger indicator */}
                    <div className="mt-4 pt-2 border-t border-gray-200/50 flex items-center justify-between text-[10px] text-gray-400">
                      <span>Hover for details</span>
                      <span className="text-[#10B981] font-bold">ℹ</span>
                    </div>

                    {/* Hover / Tap Tooltip */}
                    <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-[#0B1E19] text-white text-[11px] font-medium shadow-xl pointer-events-none transition-all duration-200 z-30 w-64 text-center leading-snug ${
                      activeTooltip === idx ? 'opacity-100 -translate-y-1' : 'opacity-0 group-hover:opacity-100 group-hover:-translate-y-1'
                    }`}>
                      {layer.tooltip}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#0B1E19]"></div>
                    </div>
                  </div>

                  {/* Connecting Arrow between cards */}
                  {idx < architectureLayers.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-400 shadow-2xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                  {idx < architectureLayers.length - 1 && (
                    <div className="lg:hidden flex justify-center py-1 text-gray-400">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Animated Feedback Loop Line */}
          <div className="mt-8 pt-4 border-t border-gray-100 relative">
            <div className="w-full flex items-center justify-center relative py-2">
              {/* Subtle animated dashed loop line */}
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-[2px] overflow-hidden">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <motion.line
                    x1="0"
                    y1="1"
                    x2="100%"
                    y2="1"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -24 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                  />
                </svg>
              </div>

              {/* Feedback Loop Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300/80 shadow-2xs text-xs font-bold text-[#0B4A2F]">
                <RotateCcw className="w-3.5 h-3.5 text-[#10B981] animate-spin-slow" />
                <span>Feedback Loop: Verified Field Outcome → Model Retrained.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* BLOCK 3: 4 Semantic Tech Category Cards                  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 sm:mb-12">
          {techCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                className={`rounded-[16px] p-5 sm:p-6 shadow-md border flex flex-col justify-between ${
                  category.isCore
                    ? 'bg-emerald-50/50 border-emerald-300/80 border-l-4 border-l-[#10B981]'
                    : 'bg-white border-gray-100'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${
                      category.isCore ? 'bg-[#10B981] text-white' : 'bg-emerald-100 text-[#0B4A2F]'
                    }`}>
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-black text-[#0B1E19] uppercase tracking-wider">
                      {category.title}
                    </h4>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-2 text-[13.5px] text-gray-700">
                    {category.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        {item.starred ? (
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0 mt-0.5" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 mt-2"></span>
                        )}
                        <span className={item.starred ? "font-semibold text-[#0B1E19]" : ""}>
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* BLOCK 4: Defensible Choices Table                        */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full bg-white rounded-[16px] p-5 sm:p-7 shadow-xl border border-gray-100 mb-10 sm:mb-12"
        >
          <div className="mb-4 pb-2 border-b border-gray-100">
            <h3 className="text-base sm:text-lg font-black text-[#0B1E19] uppercase tracking-wide">
              Engineering Trade-Offs & Defensible Choices
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Clear architectural rationale selected for real-world barn deployment.
            </p>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200/80">
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#059669]">
                    Our Choice
                  </th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Alternative
                  </th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0B1E19]">
                    Why We Chose Ours
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {defensibleChoices.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className="even:bg-emerald-50/25 hover:bg-emerald-50/70 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-bold text-sm text-[#0B1E19]">
                      {row.choice}
                    </td>
                    <td className="py-3.5 px-4 text-sm text-gray-500 font-medium">
                      {row.alternative}
                    </td>
                    <td className="py-3.5 px-4 text-sm text-gray-700 leading-relaxed">
                      {row.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Vertical Cards */}
          <div className="space-y-3 md:hidden">
            {defensibleChoices.map((row, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/60">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-[#0B1E19]">{row.choice}</span>
                  <span className="text-[11px] text-gray-400 font-medium">vs {row.alternative}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {row.reason}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* BLOCK 5: Trust Strip                                     */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full bg-[#0B1E19] text-white rounded-[16px] py-4 sm:py-[18px] px-4 sm:px-6 text-center border border-emerald-900/40 shadow-xl flex items-center justify-center"
        >
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400/90 leading-relaxed bg-transparent">
            <span className="text-gray-400">BUILT WITH — </span>
            React · FastAPI · PostgreSQL · LightGBM · TreeSHAP · ESP32 · MQTT · AWS
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Technology;
