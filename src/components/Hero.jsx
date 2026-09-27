import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  Thermometer,
  Clock,
  Wifi,
  TrendingUp,
  Video
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

const data14D = [
  { day: 'D-14', risk: 4, factor: 'Baseline normal' },
  { day: 'D-12', risk: 8, factor: 'Slight temp shift' },
  { day: 'D-10', risk: 14, factor: 'Rumination -4%' },
  { day: 'D-8', risk: 28, factor: 'Conductivity ↑' },
  { day: 'D-6', risk: 46, factor: 'Conductivity ↑↑' },
  { day: 'D-4', risk: 67, factor: 'Udder Temp ↑' },
  { day: 'NOW', risk: 88, factor: 'High Risk Alert' }
];

const data7D = [
  { day: 'D-7', risk: 36, factor: 'Conductivity ↑' },
  { day: 'D-5', risk: 52, factor: 'Conductivity ↑↑' },
  { day: 'D-3', risk: 71, factor: 'Udder Temp ↑' },
  { day: 'D-2', risk: 78, factor: 'Rumination ↓' },
  { day: 'D-1', risk: 83, factor: 'Lying time ↓' },
  { day: 'NOW', risk: 88, factor: 'High Risk Alert' }
];

const ChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#0B1E19]/95 backdrop-blur-md text-white text-[11px] px-2.5 py-1.5 rounded-lg border border-emerald-500/30 shadow-lg pointer-events-none">
        <div className="font-bold flex items-center gap-1.5">
          <span>{data.day}</span>
          <span className="text-emerald-400">· Risk {data.risk}%</span>
        </div>
        <div className="text-[10px] text-gray-300 mt-0.5">
          {data.factor}
        </div>
      </div>
    );
  }
  return null;
};

const Hero = () => {
  // Live ticking temperature (39.4 -> 39.5 -> 39.6 -> 39.5) every 2s
  const [tempValue, setTempValue] = useState(39.5);
  
  // Live sample timer that counts up every second from 0 to 60, then resets
  const [sampleSeconds, setSampleSeconds] = useState(0);
  
  // Smooth animated counter for AI Risk Meter (0 -> 88%)
  const [riskPercent, setRiskPercent] = useState(0);

  // Time horizon toggle for Risk Trend Chart (7D or 14D)
  const [horizon, setHorizon] = useState('14D');
  const [chartRisk, setChartRisk] = useState(0);

  useEffect(() => {
    // Temperature subtle fluctuation loop
    const tempSequence = [39.4, 39.5, 39.6, 39.5];
    let idx = 1;
    const tempInterval = setInterval(() => {
      idx = (idx + 1) % tempSequence.length;
      setTempValue(tempSequence[idx]);
    }, 2000);
    return () => clearInterval(tempInterval);
  }, []);

  useEffect(() => {
    // Sample timer: count 0 -> 60s, then resets to 0
    const sampleInterval = setInterval(() => {
      setSampleSeconds((prev) => (prev >= 60 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(sampleInterval);
  }, []);

  useEffect(() => {
    // Count up from 0 to 88% on mount
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 88) {
        setRiskPercent(88);
        clearInterval(interval);
      } else {
        setRiskPercent(current);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Chart risk count-up on mount and when horizon toggles
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 88) {
        setChartRisk(88);
        clearInterval(interval);
      } else {
        setChartRisk(current);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [horizon]);

  const renderCustomDot = (props) => {
    const { cx, cy, index } = props;
    if (typeof cx !== 'number' || typeof cy !== 'number' || isNaN(cx) || isNaN(cy)) return null;
    const currentData = horizon === '14D' ? data14D : data7D;
    if (index === currentData.length - 1) {
      return (
        <g key={`dot-${index}`}>
          <circle
            cx={cx}
            cy={cy}
            r={7}
            className="fill-[#22C55E]/40 animate-ping"
          />
          <circle
            cx={cx}
            cy={cy}
            r={4.5}
            className="fill-[#22C55E] stroke-white stroke-[1.5]"
          />
        </g>
      );
    }
    return null;
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const featurePills = [
    { label: "IoT Smart Collar", icon: Cpu },
    { label: "TreeSHAP Explainability", icon: Sparkles },
    { label: "Veterinary Decision Support", icon: ShieldCheck }
  ];

  const initiativeTags = [
    "Hardware",
    "Agriculture",
    "FoodTech & Rural Development",
    "EntangleX"
  ];

  return (
    <section 
      id="home" 
      style={{ scrollMarginTop: '90px' }}
      className="relative pt-[98px] pb-12 sm:pt-[124px] sm:pb-16 lg:pt-[126px] lg:pb-20 overflow-hidden bg-[var(--bg-main)] border-b border-emerald-900/10"
    >
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] lg:w-[800px] h-[550px] lg:h-[800px] bg-gradient-to-br from-emerald-100/60 to-white/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[450px] lg:w-[650px] h-[450px] lg:h-[650px] bg-[#10B981]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:28px_28px] opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Hero Brand, Messaging, CTAs, Stats, Tags   */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6 text-left">
            
            {/* 1. Ministry Badge — Positioned Above Logo Block */}
            <div className="flex items-center justify-start">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 font-extrabold text-[10px] sm:text-[11px] tracking-wider border border-emerald-200/90 shadow-2xs uppercase whitespace-nowrap">
                MINISTRY OF FISHERIES, ANIMAL HUSBANDRY & DAIRYING
              </span>
            </div>

            {/* 2. Logo + Brand Block (Circular Cow Logo + DAIRY in Red, RAKSHAK in Green) */}
            <div className="flex items-center gap-4 sm:gap-5 pb-3 border-b border-gray-200/60">
              <img 
                src="/images/dairyrakshak-logo.png" 
                alt="DairyRakshak Logo" 
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-contain shadow-md border-2 border-emerald-600/30 shrink-0" 
              />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-none">
                  <span className="text-[#EF4444]">DAIRY</span><span className="text-[#10B981]">RAKSHAK</span>
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-extrabold tracking-widest uppercase mt-1.5">
                  BOVINE MASTITIS AI
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-black text-[#0B1E19] tracking-tight leading-[1.18]">
                AI-Powered Early Forecasting & Prevention of Bovine Mastitis
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              An AI-powered early-warning and decision-support system for bovine mastitis. It combines multimodal sensing and AI-driven analysis to forecast mastitis risk <strong className="text-gray-900 font-semibold">7–14 days in advance</strong> and support early prevention.
            </p>

            {/* Feature Pills (3 pills) */}
            <div className="flex flex-wrap gap-2 pt-0.5">
              {featurePills.map((pill, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-gray-200/90 text-xs font-semibold text-gray-700 shadow-2xs hover:border-[#10B981]/40 transition-colors"
                >
                  <pill.icon className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>{pill.label}</span>
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto">
              <a 
                href="#solution" 
                onClick={(e) => { e.preventDefault(); handleScrollTo('solution'); }}
                className="group inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-xl font-bold text-white bg-[#114232] hover:bg-[#0A2A1F] shadow-[0_4px_16px_rgba(17,66,50,0.22)] hover:shadow-[0_6px_20px_rgba(17,66,50,0.3)] transition-all duration-200 text-sm sm:text-base cursor-pointer outline-none focus:outline-none"
              >
                <span>Explore Solution</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#case-study" 
                onClick={(e) => { e.preventDefault(); handleScrollTo('case-study'); }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl font-bold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 shadow-2xs hover:shadow-sm transition-all duration-200 text-sm sm:text-base cursor-pointer outline-none focus:outline-none"
              >
                <Video size={16} fill="currentColor" className="w-4 h-4 fill-current shrink-0" />
                <span>View Case Study</span>
              </a>
            </div>

            {/* Bottom Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-gray-200/70 w-full">
              <div className="text-left bg-white/70 p-2 sm:p-2.5 rounded-xl border border-gray-100">
                <div className="text-base sm:text-lg font-black text-[#0B1E19]">7–14 D</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Risk Horizon</div>
              </div>
              <div className="text-left bg-white/70 p-2 sm:p-2.5 rounded-xl border border-gray-100">
                <div className="text-base sm:text-lg font-black text-[#0B1E19]">4-in-1</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Sensor Fusion</div>
              </div>
              <div className="text-left bg-white/70 p-2 sm:p-2.5 rounded-xl border border-gray-100">
                <div className="text-base sm:text-lg font-black text-[#0B1E19]">Early Care</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Prevent Antibiotics</div>
              </div>
            </div>

            {/* Initiative Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
              <span className="text-[11px] font-extrabold text-[#114232] uppercase tracking-wider mr-1">
                INITIATIVE TAGS:
              </span>
              {initiativeTags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-white/80 border border-gray-200/90 text-[11px] font-semibold text-gray-700 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Real Farm Photo + Live Simulation Overlay  */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 relative w-full flex flex-col items-center">
            
            {/* Soft floating green/mint particles behind the image (desktop only) */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl pointer-events-none"></div>

            {/* Main Visual Container: Height aligns with top of Early Care stat card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-[20px] overflow-hidden shadow-2xl border-2 border-emerald-500/40 animate-pulse-glow w-full h-[380px] sm:h-[440px] lg:h-[485px] bg-[#061812] flex items-center justify-center"
            >
              
              {/* Full uncropped photo showing cow, laptop, milking claw, farmer with phone & barn */}
              <img 
                src="/hero-dairy-iot.jpg" 
                alt="Real Farm Dairy Telemetry Setup with Smart Collar Cow, Milk Vessel, Edge Computer and Mobile App" 
                className="w-full h-full object-contain block animate-kenburns select-none"
                loading="lazy"
                decoding="async"
              />

              {/* Subtle Dark-Green Gradient Overlay at bottom for readable contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061812]/70 via-transparent to-transparent pointer-events-none"></div>

              {/* Animated Scanline Overlay sweeping top to bottom */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#10B981]/70 to-transparent pointer-events-none animate-scanline"></div>

              {/* ======================================================== */}
              {/* LIVE SIMULATION OVERLAY: Floating Frosted-Glass Chips     */}
              {/* ======================================================== */}

              {/* Top-Left Chip: LIVE • COW-024 */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0B1E19]/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold text-white shadow-lg flex items-center gap-1.5 z-10"
              >
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                <span>LIVE • COW-024</span>
              </motion.div>

              {/* Top-Right Chip: Udder Temp (Subtly ticks live) */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0B1E19]/80 backdrop-blur-md border border-red-400/40 text-[10px] sm:text-xs font-bold text-red-300 shadow-lg flex items-center gap-1.5 z-10"
              >
                <Thermometer className="w-3.5 h-3.5 text-red-400" />
                <span>{tempValue}°C Udder Temp ↑</span>
              </motion.div>

              {/* Bottom-Left Chip: LoRa Connected */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0B1E19]/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold text-emerald-300 shadow-lg flex items-center gap-1.5 z-10"
              >
                <Wifi className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
                <span>LoRa Connected (99.4%)</span>
              </motion.div>

              {/* Bottom-Right Chip: Sampled Xs ago */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0B1E19]/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono text-gray-200 shadow-lg flex items-center gap-1.5 z-10"
              >
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Sampled {sampleSeconds}s ago</span>
              </motion.div>

              {/* Center-Right Floating Card: AI RISK METER (positioned in upper-right to leave farmer with phone visible) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute top-14 sm:top-16 right-3 sm:right-4 bg-[#0B1E19]/85 backdrop-blur-md border border-red-500/40 rounded-2xl p-2.5 sm:p-3.5 shadow-2xl flex items-center gap-2.5 sm:gap-3 pointer-events-none z-10"
              >
                {/* Big Animated Number */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-950/80 border border-red-500/40 flex items-center justify-center font-black text-sm sm:text-base text-red-400 shadow-inner">
                  {riskPercent}%
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-red-400" />
                    AI RISK METER
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">
                    Mastitis Risk • 7–14 D
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-red-400 uppercase tracking-wide">
                    High Risk Alert
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* ======================================================== */}
            {/* LIVE RISK TREND CHART CARD: Fills vertical space below   */}
            {/* ======================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="w-full bg-white rounded-[16px] p-3.5 sm:p-4.5 mt-4 border border-emerald-500/20 shadow-md shadow-emerald-950/5 flex flex-col justify-between"
              style={{ minHeight: '180px' }}
            >
              {/* 1. Header Row */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669]">
                    RISK FORECAST · COW-024
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* 7D / 14D Horizon Toggle */}
                  <div className="flex items-center bg-gray-100 p-0.5 rounded-md border border-gray-200/70">
                    <button
                      type="button"
                      onClick={() => setHorizon('7D')}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                        horizon === '7D'
                          ? 'bg-emerald-100 text-emerald-800 shadow-2xs'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      7D
                    </button>
                    <button
                      type="button"
                      onClick={() => setHorizon('14D')}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                        horizon === '14D'
                          ? 'bg-emerald-100 text-emerald-800 shadow-2xs'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      14D
                    </button>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    7–14 DAY AHEAD
                  </span>
                </div>
              </div>

              {/* 2. Chart Area (~110-120px tall) */}
              <div className="w-full h-[110px] sm:h-[115px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    key={horizon}
                    data={horizon === '14D' ? data14D : data7D}
                    margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="riskAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22C55E" stopOpacity={0.15} />
                        <stop offset="100%" stopColor="#0B4A2F" stopOpacity={0.01} />
                      </linearGradient>
                      <linearGradient id="riskLineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0B4A2F" />
                        <stop offset="60%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#22C55E" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" opacity={0.65} />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 600 }}
                    />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip content={<ChartTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="risk"
                      stroke="url(#riskLineGrad)"
                      strokeWidth={2.5}
                      fill="url(#riskAreaGrad)"
                      isAnimationActive={true}
                      animationDuration={1200}
                      dot={renderCustomDot}
                      activeDot={{ r: 5, fill: '#22C55E', stroke: '#FFFFFF', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* 3. Footer Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-2 border-t border-gray-100">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200/90 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                  <span className="font-extrabold text-[#991B1B]">{chartRisk}% HIGH</span>
                </div>

                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[11px] text-gray-500 font-medium">
                  <span className="px-1.5 py-0.5 bg-gray-50 border border-gray-200/80 rounded text-[10px] sm:text-[11px]">
                    ↑ Conductivity
                  </span>
                  <span className="px-1.5 py-0.5 bg-gray-50 border border-gray-200/80 rounded text-[10px] sm:text-[11px]">
                    ↑ Udder Temp
                  </span>
                  <span className="px-1.5 py-0.5 bg-gray-50 border border-gray-200/80 rounded text-[10px] sm:text-[11px]">
                    ↓ Rumination
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
