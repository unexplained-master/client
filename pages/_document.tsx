import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(context: DocumentContext) {
        const initialProps = await Document.getInitialProps(context)
        return { ...initialProps }
    }

    render() {
        return (
            <Html className="dark">
                <Head>
                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/thinline.css" />
                </Head>
                <body className="dark:bg-gray-800">
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
