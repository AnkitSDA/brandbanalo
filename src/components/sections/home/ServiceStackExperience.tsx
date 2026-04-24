"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import "@/styles/css/ServiceStackSection.css";

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

function ServiceStackCard({
  service,
  index: i,
}: {
  service: typeof services[0];
  index: number;
}) {
  return (
    <div className={`service-stack__sticky card-index-${i}`}>
      <Link href={service.link} className="service-stack__card-link" style={{ 
        display: 'block',
        width: '100%',
        textDecoration: 'none'
      }}>
        <div className="service-card-container" style={{ 
          width: '100%', 
          position: 'relative', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent'
        }}>
          {/* Desktop Image - Fit to Image Size */}
          <div className="d-none d-md-block" style={{ 
            width: '100%', 
            maxWidth: '1200px',
            position: 'relative',
          }}>
            <img
              src={service.desktopImg}
              alt={service.name}
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block', 
                borderRadius: '24px', 
                boxShadow: '0 15px 50px rgba(0,0,0,0.12)' 
              }}
            />
          </div>

          {/* Mobile Image - Fit to Image Size */}
          <div className="d-block d-md-none" style={{ 
            width: '100%', 
            position: 'relative',
            background: 'transparent'
          }}>
            <img
              src={service.mobileImg}
              alt={service.name}
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block',
                borderRadius: '16px'
              }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ServiceStackExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    let isActive = true;

    const init = async () => {
      if (!isActive || !containerRef.current) return;

      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!isActive || !containerRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(
          containerRef.current!.querySelectorAll(".service-stack__sticky")
        );
        const totalCards = cards.length;
        if (totalCards === 0) return;

        gsap.set(cards[0], { autoAlpha: 1, y: 0, scale: 1, zIndex: 11 });
        cards.slice(1).forEach((card, idx) => {
          gsap.set(card, {
            autoAlpha: 0,
            y: "110vh",
            scale: 1,
            zIndex: 12 + idx,
          });
        });

        const isMobile = window.innerWidth < 768;

        const masterTL = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${totalCards * 150}%`,
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          if (i === 0) return;

          const prevCard = cards[i - 1];
          const offset = i - 1;

          masterTL.to(
            card,
            { y: 0, autoAlpha: 1, ease: "none", duration: 1 },
            offset
          );

          masterTL.to(
            prevCard,
            { scale: isMobile ? 1 : 0.96, ease: "none", duration: 0.5 },
            offset
          );

          masterTL.to(
            prevCard,
            { autoAlpha: 0, ease: "none", duration: 0.3 },
            offset + 0.5
          );
        });

        ScrollTrigger.refresh();
        setTimeout(() => {
          if (isActive) ScrollTrigger.refresh();
        }, 1000);

      }, containerRef);
    };

    const timeoutId = setTimeout(init, 500);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section className="service-stack fix section-padding pt-0">
      <div ref={containerRef} className="service-stack__scroll-root" style={{ height: '90vh', minHeight: '500px' }}>
        {services.map((service, index) => (
          <ServiceStackCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      <div className="p-relative about-video full-img-wrap3 mt-5">
        <div
          className="full-img3"
          data-speed="auto"
          style={{ backgroundImage: 'url(/assets/img/about/about-meme.webp)', backgroundSize: 'cover', minHeight: '400px' }}
        />
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          .service-stack__scroll-root {
            height: 75vh !important;
          }
        }
      `}</style>
    </section>
  );
}