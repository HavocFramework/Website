import Link from 'next/link';
import Logo from './Logo';
import styles from '../styles/Header.module.css';
import { Menu2 } from 'tabler-icons-react';
import { useState } from 'react';

export default function HavocHeader() {

    const [showMenu, setShowMenu] = useState(false);    

    return <header className={styles.navbar}>
        <Link href="/">
            <a className={styles.brand}>
                <Logo className={styles.logo} size={42} />
                <h1 className={styles.name}>Havoc</h1>
            </a>
        </Link>

        <div className={styles.links + (showMenu ? ` ${styles.show}` : '')}>
            <Link href="/download">
                <a className={styles.link}>Download</a>
            </Link>
            <Link href="/products">
                <a className={styles.link}>Products</a>
            </Link>
            <Link href="/tutorials">
                <a className={styles.link}>Tutorials</a>
            </Link>
            <Link href="/docs">
                <a className={styles.link}>Documentation</a>
            </Link>
            <Link href="/contact">
                <a className={styles.link}>Contact</a>
            </Link>
        </div>

        <div className={styles.linkBtn} onClick={() => setShowMenu(v => !v)}>
            <Menu2 size={42} />
        </div>
    </header>;
}
