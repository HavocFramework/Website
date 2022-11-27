import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Havoc({ Component, pageProps }) {

    const router = useRouter();

    return <>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
            <meta name="theme-color" content="#7289DA" />
            <meta property="og:title" content="Havoc" />
            <meta property="og:description" content="Havoc is a modern and malleable post-exploitation command and control framework" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="/images/preview.webp" />
        </Head>
        <Header />
        <main>
            <Component {...pageProps} />
        </main>
        {/* {router.pathname.startsWith('/docs') ? <></> : <Footer />} */}
        <Footer />
    </>
}

export default Havoc;
