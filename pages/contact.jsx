import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Main.module.css';

export default function HavocContact() {
    return <>
        <Head>
            <title>Contact | Havoc</title>
        </Head>
        <div className={styles.center}>
            <h1 className={styles.title}>Contact</h1>
            <p className={styles.subtitle}>Contact Me:</p>
            <ul className={styles.contact}>
                <li>
                    Twitter: <Link href="https://twitter.com/C5pider">https://twitter.com/C5pider</Link>
                </li>
                <li>
                    E-Mail: <Link href="mailto:havocframework@protonmail.com">havocframework@protonmail.com</Link>
                </li>
                <li>
                    Discord: <Link href="https://discord.gg/9DPTsnrdS5">https://discord.gg/9DPTsnrdS5</Link>
                </li>
            </ul>
        </div>
    </>
}
