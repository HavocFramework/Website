import { useState, useEffect, useRef } from 'react';
import calculateHash from '../scripts/calculateHash';

import styles from '../styles/Main.module.css';

export default function TableOfContents({markdown}) {

	const itemOffsets = useRef([]);
	const [ activeID, setActiveID ] = useState('');

	let isInComment = false;
	let isComment = [];

	const headings = markdown
	.split('\n')
	.map(v => {
		if(v.includes('```')) {
			isInComment = !isInComment;
		}
		isComment.push(isInComment);
		return v;
	})
	.filter((v, i) => !isComment[i])
	.filter((l) => l.startsWith('#'))
	.map(l => {
		let parts = l.split(' ');
		let depth = parts.shift().length;
		let text = parts.join(' ').replace(/<[^>]*>?/gm, '').replace('\r', '');
		if(text.includes('. ')) {
			text = text.split('. ');
			text.shift();
			text = text.join('');
		}
		text = text.replaceAll('`', '');
		return { depth, text, id: calculateHash(text)};
	});

	useEffect(() => {
		const getItemOffsets = () => {
			const titles = document.querySelectorAll('section#markdown :is(h1, h2, h3, h4)');
			itemOffsets.current = Array.from(titles).map((title) => ({
				id: title.id,
				top: (title.getBoundingClientRect().top + window.scrollY) - (64 + 16),
			}));
		};

		const changeActiveItem = () => {
			let index = itemOffsets.current.findIndex(i => i.top > window.scrollY) - 1;
			if(index === -2) {
				index = itemOffsets.current.length - 1;
			}
			let item = itemOffsets.current[index] || itemOffsets.current[0];
			setActiveID(item.id);
		}

		getItemOffsets();
		changeActiveItem();

		window.addEventListener('resize', getItemOffsets);
		window.addEventListener('scroll', changeActiveItem);

		return () => {
			window.removeEventListener('resize', getItemOffsets);
			window.removeEventListener('scroll', changeActiveItem);
		};
	}, [typeof window !== 'undefined' ? window?.location.pathname : undefined]);

	return <section className={[styles.sideList, styles.contentList].join(' ')}>
        <h2 className={styles.title}>On this page</h2>
        <ul className={styles.list}>
            {headings.map((heading, i) => (
				<li key={heading.id} className={[
					styles.item,
					styles[`depth-${heading.depth}`],
					activeID === heading.id ? styles.active : undefined,
				].join(' ').trim()} onClick={(e) => {
					e.preventDefault();
					let item = itemOffsets.current[i];
					window.scrollTo({top: item?.top});
					setActiveID(item.id);
				}}>{heading.text}</li>
			))}
        </ul>
    </section>;
    
};
