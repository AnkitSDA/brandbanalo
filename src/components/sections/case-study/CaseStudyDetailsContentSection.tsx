import caseStudyContent from "@/data/caseStudyContent.json";

interface CaseStudy {
  id: number;
  slug: string;
  img: string;
  date: string;
  title: string;
  description: string;
  service: string;
  href: string;
  category: string;
}

interface CaseStudyDetailsContentSectionProps {
  caseStudy?: CaseStudy;
}

export default function CaseStudyDetailsContentSection({
  caseStudy,
}: CaseStudyDetailsContentSectionProps) {
  const displayCaseStudy = caseStudy || {
    id: 0,
    slug: "",
    img: "1.webp",
    date: "MARCH 26, 2025",
    title: "Case Study",
    description: "Case Study Description",
    service: "web-development",
    href: "/case-study/details",
    category: "Web Development",
  };

  // Get content from JSON based on service type
  const content = caseStudyContent.serviceContent[displayCaseStudy.service as keyof typeof caseStudyContent.serviceContent] || caseStudyContent.serviceContent["web-development"];

  return (
    <div className="details-content">
      <h2>{displayCaseStudy.title}</h2>
      <p className="mb-3">{displayCaseStudy.description}</p>
      
      <h3>Case Study Overview</h3>
      <p className="mb-5">
        {content.overview}
      </p>

      <h3>Challenges &amp; Objectives</h3>
      <p className="mb-5">
        {content.challenges}
      </p>

      <h3>Our Solution &amp; Strategy</h3>
      <p className="mb-5">
        {content.solution}
      </p>

      <h3>Key Features Implemented</h3>
      <ul className="mb-5" style={{ paddingLeft: "20px" }}>
        {content.keyFeatures.map((feature, index) => (
          <li key={index} style={{ marginBottom: "8px", color: "#555" }}>
            {feature}
          </li>
        ))}
      </ul>

      <h3>Results &amp; Impact</h3>
      <p className="mb-5">
        {content.results}
      </p>

      <h3>Key Benefits Delivered</h3>
      <ul className="mb-5" style={{ paddingLeft: "20px" }}>
        {content.benefits.map((benefit, index) => (
          <li key={index} style={{ marginBottom: "8px", color: "#555" }}>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

