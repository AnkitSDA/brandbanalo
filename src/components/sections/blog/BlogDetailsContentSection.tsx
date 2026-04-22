import Link from "next/link";

function QuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <path
        d="M34.5977 30.8982H47.481C47.0031 36.6269 42.2095 41.1429 36.3885 41.1429C35.8703 41.1429 35.451 41.5643 35.451 42.0851V48.1497C35.451 48.6706 35.8703 49.092 36.3885 49.092C46.8878 49.092 55.4297 40.508 55.4297 29.956V9.96174C55.4297 9.44089 55.0105 9.01953 54.4922 9.01953H34.5977C34.0795 9.01953 33.6602 9.44089 33.6602 9.96174V29.9562C33.6602 30.4769 34.0797 30.8982 34.5977 30.8982ZM35.5352 10.904H53.5547V29.9562C53.5547 39.1529 46.3568 46.6916 37.326 47.1819V42.9934C44.0625 42.5095 49.3945 36.847 49.3945 29.956C49.3945 29.4352 48.9752 29.0138 48.457 29.0138H35.5352V10.904Z"
        fill="#1C1D20"
      />
      <path
        d="M6.48438 30.8982H19.3696C18.8916 36.6269 14.0999 41.1429 8.27706 41.1429C7.75881 41.1429 7.33956 41.5643 7.33956 42.0851V48.1497C7.33956 48.6706 7.75881 49.092 8.27706 49.092C18.7763 49.092 27.3183 40.508 27.3183 29.956V9.96174C27.3183 9.44089 26.899 9.01953 26.3808 9.01953H6.48438C5.96613 9.01953 5.54688 9.44089 5.54688 9.96174V29.9562C5.54688 30.4769 5.96631 30.8982 6.48438 30.8982ZM7.42188 10.904H25.4431V29.9562C25.4431 39.1529 18.2451 46.6916 9.21438 47.1819V42.9934C15.9509 42.5095 21.2828 36.847 21.2828 29.956C21.2828 29.4352 20.8636 29.0138 20.3453 29.0138H7.42188V10.904Z"
        fill="#1C1D20"
      />
    </svg>
  );
}

export default function BlogDetailsContentSection() {
  return (
    <div className="news-details-wrapper">
      <div className="news-post-details">
        <div className="single-news-post">
          <div className="post-featured-thumb">
            <img src="/assets/img/news/post-4.webp" alt="Blog post" />
          </div>
          <div className="post-content">
            <ul className="cat-list">
              <li>DEVELOPMENT</li>
              <li>
                <span>05 September 2025</span>
              </li>
            </ul>
            <h3>How digital agencies drive business success and growth</h3>
            <p className="mb-3">
              In recent years, the healthcare industry has witnessed a
              groundbreaking transformation driven by the integration of
              artificial intelligence (AI) technologies. These advancements are
              revolutionizing patient care, medical research, diagnostics. These
              advancements are revolutionizing.
            </p>
            <p className="mb-3">
              One of the most remarkable applications of AI in healthcare is in
              diagnostics. Machine and learning algorithms are capable of
              analyzing vast amounts of medical data with speed to unprecedente
              speed and accuracy. This has led to earlier and more precise
              disease speed detection, greatly enhancing the chances of
              successful treatment.
            </p>
            <div className="hilight-text mt-4">
              <QuoteIcon />
              <p>
                &quot;Mosico has been an invaluable partner to us. Any talent
                we&apos;ve worked with has shown a deep understanding of digital
                experiences. They&apos;re seamlessl integrate with our team and
                meet the level of craft that we hold ourselves accountable with
                our team and meet to. They&apos;re seamlessl integrate with our
                team and meet&quot;
              </p>
            </div>
            <p className="mt-4 mb-5">
              AI-driven predictive analytics are being used to forecast disease
              outbreaks and patient admission rates, enabling hospitals and
              healthcare facilities to allocate resources more efficiently. This
              especially crucial during public health emergencies.
            </p>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="details-image">
                  <img src="/assets/img/news/post-5.webp" alt="Blog detail" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="details-image">
                  <img src="/assets/img/news/post-6.webp" alt="Blog detail" />
                </div>
              </div>
            </div>
            <p className="pt-5">
              AI-driven predictive analytics are being used to forecast disease
              outbreaks and patient admission rates, enabling hospitals and
              healthcare facilities to allocate resources more efficiently. This
              iespecially crucial during public health emergencies.
            </p>
          </div>
        </div>
        <div className="row tag-share-wrap mt-4 mb-5">
          <div className="col-lg-8 col-12">
            <div className="tagcloud">
              <span>Tags:</span>
              <Link href="/blog/details">Marketing</Link>
              <Link href="/blog/details">Brand</Link>
              <Link href="/blog/details">Business</Link>
            </div>
          </div>
          <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
            <div className="social-share">
              <span className="me-3">Share:</span>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="comments-area">
          <div className="comments-heading">
            <h3>02 Comments</h3>
          </div>
          <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
            <div className="image">
              <img src="/assets/img/news/comment.webp" alt="Commenter" />
            </div>
            <div className="content">
              <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <div className="con">
                  <h5>
                    <Link href="/blog/details">Leslie Alexander</Link>
                  </h5>
                  <span>February 10, 2025 at 2:37 pm</span>
                </div>
                <Link href="/blog/details" className="reply">
                  Reply
                </Link>
              </div>
              <p className="mt-30 mb-4">
                Neque porro est qui dolorem ipsum quia quaed inventor veritatis
                et quasi architecto var sed efficitur turpis gilla sed sit amet
                finibus eros. Lorem Ipsum is simply dummy
              </p>
            </div>
          </div>
          <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
            <div className="image">
              <img src="/assets/img/news/comment-2.webp" alt="Commenter" />
            </div>
            <div className="content">
              <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <div className="con">
                  <h5>
                    <Link href="/blog/details">Ralph Edwards</Link>
                  </h5>
                  <span>February 10, 2025 at 2:37 pm</span>
                </div>
                <Link href="/blog/details" className="reply">
                  Reply
                </Link>
              </div>
              <p className="mt-30 mb-4">
                Neque porro est qui dolorem ipsum quia quaed inventor veritatis
                et quasi architecto var sed efficitur turpis gilla sed sit amet
                finibus eros. Lorem Ipsum is simply dummy
              </p>
            </div>
          </div>
        </div>
        <div className="comment-form-wrap pt-5">
          <h3>Leave a Comment</h3>
          <p>Your email address will not be published. Required fields are marked *</p>
          <form action="#" id="contact-form" method="POST">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="form-clt">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-clt">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-clt">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Select subject"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-clt">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    rows={5}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <button type="submit" className="theme-btn">
                  <span className="icon-1">
                    <img src="/assets/img/icon/10.svg" alt="Submit" />
                  </span>
                  Message here
                  <span className="icon-2">
                    <img src="/assets/img/icon/11.svg" alt="Submit" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

