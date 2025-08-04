import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Ismail Mohammed - Full Stack Engineer"
        />
        <meta
          itemProp="description"
          content="Ismail Mohammed - Full Stack Engineer"
        />
        <meta
          itemProp="image"
          content="https://avatars.githubusercontent.com/u/37075892?s=400&u=1c08ffa3d87fcac23644913694801ff1792f351f&v=4"
        />
        <meta name="og:title" content="Ismail M - Full Stack Engineer" />
        <meta
          name="og:description"
          content="Ismail Mohammed - Full Stack Engineer"
        />
        <meta
          name="og:image"
          content="https://avatars.githubusercontent.com/u/37075892?s=400&u=1c08ffa3d87fcac23644913694801ff1792f351f&v=4"
        />
        <meta name="og:url" content="https://ismailmmd.github.io/" />
        <meta name="og:site_name" content="IsmailMmd" />
        <meta name="og:type" content="website" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
