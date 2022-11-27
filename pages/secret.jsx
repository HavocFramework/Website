import Head from 'next/head';
import styles from '../styles/Main.module.css';

export default function HavocHome() {
    return <>
        <Head>
            <title>Havoc</title>
        </Head>
        <div className={styles.center}>
            <p className={styles.subtitle}>Nope, thats not the hidden secret. That would be waaay to easy to find.</p>
        </div>
    </>
}
