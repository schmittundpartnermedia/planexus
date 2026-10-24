export const planexusPostalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Am Steinbach 8",
  postalCode: "72459",
  addressLocality: "Albstadt-Laufen",
  addressRegion: "Baden-Württemberg",
  addressCountry: "DE",
} as const;

export const planexusGeo = {
  "@type": "GeoCoordinates",
  latitude: 48.2180461,
  longitude: 8.9140541,
} as const;

export const planexusContact = {
  telephone: "+49 7435 7519 700",
  email: "info@planexus.de",
} as const;

// Fertigung seit Oktober 2026; Albstadt-Laufen (oben) ist Sitz und Büro.
export const planexusProductionAddress = {
  "@type": "PostalAddress",
  streetAddress: "Hospach 1",
  postalCode: "72401",
  addressLocality: "Haigerloch",
  addressRegion: "Baden-Württemberg",
  addressCountry: "DE",
} as const;

// Für JSON-LD `location`: Büro und Fertigung getrennt benannt, damit Suchmaschinen und KI
// die beiden Orte nicht verwechseln.
export function planexusLocations(locale: string) {
  const en = locale === "en";
  return [
    { "@type": "Place", name: en ? "Planexus GmbH – office (registered seat)" : "Planexus GmbH – Büro (Firmensitz)", address: planexusPostalAddress },
    { "@type": "Place", name: en ? "Planexus GmbH – Haigerloch works" : "Planexus GmbH – Fertigung", address: planexusProductionAddress, telephone: "+49 7474 4273000" },
  ];
}
