import React from 'react';
import { motion } from 'framer-motion';
import { Users, Stethoscope, Factory, Building2, ShieldCheck, Heart, TrendingUp, Droplets, LineChart } from 'lucide-react';

const TargetUsers = () => {
  const users = [
    { title: "Dairy Farmers", icon: Users, desc: "Early warning for timely intervention and reduced losses." },
    { title: "Veterinarians", icon: Stethoscope, desc: "Decision support and prioritized case verification." },
    { title: "Dairy Cooperatives", icon: Factory, desc: "Herd-level risk visibility across multiple farms." },
    { title: "Commercial Dairy", icon: Building2, desc: "Scalable monitoring for large-scale operations." },
    { title: "Animal Health Authorities", icon: ShieldCheck, desc: "Data-driven insights for disease surveillance." }
  ];

  const impacts = [
    { title: "Animal Health", desc: "Support earlier identification of elevated risk before clinical symptoms.", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
    { title: "Milk Quality", desc: "Support timely monitoring and intervention to preserve quality.", icon: Droplets, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Farm Profitability", desc: "Help reduce avoidable losses associated with disease and treatment.", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Vet Decision Support", desc: "Prioritize animals requiring verification, optimizing veterinary time.", icon: Stethoscope, color: "text-purple-500", bg: "bg-purple-50" },
    { title: "Data-Driven Management", desc: "Provide animal-level and herd-level risk intelligence.", icon: LineChart, color: "text-accent", bg: "bg-accent/10" }
  ];

  return (
    <section id="impact" className="section-container bg-[var(--bg-main)] border-t border-gray-100 overflow-hidden">
      
      {/* Target Users */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Target Users</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {users.map((user, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-6 flex flex-col items-center text-center w-64 bg-background border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="w-14 h-14 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#10B981]/20">
                <user.icon className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="font-bold text-[#0B1E19] mb-3">{user.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">{user.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#114232]/5 to-[#10B981]/5 blur-3xl rounded-full -z-10"></div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Project Impact</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card p-8 flex items-start gap-5 bg-white border border-gray-100 shadow-[0_10px_30px_rgb(0,0,0,0.03)] hover:border-primary/20 transition-all"
            >
              <div className={`p-4 rounded-2xl ${impact.bg} shrink-0 shadow-inner border border-white/50`}>
                <impact.icon className={`w-7 h-7 ${impact.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1E19] mb-2">{impact.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{impact.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TargetUsers;
