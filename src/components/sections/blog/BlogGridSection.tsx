import Link from "next/link";

const posts = [
  {
    img: "01.webp",
    category: "BRANDING",
    date: "05 September 2025",
    title: "How digital agencies drive business success and growth",
  },
  {
    img: "02.webp",
    category: "DEVELOPMENT",
    date: "05 September 2025",
    title: "Choosing the right digital agency for business growth",
  },
  {
    img: "03.webp",
    category: "MARKETING",
    date: "05 September 2025",
    title: "How digital agencies drive business success and growth",
  },
  {
    img: "12.webp",
    category: "BRANDING",
    date: "05 September 2025",
    title: "Graphic design agency your Graphic design agency Brand needs.",
  },
  {
    img: "13.webp",
    category: "DEVELOPMENT",
    date: "05 September 2025",
    title: "Importers achieve savings through the First Sale rule!",
  },
  {
    img: "14.webp",
    category: "MARKETING",
    date: "05 September 2025",
    title: "Focus logistics secure new landmark Contracts",
  },
  {
    img: "15.webp",
    category: "BRANDING",
    date: "05 September 2025",
    title: "Importers achieve savings through the First Sale rule!",
  },
  {
    img: "16.webp",
    category: "DEVELOPMENT",
    date: "05 September 2025",
    title: "Is now the right time to invest in an enterprise",
  },
  {
    img: "17.webp",
    category: "MARKETING",
    date: "05 September 2025",
    title: "Focus logistics secure new landmark Contracts",
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
                      <Link href="/blog/details">{post.category}</Link>
                    </li>
                    <li>
                      <span>{post.date}</span>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog/details">{post.title}</Link>
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

