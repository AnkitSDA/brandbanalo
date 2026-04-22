export default function NewsSection() {
  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="section-title theme-color-2 text-center">
          <h6 className="wow fadeInUp">latest news</h6>
          <h2 className="tp_reveal_anim">our latest blog &amp; news</h2>
        </div>
      </div>
      <div className="container custom-container-2">
        <div className="row">
          {[4, 5, 6, 7].map((idx, index) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.2}s`}
              key={idx}
            >
              <div className="news-box-items-2">
                <div className="thumb">
                  <img src={`/assets/img/news/post-${idx > 5 ? (idx % 2 === 0 ? 4 : 5) : idx}.webp`} alt="News" />
                  <a href="/blog/details" className="post-cat">
                    technology
                  </a>
                </div>
                <div className="content">
                  <p>August 17, 2025</p>
                  <h3>
                    <a href="/blog/details">
                      Contrary to popular belief, Lorem Ipsum is not simply random
                      text. It has roots
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


