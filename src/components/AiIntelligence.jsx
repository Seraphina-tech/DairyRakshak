import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Activity, 
  Cpu, 
  HelpCircle, 
  BellRing, 
  BrainCircuit, 
  ShieldAlert, 
  LineChart, 
  Radio, 
  Thermometer, 
  Droplet, 
  TrendingUp, 
  Stethoscope, 
  Target, 
  Sparkles, 
  Play, 
  Pause 
} from 'lucide-react';

const scenarios = {
  cow024: {
    id: "COW-024",
    label: "COW-024 (Active Risk Case)",
    breed: "Holstein Friesian • Lactation Stage 2 (Day 84)",
    riskLevel: "HIGH",
    riskScore: "88%",
    riskColor: "text-red-600",
    riskBg: "bg-red-50",
    riskBorder: "border-red-200",
    predictionHorizon: "7–14 Days",
    riskTrend: "Increasing ↑",
    aiStatus: "ACTIVE",
    sensorStatus: "CONNECTED (99.4%)",
    udderTemp: 39.5,
    udderDiff: "+1.4°C elevated",
    activity: 48,
    activityDiff: "-22% baseline",
    rumination: 44,
    ruminationDiff: "-31% baseline",
    milkYield: 14.2,
    yieldDiff: "-18% baseline",
    recommendation: "Immediate CMT/SCC verification. Initiate localized supportive hydration and isolate stall. Early action avoids systemic antibiotic progression.",
    shapWeights: [
      { name: "Rumination deficit", weight: "+0.38", status: "Critical deviation" },
      { name: "Udder temp differential", weight: "+0.31", status: "Hyperthermia signal" },
      { name: "Milk yield velocity", weight: "+0.19", status: "Decline pattern" },
      { name: "Activity rest irregularity", weight: "+0.12", status: "Restlessness detected" }
    ],
    timelineState: "high-alert"
  },
  cow012: {
    id: "COW-012",
    label: "COW-012 (Healthy Baseline)",
    breed: "Jersey Cross • Lactation Stage 1 (Day 42)",
    riskLevel: "ZERO",
    riskScore: "6%",
    riskColor: "text-emerald-600",
    riskBg: "bg-emerald-50",
    riskBorder: "border-emerald-200",
    predictionHorizon: "Low Risk Window",
    riskTrend: "Stable →",
    aiStatus: "NOMINAL",
    sensorStatus: "CONNECTED (99.8%)",
    udderTemp: 38.2,
    udderDiff: "Nominal baseline",
    activity: 74,
    activityDiff: "+2% nominal",
    rumination: 66,
    ruminationDiff: "Normal rumination",
    milkYield: 22.4,
    yieldDiff: "Target lactation",
    recommendation: "Routine herd maintenance. Continue automated telemetry logging and standard nutritional ration.",
    shapWeights: [
      { name: "Rumination consistency", weight: "-0.42", status: "Optimal digestive health" },
      { name: "Udder temp stability", weight: "-0.35", status: "Within normal limits" },
      { name: "Milk yield consistency", weight: "-0.28", status: "Stable production" },
      { name: "Circadian activity cycle", weight: "-0.15", status: "Healthy rest pattern" }
    ],
    timelineState: "healthy"
  },
  cow089: {
    id: "COW-089",
    label: "COW-089 (Subclinical Early Drift)",
    breed: "Sahiwal Dairy • Lactation Stage 3 (Day 130)",
    riskLevel: "MODERATE",
    riskScore: "54%",
    riskColor: "text-amber-600",
    riskBg: "bg-amber-50",
    riskBorder: "border-amber-200",
    predictionHorizon: "9–14 Days Warning",
    riskTrend: "Drifting ↑",
    aiStatus: "ACTIVE",
    sensorStatus: "CONNECTED (98.9%)",
    udderTemp: 38.9,
    udderDiff: "+0.7°C mild drift",
    activity: 58,
    activityDiff: "-12% baseline",
    rumination: 52,
    ruminationDiff: "-16% baseline",
    milkYield: 18.0,
    yieldDiff: "-9% baseline",
    recommendation: "Flag for physical palpation at upcoming evening milking. Verify electrical conductivity at milk station.",
    shapWeights: [
      { name: "Conductivity trend", weight: "+0.26", status: "Mild ion leakage" },
      { name: "Rumination dip", weight: "+0.22", status: "Subclinical deficit" },
      { name: "Temperature variance", weight: "+0.18", status: "Mild thermal elevation" },
      { name: "Feeding bout duration", weight: "+0.09", status: "Marginal reduction" }
    ],
    timelineState: "warning"
  }
};

const AiIntelligence = () => {
  const [activeScenarioKey, setActiveScenarioKey] = useState("cow024");
  const [isLiveStream, setIsLiveStream] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [tick, setTick] = useState(0);

  const scenario = scenarios[activeScenarioKey];

  // Subtle live micro-simulation without excessive blinking
  useEffect(() => {
    if (!isLiveStream) return;
    const interval = setInterval(() => {
      setTick(t => (t + 1) % 100);
    }, 4000);
    return () => clearInterval(interval);
  }, [isLiveStream]);

  // Small micro-variations for live simulation feeling
  const liveUdderTemp = (scenario.udderTemp + ((tick % 3) - 1) * 0.05).toFixed(1);
  const liveActivity = Math.round(scenario.activity + ((tick % 2) - 0.5) * 1);
  const liveRumination = Math.round(scenario.rumination + ((tick % 3) - 1) * 1);
  const liveYield = (scenario.milkYield + ((tick % 2) - 0.5) * 0.1).toFixed(1);

  return (
    <section 
      id="ai" 
      style={{ scrollMarginTop: '90px' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 bg-[var(--bg-main)] border-t border-emerald-900/10 relative"
    >
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider border border-emerald-200 shadow-2xs mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
          AI Intelligence Core & Edge Simulation
        </div>
        <h2 className="section-heading">Predictive Mastitis Intelligence</h2>
        <p className="section-description mx-auto">
          Processing multi-sensor telemetry at the farm edge. Continuous hazard modeling personalizes individual physiological baselines to forecast bovine mastitis risk 7–14 days in advance.
        </p>
      </div>

      {/* ======================================================== */}
      {/* FEATURED: REAL CATTLE + IoT AI SIMULATION INTERFACE     */}
      {/* ======================================================== */}
      <div className="bg-[#0B1E19] rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-6 lg:p-7 text-white mb-8 sm:mb-10 relative overflow-hidden">
        
        {/* Background glow styling */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Simulation Control Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-5 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span className="text-[11px] font-mono tracking-widest text-[#10B981] uppercase font-bold">
                Live Edge Simulation Interface
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Multimodal Bovine Telemetry & Neural Hazard Forecast
            </h3>
          </div>

          {/* Interactive Scenario Selector & Live Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-white/10 p-1 rounded-xl flex items-center gap-1 border border-white/10">
              {Object.keys(scenarios).map((key) => {
                const sc = scenarios[key];
                const isSelected = activeScenarioKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveScenarioKey(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#10B981] text-white shadow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {sc.id}
                  </button>
                );
              })}
            </div>

            {/* Live Telemetry Stream Toggle */}
            <button
              type="button"
              onClick={() => setIsLiveStream(!isLiveStream)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors border ${
                isLiveStream
                  ? 'bg-emerald-950/80 text-[#10B981] border-[#10B981]/40'
                  : 'bg-white/5 text-gray-400 border-white/10'
              }`}
              title={isLiveStream ? "Pause Telemetry Stream" : "Resume Telemetry Stream"}
            >
              {isLiveStream ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isLiveStream ? "Stream: Active" : "Stream: Paused"}</span>
            </button>
          </div>
        </div>

        {/* Central Simulation Cockpit Layout */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-5 items-stretch">
          
          {/* ======================================================== */}
          {/* CENTRAL VISUAL ELEMENT: Real Cattle Image with AI HUD    */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/30 bg-[#061812] shadow-xl group flex-1 flex flex-col justify-center">
              
              {/* Central Primary Real Image */}
              <div className="relative w-full overflow-hidden">
                <img 
                  src="/cattle-simulation.jpg" 
                  alt="Real On-Barn AI Telemetry Simulation with Cow, Collar, Edge Box, and Farm App" 
                  className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />

                {/* Subtle Technical HUD Overlays over Real Photo */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                  <div className="px-2.5 py-1 rounded-md bg-[#0B1E19]/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    CAM-01 • BARN SENSOR DEPLOYMENT
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-[#0B1E19]/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-gray-300">
                    LATENCY: 14ms
                  </div>
                </div>

                {/* Hotspot 1: Smart Collar */}
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 'collar' ? null : 'collar')}
                  className="absolute top-[28%] left-[20%] z-20 group/point focus:outline-hidden"
                  title="Collar Sensor Telemetry"
                >
                  <span className="relative flex h-5 w-5">
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500/90 border-2 border-white shadow-lg items-center justify-center text-[9px] font-black text-white">
                      1
                    </span>
                  </span>
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0B1E19]/90 border border-cyan-400/50 text-[10px] font-bold text-cyan-300 px-2 py-0.5 rounded shadow-md pointer-events-none">
                    Smart Collar (9-DOF IMU)
                  </div>
                </button>

                {/* Hotspot 2: Milk Station Probe */}
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 'probe' ? null : 'probe')}
                  className="absolute top-[48%] left-[45%] z-20 group/point focus:outline-hidden"
                  title="Milk Conductivity & Temp Probe"
                >
                  <span className="relative flex h-5 w-5">
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500/90 border-2 border-white shadow-lg items-center justify-center text-[9px] font-black text-white">
                      2
                    </span>
                  </span>
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0B1E19]/90 border border-blue-400/50 text-[10px] font-bold text-blue-300 px-2 py-0.5 rounded shadow-md pointer-events-none">
                    Conductivity Sensor Vessel
                  </div>
                </button>

                {/* Hotspot 3: Edge Computing Unit */}
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 'edge' ? null : 'edge')}
                  className="absolute top-[68%] left-[56%] z-20 group/point focus:outline-hidden"
                  title="Edge Controller Unit"
                >
                  <span className="relative flex h-5 w-5">
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500/90 border-2 border-white shadow-lg items-center justify-center text-[9px] font-black text-white">
                      3
                    </span>
                  </span>
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0B1E19]/90 border border-emerald-400/50 text-[10px] font-bold text-emerald-300 px-2 py-0.5 rounded shadow-md pointer-events-none">
                    ESP32 Edge Gateway
                  </div>
                </button>

                {/* Hotspot 4: Mobile Farmer Screen */}
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 'mobile' ? null : 'mobile')}
                  className="absolute top-[65%] right-[12%] z-20 group/point focus:outline-hidden"
                  title="Farmer Mobile App Alert"
                >
                  <span className="relative flex h-5 w-5">
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-amber-500/90 border-2 border-white shadow-lg items-center justify-center text-[9px] font-black text-white">
                      4
                    </span>
                  </span>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0B1E19]/90 border border-amber-400/50 text-[10px] font-bold text-amber-300 px-2 py-0.5 rounded shadow-md pointer-events-none">
                    Veterinary Alert Screen
                  </div>
                </button>

              </div>

              {/* Bottom HUD Bar on Central Image */}
              <div className="bg-[#0B1E19]/95 px-4 py-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-[#10B981]" />
                    Target Subject: <span className="text-[#10B981] font-mono">{scenario.id}</span>
                  </span>
                  <span className="text-gray-400 hidden sm:inline">• {scenario.breed}</span>
                </div>
                <div className="text-[10px] font-mono text-gray-400">
                  AI Model: <span className="text-white font-semibold">LightGBM Hazard Model</span>
                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* SURROUNDING PANELS: Sensor Telemetry & AI Prediction     */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col space-y-3.5">
            
            {/* Panel 1: SENSOR TELEMETRY */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#10B981]" />
                  Live Sensor Telemetry
                </span>
                <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/20 px-2 py-0.5 rounded border border-[#10B981]/30">
                  {scenario.sensorStatus}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                
                {/* Udder Temperature */}
                <div className="bg-[#0B1E19] p-2.5 rounded-xl border border-white/10">
                  <div className="text-[10px] font-semibold text-gray-400 flex items-center justify-between">
                    <span>Udder Temp</span>
                    <Thermometer className="w-3 h-3 text-red-400" />
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-0.5">
                    {liveUdderTemp}°C
                  </div>
                  <div className={`text-[10px] font-medium mt-0.5 ${
                    scenario.riskLevel === 'HIGH' ? 'text-red-400 font-bold' : 'text-gray-400'
                  }`}>
                    {scenario.udderDiff}
                  </div>
                </div>

                {/* Activity */}
                <div className="bg-[#0B1E19] p-2.5 rounded-xl border border-white/10">
                  <div className="text-[10px] font-semibold text-gray-400 flex items-center justify-between">
                    <span>Activity</span>
                    <Activity className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-0.5">
                    {liveActivity}
                  </div>
                  <div className={`text-[10px] font-medium mt-0.5 ${
                    scenario.riskLevel === 'HIGH' ? 'text-red-400 font-bold' : 'text-gray-400'
                  }`}>
                    {scenario.activityDiff}
                  </div>
                </div>

                {/* Rumination */}
                <div className="bg-[#0B1E19] p-2.5 rounded-xl border border-white/10">
                  <div className="text-[10px] font-semibold text-gray-400 flex items-center justify-between">
                    <span>Rumination</span>
                    <Cpu className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-0.5">
                    {liveRumination} min/d
                  </div>
                  <div className={`text-[10px] font-medium mt-0.5 ${
                    scenario.riskLevel === 'HIGH' ? 'text-red-400 font-bold' : 'text-gray-400'
                  }`}>
                    {scenario.ruminationDiff}
                  </div>
                </div>

                {/* Milk Yield */}
                <div className="bg-[#0B1E19] p-2.5 rounded-xl border border-white/10">
                  <div className="text-[10px] font-semibold text-gray-400 flex items-center justify-between">
                    <span>Milk Yield</span>
                    <Droplet className="w-3 h-3 text-blue-400" />
                  </div>
                  <div className="text-base sm:text-lg font-black text-white mt-0.5">
                    {liveYield} L
                  </div>
                  <div className={`text-[10px] font-medium mt-0.5 ${
                    scenario.riskLevel === 'HIGH' ? 'text-red-400 font-bold' : 'text-gray-400'
                  }`}>
                    {scenario.yieldDiff}
                  </div>
                </div>

              </div>
            </div>

            {/* Panel 2: AI PREDICTION ENGINE */}
            <div className={`rounded-2xl p-4 border backdrop-blur-sm transition-colors ${
              scenario.riskLevel === 'HIGH' 
                ? 'bg-red-950/40 border-red-500/40' 
                : scenario.riskLevel === 'MODERATE'
                ? 'bg-amber-950/40 border-amber-500/40'
                : 'bg-emerald-950/40 border-emerald-500/40'
            }`}>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                  <BrainCircuit className="w-3.5 h-3.5 text-[#10B981]" />
                  AI Risk Prediction
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                  Status: {scenario.aiStatus}
                </span>
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Mastitis Risk</div>
                  <div className={`text-2xl sm:text-3xl font-black ${
                    scenario.riskLevel === 'HIGH' ? 'text-red-400' :
                    scenario.riskLevel === 'MODERATE' ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {scenario.riskLevel} ({scenario.riskScore})
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Horizon</div>
                  <div className="text-sm font-bold text-white">
                    {scenario.predictionHorizon}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                <span className="text-gray-300">Trend Trajectory:</span>
                <span className={`font-bold ${
                  scenario.riskLevel === 'HIGH' ? 'text-red-400' :
                  scenario.riskLevel === 'MODERATE' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {scenario.riskTrend}
                </span>
              </div>
            </div>

            {/* Panel 3: VETERINARY DECISION SUPPORT */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#10B981] text-white shrink-0 mt-0.5">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider">
                  Veterinary Decision Recommendation
                </div>
                <p className="text-xs text-gray-200 mt-1 leading-relaxed font-normal">
                  {scenario.recommendation}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 14-Day Prediction Horizon & Timeline Ribbon */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
            <span className="font-bold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
              7–14 Day Early Warning Prediction Horizon
            </span>
            <span className="text-[11px] text-gray-400 font-mono">
              Discrete-Time Hazard Model Trajectory
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="bg-[#0B1E19] p-2 rounded-xl border border-white/10">
              <div className="text-[10px] text-gray-400 font-semibold">Days 1–3</div>
              <div className="font-bold text-emerald-400 mt-0.5">Baseline Norm</div>
              <div className="text-[9px] text-gray-400">Nominal Telemetry</div>
            </div>
            <div className="bg-[#0B1E19] p-2 rounded-xl border border-white/10">
              <div className="text-[10px] text-gray-400 font-semibold">Days 4–6</div>
              <div className="font-bold text-amber-400 mt-0.5">Subclinical Drift</div>
              <div className="text-[9px] text-gray-400">Rumination dip (-15%)</div>
            </div>
            <div className="bg-[#0B1E19] p-2 rounded-xl border border-white/10">
              <div className="text-[10px] text-gray-400 font-semibold">Days 7–10</div>
              <div className="font-bold text-red-400 mt-0.5">Early Warning Window</div>
              <div className="text-[9px] text-gray-400">Temp +1.4°C / Yield -18%</div>
            </div>
            <div className="bg-[#0B1E19] p-2 rounded-xl border border-white/10 hidden sm:block">
              <div className="text-[10px] text-gray-400 font-semibold">Days 11–14</div>
              <div className="font-bold text-emerald-300 mt-0.5">Early Care Window</div>
              <div className="text-[9px] text-gray-400">CMT test & recovery</div>
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* AI INTELLIGENCE CORE: SPECIFICATIONS & EXPLAINABILITY     */}
      {/* ======================================================== */}

      {/* AI Pipeline Flow Visualization */}
      <div className="bg-background rounded-3xl p-6 sm:p-7 mb-8 sm:mb-10 shadow-inner border border-gray-100 overflow-x-auto">
        <div className="min-w-[760px] flex items-center justify-between gap-2 text-xs font-semibold">
          <div className="flex flex-col items-center gap-1.5 p-2.5 bg-surface rounded-xl shadow-xs border-t-2 border-primary">
            <Database className="w-5 h-5 text-primary" /> 
            <span>Multimodal Data</span>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/30 to-secondary/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-secondary"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2.5 bg-surface rounded-xl shadow-xs border-t-2 border-secondary">
            <Activity className="w-5 h-5 text-secondary" /> 
            <span>Personal Baseline</span>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-secondary/30 to-blue-500/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2.5 bg-surface rounded-xl shadow-xs border-t-2 border-blue-500">
            <LineChart className="w-5 h-5 text-blue-500" /> 
            <span>Temporal Features</span>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500/30 to-accent/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2.5 bg-surface rounded-xl shadow-xs border-t-2 border-accent">
            <Cpu className="w-5 h-5 text-accent" /> 
            <span>AI Forecasting</span>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-accent/30 to-orange-500/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2.5 bg-surface rounded-xl shadow-xs border-t-2 border-orange-500">
            <HelpCircle className="w-5 h-5 text-orange-500" /> 
            <span>Explainable AI</span>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-orange-500/30 to-purple-500/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-500"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2.5 bg-surface rounded-xl shadow-xs border-t-2 border-purple-500">
            <ShieldAlert className="w-5 h-5 text-purple-500" /> 
            <span>Confidence Gate</span>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-purple-500/30 to-red-500/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-500"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2.5 bg-surface rounded-xl shadow-xs border-t-2 border-red-500">
            <BellRing className="w-5 h-5 text-red-500" /> 
            <span>Risk Class</span>
          </div>
        </div>
      </div>

      {/* 3-Column Specifications Grid */}
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
        
        {/* Multimodal Data */}
        <div className="card p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-text mb-3 border-b pb-2">Multimodal Feature Vector</h3>
          <div className="space-y-2.5">
            <div className="bg-gray-50 p-2.5 rounded-xl text-xs">
              <strong className="block text-primary mb-0.5 font-bold">Animal Identity</strong>
              <span className="text-text-muted">Unique ID, Breed, Age, Lactation Stage, Parity, Health History</span>
            </div>
            <div className="bg-gray-50 p-2.5 rounded-xl text-xs">
              <strong className="block text-secondary mb-0.5 font-bold">Milk Biomarkers</strong>
              <span className="text-text-muted">Electrical Conductivity, Temperature, Yield Rate, Historical SCC</span>
            </div>
            <div className="bg-gray-50 p-2.5 rounded-xl text-xs">
              <strong className="block text-accent mb-0.5 font-bold">Behavior & Physiology</strong>
              <span className="text-text-muted">9-DOF IMU Activity, Rumination acoustic time, Udder IR Temp</span>
            </div>
            <div className="bg-gray-50 p-2.5 rounded-xl text-xs">
              <strong className="block text-blue-500 mb-0.5 font-bold">Environment & Barn</strong>
              <span className="text-text-muted">Temperature Humidity Index (THI), Shed Ventilation, Cleanliness</span>
            </div>
          </div>
        </div>

        {/* Personalized Baseline */}
        <div className="card p-5 sm:p-6 border-2 border-primary/20">
          <h3 className="text-base sm:text-lg font-bold text-primary mb-3 flex items-center gap-2">
            <Target className="w-4 h-4" /> Personalized Dynamic Baseline
          </h3>
          <p className="text-xs text-text-muted mb-4 leading-relaxed font-normal">
            Static thresholds cause false alarms when seasons shift. DAIRYRAKSHAK learns the individual cow's circadian baseline.
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-background rounded-xl border border-gray-100">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                BASELINE NORM (COW-024)
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-gray-700">
                <div>Activity: 72</div>
                <div>Rumin: 65 min</div>
                <div>Yield: 18.0 L</div>
              </div>
            </div>
            <div className="p-3 bg-red-50 rounded-xl border border-red-100">
              <div className="text-[10px] font-bold text-red-700 uppercase tracking-wider mb-1.5 flex justify-between">
                <span>DETECTED DEVIATION</span>
                <span className="text-[9px] bg-red-200/60 px-1 rounded">Significant Flag</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs font-bold text-red-700">
                <div>Act: 48 ↓</div>
                <div>Rum: 44 ↓</div>
                <div>Yield: 14.2 L ↓</div>
              </div>
            </div>
          </div>
        </div>

        {/* Confidence & Explainability */}
        <div className="flex flex-col gap-4">
          <div className="card p-5 flex-1 bg-surface border-l-4 border-l-accent">
            <h3 className="text-sm sm:text-base font-bold text-text mb-1.5 flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-accent" /> TreeSHAP Explainability
            </h3>
            <p className="text-xs text-text-muted leading-relaxed font-normal mb-2">
              Provides transparent algorithmic reasoning. Every alert shows the exact percentage contribution of each physiological parameter.
            </p>
            <div className="bg-amber-50/60 p-2 rounded-lg border border-amber-200/50 text-[11px] font-semibold text-amber-900">
              Top Factor: Rumination deficit (+0.38)
            </div>
          </div>

          <div className="card p-5 flex-1">
            <h3 className="text-sm sm:text-base font-bold text-text mb-1.5 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-purple-600" /> Confidence Gate
            </h3>
            <p className="text-xs text-text-muted leading-relaxed font-normal mb-2">
              "Missing data ≠ safe animal." Requires minimum sensor completeness threshold before classifying risk status.
            </p>
            <div className="flex items-center gap-1.5 bg-gray-50 p-2 rounded-lg text-xs font-semibold text-gray-700">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Insufficient Telemetry = Risk State Unknown
            </div>
          </div>
        </div>

      </div>

      {/* Model Specifications Ribbon */}
      <div className="bg-primary-dark text-surface rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full opacity-40 blur-3xl"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 text-primary-light">
              AI / ML Model Architecture Specifications
            </h3>
            <div className="space-y-2.5 text-xs text-gray-300 font-medium">
              <div className="flex items-start gap-3">
                <div className="w-32 font-bold text-white shrink-0">PRIMARY MODEL:</div>
                <div>LightGBM Gradient-Boosted Trees</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-32 font-bold text-white shrink-0">BENCHMARK:</div>
                <div>XGBoost / Random Forest Ensembles</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-32 font-bold text-white shrink-0">FORECASTING:</div>
                <div>Discrete-Time Hazard Model (Days 1–7, Days 8–14)</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-32 font-bold text-white shrink-0">CALIBRATION:</div>
                <div>Isotonic Probability Calibration</div>
              </div>
            </div>
          </div>

          <div className="bg-black/25 p-4 sm:p-5 rounded-xl border border-white/10 backdrop-blur-sm">
            <h4 className="font-bold text-accent text-xs sm:text-sm mb-2">Validation & Calibration Integrity</h4>
            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              LightGBM was selected for edge latency and non-linear interactions across physiological channels. Probability calibration guarantees that an 80% risk assessment aligns with genuine biological recurrence across on-field trials.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AiIntelligence;
