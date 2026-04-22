import Link from "next/link";
import seoData from "@/data/seo-locations.json";

export default function FooterLocationMarquee() {
  // Extract all states and cities into a single flat array
  const stateLinks: { label: string; url: string }[] = [];
  const cityLinks: { label: string; url: string }[] = [];

  seoData.states.forEach((state) => {
    // Add State
    stateLinks.push({
      label: `Best Digital Marketing Agency in ${state.name}`,
      url: `/best-digital-marketing-agency-in-${state.slug}`,
    });

    // Add Cities
    state.cities.forEach((city) => {
      cityLinks.push({
        label: `Best Digital Marketing Agency in ${city.name}`,
        url: `/best-digital-marketing-agency-in-${city.slug}`,
      });
    });
  });

  const locationLinks = [...stateLinks, ...cityLinks];

  return (
    <div className="location-marquee-container">
      <div className="location-marquee-track">
        {locationLinks.map((loc, i) => (
          <span key={i} className="location-marquee-item">
            <Link href={loc.url}>{loc.label}</Link>
            <span className="marquee-separator">|</span>
          </span>
        ))}
        {/* Duplicate the items for infinite scrolling effect */}
        {locationLinks.map((loc, i) => (
          <span key={`dup-${i}`} className="location-marquee-item">
            <Link href={loc.url}>{loc.label}</Link>
            <span className="marquee-separator">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
