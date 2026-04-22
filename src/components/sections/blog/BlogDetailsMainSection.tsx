import BlogDetailsContentSection from "./BlogDetailsContentSection";
import BlogSidebar from "./BlogSidebar";

export default function BlogDetailsMainSection() {
  return (
    <section className="news-details-section section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <BlogDetailsContentSection />
          </div>
          <div className="col-12 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

