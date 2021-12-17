import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (<Html>
            <Head>
                <link rel="stylesheet" type="text/css" href="/index.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>)
    }
}

export default MyDocument;