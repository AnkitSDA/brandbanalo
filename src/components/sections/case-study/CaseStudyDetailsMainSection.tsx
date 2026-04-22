"use client";

import Link from "next/link";
import type { SyntheticEvent } from "react";
import CaseStudyDetailsContentSection from "./CaseStudyDetailsContentSection";
import CaseStudyDetailsSidebarSection from "./CaseStudyDetailsSidebarSection";
import CaseStudyImageSlider from "./CaseStudyImageSlider";

const fallbackCaseStudyImage = "/assets/img/case-study/1.webp";

function handleCaseStudyImageError(event: SyntheticEvent<HTMLImageElement, Event>) {
  const target = event.currentTarget;
  if (!target.dataset.fallback) {
    target.dataset.fallback = "true";
    target.src = fallbackCaseStudyImage;
  }
}

interface CaseStudy {
  id: number;
  slug: string;
  img: string;
  date: string;
  title: string;
  description: string;
  service: string;
  href: string;
  category: string;
  images?: string[];
}

interface CaseStudyDetailsMainSectionProps {
  caseStudy?: CaseStudy;
  prevCaseStudy?: CaseStudy | null;
  nextCaseStudy?: CaseStudy | null;
}

export default function CaseStudyDetailsMainSection({
  caseStudy,
  prevCaseStudy,
  nextCaseStudy,
}: CaseStudyDetailsMainSectionProps) {
  // Default caseStudy for static page
  const displayCaseStudy = caseStudy || {
    id: 0,
    slug: "",
    img: "1.webp",
    date: "MARCH 26, 2025",
    title: "Case Study",
    description: "Case Study Description",
    service: "web-development",
    href: "/case-study/details",
    category: "Web Development",
  };

  const defaultServiceImage: Record<string, string> = {
    "web-development": "Web Site.webp",
    "search-engine-optimization": "SEO.webp",
    "lead-generation": "Lead Generation.webp",
    "social-media": "Social media.webp",
    "branding": "Brand Design.webp",
  };

  const serviceMainImage = defaultServiceImage[displayCaseStudy.service];
  const mainImageSrc = serviceMainImage
    ? `/assets/img/case-study/${serviceMainImage}`
    : displayCaseStudy.img?.startsWith("/assets/img/")
    ? displayCaseStudy.img
    : `/assets/img/case-study/${displayCaseStudy.img}`;

  return (
    <section className="case-study-details-section section-padding">
      <div className="container">
        <div className="case-study-details-wrapper">
          <div className="details-image">
            <img
              src={mainImageSrc}
              alt={displayCaseStudy.title}
              onError={handleCaseStudyImageError}
            />
          </div>

          <div className="case-study-details-items">
            <div className="row g-4">
              <div className="col-xl-8">
                <CaseStudyDetailsContentSection caseStudy={displayCaseStudy} />
              </div>
              <div className="col-xl-4 col-lg-5">
                <CaseStudyDetailsSidebarSection caseStudy={displayCaseStudy} />
              </div>
            </div>
          </div>

          {/* Image Slider Section - After Content */}
          {displayCaseStudy.images && displayCaseStudy.images.length > 0 && (
            <div className="gallery-slider-section mt-5 pt-5">
              <CaseStudyImageSlider 
                images={displayCaseStudy.images}
                caseStudyTitle={displayCaseStudy.title}
              />
            </div>
          )}

          <div className="slider-button d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              {prevCaseStudy ? (
                <>
                  <Link
                    href={prevCaseStudy.href}
                    className="cmn-prev cmn-border d-center"
                    aria-label="Previous caseStudy"
                  >
                    <i className="fas fa-chevron-left" />
                  </Link>
                  <span className="fw-bold white-clr previus-text text-capitalize">
                    {prevCaseStudy.title}
                  </span>
                </>
              ) : (
                <span className="fw-bold white-clr previus-text text-capitalize text-muted">
                  first case study
                </span>
              )}
            </div>
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              {nextCaseStudy ? (
                <>
                  <span className="fw-bold white-clr previus-text text-capitalize">
                    {nextCaseStudy.title}
                  </span>
                  <Link
                    href={nextCaseStudy.href}
                    className="cmn-next cmn-border d-center"
                    aria-label="Next caseStudy"
                  >
                    <i className="fas fa-chevron-right" />
                  </Link>
                </>
              ) : (
                <span className="fw-bold white-clr previus-text text-capitalize text-muted">
                  last case study
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

