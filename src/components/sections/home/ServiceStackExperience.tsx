"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    id: 1,
    name: "Website Development",
    desktopImg: "/assets/img/service/website-home-page-service.webp",
    mobileImg: "/assets/img/service/website-home-page-service-mobile.webp",
    link: "/services/web-development"
  },
  {
    id: 2,
    name: "SEO",
    desktopImg: "/assets/img/service/seo--home-page-service.webp",
    mobileImg: "/assets/img/service/seo-home-page-service-mobile.webp",
    link: "/services/seo"
  },
  {
    id: 3,
    name: "Google Ads",
    desktopImg: "/assets/img/service/google-home-page-service.webp",
    mobileImg: "/assets/img/service/google-home-page-service-mobile.webp",
    link: "/services/google-ads"
  },
  {
    id: 4,
    name: "Meta Ads",
    desktopImg: "/assets/img/service/meta-home-page-service.webp",
    mobileImg: "/assets/img/service/meta-home-page-service-mobile.webp",
    link: "/services/meta-ads"
  },
  {
    id: 5,
    name: "SMO",
    desktopImg: "/assets/img/service/smo-home-page-service.webp",
    mobileImg: "/assets/img/service/smo-home-page-service-mobile.webp",
    link: "/services/social-media-marketing"
  }
];

export default function ServiceStackExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Section pinned zone
      if (sectionTop <= 0 && sectionTop >= -(sectionHeight - windowHeight)) {
        const scrolled = Math.abs(sectionTop);
        const totalScroll = sectionHeight - windowHeight;
        const progress = scrolled / totalScroll;
        const newIndex = Math.min(
          Math.floor(progress * services.length),
          services.length - 1
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .service-stack-section {
          position: relative;
        }
        .service-stack-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-card {
          position: absolute;
          width: 100%;
          padding: 20px;
          transition: opacity 0.5s ease, transform 0.5s ease;
          opacity: 0;
          transform: translateY(60px);
          pointer-events: none;
        }
        .service-card.active {
          opacity: 1;
          transform: translateY(0px);
          pointer-events: all;
        }
        .service-card img {
          width: 100%;
          max-width: 1200px;
          height: auto;
          display: block;
          border-radius: 24px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.12);
          margin: 0 auto;
        }
        @media (max-width: 767px) {
          .service-card img {
            border-radius: 16px;
          }
        }
      `}</style>

      <section
        className="service-stack-section"
        ref={sectionRef}
        style={{ height: `${services.length * 100}vh` }}
      >
        <div className="service-stack-sticky">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${activeIndex === index ? "active" : ""}`}
            >
              <Link href={service.link} style={{ display: "block", textDecoration: "none" }}>
                {/* Desktop */}
                <img
                  src={service.desktopImg}
                  alt={service.name}
                  className="d-none d-md-block"
                />
                {/* Mobile */}
                <img
                  src={service.mobileImg}
                  alt={service.name}
                  className="d-block d-md-none"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="p-relative about-video full-img-wrap3 mt-5">
        <div
          className="full-img3"
          data-speed="auto"
          style={{
            backgroundImage: "url(/assets/img/about/about-meme.webp)",
            backgroundSize: "cover",
            minHeight: "400px",
          }}
        />
      </div>
    </>
  );
}