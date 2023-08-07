import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="The Department of Commerce" />
          <meta property="og:description"
            content="The Department of Commerce fosters economic growth, innovation, and job
            creation through promoting trade, technology advancement, and data-driven policies." />
          <meta property="og:image" content="https://imgs.milklegend.xyz/dept_commerce-256x256.png" />
          <meta property="og:url" content="https://doc.milklegend.xyz" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="The Department of Commerce" />
          <meta property="og:locale" content="en_US" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="The Department of Commerce" />
          <meta property="twitter:description"
            content="The Department of Commerce fosters economic growth, innovation, and job
            creation through promoting trade, technology advancement, and data-driven policies." />
          <meta property="twitter:image" content="https://imgs.milklegend.xyz/dept_commerce.png" />
          <meta property="twitter:image:alt" content="The Department of Commerce" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}