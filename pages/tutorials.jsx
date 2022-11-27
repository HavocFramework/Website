import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Main.module.css';

export default function HavocTutorials() {

    const [consent, setConsent] = useState(false);

    return <>
        <Head>
            <title>Tutorials | Havoc</title>
        </Head>
        <div className={styles.center}>
            <h1 className={styles.title}>Tutorials</h1>
            {consent ? <>
                <iframe
                    width="720"
                    height="400"
                    src="https://www.youtube.com/embed/a8ghTH_fT_o"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </> : <button className={styles.btn} onClick={() => setConsent(true)}>Allow third party content</button>}
        </div>
    </>
}
