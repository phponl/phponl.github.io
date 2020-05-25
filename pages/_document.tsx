import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}