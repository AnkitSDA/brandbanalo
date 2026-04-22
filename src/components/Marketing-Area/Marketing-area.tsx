"use client";
import React from "react";
import Link from "next/link";
import "@/styles/css/Hero.css";
import industriesData from "@/data/Industry.json";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import BrandSection from "@/components/sections/home/BrandSection";
import CtaTextArea from "@/components/sections/home/CtaTextArea";

interface FAQ {
    q: string;
    a: string;
}

interface Meta {
    title: string;
    description: string;
    keywords: string[];
}

interface LocationData {
    name: string;
    slug: string;
    type: "state" | "city";
    intro: string;
    meta: Meta;
    keywords: string[];
    areas?: string[];
    faqs: FAQ[];
}

interface MarketingAreaProps {
    locationData: LocationData;
}

export default function MarketingArea({ locationData }: MarketingAreaProps) {
    const services = industriesData.services;

    return (
        <>
            {/* 1. Breadcrumb Banner */}
            <div
                className="breadcrumb-wrapper bg-cover"
                style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
            >
                <div className="container">
                    <div className="page-heading">
                        <div className="breadcrumb-sub-title">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{ textTransform: "uppercase" }}>
                                Best Digital Marketing Agency in {locationData.name}
                            </h1>
                        </div>
                        <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <Link href="/">
                                    <i className="fa-regular fa-house" /> Home
                                </Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-slash-forward" />
                            </li>
                            <li>
                                <Link href="/marketing-area">
                                    Marketing Area
                                </Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-slash-forward" />
                            </li>
                            <li>{locationData.name}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 2. About Section */}
            <section className="about-section-2 fix section-padding">
                <div className="container">
                    <div className="about-wrapper-2">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <h2 className="tp_reveal_anim">
                                        Elevate Your Brand in {locationData.name} with Smart Digital Solutions.
                                    </h2>
                                    <br />
                                    <h6 className="wow fadeInUp">Behind the brand</h6>
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        {locationData.intro}
                                        <br /><br />
                                        At Brand Banalo Pvt Ltd, we specialize in driving organic growth and brand visibility for businesses in <strong>{locationData.name}</strong>. Our mission is simple - help local brands scale faster, generate high-quality leads, and establish a dominant digital presence.
                                    </p>
                                    <ul className="about-list wow fadeInUp" data-wow-delay=".5s">
                                        <li><i className="fa-regular fa-arrow-up-right" /> Scale your {locationData.name} business team</li>
                                        <li><i className="fa-regular fa-arrow-up-right" /> Improve local product sale ratio</li>
                                        <li><i className="fa-regular fa-arrow-up-right" /> Targeted traffic from {locationData.name}</li>
                                    </ul>
                                    <Link href="/behind-the-brand" className="theme-btn theme-color-2 wow fadeInUp" data-wow-delay=".3s">
                                        <span className="icon-1"><img src="/assets/img/icon/10.svg" alt="Know more" /></span>
                                        know more
                                        <span className="icon-2"><img src="/assets/img/icon/11.svg" alt="Know more" /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-2">
                                    <img src="/assets/img/about/about.webp" alt={`Digital Marketing ${locationData.name}`} style={{ borderRadius: "20px" }} />
                                    <div className="counter-items">
                                        <div className="content wow fadeInUp" data-wow-delay=".3s">
                                            <h2><span className="count">2</span>Cr +</h2>
                                            <p>Advertised Spend</p>
                                        </div>
                                        <div className="content wow fadeInUp" data-wow-delay=".5s">
                                            <h2><span className="count">100</span> +</h2>
                                            <p>Website Created</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Section */}
            <section className="choose-us-section section-padding bg-cover" style={{ backgroundImage: "url('/assets/img/choous-us-bg.webp')" }}>
                <div className="choose-us-image">
                    <img src="/assets/img/choose-us-img.webp" alt={`Why Choose Us in ${locationData.name}`} className="wow img-custom-anim-left" />
                </div>
                <div className="container">
                    <div className="section-title theme-color-3 mb-0">
                        <h6 className="wow fadeInUp">why choose us</h6>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            Discover why we're your top <br /> choice for Digital Marketing <br /> in {locationData.name}.
                        </h2>
                        <p className="text-white max-600 mt-4 wow fadeInUp" data-wow-delay=".5s">
                            We combine deep data insights with creative excellence to deliver results that matter. From SEO to High-Conversion Paid Ads, we cover everything your brand needs in <strong>{locationData.name}</strong>.
                        </p>
                    </div>
                    <div className="counter-wrapper-3">
                        <div className="row g-4">
                            {[
                                { count: "35", suffix: "+", label: "Case Studies in India", delay: ".3s" },
                                { count: "100", suffix: "%", label: "Client Satisfaction", delay: ".5s" },
                                { count: "80", suffix: "k", label: "Monthly ROI Increase", delay: ".7s" },
                            ].map((item) => (
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.delay} key={item.label}>
                                    <div className="counter-box-items">
                                        <h2><span className="count">{item.count}</span>{item.suffix}</h2>
                                        <p>{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Services Section */}
            <section className="service-listing-grid-section section-padding" style={{ backgroundColor: "#ffffff" }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h6 style={{ color: "#3b286d", fontWeight: "700", marginBottom: "20px", letterSpacing: "3px", textTransform: "uppercase", fontSize: "14px", display: "inline-block", position: "relative" }}>
                                <span style={{ width: "30px", height: "1.5px", backgroundColor: "#3b286d", display: "inline-block", verticalAlign: "middle", marginRight: "10px" }}></span>
                                OUR EXPERTISE
                                <span style={{ width: "30px", height: "1.5px", backgroundColor: "#3b286d", display: "inline-block", verticalAlign: "middle", marginLeft: "10px" }}></span>
                            </h6>
                            <h2 style={{ fontSize: "48px", fontWeight: "800", color: "#2d205a", lineHeight: "1.2", marginBottom: "25px" }}>
                                Comprehensive Solutions for your brand in {locationData.name}
                            </h2>
                            <p style={{ color: "#666", fontSize: "16px", maxWidth: "700px", margin: "0 auto" }}>
                                Scalable marketing strategies designed to help {locationData.name} businesses reach the right audience and achieve measurable success.
                            </p>
                        </div>
                    </div>
                    <style dangerouslySetInnerHTML={{
                        __html: `
            .service-card-modern { background: #ffffff; border-radius: 30px; padding: 45px 35px; height: 100%; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); border: 1px solid #f0f0f0; display: flex; flex-direction: column; position: relative; overflow: hidden; z-index: 1; }
            .service-card-modern:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(45, 32, 90, 0.08); border-color: #e5e0f5; }
            .service-card-modern::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 0; background: linear-gradient(180deg, rgba(59, 40, 109, 0.02) 0%, rgba(59, 40, 109, 0.05) 100%); transition: height 0.4s ease; z-index: -1; }
            .service-card-modern:hover::before { height: 100%; }
            .service-card-icon { width: 70px; height: 70px; background: #f8f7ff; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; transition: all 0.4s ease; }
            .service-card-modern:hover .service-card-icon { background: #3b286d; transform: rotateY(360deg); }
            .service-card-icon i { font-size: 32px; color: #3b286d; transition: all 0.4s ease; }
            .service-card-modern:hover .service-card-icon i { color: #ffffff; }
            .read-more-btn { display: inline-flex; align-items: center; gap: 10px; font-weight: 700; color: #3b286d; text-decoration: none; margin-top: auto; font-size: 15px; transition: all 0.3s ease; }
            .read-more-btn i { font-size: 12px; transition: transform 0.3s ease; }
            .service-card-modern:hover .read-more-btn i { transform: translateX(5px); }
          `}} />
                    <div className="row g-4 mt-2">
                        {services.map((service, index) => {
                            let iconClass = "fa-solid fa-rocket";
                            if (service.key === "web-development") iconClass = "fa-solid fa-code";
                            if (service.key === "seo") iconClass = "fa-solid fa-magnifying-glass-chart";
                            if (service.key === "website-design") iconClass = "fa-solid fa-pen-nib";
                            if (service.key === "google-ads") iconClass = "fa-solid fa-rectangle-ad";
                            if (service.key === "meta-ads") iconClass = "fa-solid fa-rectangle-ad";
                            if (service.key === "social-media-marketing") iconClass = "fa-solid fa-share-nodes";
                            if (service.key === "ugc-marketing") iconClass = "fa-solid fa-user-plus";
                            if (service.key === "influancer-marketing") iconClass = "fa-solid fa-star";
                            if (service.key === "video-creation") iconClass = "fa-solid fa-video";
                            if (service.key === "product-photography") iconClass = "fa-solid fa-camera";
                            if (service.key === "branding-kit") iconClass = "fa-solid fa-palette";

                            return (
                                <div className="col-xl-4 col-lg-6 col-md-6" key={service.id}>
                                    <div className="service-card-modern">
                                        <div className="service-card-icon"><i className={iconClass}></i></div>
                                        <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#2d205a", marginBottom: "20px" }}>{service.name}</h3>
                                        <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.7", marginBottom: "30px", flexGrow: 1 }}>{service.heroDescription}</p>
                                        <Link href={`/services/${service.key}`} className="read-more-btn">READ MORE <i className="fa-solid fa-arrow-right-long"></i></Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Clients Section */}
            <BrandSection />

            {/* 6. FAQ Section */}
            {locationData.faqs && locationData.faqs.length > 0 && (
                <section className="faq-section section-padding">
                    <div className="container">
                        <div className="section-title text-center">
                            <h6 className="wow fadeInUp">FAQ Questions</h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Frequently Asked Questions <br /> in {locationData.name}</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="faq-content-area">
                                    <div className="faq-accordion-items">
                                        <div className="accordion" id="faqAccordion">
                                            {locationData.faqs.map((faq, idx) => (
                                                <div className="accordion-item wow fadeInUp" data-wow-delay={`.${idx + 1}s`} key={idx}>
                                                    <h2 className="accordion-header" id={`heading${idx}`}>
                                                        <button className={`accordion-button ${idx === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded={idx === 0 ? "true" : "false"}>
                                                            {faq.q}
                                                        </button>
                                                    </h2>
                                                    <div id={`collapse${idx}`} className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`} data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body">{faq.a}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 7. Testimonial Section */}
            <TestimonialSection />

            {/* 8. CTA Section */}
            <CtaTextArea />
        </>
    );
}
