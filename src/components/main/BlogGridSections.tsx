import BlogBreadcrumbSection from "@/components/sections/blog/BlogBreadcrumbSection";
import BlogCtaSection from "@/components/sections/blog/BlogCtaSection";
import BlogGridSection from "@/components/sections/blog/BlogGridSection";

export default function BlogGridSections() {
  return (
    <>
      <BlogBreadcrumbSection title="Our Blog" />
      <BlogGridSection />
      <BlogCtaSection />
    </>
  );
}

