import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.ismailm.xyz/" />

        {/* Enhanced SEO Meta Tags */}
        <meta
          name="description"
          content="Ismail Mohammed - Full Stack Engineer specializing in building scalable cloud applications."
        />
        <meta
          name="keywords"
          content="Full Stack Engineer, Backend Developer, Java, TypeScript, Microservices, Kafka, Node.js, AWS, Software Engineer"
        />
        <meta name="author" content="Ismail Mohammed" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Ismail Mohammed - Full Stack Engineer | Java, TypeScript, Golang"
        />
        <meta
          property="og:description"
          content="Full Stack Engineer specializing in building scalable cloud applications."
        />
        <meta
          property="og:image"
          content="https://www.ismailm.xyz/screenshot.png"
        />
        <meta property="og:url" content="https://www.ismailm.xyz/" />
        <meta property="og:site_name" content="ismailm.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ismail Mohammed - Full Stack Engineer"
        />
        <meta
          name="twitter:description"
          content="Full Stack Engineer specializing in building scalable cloud applications."
        />
        <meta
          name="twitter:image"
          content="https://www.ismailm.xyz/screenshot.png"
        />
        <meta name="twitter:creator" content="@ismail5701" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ismail Mohammed',
              url: 'https://www.ismailm.xyz',
              image: 'https://www.ismailm.xyz/screenshot.png',
              sameAs: [
                'https://github.com/ismailmmd',
                'https://www.linkedin.com/in/ismail-mohmmd/',
                'https://twitter.com/@ismail5701',
              ],
              jobTitle: 'Full Stack Engineer',
              description:
                'Full Stack Engineer specializing in building scalable cloud applications',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tallinn',
                addressCountry: 'Estonia',
              },
              alumniOf: {
                '@type': 'Organization',
                name: 'Symplr',
              },
              worksFor: [
                {
                  '@type': 'Organization',
                  name: 'Pipedrive',
                  url: 'https://www.pipedrive.com',
                },
              ],
              knowsAbout: [
                'Java',
                'TypeScript',
                'JavaScript',
                'Node.js',
                'Microservices',
                'Kafka',
                'AWS',
                'PostgreSQL',
                'Redis',
                'Kubernetes',
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Ismail Mohammed - Portfolio',
              url: 'https://www.ismailm.xyz',
              description:
                'Portfolio website of Ismail Mohammed, Full Stack Engineer',
              author: {
                '@type': 'Person',
                name: 'Ismail Mohammed',
              },
            }),
          }}
        />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Additional Meta Tags for Better Indexing */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
