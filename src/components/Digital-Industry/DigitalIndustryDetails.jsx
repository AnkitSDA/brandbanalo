"use client";

import React from "react";
import { motion } from "framer-motion";

const DigitalIndustryDetails = ({ industry, onBack }) => {
  if (!industry) return null;

  return (
    <article className="digital-industry-details bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-[#f6f7fb] -z-10 translate-x-1/4 skew-x-12" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3b82f6]/5 blur-[100px] rounded-full -z-10" />

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-sm border border-[#e2e8f0] text-[#5b6472] hover:text-[#0a1020] hover:shadow-md transition-all duration-300 font-manrope font-medium text-sm"
        >
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Industries
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-bold font-sora tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
              Industry Specialized Strategy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0a1020] mb-8 font-sora tracking-tight leading-[1.05]">
              Digital Marketing Agency for <span className="text-[#3b82f6] underline decoration-[#3b82f6]/20 underline-offset-8 decoration-4">{industry.name}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#5b6472] mb-10 leading-relaxed font-manrope font-light max-w-xl border-l-3 border-[#3b82f6] pl-6 py-2">
              {industry.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {industry.keywords.slice(0, 4).map((kw, idx) => (
                <span key={idx} className="px-4 py-1.5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#64748b] text-[13px] font-manrope">
                  {kw}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0a1020] text-white rounded-full font-bold font-manrope shadow-[0_20px_40px_-10px_rgba(10,16,32,0.3)] hover:shadow-[0_10px_20px_-5px_rgba(10,16,32,0.4)] hover:bg-[#3b82f6] hover:-translate-y-1 transition-all duration-300"
            >
              Get Custom Strategy
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          {/* Hero Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl skew-y-3">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover -skew-y-3 scale-110"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#e2e8f0] max-w-xs hidden sm:block">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#0a1020] mb-2 font-sora">Measured Growth</h4>
              <p className="text-sm text-[#5b6472] font-manrope leading-relaxed">
                Data-driven outcomes tailored to the {industry.name} landscape.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Strategy Section */}
        <section className="mt-32 lg:mt-48">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1020] mb-6 font-sora">The ROI Framework</h2>
            <p className="text-[#5b6472] font-manrope">Our specialized approach for {industry.name} ensures every digital touchpoint contributes directly to your bottom line.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-[#f6f7fb] border border-transparent hover:border-[#3b82f6]/20 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#3b82f6] transition-colors duration-300">
                <svg className="w-7 h-7 text-[#3b82f6] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a1020] mb-4 font-sora">Market Analysis</h3>
              <p className="text-[#5b6472] font-manrope text-[15px] leading-relaxed">
                In-depth research into {industry.name} trends and competitor landscape to identify hidden opportunities.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#f6f7fb] border border-transparent hover:border-[#3b82f6]/20 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#3b82f6] transition-colors duration-300">
                <svg className="w-7 h-7 text-[#3b82f6] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a1020] mb-4 font-sora">Strategy Blueprint</h3>
              <p className="text-[#5b6472] font-manrope text-[15px] leading-relaxed">
                Custom {industry.keywords[0]} roadmap designed to capture high-intent buyers and distributors.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#0a1020] text-white overflow-hidden relative group md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b82f6] blur-[80px] opacity-20 -mr-24 -mt-24" />
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <svg className="w-7 h-7 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-sora">Performance Edge</h3>
              <p className="text-white/70 font-manrope text-[15px] leading-relaxed">
                Continuous optimization techniques that lower acquisition costs and increase lifetime customer value.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="mt-32">
          <div className="bg-[#f6f7fb] p-10 sm:p-16 rounded-[3rem] border border-[#e2e8f0]">
             <h2 className="text-3xl font-bold text-[#0a1020] mb-10 font-sora">Strategic Implementation</h2>
             <div className="prose prose-lg prose-slate max-w-none font-manrope text-[#5b6472] leading-relaxed">
               {industry.content}
             </div>
             <div className="mt-12 pt-12 border-t border-[#e2e8f0] grid sm:grid-cols-2 gap-8">
               <div>
                  <h4 className="text-xs font-bold font-sora uppercase tracking-widest text-[#94a3b8] mb-3">SEO Title Profile</h4>
                  <p className="text-[#0a1020] font-medium">{industry.metaTitle}</p>
               </div>
               <div>
                  <h4 className="text-xs font-bold font-sora uppercase tracking-widest text-[#94a3b8] mb-3">Keyword Ecosystem</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.keywords.map((k, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 bg-white border border-[#e2e8f0] rounded text-[#64748b]">#{k.replace(/\s+/g, '')}</span>
                    ))}
                  </div>
               </div>
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <footer className="mt-24 text-center">
           <button
            onClick={onBack}
            className="text-[#5b6472] hover:text-[#3b82f6] font-semibold font-manrope flex items-center justify-center gap-2 mx-auto group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Explore Other Industries
          </button>
        </footer>
      </div>

      <style jsx global>{`
        .font-sora { font-family: var(--font-sora), sans-serif; }
        .font-manrope { font-family: var(--font-manrope), sans-serif; }
      `}</style>
    </article>
  );
};

export default DigitalIndustryDetails;
