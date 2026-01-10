import { getMetaForPath } from "./meta-registry";

interface FAQItem {
  question: string;
  answer: string;
}

interface SSRContent {
  h1: string;
  intro: string;
  sections?: { heading: string; content: string }[];
  faqs?: FAQItem[];
  localBusiness?: {
    name: string;
    city: string;
    services: string[];
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function generateSSRContentHtml(content: SSRContent, canonicalUrl: string): string {
  let html = `
<div id="ssr-content" itemscope itemtype="https://schema.org/WebPage">
  <h1 itemprop="headline">${escapeHtml(content.h1)}</h1>
  <p itemprop="description">${escapeHtml(content.intro)}</p>
`;

  if (content.sections?.length) {
    for (const section of content.sections) {
      html += `  <section>
    <h2>${escapeHtml(section.heading)}</h2>
    <p>${escapeHtml(section.content)}</p>
  </section>
`;
    }
  }

  if (content.faqs?.length) {
    html += `  <section itemscope itemtype="https://schema.org/FAQPage">
    <h2>Häufig gestellte Fragen</h2>
`;
    for (const faq of content.faqs) {
      html += `    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">${escapeHtml(faq.question)}</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">${escapeHtml(faq.answer)}</p>
      </div>
    </div>
`;
    }
    html += `  </section>
`;
  }

  if (content.localBusiness) {
    const lb = content.localBusiness;
    html += `  <div itemscope itemtype="https://schema.org/LocalBusiness" style="display:none;">
    <meta itemprop="name" content="${escapeHtml(lb.name)}" />
    <div itemprop="areaServed" itemscope itemtype="https://schema.org/City">
      <meta itemprop="name" content="${escapeHtml(lb.city)}" />
    </div>
    <meta itemprop="url" content="${escapeHtml(canonicalUrl)}" />
`;
    for (const service of lb.services) {
      html += `    <meta itemprop="makesOffer" content="${escapeHtml(service)}" />
`;
    }
    html += `  </div>
`;
  }

  html += `</div>`;
  return html;
}

function generateFAQSchema(faqs: FAQItem[]): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

export function injectSSRContent(html: string, path: string): string {
  const meta = getMetaForPath(path);
  
  if (!meta) {
    return html;
  }

  // Title tag
  if (meta.title) {
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${escapeHtml(meta.title)}</title>`
    );
    // og:title
    html = html.replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${escapeHtml(meta.title)}"`
    );
    // twitter:title
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*"/,
      `<meta name="twitter:title" content="${escapeHtml(meta.title)}"`
    );
  }

  // Description
  if (meta.description) {
    html = html.replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${escapeHtml(meta.description)}"`
    );
    // og:description
    html = html.replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${escapeHtml(meta.description)}"`
    );
    // twitter:description
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${escapeHtml(meta.description)}"`
    );
  }

  // Canonical URL
  if (meta.canonical) {
    html = html.replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${escapeHtml(meta.canonical)}"`
    );
    // og:url
    html = html.replace(
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${escapeHtml(meta.canonical)}"`
    );
  }

  // og:type
  if (meta.ogType) {
    html = html.replace(
      /<meta property="og:type" content="[^"]*"/,
      `<meta property="og:type" content="${escapeHtml(meta.ogType)}"`
    );
  }

  // SSR Content für Google
  if (meta.ssrContent) {
    const ssrHtml = generateSSRContentHtml(meta.ssrContent, meta.canonical);
    
    let schemaHtml = '';
    if (meta.ssrContent.faqs?.length) {
      schemaHtml = generateFAQSchema(meta.ssrContent.faqs);
    }
    
    html = html.replace(
      '<div id="root"></div>',
      `${ssrHtml}\n${schemaHtml}\n<div id="root"></div>`
    );
  }

  return html;
}
