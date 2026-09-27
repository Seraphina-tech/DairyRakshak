import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  Stethoscope, 
  TrendingUp, 
  Video, 
  Cpu, 
  ShieldCheck, 
  Database
} from 'lucide-react';

const CaseStudy = () => {
  return (
    <section 
      id="case-study" 
      style={{ scrollMarginTop: '90px' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 bg-[var(--bg-main)] border-t border-emerald-900/10 relative"
    >
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider border border-blue-200/60 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          Case Study & Field Validation
        </div>
        <h2 className="section-heading text-[#0F172A] tracking-tight">
          From Early Sensor Signals to On-Field Veterinary Action
        </h2>
        <p className="section-description mx-auto text-slate-600">
          Demonstrating how multi-sensor telemetry fusion, localized test-site calibration, and multidisciplinary diagnostic review guide early intervention before visible clinical symptoms emerge.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* CASE STUDY 01: TELE-VETERINARY DIAGNOSTIC REVIEW */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
        >
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Evidence Image 1 (Left 7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500 shadow-[0_8px_30px_rgba(37,99,235,0.12)] bg-[#0B132B]">
                <img 
                  src="/casestudy1.jpg" 
                  alt="Case Study 01: Multi-Disciplinary Tele-Consultation and Sensor Analytics Review" 
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                />
                <div className="bg-[#0F172A]/90 px-4 py-2 backdrop-blur-sm border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Video className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-semibold text-white">Live Diagnostic Review</span>
                  </div>
                  <span className="text-[11px] text-blue-300 font-mono">E2E Encrypted Session</span>
                </div>
              </div>
            </div>

            {/* Context & Explanation 1 (Right 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/50 uppercase tracking-wider w-fit mb-2.5">
                Evidence Case 01
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                Multi-Disciplinary Diagnostic Telemetry Review
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                Core engineering and veterinary domain advisors conduct synchronous evaluation of real-time sensor streams, validating statistical anomaly flags before dispatching alerts to farm administrators.
              </p>

              <div className="space-y-2 bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100 mb-3.5 text-xs">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Context & Observation</div>
                  <p className="text-slate-700 font-medium mt-0.5">
                    Live review of continuous rumination rate drops alongside mild udder hyperthermia flags.
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Algorithmic Evidence</div>
                  <p className="text-slate-700 font-medium mt-0.5">
                    TreeSHAP feature importance weighting confirmed concurrent multi-sensor anomaly across 4 isolated data channels.
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Impact</div>
                  <p className="text-slate-700 font-medium mt-0.5">
                    Eliminated subjective misdiagnosis and expedited veterinary inspection request by 48 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Verified Diagnostic Tele-Support Protocol</span>
              </div>
            </div>

          </div>
        </motion.div>


        {/* CASE STUDY 02: ON-SITE FIELD VALIDATION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
        >
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Context & Explanation 2 (Left 5 cols on lg) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/50 uppercase tracking-wider w-fit mb-2.5">
                Evidence Case 02
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 leading-snug">
                On-Site Hardware Prototyping & Baseline Calibration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                Empirical field trials conducted at Eachanari, Tamil Nadu (Lat 10.932352°, Long 76.976467°) to calibrate collar sensor baselines against local micro-climatic humidity and ambient heat stress factors.
              </p>

              <div className="space-y-2 bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100 mb-3.5 text-xs">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Field Deployment Location</div>
                  <p className="text-slate-700 font-medium mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    Eachanari, Tamil Nadu, India • GPS Verified Telemetry
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hardware Testing Protocol</div>
                  <p className="text-slate-700 font-medium mt-0.5">
                    Tested dual infrared thermal sensors, 9-DOF IMU motion tracking, and LoRa gateway packet consistency.
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Finding</div>
                  <p className="text-slate-700 font-medium mt-0.5">
                    Individualized dynamic baselines overcome diurnal ambient temperature spikes, preventing false positive alarms.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Empirically Validated IoT Edge Sensor Prototype</span>
              </div>
            </div>

            {/* Evidence Image 2 (Right 7 cols on lg) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500 shadow-[0_8px_30px_rgba(37,99,235,0.12)] bg-[#0B132B]">
                <img 
                  src="/casestudy2.jpg" 
                  alt="Case Study 02: On-site field validation at Eachanari, Tamil Nadu" 
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                />
                <div className="bg-[#0F172A]/90 px-4 py-2 backdrop-blur-sm border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-semibold text-white">Eachanari, Tamil Nadu</span>
                  </div>
                  <span className="text-[11px] text-blue-300 font-mono">Lat 10.932352° Long 76.976467°</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>


        {/* CLINICAL DATA SYNTHESIS & INDIVIDUAL ANIMAL PROFILE (COW-024) */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left: Animal Profile & Live Telemetry Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Animal Profile Telemetry</span>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
                  COW-024
                  <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">Active Alert</span>
                </h4>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Risk Severity</span>
                <div className="text-sm font-extrabold text-red-600 flex items-center gap-1 justify-end">
                  HIGH (88%) <TrendingUp className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Sensor Data Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Milk Yield</div>
                <div className="text-xs sm:text-sm font-extrabold text-red-600 mt-0.5">14.2L <span className="text-[9px]">(-18%)</span></div>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Activity</div>
                <div className="text-xs sm:text-sm font-extrabold text-red-600 mt-0.5">48 <span className="text-[9px]">(-22%)</span></div>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Rumination</div>
                <div className="text-xs sm:text-sm font-extrabold text-red-600 mt-0.5">44 <span className="text-[9px]">(-31%)</span></div>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Udder Temp</div>
                <div className="text-xs sm:text-sm font-extrabold text-red-600 mt-0.5">39.5°C</div>
              </div>
            </div>

            {/* Explainable AI (TreeSHAP) */}
            <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-100/70 mb-4">
              <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>TreeSHAP Attribution Weights</span>
                <span className="text-[9px] text-blue-600 font-mono font-bold">eXplainable AI</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> Rumination deficit</span>
                  <span className="font-bold text-slate-800">+0.38</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> Udder differential</span>
                  <span className="font-bold text-slate-800">+0.31</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> Yield decline</span>
                  <span className="font-bold text-slate-800">+0.19</span>
                </div>
              </div>
            </div>

            {/* Recommended Protocol */}
            <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-100 flex items-start gap-2.5">
              <Stethoscope className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-emerald-900">Recommended Action Protocol</div>
                <p className="text-[11px] text-emerald-800 font-medium mt-0.5 leading-snug">
                  Immediate California Mastitis Test (CMT/SCC) and targeted veterinary inspection before clinical progression.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Key Findings / Field Takeaways (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="mb-1">
              <h4 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">Key Findings & Research Insights</h4>
              <p className="text-xs text-slate-500">Summary of field observations and data validation takeaways.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-2 border border-blue-100">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">Pre-Symptomatic Detection</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Rumination and resting activity metrics exhibit detectable drops 48–72 hours prior to physical clinical signs.
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-2 border border-blue-100">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">Individual Baselines</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Dynamic personal baselines outperform static group thresholds by preventing climate-induced false alarm fatigue.
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-2 border border-blue-100">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">Telemetry Reliability</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  LoRa edge packet transmission validated in rural agricultural environments with sustained sub-milliwatt power draw.
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-2 border border-blue-100">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-[#0F172A] mb-1">Antibiotic Prevention</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Early supportive hydration and herd isolation avoid late-stage acute infection requiring expensive systemic antibiotics.
                </p>
              </div>
            </div>

            {/* Technical Verification Note */}
            <div className="bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100 flex items-center justify-between text-xs text-blue-900">
              <span className="font-semibold">
                SIH26109 • Ministry of Fisheries, Animal Husbandry & Dairying
              </span>
              <span className="font-bold uppercase tracking-wider text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded">
                Field Validated
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
