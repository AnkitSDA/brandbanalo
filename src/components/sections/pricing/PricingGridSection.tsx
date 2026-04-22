import Link from "next/link";
import CheckIcon from "./CheckIcon";

const plans = [
  {
    name: "Silver",
    price: "₹1.5 Lakh",
    period: "/Yr",
    active: false,
    features: [
      "Web Site",
      "Basic SEO",
      "Outstanding Support",
    ],
  },
  {
    name: "Diamond",
    price: "₹6 Lakh",
    period: "/Yr",
    active: false,
    features: [
      "Web Site",
      "Advanced SEO",
      "Google Ads Management",
      "Meta Ads Management",
      "Youtube Management",
      "Facebook Management",
      "Instagram Management",
      "Brand Kit",
      "Landing Page (3)",
    ],
  },
  {
    name: "Gold",
    price: "₹3 Lakh",
    period: "/Yr",
    active: true,
    features: [
      "Web Site",
      "SEO",
      "Google Ads Management",
      "Meta Ads Management",
      "Facebook Management",
      "Instagram Management",
      "Landing Page (2)",
    ],
  },
];

function PricingCard({
  name,
  price,
  period,
  active,
  features,
}: {
  name: string;
  price: string;
  period: string;
  active: boolean;
  features: string[];
}) {
  return (
    <div className={`pricing-box-items h-100${active ? " active" : ""}${name !== "Diamond" ? " dark-pricing-card" : ""}`}>
      <div className="pricing-header">
        <h3 style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "700" }}>{name}</h3>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "800" }}>
          {price} <sub style={{ fontSize: "16px" }}>{period}</sub>
        </h2>
        <p>
          We care about their success. For us real <br /> relationships fuel
          real
        </p>
      </div>
      <ul className="pricing-list">
        {features.map((feature) => (
          <li key={feature}>
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>
      <div className="pricing-button">
        <Link href="/pricing" className="pricing-btn">
          Choose This Plan
        </Link>
      </div>
    </div>
  );
}

export default function PricingGridSection() {
  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="row g-4">
          {plans.map((plan) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              key={plan.name}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

