export default function AboutSection() {
  return (
    <section className="about-section-2 fix">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="tp_reveal_anim">
                  Accelerate Your Business Growth with Smart Digital Solutions.
                </h2>
                <br />
                <h6 className="wow fadeInUp">Behind the brand</h6>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  At Brand Banalo Pvt Ltd, we don’t just offer digital services — we build powerful brand identities that drive real business growth. Our mission is simple - help businesses of every industry scale faster, generate consistent leads and establish a strong digital presence that converts.
                  <br />
                  With a deep understanding of modern marketing trends and consumer behavior, we craft tailored strategies that align with your business goals. Whether you're a startup, SME, or enterprise, we transform your ideas into a recognizable and profitable brand.
                </p>
                <ul className="about-list wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <i className="fa-regular fa-arrow-up-right" />
                    Scale&nbsp;your business team quickly
                  </li>
                  <li>
                    <i className="fa-regular fa-arrow-up-right" />
                    Improve&nbsp;yearly product sale ratio
                  </li>
                  <li>
                    <i className="fa-regular fa-arrow-up-right" />
                    Grow-up&nbsp;your real traffic
                  </li>
                </ul>
                <a
                  href="/behind-the-brand"
                  className="theme-btn theme-color-2 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <span className="icon-1">
                    <img src="/assets/img/icon/10.svg" alt="Know more" />
                  </span>
                  know more
                  <span className="icon-2">
                    <img src="/assets/img/icon/11.svg" alt="Know more" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-2">
                <img src="/assets/img/about/about.webp" alt="About" style={{ borderRadius: "20px" }} />
                <div className="counter-items">
                  <div className="content wow fadeInUp" data-wow-delay=".3s">
                    <h2>
                      <span className="count">2</span>Cr +
                    </h2>
                    <p>Advertised Spend</p>
                  </div>
                  <div className="content wow fadeInUp" data-wow-delay=".5s">
                    <h2>
                      <span className="count">100</span> +
                    </h2>
                    <p>Website Created</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


