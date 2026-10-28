import Script from 'next/script';

export default function WebAnalytics() {
  const token = process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN;

  if (process.env.NODE_ENV !== 'production' || !token) {
    return null;
  }

  return (
    <Script
      id="cloudflare-web-analytics"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      type="module"
      data-cf-beacon={JSON.stringify({ token, spa: true })}
      strategy="afterInteractive"
    />
  );
}
