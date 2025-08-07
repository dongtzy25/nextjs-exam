import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [<>{initialProps.styles}</>, sheet.getStyleElement()],
    };
  }
  render() {
    return (
      <Html>
        <Head>{/* Other head elements */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
