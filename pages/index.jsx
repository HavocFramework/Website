import Head from 'next/head';
import Logo from '../components/Logo';
import styles from '../styles/Main.module.css';

export default function HavocHome() {
    return <>
        <Head>
            <title>Havoc</title>
        </Head>
        <div className={styles.center}>
            <Logo className={styles.logo} />
            <h1 className={styles.title}>Havoc</h1>
            <p className={styles.subtitle}>Havoc is a modern and malleable post-exploitation command and control framework</p>
            <img className={styles.previewImage} src="/images/preview.webp" alt="Preview" />
        </div>
    </>
}
