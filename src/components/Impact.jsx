import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Droplets, 
  TrendingUp, 
  Stethoscope, 
  LineChart 
} from 'lucide-react';

const Impact = () => {
  const users = [
    { 
      title: "Dairy Farmers", 
      image: "/images/stakeholders/dairy-farmers.png", 
      desc: "Continuous early warning for timely intervention, preserving cow lactation and preventing yield loss." 
    },
    { 
      title: "Field Veterinarians", 
      image: "/images/stakeholders/field-veterinarians.png", 
      desc: "Actionable decision support and prioritized case queues for focused clinical attention." 
    },
    { 
      title: "Dairy Cooperatives", 
      image: "/images/stakeholders/dairy-cooperatives.png", 
      desc: "Aggregated herd-level risk visibility across multiple member farms and collection centers." 
    },
    { 
      title: "Commercial Dairies", 
      image: "/images/stakeholders/commercial-dairies.png", 
      desc: "Scalable automated telemetry for industrial-scale herd monitoring and welfare tracking." 
    },
    { 
      title: "Animal Health Authorities", 
      image: "/images/stakeholders/animal-health-authorities.png", 
      desc: "Data-driven epidemiological surveillance and antimicrobial resistance (AMR) mitigation." 
    }
  ];

  const impacts = [
    { title: "Animal Health & Welfare", desc: "Forecast elevated risk 7–14 days ahead, enabling localized supportive care before painful acute clinical infection.", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
    { title: "Milk Quality Preservation", desc: "Preserve somatic cell count (SCC) within premium dairy grade thresholds and prevent contaminated discard batches.", icon: Droplets, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Farm Economics & Profitability", desc: "Avoid massive veterinary treatment expenditures and severe lactation losses estimated at ₹15,000+ per affected cow.", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Veterinary Decision Optimization", desc: "Triage high-risk animals automatically, optimizing veterinary rounds and diagnostic confirmation.", icon: Stethoscope, color: "text-purple-500", bg: "bg-purple-50" },
    { title: "Antimicrobial Resistance (AMR)", desc: "Dramatically reduce dependency on emergency systemic antibiotics by arresting subclinical inflammation early.", icon: LineChart, color: "text-amber-500", bg: "bg-amber-50" }
  ];

  return (
    <section 
      id="impact" 
      style={{ scrollMarginTop: '90px', borderColor: 'rgba(11, 74, 47, 0.15)' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-10 sm:pb-12 lg:pb-14 bg-[var(--bg-main)] border-t overflow-hidden relative"
    >
      
      {/* Target Stakeholders */}
      <div className="mb-10 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider border border-emerald-200 shadow-2xs mb-2">
            Ecosystem Stakeholders
          </div>
          <h2 className="section-heading">Target Users & Beneficiaries</h2>
          <p className="section-description mx-auto">
            DAIRYRAKSHAK bridges smallholder farmers, dairy cooperatives, and veterinary professionals into one unified health intelligence grid.
          </p>
        </div>

        {/* 5 Stakeholder Cards with 4:3 Aspect Ratio Image on Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {users.map((user, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-white rounded-[16px] border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group"
            >
              {/* Image at top: 4:3 ratio, flush with card edges */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-emerald-950/5">
                <img 
                  src={user.image} 
                  alt={user.title} 
                  className="w-full h-full object-cover block transition-transform duration-400 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Body Section Below Image */}
              <div className="p-5 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-[15px] text-[#0B1E19] uppercase tracking-wide">
                  {user.title}
                </h3>
                <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal mt-2">
                  {user.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Transformative Project Impact (Strictly Unchanged) */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-bold text-xs uppercase tracking-wider border border-blue-200 shadow-2xs mb-2">
            Measurable Outcomes
          </div>
          <h2 className="section-heading">Transformative Project Impact</h2>
          <p className="section-description mx-auto">
            Advancing dairy productivity, animal welfare, and national public health priorities under the Ministry of Fisheries, Animal Husbandry & Dairying.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {impacts.map((impact, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="card p-5 sm:p-6 flex items-start gap-4 bg-white border border-gray-100 shadow-2xs hover:border-primary/20 transition-all"
            >
              <div className={`p-3 rounded-2xl ${impact.bg} shrink-0 border border-white/60 shadow-xs`}>
                <impact.icon className={`w-5 h-5 ${impact.color}`} />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0B1E19] mb-1">{impact.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">{impact.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Impact;
