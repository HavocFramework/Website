import Head from 'next/head';
import Link from 'next/link';
import { Check, Heart, Hearts, Plus, X } from 'tabler-icons-react';
import styles from '../styles/Main.module.css';
import pStyles from '../styles/Pricing.module.css';

export default function HavocProducts() {
    return <>
        <Head>
            <title>Products | Havoc</title>
        </Head>
        <div className={styles.center}>
            <h1 className={styles.title}>Products</h1>
            <p className={styles.subtitle}>comming soon</p>
        </div>
    </>

    return <>
        <Head>
            <title>Products | Havoc</title>
        </Head>
        <div className={styles.center}>
            <h1 className={styles.title}>Products</h1>
            <p className={styles.subtitle}>List of available plans</p>
            <section className={pStyles.plans}>
                <div className={pStyles.plan}>
                    <div className={pStyles.title}>
                        <p className={pStyles.name}>Havoc</p>
                        <h1 className={pStyles.price}>Free</h1>
                        <Link href="/download"><a className={pStyles.download}>Download</a></Link>
                    </div>
                    <ul className={pStyles.features}>
                        <li className={pStyles.feature}>
                            <Check /> <span>Open Source</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Check /> <span>Community support</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Check /> <span>Basic features</span>
                        </li>
                    </ul>
                </div>
                <div className={pStyles.plan}>
                    <div className={pStyles.title}>
                        <p className={pStyles.name}>Havoc X</p>
                        <h1 className={pStyles.price}>2000$<small>/user</small></h1>
                        <Link href="/download"><a className={pStyles.download}>Buy</a></Link>
                    </div>
                    <ul className={pStyles.features}>
                        <li className={pStyles.feature}>
                            <X stroke="var(--dracula-red)" /> <span>Open Source</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Check /> <span>Advanced Evasion Techniques</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Check /> <span>More Modules and Features</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Check /> <span>Advanced API documentation</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Check /> <span>1 year license</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Check /> <span>Priority Support</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Heart stroke="var(--dracula-pink)" /> <span>Supporter role <br/> <i>(Discord)</i></span>
                        </li>
                    </ul>
                </div>
                <div className={pStyles.plan}>
                    <div className={pStyles.title}>
                        <p className={pStyles.name}>Havoc X Renew</p>
                        <h1 className={pStyles.price}>1750$<small>/user</small></h1>
                        <Link href="/download"><a className={pStyles.download}>Buy</a></Link>
                    </div>
                    <ul className={pStyles.features}>
                        <li className={pStyles.feature}>
                            <Plus stroke="var(--dracula-purple)" /> <span>Everything from Havoc X</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Check /> <span>1 additional year license</span>
                        </li>
                        <li className={pStyles.feature}>
                            <Hearts stroke="var(--dracula-orange)" /> <span>Special supporter role <br/> <i>(Discord)</i></span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </>
}
