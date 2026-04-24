"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "@/styles/css/header.css";
import industryData from "@/data/Industry.json";

type MegaServiceCard = {
  title: string;
  description?: string;
  link?: string;
};

type MegaService = {
  id: string;
  label: string;
  link?: string;
  cards: MegaServiceCard[];
};

const INDUSTRY_MENU_SERVICES: { key: string; label: string }[] = [
  { key: "web-development", label: "Website Development" },
  { key: "social-media-marketing", label: "Social Media Management" },
  { key: "meta-ads", label: "Ads Management" },
  { key: "lead-generation", label: "Lead Generation" },
  { key: "branding-kit", label: "Branding Designing" },
  { key: "seo", label: "Search Engine Optimization" },
];

const megaServiceData: MegaService[] = INDUSTRY_MENU_SERVICES.map((service) => {
  const serviceNode = industryData.services.find((item) => item.key === service.key);
  const cards = industryData.industries.map((industry) => ({
    title: `${industry.name} ${service.label}`,
    link: `/industrial-specific/${service.key}/${industry.key}`,
  }));
  const firstIndustryKey = industryData.industries[0]?.key;

  return {
    id: service.key,
    label: service.label,
    link:
      serviceNode && firstIndustryKey
        ? `/industrial-specific/${serviceNode.key}/${firstIndustryKey}`
        : undefined,
    cards,
  };
});

export default function Header() {
  const [activeServiceId, setActiveServiceId] = useState<string>(megaServiceData[0]?.id ?? "website-design");
  const activeService = megaServiceData.find((service) => service.id === activeServiceId) ?? megaServiceData[0];
  const [scrolled, setScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setIsMenuVisible(false);
    setTimeout(() => {
      setIsMenuVisible(true);
    }, 300); // 300ms to allow navigation and reset hover
  };

  return (
    <header
      id="header-sticky"
      className={`header-1 header-4${scrolled ? "" : " white-text-white"}`}
      style={{
        background: scrolled ? "#ffffff" : "#000000",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.12)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="container-fluid" style={{ padding: "0 0" }}>
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="logo">
              <Link href="/" className="header-logo">
                <img
                  src={scrolled ? "/assets/img/logo/logo-black.webp" : "/assets/img/logo/logo-export-file-01.webp"}
                  alt="Brand Banalo logo"
                  className="logo-img"
                  style={{ transition: "opacity 0.3s ease" }}
                />
              </Link>
            </div>
            <div className="mean__menu-wrapper">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li className="cl">
                      <Link href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/behind-the-brand">
                        Behind the brand
                      </Link>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/services">Services</Link>
                      <ul className={`submenu ${isMenuVisible ? "" : "force-hidden"}`}>
                        <li><Link href="/services/web-development" onClick={closeMenus}>Website Development</Link></li>
                        <li><Link href="/services/seo" onClick={closeMenus}>Search Engine Optimization</Link></li>
                        <li><Link href="/services/google-ads" onClick={closeMenus}>Google Ads</Link></li>
                        <li><Link href="/services/meta-ads" onClick={closeMenus}>Meta Ads</Link></li>
                        <li><Link href="/services/social-media-marketing" onClick={closeMenus}>Social Media Marketing</Link></li>
                        <li><Link href="/services/branding-kit" onClick={closeMenus}>Branding Kit</Link></li>
                        <li><Link href="/services/website-design" onClick={closeMenus}>Website Design</Link></li>
                        <li><Link href="/services/ugc-marketing" onClick={closeMenus}>UGC Marketing</Link></li>
                        <li><Link href="/services/influancer-marketing" onClick={closeMenus}>Influencer Marketing</Link></li>
                        <li><Link href="/services/video-creation" onClick={closeMenus}>Video Creation</Link></li>
                        <li><Link href="/services/product-photography" onClick={closeMenus}>Product Photography</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href={megaServiceData[0]?.link || "#"}>
                        Industrial Specific
                      </Link>

                      <div className={`mega-menu ${isMenuVisible ? "" : "force-hidden"}`}>
                        {/* Left Static Section */}
                        <div className="mega-left">
                          <h3>Our Services</h3>
                          <p>Explore our digital solutions</p>

                          <ul>
                            {megaServiceData.map((service) => (
                              <li
                                key={service.id}
                                className={service.id === activeServiceId ? "active" : ""}
                              >
                                <Link
                                  href={service.link || "#"}
                                  onMouseEnter={() => setActiveServiceId(service.id)}
                                  onClick={(event) => {
                                    if (!service.link) {
                                      event.preventDefault();
                                    } else {
                                      closeMenus();
                                    }
                                    setActiveServiceId(service.id);
                                  }}
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right Dynamic Section */}
                        <div className="mega-right">
                          {activeService.cards.map((card) => (
                            <Link 
                              href={card.link || "#"} 
                              className="service-card" 
                              key={card.title}
                              onClick={closeMenus}
                            >
                              <h4>{card.title}</h4>
                              {card.description && <p>{card.description}</p>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link href="/case-study">
                        Case Study
                      </Link>
                    </li>
                    <li>
                      <Link href="/team">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/grid">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="header-button">
                <Link href="/contact" className="theme-btn">
                  <span className="icon-1">
                    <img src="/assets/img/icon/14.svg" alt="Get in touch icon" />
                  </span>
                  get in touch
                  <span className="icon-2">
                    <img src="/assets/img/icon/15.svg" alt="Get in touch icon" />
                  </span>
                </Link>
              </div>
              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle">
                  <div className="header-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
