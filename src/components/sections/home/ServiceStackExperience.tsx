"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import servicesData from "@/data/Industry.json";
import "@/styles/css/ServiceStackSection.css";

type Service = (typeof servicesData.services)[number];
const defaultIndustryKey = servicesData.industries[0]?.key ?? "pcd-pharma";

function ServiceStackCard({
  service,
  index: i,
}: {
  service: Service;
  index: number;
}) {
  return (
    /*
     * ✅ NO inline styles here at all.
     * The CSS already sets:
     *   .service-stack__sticky  → position:absolute; inset:0; opacity:0; visibility:hidden
     * GSAP autoAlpha will control opacity + visibility at runtime.
     * Adding inline transform/zIndex here fights GSAP — removed.
     */
    <div className={`service-stack__sticky card-index-${i}`}>
      <article className="service-stack__card service-stack__card--skiper">
        <div className="service-stack__content">
          <h3 className="service-stack__card-title">{service.listTitle}</h3>
          <p className="service-stack__desc">{service.heroDescription}</p>
          <Link
            href={`/industrial-specific/${service.key}/${defaultIndustryKey}`}
            className="service-stack__learn"
          >
            Learn More
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="service-stack__figure">
          <div className="service-stack__figure-inner">
            <Image
              src={service.image}
              alt=""
              fill
              sizes="(max-width: 991px) 100vw, 50vw"
              className="object-contain object-center"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default function ServiceStackExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const services = (servicesData.services as Service[]).slice(0, 6);

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
        /*
         * ✅ FIX 1: Scope selector to containerRef only.
         * Using a global ".service-stack__sticky" selector picks up cards
         * from OTHER instances on the page (e.g. if the component mounts twice
         * in dev strict-mode). Scoping to the ref fixes double-init bugs.
         */
        const cards = gsap.utils.toArray<HTMLElement>(
          containerRef.current!.querySelectorAll(".service-stack__sticky")
        );
        const totalCards = cards.length;
        if (totalCards === 0) return;

        /*
         * ✅ FIX 2: Set initial states via GSAP, not CSS or inline styles.
         * Your CSS correctly hides all cards (opacity:0; visibility:hidden).
         * GSAP autoAlpha respects this and takes ownership from here.
         * autoAlpha=1 sets opacity:1 + visibility:visible together.
         * autoAlpha=0 sets opacity:0 + visibility:hidden together.
         */
        gsap.set(cards[0], { autoAlpha: 1, y: 0, scale: 1, zIndex: 11 });
        cards.slice(1).forEach((card, idx) => {
          gsap.set(card, {
            autoAlpha: 0,
            y: "110vh",
            scale: 1,
            zIndex: 12 + idx, // ✅ FIX 3: Higher z-index for later cards so they
            // slide on TOP of earlier ones, not behind them
          });
        });

        /*
         * ✅ FIX 4: end uses "%" not "vh" units.
         * GSAP ScrollTrigger end "+= N%" means N% of the trigger element's
         * height. Since the container is height:min(100svh,900px), using "%"
         * gives consistent scroll distance regardless of screen size.
         * Using "vh" here would be RELATIVE to the viewport, causing the
         * scroll to end too early on tall screens and too late on short ones.
         *
         * Formula: totalCards swaps × 100% each + 1 × 100% rest for last card
         */
        const masterTL = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${totalCards * 100}%`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            /*
             * ✅ FIX 5: invalidateOnRefresh recalculates positions on
             * window resize. Without this, rotating a phone or resizing a
             * browser window permanently breaks the trigger positions.
             */
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          if (i === 0) return; // card 0 is already visible, skip

          const prevCard = cards[i - 1];
          const offset = i - 1; // each transition = 1 unit in the timeline

          /*
           * Incoming card: slide up from y:110vh → y:0, fade in
           * Duration 1 = full scroll segment for this card swap
           */
          masterTL.to(
            card,
            { y: 0, autoAlpha: 1, ease: "none", duration: 1 },
            offset
          );

          /*
           * Outgoing card (first half): scale down slightly while new one arrives
           */
          masterTL.to(
            prevCard,
            { scale: 0.92, ease: "none", duration: 0.5 },
            offset
          );

          /*
           * Outgoing card (second half): fade + hide once new card covers it.
           * autoAlpha:0 sets both opacity:0 AND visibility:hidden so it no
           * longer blocks pointer events or paint.
           */
          masterTL.to(
            prevCard,
            { autoAlpha: 0, ease: "none", duration: 0.3 },
            offset + 0.5
          );
        });

        /*
         * ✅ FIX 6: Double-call refresh.
         * First call: immediately after setup (catches most layout shifts).
         * Delayed call: catches late-loading images / fonts that shift layout
         * after the first refresh already ran (common in Next.js with Image).
         */
        ScrollTrigger.refresh();
        setTimeout(() => {
          if (isActive) ScrollTrigger.refresh();
        }, 500);

      }, containerRef);
    };

    /*
     * ✅ FIX 7: 200ms gives Next.js time to finish hydration + image layout.
     * 150ms is sometimes too short when the page has many images above the fold.
     */
    const timeoutId = setTimeout(init, 200);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      className="service-stack section-padding pt-0"
      aria-labelledby="service-stack-heading"
    >
      <div className="service-stack__intro-wrap">
        <h2 id="service-stack-heading" className="service-stack__title">
          Our Services
          <span className="service-stack__arrow" aria-hidden>
            →
          </span>
        </h2>
        <p className="service-stack__subtitle">
          Grow your brand with powerful digital services—from websites and SEO to ads,
          lead generation, social, and branding—crafted to lift visibility and results.
        </p>
        <div className="service-stack__cta-row">
          <Link href="/services" className="service-stack__cta-all">
            View all services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/*
        ✅ No inline styles needed here — the CSS already has:
          .service-stack__scroll-root {
            position: relative;
            height: min(100svh, 900px);
            overflow: hidden;
          }
        Trust the CSS. Don't override it with inline styles.
      */}
      <div ref={containerRef} className="service-stack__scroll-root">
        {services.map((service, index) => (
          <ServiceStackCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      <div className="p-relative about-video full-img-wrap3">
        <div
          className="full-img3"
          data-speed="auto"
          data-background="/assets/img/about/about-meme.webp"
        />
      </div>
    </section>
  );
}