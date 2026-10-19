import { profile } from "@/lib/data/profile";
import { experience, education } from "@/lib/data/resume";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.shortBio,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneHref,
    url: "https://abrahamcocoletzi.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tlaxcala",
      addressCountry: "MX",
    },
    sameAs: [profile.githubUrl],
    alumniOf: education
      .filter((e) => e.title.startsWith("Ingeniería"))
      .map((e) => ({
        "@type": "CollegeOrUniversity",
        name: e.institution,
      })),
    worksFor: {
      "@type": "Organization",
      name: experience[0]?.company,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
