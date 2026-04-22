import React from 'react';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function TeamFounderSection() {
  return (
    <section className="founder-section">
      <div className="founder-container">

        {/* Left Column - Orange Background & Vertical Text */}
        <div className="founder-left">
          <div className="vertical-text-wrapper">
            <span className={`founder-script ${greatVibes.className}`} style={{ fontSize: '80px' }}>Our</span>
            <span className={`founder-title ${greatVibes.className}`} style={{ fontSize: '117px' }}>FOUNDER</span>
          </div>
        </div>

        {/* Middle Column - Black Background & Text */}
        <div className="founder-middle">
          <div className="founder-header-part">
            <h2 className={greatVibes.className}>SURYA PRAKASH</h2>
            <div className="founder-subtitle" style={{ marginBottom: '15px', fontFamily: '"Great Vibes", cursive' }}>Founder of Brand Banalo</div>
          </div>
          <div className="founder-content-part">
            <p>
              Surya Prakash is the founder of BrandBanalo, driven by a mission
              to elevate how B2B businesses build visibility, credibility, and
              trust in the digital space. With 7+ years of experience across
              Justdial and IndiaMART, and an MBA in Sales & Marketing, he
              brings deep market insight and strategy-led thinking to every
              brand.
            </p>
            <p>
              BrandBanalo was born from a simple belief — B2B brands
              deserve the same power, positioning, and presence as
              leading B2C brands. Today, Surya leads the agency in
              building strong, market-ready brands that create real business
              impact.
            </p>
            <blockquote>
              “Branding is the oxygen of modern business —
              especially in B2B, where trust speaks louder than ads.”
            </blockquote>
          </div>
          <div className="founder-logo-bottom">
            <img src="/assets/img/logo/logo-export-file-01.webp" alt="Brandbanalo Logo" style={{ width: '200px' }} />
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="founder-right">
          <div className="founder-image-bg" style={{ backgroundImage: 'url(/assets/img/about/founder.webp)' }}>
            <div className="founder-brand-label">
              BRANDBANALO PVT.LTD.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

