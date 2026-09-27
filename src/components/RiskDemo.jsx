import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';
import { 
  RefreshCw, 
  Bell, 
  CheckCircle2, 
  TrendingUp, 
  WifiOff, 
  Battery, 
  Activity, 
  Stethoscope, 
  FileCheck, 
  RefreshCcw, 
  Search, 
  X, 
  SlidersHorizontal
} from 'lucide-react';

const RiskDemo = () => {
  // Live ticking state
  const [updatedAgo, setUpdatedAgo] = useState(3);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0: Herd Overview, 1: Animals, 2: Devices, 3: Alerts, 4: Analytics
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);
  const [selectedCow, setSelectedCow] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Live KPI ticking fluctuations
  const [kpiShift, setKpiShift] = useState({ zero: 142, low: 24, mod: 8, high: 3 });

  // Filter and search states for Tab 2 (Animals)
  const [animalSearch, setAnimalSearch] = useState('');
  const [animalFilter, setAnimalFilter] = useState('ALL');
  const [animalSort, setAnimalSort] = useState('RISK_DESC');

  // Filter state for Tab 4 (Alerts)
  const [alertFilter, setAlertFilter] = useState('ALL');
  const [dismissedAlerts, setDismissedAlerts] = useState([]);

  // Live timer ticking
  useEffect(() => {
    const timer = setInterval(() => {
      setUpdatedAgo(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // KPI numbers subtle shift every 3 seconds
  useEffect(() => {
    const kpiInterval = setInterval(() => {
      setKpiShift(() => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return {
          zero: 142 + (delta > 0 ? 1 : 0),
          low: 24 + (delta < 0 ? 1 : -1),
          mod: 8,
          high: 3 + (delta > 0 ? 1 : 0)
        };
      });
    }, 3000);
    return () => clearInterval(kpiInterval);
  }, []);

  // Workflow step cycling every 5 seconds
  useEffect(() => {
    const wfInterval = setInterval(() => {
      setActiveWorkflowStep(prev => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(wfInterval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setUpdatedAgo(0);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Mock animals list
  const animalsList = [
    { id: "COW-024", risk: 88, status: "HIGH", lactation: "L2 D84", updated: "3s", breed: "Holstein Friesian", age: "4.2y", collar: "CLR-024-X", cond: "6.8 mS/cm", condBase: "4.9 mS/cm", condDelta: "+38%", temp: "39.5°C", tempBase: "38.6°C", tempDelta: "+0.9°C", rum: "390 min/d", rumBase: "480 min/d", rumDelta: "-19%", activity: "1,850 stp", actBase: "2,400 stp", actDelta: "-23%" },
    { id: "COW-019", risk: 79, status: "HIGH", lactation: "L2 D71", updated: "5s", breed: "Jersey Cross", age: "3.8y", collar: "CLR-019-B", cond: "6.4 mS/cm", condBase: "4.8 mS/cm", condDelta: "+33%", temp: "39.3°C", tempBase: "38.5°C", tempDelta: "+0.8°C", rum: "410 min/d", rumBase: "475 min/d", rumDelta: "-14%", activity: "1,980 stp", actBase: "2,350 stp", actDelta: "-16%" },
    { id: "COW-042", risk: 72, status: "HIGH", lactation: "L3 D12", updated: "8s", breed: "Holstein Friesian", age: "5.1y", collar: "CLR-042-Z", cond: "6.1 mS/cm", condBase: "4.7 mS/cm", condDelta: "+30%", temp: "39.1°C", tempBase: "38.6°C", tempDelta: "+0.5°C", rum: "425 min/d", rumBase: "490 min/d", rumDelta: "-13%", activity: "2,050 stp", actBase: "2,500 stp", actDelta: "-18%" },
    { id: "COW-017", risk: 58, status: "MODERATE", lactation: "L1 D45", updated: "2s", breed: "Gir Cross", age: "2.6y", collar: "CLR-017-A", cond: "5.5 mS/cm", condBase: "4.8 mS/cm", condDelta: "+15%", temp: "38.9°C", tempBase: "38.5°C", tempDelta: "+0.4°C", rum: "445 min/d", rumBase: "480 min/d", rumDelta: "-7%", activity: "2,200 stp", actBase: "2,400 stp", actDelta: "-8%" },
    { id: "COW-008", risk: 42, status: "MODERATE", lactation: "L2 D33", updated: "4s", breed: "Sahiwal", age: "3.5y", collar: "CLR-008-C", cond: "5.2 mS/cm", condBase: "4.9 mS/cm", condDelta: "+6%", temp: "38.8°C", tempBase: "38.6°C", tempDelta: "+0.2°C", rum: "460 min/d", rumBase: "470 min/d", rumDelta: "-2%", activity: "2,310 stp", actBase: "2,380 stp", actDelta: "-3%" },
    { id: "COW-031", risk: 38, status: "MODERATE", lactation: "L2 D92", updated: "12s", breed: "Jersey Cross", age: "4.0y", collar: "CLR-031-F", cond: "5.1 mS/cm", condBase: "4.8 mS/cm", condDelta: "+6%", temp: "38.7°C", tempBase: "38.5°C", tempDelta: "+0.2°C", rum: "465 min/d", rumBase: "485 min/d", rumDelta: "-4%", activity: "2,340 stp", actBase: "2,450 stp", actDelta: "-4%" },
    { id: "COW-005", risk: 24, status: "LOW", lactation: "L1 D90", updated: "6s", breed: "Holstein Friesian", age: "2.9y", collar: "CLR-005-K", cond: "4.9 mS/cm", condBase: "4.8 mS/cm", condDelta: "+2%", temp: "38.6°C", tempBase: "38.5°C", tempDelta: "+0.1°C", rum: "475 min/d", rumBase: "480 min/d", rumDelta: "-1%", activity: "2,380 stp", actBase: "2,400 stp", actDelta: "-1%" },
    { id: "COW-012", risk: 18, status: "LOW", lactation: "L2 D140", updated: "9s", breed: "Jersey Cross", age: "3.6y", collar: "CLR-012-P", cond: "4.8 mS/cm", condBase: "4.8 mS/cm", condDelta: "0%", temp: "38.5°C", tempBase: "38.5°C", tempDelta: "0.0°C", rum: "480 min/d", rumBase: "480 min/d", rumDelta: "0%", activity: "2,420 stp", actBase: "2,400 stp", actDelta: "+1%" },
    { id: "COW-027", risk: 14, status: "LOW", lactation: "L3 D65", updated: "14s", breed: "Holstein Friesian", age: "5.3y", collar: "CLR-027-D", cond: "4.7 mS/cm", condBase: "4.7 mS/cm", condDelta: "0%", temp: "38.5°C", tempBase: "38.5°C", tempDelta: "0.0°C", rum: "490 min/d", rumBase: "485 min/d", rumDelta: "+1%", activity: "2,450 stp", actBase: "2,450 stp", actDelta: "0%" },
    { id: "COW-033", risk: 9, status: "ZERO", lactation: "L1 D110", updated: "3s", breed: "Gir Cross", age: "2.8y", collar: "CLR-033-G", cond: "4.8 mS/cm", condBase: "4.8 mS/cm", condDelta: "0%", temp: "38.5°C", tempBase: "38.5°C", tempDelta: "0.0°C", rum: "485 min/d", rumBase: "480 min/d", rumDelta: "+1%", activity: "2,410 stp", actBase: "2,400 stp", actDelta: "0%" },
    { id: "COW-049", risk: 6, status: "ZERO", lactation: "L2 D18", updated: "1s", breed: "Sahiwal", age: "3.7y", collar: "CLR-049-M", cond: "4.7 mS/cm", condBase: "4.7 mS/cm", condDelta: "0%", temp: "38.4°C", tempBase: "38.5°C", tempDelta: "-0.1°C", rum: "490 min/d", rumBase: "485 min/d", rumDelta: "+1%", activity: "2,440 stp", actBase: "2,420 stp", actDelta: "+1%" },
    { id: "COW-055", risk: 4, status: "ZERO", lactation: "L1 D205", updated: "7s", breed: "Jersey Cross", age: "3.1y", collar: "CLR-055-Y", cond: "4.7 mS/cm", condBase: "4.7 mS/cm", condDelta: "0%", temp: "38.5°C", tempBase: "38.5°C", tempDelta: "0.0°C", rum: "488 min/d", rumBase: "485 min/d", rumDelta: "0%", activity: "2,400 stp", actBase: "2,400 stp", actDelta: "0%" }
  ];

  // Devices list
  const devicesList = [
    { device: "COW-024", type: "Collar (ESP32)", status: "HIGH PRIORITY", statusType: "danger", sync: "3s ago" },
    { device: "Milk Station 2", type: "Milking Claw (Inline)", status: "OK", statusType: "success", sync: "2h ago" },
    { device: "Barn Ambient THI", type: "HerdShield Environment", status: "NORMAL", statusType: "success", sync: "1m ago" },
    { device: "COW-019", type: "Collar (ESP32)", status: "OK", statusType: "success", sync: "4s ago" },
    { device: "COW-042", type: "Collar (ESP32)", status: "LOW BATTERY (14%)", statusType: "warning", sync: "1m ago" },
    { device: "Milk Station 1", type: "Milking Claw (Inline)", status: "OK", statusType: "success", sync: "45m ago" },
    { device: "Node Gateway East", type: "LoRaWAN Concentrator", status: "OK", statusType: "success", sync: "12s ago" },
    { device: "COW-017", type: "Collar (ESP32)", status: "OK", statusType: "success", sync: "2s ago" }
  ];

  // Alerts list
  const rawAlerts = [
    { id: 1, type: "high", title: "COW-024 Mastitis Risk HIGH (88%)", time: "2m ago", factors: "Conductivity +38%, Udder Temp +0.9°C", cowId: "COW-024" },
    { id: 2, type: "device", title: "Milk Station 2 Battery low (18%)", time: "5m ago", factors: "Solar panel shadow / voltage drop", cowId: null },
    { id: 3, type: "moderate", title: "Barn Ambient THI Rising (THI: 74)", time: "8m ago", factors: "Heat stress baseline compensation active", cowId: null },
    { id: 4, type: "high", title: "COW-019 flagged as HIGH (79%)", time: "12m ago", factors: "Conductivity spike in quarter Left-Front", cowId: "COW-019" },
    { id: 5, type: "verified", title: "COW-042 verified by field vet", time: "20m ago", factors: "CMT score 2+ confirmed, herbal supportive care initiated", cowId: "COW-042" },
    { id: 6, type: "moderate", title: "COW-017 trending up (58%)", time: "25m ago", factors: "Rumination decreased by 18% over last 48h", cowId: "COW-017" },
    { id: 7, type: "device", title: "Node-7 telemetry delay", time: "32m ago", factors: "LoRa packet retry resolved automatically", cowId: null },
    { id: 8, type: "moderate", title: "COW-008 flagged as MODERATE (42%)", time: "45m ago", factors: "Inline milk temp reached 39.2°C", cowId: "COW-008" }
  ];

  // Filtered animals
  const filteredAnimals = animalsList
    .filter(a => {
      const matchSearch = a.id.toLowerCase().includes(animalSearch.toLowerCase()) || a.breed.toLowerCase().includes(animalSearch.toLowerCase());
      if (animalFilter === 'ALL') return matchSearch;
      return matchSearch && a.status === animalFilter;
    })
    .sort((a, b) => {
      if (animalSort === 'RISK_DESC') return b.risk - a.risk;
      if (animalSort === 'RISK_ASC') return a.risk - b.risk;
      return a.id.localeCompare(b.id);
    });

  // Filtered alerts
  const alertsList = rawAlerts
    .filter(a => !dismissedAlerts.includes(a.id))
    .filter(a => {
      if (alertFilter === 'ALL') return true;
      if (alertFilter === 'HIGH') return a.type === 'high';
      if (alertFilter === 'MODERATE') return a.type === 'moderate';
      if (alertFilter === 'DEVICE') return a.type === 'device';
      if (alertFilter === 'VERIFIED') return a.type === 'verified';
      return true;
    });

  // Herd Risk Trend 30 Days mock data
  const herdTrendData = [
    { day: "D-30", zero: 146, mod: 6, high: 2 },
    { day: "D-26", zero: 145, mod: 7, high: 2 },
    { day: "D-22", zero: 144, mod: 7, high: 3 },
    { day: "D-18", zero: 143, mod: 8, high: 2 },
    { day: "D-14", zero: 143, mod: 9, high: 3 },
    { day: "D-10", zero: 142, mod: 8, high: 3 },
    { day: "D-6", zero: 143, mod: 8, high: 4 },
    { day: "D-2", zero: 142, mod: 8, high: 3 },
    { day: "NOW", zero: kpiShift.zero, mod: kpiShift.mod, high: kpiShift.high }
  ];

  // 30-Day Risk Donut Data
  const riskDonutData = [
    { name: "Zero Risk", value: 142, color: "#10B981" },
    { name: "Low Risk", value: 24, color: "#3B82F6" },
    { name: "Moderate", value: 8, color: "#F59E0B" },
    { name: "High Risk", value: 3, color: "#DC2626" }
  ];

  // 7-Day Alert Volume Data
  const alertVolumeData = [
    { day: "Mon", subclinical: 4, clinical: 1 },
    { day: "Tue", subclinical: 6, clinical: 0 },
    { day: "Wed", subclinical: 5, clinical: 2 },
    { day: "Thu", subclinical: 7, clinical: 1 },
    { day: "Fri", subclinical: 3, clinical: 0 },
    { day: "Sat", subclinical: 8, clinical: 1 },
    { day: "Sun", subclinical: 5, clinical: 1 }
  ];

  // Milk Yield 30-day Trend
  const milkYieldData = [
    { day: "D-30", baseline: 24.2, observed: 24.5 },
    { day: "D-24", baseline: 24.2, observed: 24.1 },
    { day: "D-18", baseline: 24.2, observed: 23.9 },
    { day: "D-12", baseline: 24.2, observed: 24.0 },
    { day: "D-6", baseline: 24.2, observed: 23.7 },
    { day: "NOW", baseline: 24.2, observed: 23.8 }
  ];

  // SCC Trend
  const sccData = [
    { day: "D-30", scc: 130 },
    { day: "D-24", scc: 138 },
    { day: "D-18", scc: 145 },
    { day: "D-12", scc: 152 },
    { day: "D-6", scc: 168 },
    { day: "NOW", scc: 174 }
  ];

  // Top SHAP Factors Data
  const shapFactorsData = [
    { factor: "Conductivity", percentage: 25 },
    { factor: "Udder Temp", percentage: 18 },
    { factor: "Rumination", percentage: 14 },
    { factor: "Milk Yield", percentage: 11 },
    { factor: "Environment THI", percentage: 7 }
  ];

  // Verification Outcomes Data
  const verificationOutcomesData = [
    { week: "W-4", confirmed: 4, notMastitis: 1, pending: 1 },
    { week: "W-3", confirmed: 6, notMastitis: 1, pending: 2 },
    { week: "W-2", confirmed: 5, notMastitis: 0, pending: 2 },
    { week: "W-1", confirmed: 7, notMastitis: 2, pending: 1 }
  ];

  // Individual cow mini trend data (for drawer)
  const cowTrendData = [
    { day: "D-14", risk: 8 },
    { day: "D-10", risk: 14 },
    { day: "D-7", risk: 28 },
    { day: "D-4", risk: 52 },
    { day: "D-2", risk: 71 },
    { day: "NOW", risk: selectedCow ? selectedCow.risk : 88 }
  ];

  const workflowSteps = [
    { name: "AI Elevated Risk", badge: null, icon: Bell, color: "text-red-500", bg: "bg-red-50" },
    { name: "CMT/SCC Verification", badge: "⏳ 2 pending", icon: FileCheck, color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Veterinary Exam", badge: "📅 1 today", icon: Stethoscope, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Outcome Recorded", badge: "✅ 3 logged", icon: CheckCircle2, color: "text-teal-500", bg: "bg-teal-50" },
    { name: "Model Retraining", badge: "🔄 47 trained", icon: RefreshCcw, color: "text-blue-500", bg: "bg-blue-50" }
  ];

  return (
    <section 
      id="live-dashboard" 
      style={{ scrollMarginTop: '90px' }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 bg-[var(--bg-main)] border-t border-emerald-900/10 relative"
    >
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 z-50 bg-[#0B1E19] text-white px-4 py-2.5 rounded-xl border border-emerald-500/40 shadow-2xl flex items-center gap-2 text-xs font-semibold"
          >
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* BLOCK 1: Dashboard Top Bar                               */}
      {/* ======================================================== */}
      <div 
        style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
        className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white/70 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl shadow-2xs"
      >
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[11px] font-extrabold text-emerald-900 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>LIVE</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#0B1E19] tracking-tight">
            DAIRYRAKSHAK Herd Intelligence
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 font-medium">
            Updated {updatedAgo}s ago
          </span>

          <button
            type="button"
            onClick={handleRefresh}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 transition-colors cursor-pointer"
            title="Refresh feed"
          >
            <RefreshCw className={`w-4 h-4 text-emerald-700 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300 text-[10px] sm:text-xs font-bold text-emerald-900 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping"></span>
            SIMULATED LIVE FEED
          </span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BLOCK 2: Existing Section Heading & Subtitle (Kept as-is) */}
      {/* ======================================================== */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E19] mb-2.5 sm:mb-3 tracking-tight">
          Risk Intelligence & Herd Management
        </h2>
        <p className="section-description mx-auto text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          Comprehensive visibility from individual animals to herd-level trends, with built-in verification workflows.
        </p>
      </div>

      {/* ======================================================== */}
      {/* BLOCK 3: Tab Row (5 Tabs)                                */}
      {/* ======================================================== */}
      <div 
        style={{ borderBottom: '1px solid rgba(11, 74, 47, 0.12)' }}
        className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar"
      >
        {[
          "Herd Overview",
          "Individual Animals",
          "Devices",
          "Alerts",
          "Analytics"
        ].map((tabName, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold tracking-tight rounded-t-xl transition-all whitespace-nowrap cursor-pointer relative ${
                isActive
                  ? 'text-[#0B4A2F] font-extrabold bg-white/80 shadow-2xs border-t-2 border-t-[#10B981]'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-white/40'
              }`}
            >
              {tabName}
              {isActive && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#10B981]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* TAB CONTENT PANELS                                       */}
      {/* ======================================================== */}
      <AnimatePresence mode="wait">
        
        {/* ====================================================== */}
        {/* TAB 1: HERD OVERVIEW (Default)                         */}
        {/* ====================================================== */}
        {activeTab === 0 && (
          <motion.div
            key="tab-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* Top Grid: Herd-Level Risk Status + Device Health Priority */}
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Herd-Level View Card */}
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderTop: '4px solid #10B981', borderRadius: '16px' }}
                className="card p-5 sm:p-6 col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-md"
              >
                <div 
                  style={{ borderBottom: '1px solid rgba(11, 74, 47, 0.12)' }}
                  className="flex justify-between items-center mb-4 pb-2"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1E19]">Herd-Level Risk Status</h3>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    SIMULATED LIVE FEED
                  </span>
                </div>
                
                {/* 4 KPI Numbers */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div 
                    style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                    className="bg-gray-50/70 p-3 sm:p-4 rounded-xl text-center shadow-xs"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#10B981] mb-0.5">
                      {kpiShift.zero}
                    </div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Zero Risk</div>
                  </div>
                  <div 
                    style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                    className="bg-gray-50/70 p-3 sm:p-4 rounded-xl text-center shadow-xs"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-0.5">
                      {kpiShift.low}
                    </div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Low Risk</div>
                  </div>
                  <div 
                    style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                    className="bg-gray-50/70 p-3 sm:p-4 rounded-xl text-center shadow-xs"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-500 mb-0.5">
                      {kpiShift.mod}
                    </div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Moderate Risk</div>
                  </div>
                  <div 
                    style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                    className="bg-red-50/70 p-3 sm:p-4 rounded-xl text-center shadow-xs relative overflow-hidden"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-red-600 mb-0.5 relative z-10">
                      {kpiShift.high}
                    </div>
                    <div className="text-[11px] font-bold text-red-700 uppercase tracking-wider relative z-10">High Risk</div>
                  </div>
                </div>
                
                {/* 3 Status Chips */}
                <div 
                  style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-gray-600 bg-gray-50/80 p-3 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-500" /> 2 Animals Increasing Risk
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-red-600" /> 3 High-Risk Isolations
                  </div>
                  <div className="flex items-center gap-2">
                    <WifiOff className="w-4 h-4 text-gray-400" /> 1 Node Telemetry Delay
                  </div>
                </div>
              </div>

              {/* Device Health Priority Card */}
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
                className="card p-5 sm:p-6 bg-white rounded-2xl shadow-md"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#0B1E19] mb-1.5">Device Health Priority</h3>
                <p className="text-xs text-gray-500 mb-4 font-normal">
                  Prioritized automatically by Mastitis Risk + Battery Health + Node Significance.
                </p>
                <div className="space-y-2.5">
                  <div 
                    style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                    className="flex justify-between items-center p-2.5 bg-red-50 rounded-xl"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                      <Battery className="w-4 h-4 text-red-600" /> Collar (COW-024)
                    </div>
                    <span className="text-[10px] font-extrabold text-white bg-red-600 px-2 py-0.5 rounded">HIGH PRIORITY</span>
                  </div>
                  <div 
                    style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                    className="flex justify-between items-center p-2.5 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                      <Activity className="w-4 h-4 text-gray-400" /> Milk Station 2
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-200 px-2 py-0.5 rounded">OK (2H AGO)</span>
                  </div>
                  <div 
                    style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                    className="flex justify-between items-center p-2.5 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                      <Activity className="w-4 h-4 text-gray-400" /> Barn Ambient THI
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">NORMAL</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Veterinary Verification Workflow with Active Pulsing Step */}
            <div 
              style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '24px' }}
              className="bg-emerald-50/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#0B4A2F] mb-6 text-center">
                Veterinary Verification & Continuous Evaluation Workflow
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 max-w-5xl mx-auto">
                {workflowSteps.map((wf, idx) => {
                  const isActive = activeWorkflowStep === idx;
                  const Icon = wf.icon;
                  return (
                    <div
                      key={idx}
                      style={{ 
                        border: isActive ? '1px solid #10B981' : '1px solid rgba(11, 74, 47, 0.15)', 
                        borderRadius: '12px' 
                      }}
                      className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center text-center relative ${
                        isActive
                          ? 'bg-white shadow-lg ring-2 ring-emerald-400/40 -translate-y-1'
                          : 'bg-white/80 shadow-2xs'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl ${wf.bg} mb-2.5 shadow-2xs`}>
                        <Icon className={`w-5 h-5 ${wf.color}`} />
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-[#0B1E19] mb-1">
                        {wf.name}
                      </span>
                      {wf.badge && (
                        <span className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full mt-1">
                          {wf.badge}
                        </span>
                      )}
                      {isActive && (
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-gray-500 mt-5 max-w-2xl mx-auto text-xs leading-relaxed font-normal">
                DAIRYRAKSHAK is a forecasting and decision support system. It complements certified veterinary clinical expertise. Verified clinical outcomes close the loop to periodically retrain models for continuous field adaptation.
              </p>
            </div>

            {/* Herd Risk Trend Chart (30 Days) */}
            <div 
              style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
              className="card p-5 sm:p-7 bg-white rounded-2xl shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1E19]">Herd Risk Trend (Last 30 Days)</h3>
                  <p className="text-xs text-gray-500 font-normal">
                    Aggregate herd stratification across subclinical surveillance zones.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span> Zero</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Moderate</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-600"></span> High</span>
                </div>
              </div>

              <div className="w-full h-64 sm:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={herdTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#0B1E19', borderColor: '#10B981', color: '#fff', borderRadius: '10px', fontSize: '11px' }} />
                    <Line type="monotone" dataKey="zero" stroke="#10B981" strokeWidth={2.5} dot={false} name="Zero Risk" />
                    <Line type="monotone" dataKey="mod" stroke="#F59E0B" strokeWidth={2.5} dot={false} name="Moderate Risk" />
                    <Line type="monotone" dataKey="high" stroke="#DC2626" strokeWidth={2.5} dot={false} name="High Risk" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* High-Risk Animals Mini-Table */}
            <div 
              style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
              className="card p-5 sm:p-7 bg-white rounded-2xl shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#0B1E19]">High-Risk Attention Queue</h3>
                <span className="text-xs font-semibold text-gray-500">3 Priority Isolations</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr 
                      style={{ borderBottom: '1px solid rgba(11, 74, 47, 0.12)' }}
                      className="text-gray-400 uppercase text-[10px] tracking-wider"
                    >
                      <th className="py-2.5 px-3">Cow ID</th>
                      <th className="py-2.5 px-3">Risk Assessment</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody 
                    style={{ borderColor: 'rgba(11, 74, 47, 0.12)' }}
                    className="divide-y divide-[rgba(11,74,47,0.12)] font-medium"
                  >
                    {animalsList.slice(0, 3).map((cow, cIdx) => (
                      <tr key={cIdx} className="hover:bg-emerald-50/40 transition-colors">
                        <td className="py-3 px-3 font-bold text-[#0B1E19] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                          <span>{cow.id}</span>
                        </td>
                        <td className="py-3 px-3 min-w-[160px]">
                          <div className="flex items-center gap-2">
                            <div className="w-28 bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div className="bg-red-600 h-full rounded-full" style={{ width: `${cow.risk}%` }}></div>
                            </div>
                            <span className="font-extrabold text-red-700">{cow.risk}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-red-700 border border-red-200">
                            HIGH
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right space-x-2">
                          <button
                            type="button"
                            onClick={() => setSelectedCow(cow)}
                            className="px-2.5 py-1 text-xs font-bold rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => showToast(`SMS & IVR dispatched to attending veterinarian for ${cow.id}`)}
                            className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white cursor-pointer"
                          >
                            Notify Vet
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </motion.div>
        )}

        {/* ====================================================== */}
        {/* TAB 2: INDIVIDUAL ANIMALS                              */}
        {/* ====================================================== */}
        {activeTab === 1 && (
          <motion.div
            key="tab-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
            className="card p-5 sm:p-7 bg-white rounded-2xl shadow-md space-y-5"
          >
            {/* Filter Bar */}
            <div 
              style={{ borderBottom: '1px solid rgba(11, 74, 47, 0.12)' }}
              className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4"
            >
              {/* Search box */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Cow ID or Breed..."
                  value={animalSearch}
                  onChange={(e) => setAnimalSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#10B981]"
                />
              </div>

              {/* Filter and Sort Controls */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <div className="flex items-center gap-1.5 text-xs">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400" />
                  <select
                    value={animalFilter}
                    onChange={(e) => setAnimalFilter(e.target.value)}
                    className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 font-semibold text-gray-700 cursor-pointer"
                  >
                    <option value="ALL">All Risk Tiers</option>
                    <option value="HIGH">High Risk</option>
                    <option value="MODERATE">Moderate Risk</option>
                    <option value="LOW">Low Risk</option>
                    <option value="ZERO">Zero Risk</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <select
                    value={animalSort}
                    onChange={(e) => setAnimalSort(e.target.value)}
                    className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 font-semibold text-gray-700 cursor-pointer"
                  >
                    <option value="RISK_DESC">Risk % (High → Low)</option>
                    <option value="RISK_ASC">Risk % (Low → High)</option>
                    <option value="ID">Cow ID</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Animals Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr 
                    style={{ borderBottom: '1px solid rgba(11, 74, 47, 0.12)' }}
                    className="text-gray-400 uppercase text-[10px] tracking-wider"
                  >
                    <th className="py-2.5 px-3">Cow ID</th>
                    <th className="py-2.5 px-3">Risk %</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">Lactation Stage</th>
                    <th className="py-2.5 px-3">Last Updated</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody 
                  style={{ borderColor: 'rgba(11, 74, 47, 0.12)' }}
                  className="divide-y divide-[rgba(11,74,47,0.12)] font-medium"
                >
                  {filteredAnimals.map((cow, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/30 transition-colors">
                      <td className="py-3 px-3 font-bold text-[#0B1E19]">
                        {cow.id}
                      </td>
                      <td className="py-3 px-3 min-w-[140px]">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                cow.risk >= 70 ? 'bg-red-600' : cow.risk >= 30 ? 'bg-amber-500' : 'bg-emerald-500'
                              }`} 
                              style={{ width: `${cow.risk}%` }}
                            ></div>
                          </div>
                          <span className="font-bold">{cow.risk}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                          cow.status === 'HIGH' ? 'bg-red-50 text-red-700 border border-red-200' :
                          cow.status === 'MODERATE' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                          cow.status === 'LOW' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                          'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        }`}>
                          {cow.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-gray-600">{cow.lactation}</td>
                      <td className="py-3 px-3 text-gray-400 font-mono text-[11px]">{cow.updated} ago</td>
                      <td className="py-3 px-3 text-right space-x-2">
                        <button
                          type="button"
                          onClick={() => setSelectedCow(cow)}
                          className="px-2.5 py-1 text-xs font-bold rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          onClick={() => showToast(`Clinical alert transmitted for ${cow.id}`)}
                          className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white cursor-pointer"
                        >
                          Notify Vet
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </motion.div>
        )}

        {/* ====================================================== */}
        {/* TAB 3: DEVICES                                         */}
        {/* ====================================================== */}
        {activeTab === 2 && (
          <motion.div
            key="tab-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Top 4 Fleet Overview KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                className="p-4 rounded-xl bg-white shadow-sm text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#10B981] mb-0.5">92</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Normal</div>
              </div>
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                className="p-4 rounded-xl bg-white shadow-sm text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-amber-500 mb-0.5">5</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Low Battery</div>
              </div>
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                className="p-4 rounded-xl bg-white shadow-sm text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-gray-400 mb-0.5">2</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Offline</div>
              </div>
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                className="p-4 rounded-xl bg-white shadow-sm text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-red-600 mb-0.5">1</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sensor Error</div>
              </div>
            </div>

            {/* Device Table */}
            <div 
              style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
              className="card p-5 sm:p-7 bg-white rounded-2xl shadow-md"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#0B1E19] mb-4">Hardware Fleet Health & Telemetry</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm table-fixed" style={{ tableLayout: 'fixed', width: '100%' }}>
                  <colgroup>
                    <col style={{ width: '22%' }} />
                    <col style={{ width: '22%' }} />
                    <col style={{ width: '18%' }} />
                    <col style={{ width: '16%' }} />
                    <col style={{ width: '22%' }} />
                  </colgroup>
                  <thead>
                    <tr 
                      style={{ borderBottom: '1px solid rgba(11, 74, 47, 0.12)' }}
                      className="text-gray-400 uppercase text-[10px] tracking-wider"
                    >
                      <th className="py-2.5 px-3 w-[22%]" style={{ width: '22%' }}>Device Node</th>
                      <th className="py-2.5 px-3 w-[22%]" style={{ width: '22%' }}>Type</th>
                      <th className="py-2.5 px-3 w-[18%]" style={{ width: '18%' }}>Status</th>
                      <th className="py-2.5 px-3 w-[16%]" style={{ width: '16%' }}>Last Sync</th>
                      <th className="py-2.5 px-3 text-right w-[22%]" style={{ width: '22%' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody 
                    style={{ borderColor: 'rgba(11, 74, 47, 0.12)' }}
                    className="divide-y divide-[rgba(11,74,47,0.12)] font-medium"
                  >
                    {devicesList.map((dev, dIdx) => (
                      <tr key={dIdx} className="hover:bg-emerald-50/30 transition-colors">
                        <td className="py-3 px-3 font-bold text-[#0B1E19] truncate">{dev.device}</td>
                        <td className="py-3 px-3 text-gray-600 truncate">{dev.type}</td>
                        <td className="py-3 px-3">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold whitespace-nowrap ${
                            dev.statusType === 'danger' ? 'bg-red-50 text-red-700 border border-red-200' :
                            dev.statusType === 'warning' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                            dev.statusType === 'error' ? 'bg-red-50 text-red-800 border border-red-300' :
                            'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          }`}>
                            {dev.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-gray-500 font-mono text-xs whitespace-nowrap">{dev.sync}</td>
                        <td className="py-3 px-3 text-right">
                          <div className="inline-flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => showToast(`Diagnostics opened for ${dev.device}`)}
                              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer transition-colors"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              onClick={() => showToast(`Ping telemetry sent to ${dev.device}`)}
                              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white cursor-pointer transition-colors"
                            >
                              Ping
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ====================================================== */}
        {/* TAB 4: ALERTS FEED                                     */}
        {/* ====================================================== */}
        {activeTab === 3 && (
          <motion.div
            key="tab-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {["ALL", "HIGH", "MODERATE", "DEVICE", "VERIFIED"].map((f, fIdx) => (
                <button
                  key={fIdx}
                  type="button"
                  onClick={() => setAlertFilter(f)}
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    alertFilter === f
                      ? 'bg-emerald-800 text-white shadow-2xs'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Alerts List */}
            <div className="space-y-3">
              {alertsList.map((alert) => (
                <motion.div
                  key={alert.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                  className="p-4 rounded-xl bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${
                      alert.type === 'high' ? 'bg-red-600 animate-pulse' :
                      alert.type === 'moderate' ? 'bg-amber-500' :
                      alert.type === 'verified' ? 'bg-[#10B981]' :
                      'bg-blue-500'
                    }`}></span>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-[#0B1E19]">{alert.title}</h4>
                        <span className="text-[11px] text-gray-400 font-mono">({alert.time})</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Contributing telemetry: <span className="text-gray-700 font-semibold">{alert.factors}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    {alert.cowId && (
                      <button
                        type="button"
                        onClick={() => {
                          const target = animalsList.find(a => a.id === alert.cowId);
                          if (target) setSelectedCow(target);
                        }}
                        className="px-2.5 py-1 text-xs font-bold rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer"
                      >
                        View Cow
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => showToast(`Attending vet alerted for item #${alert.id}`)}
                      className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white cursor-pointer"
                    >
                      Notify Vet
                    </button>
                    <button
                      type="button"
                      onClick={() => setDismissedAlerts(prev => [...prev, alert.id])}
                      className="p-1 rounded-lg text-gray-400 hover:text-gray-600 cursor-pointer"
                      title="Dismiss"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        )}

        {/* ====================================================== */}
        {/* TAB 5: ANALYTICS                                       */}
        {/* ====================================================== */}
        {activeTab === 4 && (
          <motion.div
            key="tab-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Row 1: Donut & Bar Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Donut Chart: 30-Day Risk Distribution */}
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
                className="card p-5 sm:p-6 bg-white rounded-2xl shadow-md"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#0B1E19] mb-1">
                  30-Day Herd Risk Distribution
                </h4>
                <p className="text-xs text-gray-500 mb-4 font-normal">Active herd proportions by LightGBM risk classification tier.</p>
                <div className="w-full h-56 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={riskDonutData}
                        innerRadius={60}
                        outerRadius={85}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {riskDonutData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#0B1E19', borderColor: '#10B981', color: '#fff', borderRadius: '8px', fontSize: '11px' }} />
                      <Legend verticalAlign="bottom" height={36} iconSize={10} wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bar Chart: 7-Day Alert Volume */}
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
                className="card p-5 sm:p-6 bg-white rounded-2xl shadow-md"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#0B1E19] mb-1">
                  7-Day Alert Generation Volume
                </h4>
                <p className="text-xs text-gray-500 mb-4 font-normal">Daily trigger counts across subclinical early warnings and clinical alerts.</p>
                <div className="w-full h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={alertVolumeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0B1E19', borderColor: '#10B981', color: '#fff', borderRadius: '8px', fontSize: '11px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
                      <Bar dataKey="subclinical" fill="#10B981" name="Subclinical Flags" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="clinical" fill="#DC2626" name="Clinical Flags" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Row 2: Milk Yield & SCC Trend */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Milk Yield Trend */}
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
                className="card p-5 sm:p-6 bg-white rounded-2xl shadow-md"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#0B1E19] mb-1">
                  Herd Average Daily Milk Yield (Liters)
                </h4>
                <p className="text-xs text-gray-500 mb-4 font-normal">Preserved production vs unmanaged mastitis yield decay curve.</p>
                <div className="w-full h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={milkYieldData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                      <YAxis domain={[20, 26]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0B1E19', borderColor: '#10B981', color: '#fff', borderRadius: '8px', fontSize: '11px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
                      <Line type="monotone" dataKey="baseline" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth={2} dot={false} name="Healthy Baseline (24.2L)" />
                      <Line type="monotone" dataKey="observed" stroke="#10B981" strokeWidth={2.5} dot={{ r: 3 }} name="Observed Herd Avg" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* SCC Trend */}
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
                className="card p-5 sm:p-6 bg-white rounded-2xl shadow-md"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#0B1E19] mb-1">
                  Somatic Cell Count (SCC × 1,000 cells/mL)
                </h4>
                <p className="text-xs text-gray-500 mb-4 font-normal">Controlled within subclinical threshold prior to irreversible tissue injury.</p>
                <div className="w-full h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sccData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                      <YAxis domain={[100, 220]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0B1E19', borderColor: '#10B981', color: '#fff', borderRadius: '8px', fontSize: '11px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
                      <Line type="monotone" dataKey="scc" stroke="#3B82F6" strokeWidth={2.5} dot={{ r: 3 }} name="Herd Avg SCC" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Row 3: SHAP Factors & Verification Outcomes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* SHAP Factor Attribution */}
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
                className="card p-5 sm:p-6 bg-white rounded-2xl shadow-md"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#0B1E19] mb-1">
                  Top SHAP Global Feature Importance
                </h4>
                <p className="text-xs text-gray-500 mb-4 font-normal">Relative contribution to 7–14 day predictive hazard calculations.</p>
                <div className="w-full h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={shapFactorsData} margin={{ top: 10, right: 20, left: 40, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                      <XAxis type="number" unit="%" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                      <YAxis type="category" dataKey="factor" tick={{ fontSize: 11, fill: '#64748b', fontWeight: 600 }} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0B1E19', borderColor: '#10B981', color: '#fff', borderRadius: '8px', fontSize: '11px' }} />
                      <Bar dataKey="percentage" fill="#10B981" radius={[0, 4, 4, 0]} name="Contribution %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Verification Outcomes */}
              <div 
                style={{ border: '1px solid rgba(11, 74, 47, 0.22)', borderRadius: '16px' }}
                className="card p-5 sm:p-6 bg-white rounded-2xl shadow-md"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#0B1E19] mb-1">
                  Field Clinical Verification Outcomes
                </h4>
                <p className="text-xs text-gray-500 mb-4 font-normal">CMT & veterinary examination ground-truth feedback per week.</p>
                <div className="w-full h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={verificationOutcomesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0B1E19', borderColor: '#10B981', color: '#fff', borderRadius: '8px', fontSize: '11px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
                      <Bar dataKey="confirmed" stackId="a" fill="#10B981" name="Confirmed Subclinical" />
                      <Bar dataKey="pending" stackId="a" fill="#F59E0B" name="Pending Exam" />
                      <Bar dataKey="notMastitis" stackId="a" fill="#94a3b8" name="False Alert (Excluded)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* ======================================================== */}
      {/* RIGHT-SIDE DRAWER: Individual Cow Health Dossier         */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedCow && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCow(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 cursor-pointer"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-white z-50 shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* Drawer Header */}
              <div 
                style={{ borderBottom: '1px solid rgba(11, 74, 47, 0.12)' }}
                className="p-5 sm:p-6 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-xs z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-black text-sm">
                    {selectedCow.id.split('-')[1]}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#0B1E19] flex items-center gap-2">
                      <span>{selectedCow.id}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-red-50 text-red-700 border border-red-200">
                        {selectedCow.status}
                      </span>
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {selectedCow.breed} · {selectedCow.lactation} · Collar #{selectedCow.collar}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCow(null)}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="p-5 sm:p-6 space-y-6 flex-1">
                
                {/* Risk Banner */}
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-red-700">
                      Predictive Mastitis Hazard
                    </div>
                    <div className="text-2xl font-black text-red-800">
                      {selectedCow.risk}%
                    </div>
                  </div>
                  <div className="text-right text-xs font-semibold text-red-700">
                    <div>Onset window:</div>
                    <div className="font-extrabold">7–10 Days Ahead</div>
                  </div>
                </div>

                {/* 14-Day Risk Trend Mini Chart */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    14-Day Risk Velocity
                  </h4>
                  <div 
                    style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px' }}
                    className="w-full h-32 bg-gray-50 rounded-xl p-2"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={cowTrendData} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} />
                        <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: '#0B1E19', borderColor: '#10B981', color: '#fff', borderRadius: '6px', fontSize: '10px' }} />
                        <Line type="monotone" dataKey="risk" stroke="#DC2626" strokeWidth={2.5} dot={{ r: 3, fill: '#DC2626' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Sensor Readings vs Baseline Table */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Telemetry vs Animal Baseline
                  </h4>
                  <div 
                    style={{ border: '1px solid rgba(11, 74, 47, 0.15)', borderRadius: '12px', borderColor: 'rgba(11, 74, 47, 0.12)' }}
                    className="rounded-xl divide-y divide-[rgba(11,74,47,0.12)] text-xs font-medium"
                  >
                    <div className="p-2.5 flex items-center justify-between">
                      <span className="text-gray-600">Electrical Conductivity</span>
                      <div className="text-right">
                        <span className="font-bold text-[#0B1E19]">{selectedCow.cond}</span>
                        <span className="text-[10px] text-red-600 ml-1.5 font-bold">{selectedCow.condDelta}</span>
                      </div>
                    </div>
                    <div className="p-2.5 flex items-center justify-between">
                      <span className="text-gray-600">Udder Skin Temp</span>
                      <div className="text-right">
                        <span className="font-bold text-[#0B1E19]">{selectedCow.temp}</span>
                        <span className="text-[10px] text-red-600 ml-1.5 font-bold">{selectedCow.tempDelta}</span>
                      </div>
                    </div>
                    <div className="p-2.5 flex items-center justify-between">
                      <span className="text-gray-600">Rumination Duration</span>
                      <div className="text-right">
                        <span className="font-bold text-[#0B1E19]">{selectedCow.rum}</span>
                        <span className="text-[10px] text-amber-600 ml-1.5 font-bold">{selectedCow.rumDelta}</span>
                      </div>
                    </div>
                    <div className="p-2.5 flex items-center justify-between">
                      <span className="text-gray-600">Activity Level</span>
                      <div className="text-right">
                        <span className="font-bold text-[#0B1E19]">{selectedCow.activity}</span>
                        <span className="text-[10px] text-amber-600 ml-1.5 font-bold">{selectedCow.actDelta}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TreeSHAP Local Feature Attribution */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Local TreeSHAP Attribution Breakdown
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-gray-700 font-semibold">Milk Electrical Conductivity</span>
                        <span className="text-red-700 font-bold">+42% impact</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-red-600 h-full rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-gray-700 font-semibold">Quarter Udder Temp Anomaly</span>
                        <span className="text-red-700 font-bold">+28% impact</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-gray-700 font-semibold">Rumination Decline</span>
                        <span className="text-amber-700 font-bold">+18% impact</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: '18%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Drawer Actions Footer */}
              <div 
                style={{ borderTop: '1px solid rgba(11, 74, 47, 0.12)' }}
                className="p-4 sm:p-5 bg-gray-50/80 space-y-2 sticky bottom-0"
              >
                <button
                  type="button"
                  onClick={() => {
                    showToast(`Priority Veterinary Ticket created for ${selectedCow.id}`);
                    setSelectedCow(null);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                >
                  Notify Assigned Veterinarian
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      showToast(`CMT Diagnostic Test scheduled for ${selectedCow.id}`);
                      setSelectedCow(null);
                    }}
                    className="py-2 px-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold text-xs cursor-pointer"
                  >
                    Schedule CMT
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      showToast(`Full Telemetry Dossier downloaded for ${selectedCow.id}`);
                    }}
                    className="py-2 px-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold text-xs cursor-pointer"
                  >
                    Export Dossier
                  </button>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};

export default RiskDemo;
