export default function BrandSection() {
  return (
    <section className="brand-section section-padding pt-0 fix" style={{ paddingBottom: '0 !important' }}>
      <div className="brand-wrapper style-2" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <h4 className="wow fadeInUp" data-wow-delay=".3s">
            We Worked With Top <span className="count">25</span>
            <span>+</span> Companies{" "}
          </h4>
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              {Array.from({ length: 26 }, (_, i) => i + 1).map((idx) => (
                <div className="swiper-slide" key={idx}>
                  <div className="brand-image" style={{ width: '200px', height: '200px' }}>
                    <img
                      src={`/assets/img/brand/${idx}.webp`}
                      alt={`Brand logo ${idx}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


