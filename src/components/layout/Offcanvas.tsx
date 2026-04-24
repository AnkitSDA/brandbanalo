"use client";
import Link from "next/link";
import { useState } from "react";

export default function Offcanvas() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info style-2">
          <div className="offcanvas__wrapper">
            <div className="effect-style" />
            <div className="offcanvas__content">
              <div className="offcanvas__top d-flex justify-content-between align-items-center">
                <div className="mycustom-marque style-3">
                  <div className="scrolling-wrap">
                    {[1, 2, 3].map((comm) => (
                      <div className="comm" key={comm}>
                        <div className="text-center">
                          Branding Today Brand Tomorrow
                        </div>
                        <div className="text-center">
                          Branding Today Brand Tomorrow
                        </div>
                        <div className="text-center">
                          Branding Today Brand Tomorrow
                        </div>
                        <div className="text-center">
                          Branding Today Brand Tomorrow
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="offcanvas__close">
                  <button className="close-btn">close</button>
                </div>
              </div>
              <div className="mobile-menus mt-4">
                <nav className="offcanvas-menu">
                  <ul className="list-unstyled" style={{ paddingLeft: '50px' }}>
                    <li className="mb-3"><Link href="/" className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>Home</Link></li>
                    <li className="mb-3"><Link href="/behind-the-brand" className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>Behind the brand</Link></li>
                    <li className="mb-3">
                      <a href="#" onClick={toggleServices} className="text-decoration-none fw-bold text-uppercase d-flex justify-content-between align-items-center" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>
                        Services
                        <i className={`fas fa-chevron-${isServicesOpen ? 'up' : 'down'}`} style={{ fontSize: '14px', opacity: 0.6 }} />
                      </a>
                      {isServicesOpen && (
                        <ul className="list-unstyled mt-3" style={{ paddingLeft: '15px', borderLeft: '2px solid rgba(59, 40, 109, 0.1)' }}>
                          <li className="mb-2"><Link href="/services/web-development" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Website Development</Link></li>
                          <li className="mb-2"><Link href="/services/seo" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Search Engine Optimization</Link></li>
                          <li className="mb-2"><Link href="/services/google-ads" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Google Ads</Link></li>
                          <li className="mb-2"><Link href="/services/meta-ads" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Meta Ads</Link></li>
                          <li className="mb-2"><Link href="/services/social-media-marketing" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Social Media Marketing</Link></li>
                          <li className="mb-2"><Link href="/services/branding-kit" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Branding Kit</Link></li>
                          <li className="mb-2"><Link href="/services/website-design" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Website Design</Link></li>
                          <li className="mb-2"><Link href="/services/ugc-marketing" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>UGC Marketing</Link></li>
                          <li className="mb-2"><Link href="/services/influancer-marketing" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Influencer Marketing</Link></li>
                          <li className="mb-2"><Link href="/services/video-creation" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Video Creation</Link></li>
                          <li className="mb-2"><Link href="/services/product-photography" className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Product Photography</Link></li>
                        </ul>
                      )}
                    </li>
                    <li className="mb-3 mt-3"><Link href="/industrial-specific/web-development/hospitality" className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>Industrial Specific</Link></li>
                    <li className="mb-3"><Link href="/case-study" className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>Case Study</Link></li>
                    <li className="mb-3"><Link href="/pricing" className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>Pricing</Link></li>
                    <li className="mb-3"><Link href="/team" className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>Team</Link></li>
                    <li className="mb-3"><Link href="/blog/grid" className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>Blog</Link></li>
                  </ul>
                </nav>
              </div>
              <ul className="social-text pt-4 border-top">
                <li>
                  <a href="#" className="fw-bold text-uppercase" style={{ color: '#3b286d' }}>Instagram</a>
                </li>
                <li>
                  <a href="#" className="fw-bold text-uppercase" style={{ color: '#3b286d' }}>Dribbble</a>
                </li>
                <li>
                  <a href="#" className="fw-bold text-uppercase" style={{ color: '#3b286d' }}>Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />
    </>
  );
}


