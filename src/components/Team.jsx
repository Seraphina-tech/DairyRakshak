import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Mail, User } from 'lucide-react';

const ProfileImage = ({ src, name, className }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`overflow-hidden group relative bg-slate-50 flex items-center justify-center shrink-0 ${className}`}>
      {!imgError && src ? (
        <img 
          src={src} 
          alt={name} 
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <User className="w-1/3 h-1/3 text-slate-300" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-2.5 gap-2">
        <a href="#" className="p-1.5 bg-white/20 rounded-full hover:bg-blue-600 transition-colors" aria-label="Profile link"><Link className="w-3.5 h-3.5 text-white" /></a>
        <a href="#" className="p-1.5 bg-white/20 rounded-full hover:bg-blue-600 transition-colors" aria-label="Email link"><Mail className="w-3.5 h-3.5 text-white" /></a>
      </div>
    </div>
  );
};

const Team = () => {
  const leader = {
    name: "Anusha Karki",
    role: "Team Leader & UI/UX / Frontend Developer",
    institution: "Rathinam Technical Campus",
    image: "/anusha.jpg"
  };

  const members = [
    { 
      name: "Om Prakash Mandal", 
      role: "Backend & Cloud Integration Developer", 
      institution: "Rathinam Technical Campus",
      skill: "Backend & Cloud",
      image: "/om.jpg"
    },
    { 
      name: "Ashish Kumar Shah Gupta", 
      role: "Data Analytics & GIS Developer", 
      institution: "Rathinam Technical Campus",
      skill: "Data & GIS",
      image: "/ashish.jpg"
    },
    { 
      name: "Laxman Chaudhary", 
      role: "AI/ML & Predictive Analytics Developer", 
      institution: "Rathinam Technical Campus",
      skill: "AI/ML Modeling",
      image: "/laxman.jpg"
    },
    { 
      name: "Piruthvi Saran A", 
      role: "Hardware & IoT Integration Developer", 
      institution: "Rathinam Technical Campus",
      skill: "Hardware & IoT",
      image: "/piruthvi.jpg"
    },
    { 
      name: "Mukesh M", 
      role: "Embedded Systems & Device Management Developer", 
      institution: "Rathinam Technical Campus",
      skill: "Embedded Systems",
      image: "/mukesh.jpg"
    }
  ];

  return (
    <section 
      id="team" 
      style={{ scrollMarginTop: '90px' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 bg-[var(--bg-main)] border-t border-emerald-900/10"
    >
      
      {/* TEAM LEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
        <h2 className="section-heading text-[#0F172A] tracking-tight">TEAM LEADER</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-8 sm:mb-10"
      >
        <div className="w-full max-w-[480px] flex flex-col items-center px-6 py-7 text-center bg-white rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
          
          {/* Role Badge */}
          <div className="bg-[#0F172A] text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full mb-4 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            TEAM LEADER & LEAD ARCHITECT
          </div>
          
          {/* Rectangular Portrait Photo Frame */}
          <ProfileImage 
            src={leader.image} 
            name={leader.name} 
            className="w-[190px] h-[250px] rounded-2xl border-2 border-blue-500 shadow-sm mb-4"
          />
          
          {/* Details */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-1">{leader.name}</h3>
          <p className="text-xs sm:text-sm font-bold text-blue-600 mb-0.5">{leader.role}</p>
          <p className="text-xs font-medium text-slate-400 mb-4">{leader.institution}</p>
          
          {/* Divider */}
          <div className="w-full h-px bg-slate-100 mb-4"></div>
          
          {/* Technology / Skill Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-lg border border-blue-200/60">Project Architecture</span>
            <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-lg border border-blue-200/60">Frontend UX</span>
            <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-lg border border-blue-200/60">Domain Research</span>
          </div>
        </div>
      </motion.div>

      {/* CORE ENGINEERING TEAM SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <h2 className="section-heading text-[#0F172A] uppercase tracking-wide">CORE ENGINEERING TEAM</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 justify-center max-w-7xl mx-auto">
        {members.map((member, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="flex flex-col items-center text-center bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all duration-300 h-full"
          >
            {/* Rectangular Portrait Photo Frame - UNIFORM 3/4 RATIO */}
            <ProfileImage 
              src={member.image} 
              name={member.name} 
              className="w-full aspect-[3/4] max-w-[160px] rounded-xl border-2 border-blue-500 shadow-2xs mb-3.5"
            />
            
            <div className="flex-1 flex flex-col items-center w-full">
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1 leading-snug">{member.name}</h3>
              <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wide leading-tight mb-1 min-h-[30px] flex items-center justify-center">
                {member.role}
              </p>
              <p className="text-[11px] font-medium text-slate-400 mb-3">{member.institution}</p>
              
              <span className="mt-auto inline-block bg-blue-50 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-blue-200/50 uppercase tracking-wider">
                {member.skill}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
