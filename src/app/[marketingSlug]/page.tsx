import MarketingArea from "@/components/Marketing-Area/Marketing-area";
import seoData from "@/data/seo-locations.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const params: { marketingSlug: string }[] = [];
    
    seoData.states.forEach((state) => {
        params.push({ marketingSlug: `best-digital-marketing-agency-in-${state.slug}` });
        
        state.cities.forEach((city) => {
            params.push({ marketingSlug: `best-digital-marketing-agency-in-${city.slug}` });
        });
    });
    
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ marketingSlug: string }> }) {
    const { marketingSlug } = await params;
    
    if (!marketingSlug.startsWith("best-digital-marketing-agency-in-")) {
        return { title: "Page Not Found" };
    }

    const locationSlug = marketingSlug.replace("best-digital-marketing-agency-in-", "");
    let locationMatch: any = null;
    
    const stateMatch = seoData.states.find((s) => s.slug === locationSlug);
    if (stateMatch) {
        locationMatch = stateMatch;
    } else {
        for (const state of seoData.states) {
            const cityMatch = state.cities.find((c) => c.slug === locationSlug);
            if (cityMatch) {
                locationMatch = cityMatch;
                break;
            }
        }
    }

    if (!locationMatch) return { title: "Page Not Found" };

    return {
        title: locationMatch.meta.title,
        description: locationMatch.meta.description,
        keywords: locationMatch.meta.keywords ? locationMatch.meta.keywords.join(", ") : "",
    };
}

export default async function LocationPage({ params }: { params: Promise<{ marketingSlug: string }> }) {
    const { marketingSlug } = await params;
    
    if (!marketingSlug.startsWith("best-digital-marketing-agency-in-")) {
        return notFound();
    }

    const locationSlug = marketingSlug.replace("best-digital-marketing-agency-in-", "");
    let locationMatch: any = null;
    
    const stateMatch = seoData.states.find((s) => s.slug === locationSlug);
    if (stateMatch) {
        locationMatch = stateMatch;
    } else {
        for (const state of seoData.states) {
            const cityMatch = state.cities.find((c) => c.slug === locationSlug);
            if (cityMatch) {
                locationMatch = cityMatch;
                break;
            }
        }
    }

    if (!locationMatch) return notFound();

    return (
        <main>
            <MarketingArea locationData={locationMatch as any} />
        </main>
    );
}
