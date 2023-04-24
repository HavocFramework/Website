import Head from 'next/head';
import styles from '../styles/Main.module.css';

export default function HavocDownload() {
    return <>
        <Head>
            <title>Havoc</title>
            <meta http-equiv="refresh" content="0; url='https://github.com/HavocFramework/Havoc'" />
        </Head>
        <div className={styles.center}>
            <p className={styles.subtitle}>Redirecting...</p>
        </div>
    </>
}
