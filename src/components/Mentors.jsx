import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Mail, User } from 'lucide-react';

const MentorImage = ({ src, name }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-44 h-48 sm:w-48 sm:h-52 rounded-2xl mb-4 overflow-hidden border-2 border-blue-500 shadow-sm group relative bg-slate-50 flex items-center justify-center">
      {!imgError && src ? (
        <img 
          src={src} 
          alt={name} 
          className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <User className="w-14 h-14 text-slate-300" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-2.5 gap-2">
        <a href="#" className="p-1.5 bg-white/20 rounded-full hover:bg-blue-600 transition-colors" aria-label="Profile link"><Link className="w-3.5 h-3.5 text-white" /></a>
        <a href="#" className="p-1.5 bg-white/20 rounded-full hover:bg-blue-600 transition-colors" aria-label="Email link"><Mail className="w-3.5 h-3.5 text-white" /></a>
      </div>
    </div>
  );
};

const Mentors = () => {
  const mentors = [
    {
      name: "Er. Gajendran Parthasarathi",
      role: "Head - School of Design and Innovation",
      inst: "Rathinam Technical Campus",
      image: "/gajendran.jpg"
    },
    {
      name: "Mr. K. Muthusamy",
      role: "Head - Technical Competitions and Hackathons",
      inst: "Rathinam Technical Campus",
      image: "/muthusamy.jpg"
    }
  ];

  return (
    <section 
      id="mentors" 
      style={{ scrollMarginTop: '90px' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 bg-[var(--bg-main)] border-t border-emerald-900/10 relative overflow-hidden"
    >
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider border border-blue-200/60 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          Advisory & Technical Mentorship
        </div>
        <h2 className="section-heading text-[#0F172A] tracking-tight">PROJECT MENTORS</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-5 sm:gap-6 relative z-10 max-w-4xl mx-auto px-4">
        {mentors.map((mentor, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex flex-col items-center text-center w-full sm:w-[320px] bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-2xs hover:shadow-md transition-all duration-300"
          >
            <MentorImage src={mentor.image} name={mentor.name} />
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1">{mentor.name}</h3>
            <p className="text-xs font-semibold text-blue-600 mb-1 leading-snug">{mentor.role}</p>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{mentor.inst}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
