import Link from "next/link";
import BlogSidebar from "./BlogSidebar";

const standardPosts = [
  {
    img: "post-1.webp",
    category: "BRANDING",
    date: "05 September 2025",
    title: "How digital agencies drive business success and growth",
  },
  {
    img: "post-2.webp",
    category: "BRANDING",
    date: "05 September 2025",
    title: "Choosing the right digital agency for business growth",
  },
  {
    img: "post-3.webp",
    category: "BRANDING",
    date: "05 September 2025",
    title: "Top digital agency trends shaping the future market",
    isLast: true,
  },
];

export default function BlogStandardSection() {
  return (
    <section className="news-standard-section section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            {standardPosts.map((post) => (
              <div
                key={post.img}
                className={`news-standard-items${post.isLast ? " mb-0" : ""}`}
              >
                <div className="thumb">
                  <img src={`/assets/img/news/${post.img}`} alt={post.title} />
                </div>
                <div className="content">
                  <ul className="cat-list">
                    <li>
                      <Link href="/blog/details">{post.category}</Link>
                    </li>
                    <li>
                      <span>{post.date}</span>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">{post.title}</Link>
                  </h3>
                  <Link href="/blog/details" className="theme-btn">
                    <span className="icon-1">
                      <img src="/assets/img/icon/10.svg" alt="Read more" />
                    </span>
                    Read more
                    <span className="icon-2">
                      <img src="/assets/img/icon/11.svg" alt="Read more" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
            <div className="page-nav-wrap pt-5">
              <ul>
                <li>
                  <Link href="/blog" className="page-numbers">
                    01
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="page-numbers">
                    02
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="page-numbers">
                    03
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="page-numbers">
                    <i className="fa-solid fa-chevron-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

