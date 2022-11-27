import Head from 'next/head';
import styles from '../styles/Main.module.css';

export default function HavocNotFound() {
    return <>
        <Head>
            <title>Not Found | Havoc</title>
        </Head>
        <div className={styles.center}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>This page could not be found</p>
        </div>
    </>
}
