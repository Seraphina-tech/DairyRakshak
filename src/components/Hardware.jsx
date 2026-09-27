import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Droplet, 
  Activity, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown, 
  Cpu, 
  Wifi, 
  Database, 
  TrendingUp, 
  ShieldCheck, 
  Radio
} from 'lucide-react';

const Hardware = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef0 = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRefs = [videoRef0, videoRef1, videoRef2];

  const tabs = [
    {
      id: 0,
      title: "HERDSHIELD",
      subLabel: "Environment Node",
      icon: Cloud
    },
    {
      id: 1,
      title: "LACTOVAULT",
      subLabel: "Milk Monitoring System",
      icon: Droplet
    },
    {
      id: 2,
      title: "DAIRYRAKSHAK COLLAR",
      subLabel: "AI Collar",
      icon: Activity
    }
  ];

  const videoSources = [
    {
      src: "/videos/herdshield.mp4",
      poster: "/images/herdshield-poster.png"
    },
    {
      src: "/videos/lactovault.mp4",
      poster: "/images/lactovault-poster.png"
    },
    {
      src: "/videos/collar.mp4",
      poster: "/images/collar-poster.jpeg"
    }
  ];

  const products = [
    {
      title: "HERDSHIELD",
      subtitle: "Smart Dairy Environment Monitoring Unit",
      paragraph: "Shared farm-level node that separates heat stress from real disease signal — so alerts are specific, not noisy.",
      sensors: [
        "SHT31 — ambient temperature + relative humidity",
        "Capacitive bedding-moisture sensor — bedding condition signal",
        "Solar + battery voltage sensing — power status",
        "Computes THI (Temperature Humidity Index) to isolate heat stress from infection"
      ]
    },
    {
      title: "LACTOVAULT",
      subtitle: "Smart Milk Monitoring System",
      paragraph: "Retrofits onto the farm's existing shared milking machine — captures per-milking data at zero added farmer labour.",
      sensors: [
        "Milk conductivity electrodes — subclinical mastitis signal",
        "DS18B20 — inline milk temperature",
        "HX711 + load cell — real-time milk yield",
        "4× MLX90614 IR sensors — one per udder quarter",
        "RFID reader — auto animal ID at milking"
      ]
    },
    {
      title: "DAIRYRAKSHAK COLLAR",
      subtitle: "AI-Powered Smart Cow Collar",
      paragraph: "Continuous per-cow behavioural and thermal telemetry — no manual checks, no added farm labour.",
      sensors: [
        "IMU (LIS3DH / MPU6050) — activity, rumination, lying, feeding",
        "2× TMP117 — skin/body temperature + ambient compensation",
        "Passive RFID tag — cow identity at the milking machine",
        "Voltage sensing circuit — battery health"
      ]
    }
  ];

  const pipelineStages = [
    {
      title: "Sensors",
      caption: "14 sensors · 3 devices",
      icon: Radio
    },
    {
      title: "ESP32 Gateway",
      caption: "Edge filter + timestamp",
      icon: Cpu
    },
    {
      title: "MQTT / TLS",
      caption: "Secure uplink",
      icon: ShieldCheck
    },
    {
      title: "Cloud Ingestion",
      caption: "FastAPI + PostgreSQL",
      icon: Database
    },
    {
      title: "LightGBM AI",
      caption: "7–14 day mastitis risk",
      icon: TrendingUp
    }
  ];

  const handleTabChange = (index) => {
    if (index === activeTab) return;
    // Pause any active playback before switching
    if (videoRefs[activeTab]?.current) {
      videoRefs[activeTab].current.pause();
    }
    setIsPlaying(false);
    setActiveTab(index);
  };

  const handlePlayClick = () => {
    const currentVideo = videoRefs[activeTab]?.current;
    if (currentVideo) {
      currentVideo.play().catch(() => {});
    }
  };

  return (
    <section 
      id="hardware" 
      style={{ scrollMarginTop: '90px' }}
      className="w-full py-16 sm:py-20 bg-[var(--bg-main)] border-t border-emerald-900/10 relative"
    >
      <div 
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        className="w-full"
      >
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300/80 shadow-2xs text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>HARDWARE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B1E19] tracking-tight mb-4">
            Hardware & IoT Architecture
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-600 font-normal max-w-[720px] mx-auto leading-relaxed">
            Three devices. Fourteen sensors. One per-cow signal. Retrofit hardware that rides along on the milking the farmer already does — no new behaviour, no new testing step.
          </p>
        </motion.div>

        {/* BLOCK 1: Tab Switcher + Video Player + Description Card */}
        <div className="w-full">
          
          {/* Step 1: 3 Tab Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(idx)}
                  className={`flex items-center justify-between p-4 sm:p-4.5 rounded-[16px] transition-all duration-200 text-left cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-emerald-50/90 border-2 border-[#10B981] shadow-md -translate-y-0.5'
                      : 'bg-white/80 hover:bg-white border border-emerald-900/10 hover:border-emerald-300/60 shadow-xs hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-[#10B981] text-white shadow-xs' 
                        : 'bg-emerald-50 text-emerald-800'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm sm:text-base font-bold tracking-tight ${
                        isActive ? 'text-[#0B1E19]' : 'text-gray-700'
                      }`}>
                        {tab.title}
                      </h4>
                      <p className={`text-xs ${
                        isActive ? 'text-emerald-800 font-semibold' : 'text-gray-500 font-normal'
                      }`}>
                        {tab.subLabel}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0 animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Step 2: 16:9 Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ aspectRatio: '16 / 9' }}
            className="w-full relative rounded-[20px] overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-950/10 ring-1 ring-emerald-500/20 bg-[#061812]"
          >
            {/* Stacked Videos with smooth opacity crossfade */}
            {videoSources.map((v, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-400 ease-in-out ${
                  activeTab === idx ? 'opacity-100 pointer-events-auto z-0' : 'opacity-0 pointer-events-none -z-10'
                }`}
              >
                <video
                  ref={videoRefs[idx]}
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  poster={v.poster}
                  onPlay={() => {
                    if (activeTab === idx) setIsPlaying(true);
                  }}
                  onPause={() => {
                    if (activeTab === idx) setIsPlaying(false);
                  }}
                  onEnded={() => {
                    if (activeTab === idx) setIsPlaying(false);
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                >
                  <source src={v.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}

            {/* Play Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 pointer-events-none ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="relative group pointer-events-auto">
                {/* Glow behind play button */}
                <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl group-hover:bg-emerald-400/50 transition-all duration-200"></div>

                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-2xl transition-transform duration-200 ease-out group-hover:scale-105 cursor-pointer focus:outline-none"
                  aria-label="Play product video"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white translate-x-0.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Step 4: Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="w-full bg-white rounded-[20px] p-6 sm:p-7 lg:p-8 mt-6 sm:mt-8 shadow-xl border border-gray-100 relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0B1E19] tracking-tight">
                      {products[activeTab].title}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-emerald-800">
                    {products[activeTab].subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {products[activeTab].paragraph}
                </p>

                <div className="pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
                    Sensors & Hardware Specifications:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[13.5px] sm:text-sm text-gray-700 leading-relaxed">
                    {products[activeTab].sensors.map((sensor, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{sensor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

        {/* BLOCK 2: Full-Width Pipeline Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 sm:mt-12 bg-[#0B1E19] text-white rounded-[20px] p-6 sm:p-7 lg:p-8 shadow-xl border border-emerald-900/30 relative overflow-hidden"
        >
          {/* Subtle animated connector glow behind stages */}
          <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-[2px] bg-gradient-to-r from-emerald-500/20 via-emerald-400/40 to-emerald-500/20 pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            {pipelineStages.map((stage, sIdx) => {
              const StageIcon = stage.icon;
              return (
                <React.Fragment key={sIdx}>
                  <div className="flex flex-col items-center text-center w-full lg:w-auto">
                    <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2.5 shadow-inner">
                      <StageIcon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm sm:text-base text-white tracking-tight">
                      {stage.title}
                    </span>
                    <span className="text-[11px] sm:text-xs text-emerald-300/70 font-medium mt-0.5">
                      {stage.caption}
                    </span>
                  </div>

                  {sIdx < pipelineStages.length - 1 && (
                    <div className="flex items-center justify-center text-emerald-500/50">
                      <ArrowRight className="w-5 h-5 hidden lg:block" />
                      <ArrowDown className="w-5 h-5 lg:hidden" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* BLOCK 3: Two Supporting Cards (ESP32 Edge Layer + Communication Layer) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Card — ESP32 Edge Layer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-[20px] p-6 sm:p-7 lg:p-8 shadow-xl border border-gray-100 flex flex-col"
          >
            {/* Image at top: 16:10 aspect ratio */}
            <div className="w-full mb-5 rounded-[14px] overflow-hidden border border-gray-100 shadow-xs" style={{ aspectRatio: '16 / 10' }}>
              <img
                src="/images/esp32-card.png"
                alt="ESP32 Edge Layer Controller"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Title & Body */}
            <h3 className="text-xl sm:text-2xl font-black text-[#0B1E19] tracking-tight mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#10B981]" />
              <span>ESP32 Edge Layer Controller</span>
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              The ESP32 serves as the on-site edge controller for aggregation and low-power telemetry. <strong className="text-[#0B1E19] font-bold">It is not the primary AI server.</strong>
            </p>

            {/* 2-Column Bullets */}
            <div className="grid grid-cols-2 gap-2.5 my-4 text-xs sm:text-[13px] text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>Sensor reading</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>Outlier filtering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>Node health & battery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>Precise timestamping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>Temporary ring buffer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>Uplink dispatch</span>
              </div>
            </div>

            {/* Closing Line */}
            <div className="mt-auto pt-4 border-t border-gray-100 text-xs sm:text-sm font-bold text-[#059669] leading-relaxed">
              Edge preprocessing keeps bandwidth low and latency short — the AI runs in the cloud where it belongs.
            </div>
          </motion.div>

          {/* Right Card — Communication Layer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="bg-white rounded-[20px] p-6 sm:p-7 lg:p-8 shadow-xl border border-gray-100 flex flex-col"
          >
            {/* Image at top: 16:10 aspect ratio */}
            <div className="w-full mb-5 rounded-[14px] overflow-hidden border border-gray-100 shadow-xs" style={{ aspectRatio: '16 / 10' }}>
              <img
                src="/images/communication-card.png"
                alt="Communication Layer"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Title & Body */}
            <h3 className="text-xl sm:text-2xl font-black text-[#0B1E19] tracking-tight mb-2 flex items-center gap-2">
              <Wifi className="w-5 h-5 text-[#10B981]" />
              <span>Communication Layer</span>
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              Protocols chosen for agricultural barns and rural connectivity conditions.
            </p>

            {/* Four Visually Tiered Rows */}
            <div className="space-y-2.5 my-2 flex-1">
              
              {/* Tier 1: Strong Green Accent */}
              <div className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-300 text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="bg-[#059669] text-white font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Tier 1 · Primary Uplink
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-[#0B1E19]">MQTT over TLS</span>
                </div>
                <span className="text-[11px] sm:text-xs text-emerald-900/80">
                  token-authenticated broker, no PII in payload
                </span>
              </div>

              {/* Tier 2: Medium Green Accent */}
              <div className="p-3 rounded-xl bg-emerald-50/40 border border-emerald-200 text-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 border border-emerald-300/50 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Tier 2 · Backend Integration
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-[#0B1E19]">HTTP / REST</span>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-600">
                  FastAPI secure integration
                </span>
              </div>

              {/* Tier 3: Long-Range Farm Gateway (Muted) */}
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-200 text-gray-700 font-medium text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Tier 3 · Farm Gateway
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-gray-800">LoRaWAN / Wi-Fi</span>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-600">
                  for barns without reliable Wi-Fi
                </span>
              </div>

              {/* Tier 4: Local Collar Config (Muted) */}
              <div className="p-3 rounded-xl bg-gray-50/60 border border-gray-200/80 text-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-gray-500 font-medium text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Tier 4 · Local Config
                  </span>
                  <span className="font-semibold text-xs sm:text-sm text-gray-700">BLE</span>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-500">
                  short-range, store-and-forward buffering
                </span>
              </div>

            </div>

            {/* Bottom note to match left card height */}
            <div className="mt-auto pt-4 border-t border-gray-100 text-xs sm:text-sm font-semibold text-gray-500">
              Zero-data-loss architecture ensures telemetry reaches the model even during network interruptions.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hardware;
