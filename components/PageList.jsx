import Link from 'next/link';

import styles from '../styles/Main.module.css';

export default function PageList({list}) {
	return <section className={[styles.sideList, styles.pageList].join(' ')}>
        <h2 className={styles.title}>Documentation</h2>
        <ul className={styles.list}>
            {list.map(page => (
				<li key={page.title} className={[
                    styles.item,
                    styles[`depth-${page.path.split('/').length}`],
                    typeof window !== 'undefined' && window.location.pathname === page.path ? styles.active : undefined,
                ].join(' ')}>
                    <Link href={page.path}>{page.title}</Link>
                </li>
			))}
        </ul>
    </section>;
};
