const metaDescription =
  "Carlo Gino Catapang's website | Code Gino, Web Developer, Software Developer, Software Engineer, Frontend Engineer. React, JavaScript, TypeScript expert. Husband and Father.";

export const commonMetaTags = (slug = '') => (
  <>
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content="https://codegino.com/assets/preview.png"
    />
    <meta name="twitter:description" content={metaDescription} />
    <meta name="twitter:title" content="Carlo Gino Catapang" />
    <meta property="og:url" content={`https://codegino.com${slug}`} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Carlo Gino Catapang" />
    <meta property="og:description" content={metaDescription} />
    <meta property="og:image" content="/assets/preview.png" />

    <meta name="description" content={metaDescription} />

    <link rel="icon" href="/favicon.ico" />

    {/* For PWA */}
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/assets/logo.png"></link>

    {/* ABtesting.ai Code */}
    <link rel="preconnect" href="https://external.abtesting.ai" />
    <script async src="https://js.abtesting.ai/ab.js?userid=5393" />

    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </>
);
