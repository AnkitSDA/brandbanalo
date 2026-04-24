"use client";

import Link from "next/link";
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

      // Kill existing ScrollTriggers to avoid conflicts
      ScrollTrigger.getAll().forEach(st => st.kill());

      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(
          containerRef.current!.querySelectorAll(".service-stack__sticky")
        );
        const totalCards = cards.length;
        if (totalCards === 0) return;

        const isMobile = window.innerWidth < 768;

        // Set initial states
        gsap.set(cards[0], { autoAlpha: 1, y: 0, scale: 1, zIndex: 11 });
        cards.slice(1).forEach((card, idx) => {
          gsap.set(card, {
            autoAlpha: 0,
            y: "100vh",
            scale: 1,
            zIndex: 12 + idx,
          });
        });

        const masterTL = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * totalCards * 1.2}`,
            pin: true,
            pinSpacing: true,
            scrub: 2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        });

        cards.forEach((card, i) => {
          if (i === 0) return;

          const prevCard = cards[i - 1];
          const offset = (i - 1) * 1.5;

          masterTL.to(
            card,
            { y: 0, autoAlpha: 1, ease: "power1.inOut", duration: 1 },
            offset
          );

          masterTL.to(
            prevCard,
            { scale: isMobile ? 1 : 0.95, ease: "power1.inOut", duration: 0.5 },
            offset
          );

          masterTL.to(
            prevCard,
            { autoAlpha: 0, ease: "power1.inOut", duration: 0.4 },
            offset + 0.6
          );
        });

        // Refresh after fonts and images load
        ScrollTrigger.refresh();

        setTimeout(() => {
          if (isActive) {
            ScrollTrigger.refresh(true);
          }
        }, 1500);

      }, containerRef);
    };

    // Wait for DOM to be ready
    const timeoutId = setTimeout(init, 300);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section className="service-stack fix section-padding pt-0">
      <div
        ref={containerRef}
        className="service-stack__scroll-root"
        style={{ height: '90vh', minHeight: '500px' }}
      >
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
          style={{
            backgroundImage: 'url(/assets/img/about/about-meme.webp)',
            backgroundSize: 'cover',
            minHeight: '400px'
          }}
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