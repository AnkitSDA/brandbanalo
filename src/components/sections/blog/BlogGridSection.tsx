import Link from "next/link";

const posts = [
  {
    img: "01.webp",
    category: "MARKETING",
    date: "15 October 2025",
    title: "Digital Marketing agency for E-commerce Startup",
  },
  {
    img: "02.webp",
    category: "STRATEGY",
    date: "20 October 2025",
    title: "Brand Banalo best Digital marketing agency for Lead Generation",
  },
  {
    img: "03.webp",
    category: "BUSINESS",
    date: "25 October 2025",
    title: "Best Business Making Company to Grow your Company",
  },
];

export default function BlogGridSection() {
  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {posts.map((post, index) => (
            <div
              key={`${post.img}-${index}`}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={index % 3 === 0 ? ".3s" : index % 3 === 1 ? ".5s" : ".7s"}
            >
              <div className="news-box-items mt-0">
                <div className="thumb">
                  <img src={`/assets/img/news/${post.img}`} alt={post.title} />
                </div>
                <div className="content">
                  <ul className="cat-list">
                    <li>
                      <Link href={`/blog/details?slug=${post.title.toLowerCase().replace(/ /g, '-')}`}>{post.category}</Link>
                    </li>
                    <li>
                      <span>{post.date}</span>
                    </li>
                  </ul>
                  <h4>
                    <Link href={`/blog/details?slug=${post.title.toLowerCase().replace(/ /g, '-')}`}>{post.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="page-nav-wrap pt-5 text-center">
          <ul>
            <li>
              <Link href="/blog/grid" className="page-numbers">
                01
              </Link>
            </li>
            <li>
              <Link href="/blog/grid" className="page-numbers">
                02
              </Link>
            </li>
            <li>
              <Link href="/blog/grid" className="page-numbers">
                03
              </Link>
            </li>
            <li>
              <Link href="/blog/grid" className="page-numbers">
                <i className="fa-solid fa-chevron-right" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

