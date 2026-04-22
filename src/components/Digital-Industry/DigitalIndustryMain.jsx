"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import digitalIndustries from "@/data/DigitalIndustry.json";
import DigitalIndustryDetails from "./DigitalIndustryDetails";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const DigitalIndustryMain = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const handleCardClick = (industry) => {
    setSelectedIndustry(industry);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedIndustry(null);
  };

  if (selectedIndustry) {
    return (
      <DigitalIndustryDetails 
        industry={selectedIndustry} 
        onBack={handleBack} 
      />
    );
  }

  return (
    <section className="digital-industry-section py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#f6f7fb] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mx-auto text-center mb-20 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0a1020] mb-6 font-sora tracking-tight leading-[1.1]"
          >
            Industries We <span className="text-[#3b82f6]">Empower</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-[#5b6472] leading-relaxed font-manrope"
          >
            Tailored digital marketing strategies for specialized sectors. We navigate the unique complexities of your market to drive sustainable business growth.
          </motion.p>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {digitalIndustries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer bg-white rounded-[2rem] border border-transparent hover:border-[#e2e8f0] overflow-hidden transition-all duration-500 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(10,16,32,0.12)] flex flex-col h-full"
              onClick={() => handleCardClick(industry)}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020]/90 via-[#0a1020]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/80 text-sm font-manrope mb-2">Explore Solution</p>
                    <span className="text-white font-semibold flex items-center gap-2 group/btn">
                      View Strategy
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#0a1020] mb-4 font-sora leading-tight group-hover:text-[#3b82f6] transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-[#5b6472] font-manrope text-[15px] leading-relaxed line-clamp-3 mb-6">
                  {industry.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#3b82f6] font-semibold text-sm font-manrope">
                  <span className="w-8 h-[2px] bg-[#3b82f6] group-hover:w-12 transition-all duration-500" />
                  Read More
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .font-sora { font-family: var(--font-sora), sans-serif; }
        .font-manrope { font-family: var(--font-manrope), sans-serif; }
      `}</style>
    </section>
  );
};

export default DigitalIndustryMain;
