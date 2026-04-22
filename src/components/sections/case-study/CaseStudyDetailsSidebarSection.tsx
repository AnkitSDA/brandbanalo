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

interface CaseStudyDetailsSidebarSectionProps {
  caseStudy?: CaseStudy;
}

export default function CaseStudyDetailsSidebarSection({
  caseStudy,
}: CaseStudyDetailsSidebarSectionProps) {
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

  return (
    <div className="case-study-information sticky-style">
      <h3>Case Study Information</h3>
      <ul>
        <li>
          <span className="list-1"> Category :</span>
          <span className="list-2"> {displayCaseStudy.category}</span>
        </li>
        <li>
          <span className="list-1"> Service :</span>
          <span className="list-2"> {displayCaseStudy.service.replace("-", " ")}</span>
        </li>
        <li>
          <span className="list-1"> Date :</span>
          <span className="list-2"> {displayCaseStudy.date}</span>
        </li>
        <li>
          <span className="list-1"> Case Study ID :</span>
          <span className="list-2"> {displayCaseStudy.slug}</span>
        </li>
      </ul>
      <div className="social-icon d-flex align-items-center">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://vimeo.com" target="_blank" rel="noreferrer">
          <i className="fab fa-vimeo-v" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer">
          <i className="fab fa-pinterest-p" />
        </a>
      </div>
    </div>
  );
}

