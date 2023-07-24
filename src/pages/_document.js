import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en" data-theme="emerald">
      <Head>{CssBaseline.flush()}</Head>
         <body>
           <Main />
           <NextScript />
         </body>
      </Html>
  )
}

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return {
//       ...initialProps,
//       styles: React.Children.toArray([initialProps.styles])
//     };
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>{CssBaseline.flush()}</Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
