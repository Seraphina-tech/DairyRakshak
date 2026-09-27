import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

const FutureExpansion = () => {
  // Phase 1 and Phase 2 expanded by default
  const [expandedPhases, setExpandedPhases] = useState([0, 1]);

  const togglePhase = (index) => {
    setExpandedPhases(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const timelinePhases = [
    {
      phase: "Phase 1",
      title: "Working Demo & Core MVP",
      duration: "Weeks 1–4",
      status: "completed",
      isCurrent: false
    },
    {
      phase: "Phase 2",
      title: "AI Enhancement & Explainability",
      duration: "Weeks 5–10",
      status: "in-progress",
      isCurrent: true
    },
    {
      phase: "Phase 3",
      title: "Custom Hardware Integration",
      duration: "Weeks 11–16",
      status: "planned",
      isCurrent: false
    },
    {
      phase: "Phase 4",
      title: "On-Field Clinical Verification",
      duration: "Weeks 17–24",
      status: "planned",
      isCurrent: false
    },
    {
      phase: "Phase 5",
      title: "National Scale Expansion",
      duration: "Months 7–12",
      status: "planned",
      isCurrent: false
    },
    {
      phase: "Phase 6",
      title: "Future Platform Capabilities",
      duration: "Year 2+",
      status: "future",
      isCurrent: false
    }
  ];

  const phaseCards = [
    {
      phase: "Phase 1",
      title: "Working Demo & Core MVP",
      duration: "Weeks 1–4",
      status: "completed",
      categories: [
        {
          name: "HARDWARE",
          items: ["IoT Sensor telemetry"]
        },
        {
          name: "SOFTWARE",
          items: ["FastAPI ingestion", "PostgreSQL database", "Risk dashboard"]
        },
        {
          name: "AI/ML",
          items: ["Feature engineering", "LightGBM model", "7/14-day hazard risk"]
        }
      ]
    },
    {
      phase: "Phase 2",
      title: "AI Enhancement & Explainability",
      duration: "Weeks 5–10",
      status: "in-progress",
      categories: [
        {
          name: "AI/ML",
          items: [
            "Personalized animal baselines",
            "Circadian trend analysis",
            "TreeSHAP attribution",
            "Confidence gating"
          ]
        },
        {
          name: "SOFTWARE",
          items: ["Priority push alerts"]
        }
      ]
    },
    {
      phase: "Phase 3",
      title: "Custom Hardware Integration",
      duration: "Weeks 11–16",
      status: "planned",
      categories: [
        {
          name: "HARDWARE",
          items: [
            "Custom ESP32 PCB",
            "Milking-station conductometer",
            "Udder IR sensor array",
            "Low-power collar IMU",
            "LoRaWAN gateway node"
          ]
        }
      ]
    },
    {
      phase: "Phase 4",
      title: "On-Field Clinical Verification",
      duration: "Weeks 17–24",
      status: "planned",
      categories: [
        {
          name: "CLINICAL",
          items: [
            "CMT/SCC diagnostic pairing",
            "Field trial validation",
            "Veterinary outcome logging"
          ]
        },
        {
          name: "AI/ML",
          items: ["Closed-loop model evaluation"]
        }
      ]
    },
    {
      phase: "Phase 5",
      title: "National Scale Expansion",
      duration: "Months 7–12",
      status: "planned",
      categories: [
        {
          name: "SOFTWARE",
          items: [
            "Mobile App (PWA/Flutter)",
            "GIS district risk heatmaps",
            "Herd analytics"
          ]
        },
        {
          name: "HARDWARE",
          items: ["Multilingual SMS/IVR", "Teat camera inspection"]
        }
      ]
    },
    {
      phase: "Phase 6",
      title: "Future Platform Capabilities",
      duration: "Year 2+",
      status: "future",
      categories: [
        {
          name: "SOFTWARE",
          items: [
            "Mobile Application (PWA/Flutter)",
            "GIS Epidemiological Risk Clusters (Farm → Village → District)",
            "Regional Language Voice & UI Support (Hindi, Tamil, etc.)",
            "Enterprise Herd Management Analytics for Cooperatives"
          ]
        },
        {
          name: "HARDWARE",
          items: [
            "Multilingual SMS / Voice Call Alerts",
            "Thermal Imaging & Computer Vision Teat Scoring"
          ]
        },
        {
          name: "AI/ML",
          items: ["Continuous Self-Supervised Retraining Pipeline"]
        }
      ]
    }
  ];

  const categoryStyles = {
    HARDWARE: "bg-blue-50 text-blue-800 border-blue-200/80",
    SOFTWARE: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    "AI/ML": "bg-purple-50 text-purple-800 border-purple-200/80",
    CLINICAL: "bg-amber-50 text-amber-800 border-amber-200/80"
  };

  const statusBadges = {
    completed: { label: "COMPLETED", className: "bg-emerald-50 text-emerald-800 border-emerald-300" },
    "in-progress": { label: "IN PROGRESS", className: "bg-amber-50 text-amber-800 border-amber-300" },
    planned: { label: "PLANNED", className: "bg-gray-100 text-gray-700 border-gray-300" },
    future: { label: "FUTURE", className: "bg-purple-50 text-purple-800 border-purple-300" }
  };

  return (
    <section 
      id="roadmap" 
      style={{ scrollMarginTop: '90px' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[var(--bg-main)] border-t border-emerald-900/10"
    >
      {/* Existing Section Header (Strictly Unchanged) */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="section-heading">Implementation Roadmap & Future</h2>
        <p className="section-description mx-auto">
          A phased, systematic approach to building, validating, and scaling the DAIRYRAKSHAK platform.
        </p>
      </div>

      {/* Block 1: Horizontal Timeline Strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full bg-white/80 backdrop-blur-xs rounded-[20px] p-5 sm:p-7 border border-emerald-900/10 shadow-sm mb-6 relative"
      >
        {/* Legend */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-3 border-b border-gray-100">
          <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
            Platform Deployment Timeline
          </span>
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-gray-600">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              Completed
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              In Progress
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-50 text-gray-600 border border-gray-200">
              <span className="w-1.5 h-1.5 rounded-full border border-gray-400 bg-white"></span>
              Planned
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
              <span className="w-1.5 h-1.5 rounded-full border border-purple-400 bg-white"></span>
              Future
            </span>
          </div>
        </div>

        {/* Desktop Timeline (>1024px) */}
        <div className="hidden lg:block relative py-4">
          {/* Connector Line */}
          <div className="absolute top-[28px] left-[8%] right-[8%] h-[3px] bg-gray-200 -z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#10B981] via-amber-400 via-35% to-gray-300"
            />
          </div>

          {/* 6 Phases */}
          <div className="grid grid-cols-6 gap-2 text-center relative z-10">
            {timelinePhases.map((phase, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                
                {/* NOW Marker on Phase 2 */}
                {phase.isCurrent && (
                  <div className="absolute -top-7 flex flex-col items-center">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[9px] uppercase tracking-wider shadow-2xs border border-emerald-300">
                      NOW
                    </span>
                    <div className="w-[1.5px] h-2.5 bg-[#10B981] mt-0.5"></div>
                  </div>
                )}

                {/* Dot */}
                <div className="relative mb-2">
                  {phase.status === 'completed' && (
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-xs ring-4 ring-white">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                  {phase.status === 'in-progress' && (
                    <motion.div
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs ring-4 ring-amber-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </motion.div>
                  )}
                  {phase.status === 'planned' && (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white ring-4 ring-white"></div>
                  )}
                  {phase.status === 'future' && (
                    <div className="w-6 h-6 rounded-full border-2 border-purple-400 bg-white ring-4 ring-white"></div>
                  )}
                </div>

                {/* Phase Number & Title */}
                <div className="font-bold text-xs sm:text-[13px] text-[#0B1E19] leading-tight">
                  {phase.phase}
                </div>
                <div className="text-[11px] font-semibold text-gray-700 leading-tight mt-0.5">
                  {phase.title}
                </div>
                <div className="text-[10px] text-gray-400 font-medium mt-1">
                  {phase.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet / Mobile Timeline */}
        <div className="lg:hidden space-y-3 pt-1">
          {timelinePhases.map((phase, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="relative shrink-0 mt-0.5">
                {phase.status === 'completed' && (
                  <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
                {phase.status === 'in-progress' && (
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center ring-2 ring-amber-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                )}
                {phase.status === 'planned' && (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white"></div>
                )}
                {phase.status === 'future' && (
                  <div className="w-5 h-5 rounded-full border-2 border-purple-400 bg-white"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-[#0B1E19]">
                    {phase.phase} — {phase.title}
                  </span>
                  {phase.isCurrent && (
                    <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[9px] uppercase">
                      NOW
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-gray-500">{phase.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Block 2: Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="w-full max-w-[960px] mx-auto mb-8 sm:mb-10 px-1"
      >
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#059669] mb-2">
          <span>PROGRESS · 1 of 6 phases · ~17% complete</span>
          <span className="text-gray-400 font-semibold text-[11px]">Phase 2 in progress</span>
        </div>
        <div className="w-full bg-emerald-100/70 h-2 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '17%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-[#10B981] rounded-full"
          />
        </div>
      </motion.div>

      {/* Block 3: Stacked Phase Cards Accordion */}
      <div className="w-full max-w-[960px] mx-auto space-y-3.5 sm:space-y-4">
        {phaseCards.map((card, idx) => {
          const isExpanded = expandedPhases.includes(idx);
          const badge = statusBadges[card.status];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
              className={`w-full bg-white rounded-[16px] border transition-all duration-200 shadow-sm hover:shadow-md ${
                isExpanded 
                  ? 'border-t-2 border-t-[#10B981] border-gray-200' 
                  : 'border-gray-200/80 hover:-translate-y-0.5'
              }`}
            >
              {/* Header (clickable) */}
              <button
                type="button"
                onClick={() => togglePhase(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2.5">
                  <span className="text-xs font-extrabold tracking-wider text-[#059669] uppercase mb-0.5 sm:mb-0">
                    {card.phase} —
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1E19]">
                    {card.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium">
                    ({card.duration})
                  </span>
                </div>

                <div className="flex items-center gap-2.5 shrink-0 ml-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badge.className}`}>
                    {badge.label}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Collapsible Body */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-emerald-900/5 space-y-3">
                      {card.categories.map((cat, cIdx) => (
                        <div key={cIdx} className="space-y-1.5">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
                            {cat.name}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.items.map((item, iIdx) => (
                              <span
                                key={iIdx}
                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryStyles[cat.name] || 'bg-gray-50 text-gray-700 border-gray-200'}`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default FutureExpansion;
