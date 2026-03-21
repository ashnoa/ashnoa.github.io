import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = "https://ashnoa.com";

export function SEOHead({
  title,
  description,
  path,
  ogImage,
  jsonLd,
}: SEOHeadProps) {
  const fullUrl = `${SITE_URL}${path}`;
  const fullTitle = title === "ashnoa.com" ? title : `${title} | ashnoa.com`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      {ogImage && (
        <meta
          property="og:image"
          content={
            ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`
          }
        />
      )}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
