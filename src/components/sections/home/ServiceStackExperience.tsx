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
    <div className={`service-stack__card-inner card-index-${i}`} style={{ width: '100%' }}>
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
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(".service-stack__sticky");
    const totalCards = cards.length;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollPos = -rect.top;

      const firstCard = cards[0];
      if (!firstCard) return;

      const cardSlotHeight = firstCard.offsetHeight;

      cards.forEach((card, i) => {
        const cardInner = card.querySelector(".service-stack__card-inner") as HTMLElement;
        if (!cardInner) return;

        const cardStart = i * cardSlotHeight;
        const cardEnd = (i + 1) * cardSlotHeight;

        if (scrollPos > cardStart) {
          // Card has reached or passed its "sticky" point
          const pinnedPos = Math.min(scrollPos - cardStart, cardSlotHeight);

          // Apply pinning
          card.style.transform = `translateY(${pinnedPos}px)`;

          // Apply cover effect if it's being covered by the NEXT card
          const progress = Math.max(0, Math.min(1, (scrollPos - cardEnd + cardSlotHeight) / cardSlotHeight));

          if (progress > 0 && i < totalCards - 1) {
            const scale = 1 - progress * 0.04;
            const opacity = 1 - progress * 0.7;
            const blur = progress * 4;

            cardInner.style.transform = `scale(${scale})`;
            cardInner.style.opacity = `${opacity}`;
            cardInner.style.filter = `blur(${blur}px)`;
          } else {
            cardInner.style.transform = `scale(1)`;
            cardInner.style.opacity = `1`;
            cardInner.style.filter = `none`;
          }
        } else {
          // Card hasn't reached its sticky point yet
          card.style.transform = `translateY(0px)`;
          cardInner.style.transform = `scale(1)`;
          cardInner.style.opacity = `1`;
          cardInner.style.filter = `none`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="service-stack fix section-padding pt-0">
      <div className="service-stack__intro-wrap">
        <h2 className="service-stack__title">Our Services</h2>
        <p className="service-stack__subtitle">
          Empowering your brand with cutting-edge digital solutions. From strategic SEO to high-impact ad campaigns, we deliver results that matter.
        </p>
      </div>

      <div ref={containerRef} className="service-stack__scroll-root">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="service-stack__sticky"
            data-index={index}
            style={{ zIndex: index + 1 }}
          >
            <ServiceStackCard
              service={service}
              index={index}
            />
          </div>
        ))}
      </div>

      <div className="p-relative about-video full-img-wrap3 mt-5">
        <div
          className="full-img3"
          data-speed="auto"
          style={{ backgroundImage: 'url(/assets/img/about/about-meme.webp)', backgroundSize: 'cover', minHeight: '400px' }}
        />
      </div>

    </section>
  );
}