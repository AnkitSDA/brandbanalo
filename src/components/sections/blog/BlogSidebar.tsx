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
              <Link href="/blog/details">Agency</Link> <span>(03)</span>
            </li>
            <li>
              <Link href="/blog/details">Business</Link> <span>(01)</span>
            </li>
            <li className="active">
              <Link href="/blog/details">Development</Link> <span>(05)</span>
            </li>
            <li>
              <Link href="/blog/details">UI UX Design</Link> <span>(02)</span>
            </li>
            <li>
              <Link href="/blog/details">Marketing</Link> <span>(04)</span>
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
                <Link href="/blog/details">
                  How digital agencies drive business success
                </Link>
              </h6>
              <ul>
                <li>March 26, 2025</li>
              </ul>
            </div>
          </div>
          <div className="recent-items">
            <div className="recent-thumb">
              <img src="/assets/img/news/pp4.webp" alt="Recent post" />
            </div>
            <div className="recent-content">
              <h6>
                <Link href="/blog/details">
                  Choosing the right digital agency for busine
                </Link>
              </h6>
              <ul>
                <li>March 26, 2025</li>
              </ul>
            </div>
          </div>
          <div className="recent-items">
            <div className="recent-thumb">
              <img src="/assets/img/news/pp5.webp" alt="Recent post" />
            </div>
            <div className="recent-content">
              <h6>
                <Link href="/blog/details">
                  Top digital agency trends shaping the futur
                </Link>
              </h6>
              <ul>
                <li>March 26, 2025</li>
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
            <Link href="/blog/details">Business</Link>
            <Link href="/blog/details">Analysis</Link>
            <Link href="/blog/details">Technology</Link>
            <Link href="/blog/details">Brand</Link>
            <Link href="/blog/details">Experience</Link>
            <Link href="/blog/details">Creative</Link>
            <Link href="/blog/details">Design</Link>
            <Link href="/blog/details">Awards</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

