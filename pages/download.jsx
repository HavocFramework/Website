import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Main.module.css';

export default function HavocDownload() {

    const [stillHere, setStillHere] = useState('redirecting...');

    let id = 0;
    useEffect(() => {

        let change = setInterval(() => {
            id++;

            setStillHere((() => {
                if(id === 1) {
                    return 'Oh, still here?';
                }
                if(id === 3) {
                    return 'I guess you found a secret.';
                }
                if(id === 5) {
                    return 'Yes, really!';
                }
                if(id > 6) {
                    return <>Come, check out my Website: <Link href="https://pandaaa.dev">pandaaa.dev</Link> :)</>;
                }
            })());
        }, 2500);

        return () => {
            clearInterval(change);
        }
    }, []);

    return <>
        <Head>
            <title>Havoc</title>
            <meta http-equiv="refresh" content="0; url='https://github.com/HavocFramework/Havoc'" />
        </Head>
        <div className={styles.center}>
            <h1 className={styles.title}>Download</h1>
            <p className={styles.subtitle}>{stillHere}</p>
        </div>
    </>
}
