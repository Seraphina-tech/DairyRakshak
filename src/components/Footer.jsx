import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1E19] text-white py-8 sm:py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-black border border-white/20 shadow-md shrink-0">
            <img 
              src="/images/dairyrakshak-logo.png" 
              alt="DairyRakshak Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div>
            <div className="text-lg font-black tracking-tight leading-none">
              <span className="text-[#EF4444]">DAIRY</span><span className="text-[#10B981]">RAKSHAK</span>
            </div>
            <div className="text-gray-300 text-xs mt-1 font-medium">Predict the Risk. Prevent the Disease.</div>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center md:text-right">
          <p className="font-bold text-gray-200">SIH26109 • Ministry of Fisheries, Animal Husbandry & Dairying</p>
          <p className="mt-1 font-medium text-gray-400">© {new Date().getFullYear()} DAIRYRAKSHAK Team • Smart India Hackathon Finalist</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
