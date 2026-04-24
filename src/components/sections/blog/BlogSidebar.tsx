import Link from "next/link";

export default function BlogSidebar() {
  return (
    <div className="main-sidebar sticky-style">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>Search Here</h4>
        </div>
        <div className="search-widget">
          <form action="#" method="get" role="search">
            <input type="text" name="s" placeholder="Search..." />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>Categories</h4>
        </div>
        <div className="news-widget-categories">
          <ul>
            <li>
              <Link href="/blog">Business</Link> <span>(01)</span>
            </li>
            <li>
              <Link href="/blog">Marketing</Link> <span>(01)</span>
            </li>
            <li>
              <Link href="/blog">Strategy</Link> <span>(01)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Recent Post</h3>
        </div>
        <div className="recent-post-area">
          <div className="recent-items">
            <div className="recent-thumb">
              <img src="/assets/img/news/pp3.webp" alt="Recent post" />
            </div>
            <div className="recent-content">
              <h6>
                <Link href="/blog/details?slug=digital-marketing-agency-for-e-commerce-startup">
                  Digital Marketing agency for E-commerce Startup
                </Link>
              </h6>
              <ul>
                <li>Oct 15, 2025</li>
              </ul>
            </div>
          </div>
          <div className="recent-items">
            <div className="recent-thumb">
              <img src="/assets/img/news/pp4.webp" alt="Recent post" />
            </div>
            <div className="recent-content">
              <h6>
                <Link href="/blog/details?slug=brand-banalo-best-digital-marketing-agency-for-lead-generation">
                  Brand Banalo best Digital marketing agency for Lead Generation
                </Link>
              </h6>
              <ul>
                <li>Oct 20, 2025</li>
              </ul>
            </div>
          </div>
          <div className="recent-items">
            <div className="recent-thumb">
              <img src="/assets/img/news/pp5.webp" alt="Recent post" />
            </div>
            <div className="recent-content">
              <h6>
                <Link href="/blog/details?slug=best-business-making-company-to-grow-your-company">
                  Best Business Making Company to Grow your Company
                </Link>
              </h6>
              <ul>
                <li>Oct 25, 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>Tag Cloud</h4>
        </div>
        <div className="news-widget-categories">
          <div className="tagcloud">
            <Link href="/blog">Business</Link>
            <Link href="/blog">Marketing</Link>
            <Link href="/blog">Brand</Link>
            <Link href="/blog">Lead Gen</Link>
            <Link href="/blog">Startup</Link>
            <Link href="/blog">Growth</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

