import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function HavocFooter({className}) {
    return <footer className={`${styles.footer}${className ? ` ${className}` : ''}`}>
        <div className={styles.left}>
            Havoc by <a href="https://5pider.net">C5pider</a>
        </div>
        <div className={styles.right}>
            made with 🍵 by <a href="https://pandaaa.dev" rel="noreferrer" target="_blank">Pandaaa</a>
        </div>
    </footer>;
}
