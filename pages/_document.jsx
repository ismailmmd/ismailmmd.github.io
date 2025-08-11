import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.ismailm.xyz/" />

        {/* Enhanced SEO Meta Tags */}
        <meta
          name="description"
          content="Ismail Mohammed - Full Stack Engineer specializing in microservices, and backend development."
        />
        <meta
          name="keywords"
          content="Full Stack Engineer, Backend Developer, Java, TypeScript, Microservices, Kafka, Node.js, AWS, Tallinn, Estonia, Software Engineer"
        />
        <meta name="author" content="Ismail Mohammed" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Ismail Mohammed - Full Stack Engineer | Java, TypeScript, Microservices, Backend Development"
        />
        <meta
          property="og:description"
          content="Full Stack Engineer specializing in Java, TypeScript, microservices, and backend development. Experience with Kafka, Node.js, AWS, and scalable systems."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/37075892?s=400&u=1c08ffa3d87fcac23644913694801ff1792f351f&v=4"
        />
        <meta property="og:url" content="https://www.ismailm.xyz/" />
        <meta property="og:site_name" content="Ismail Mohammed" />
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
          content="Full Stack Engineer specializing in TypeScript, microservices, and backend development."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/37075892?s=400&u=1c08ffa3d87fcac23644913694801ff1792f351f&v=4"
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
              image:
                'https://avatars.githubusercontent.com/u/37075892?s=400&u=1c08ffa3d87fcac23644913694801ff1792f351f&v=4',
              sameAs: [
                'https://github.com/ismailmmd',
                'https://www.linkedin.com/in/ismailmmd',
                'https://twitter.com/@ismail5701',
              ],
              jobTitle: 'Full Stack Engineer',
              description:
                'Full Stack Engineer specializing in TypeScript, microservices, and backend development',
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

        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />

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
