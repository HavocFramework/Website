import Head from 'next/head';
import glob from 'glob';
import parseMD from 'parse-md';
import MarkdownBlock from '../../components/MarkdownBlock';
import TableOfContents from '../../components/TableOfContents';
import PageList from '../../components/PageList';
import { existsSync, readFileSync } from 'node:fs';

import styles from '../../styles/Main.module.css';

export default function HavocDoc({nf, metadata, content, infos}) {

    if(nf) {
        return <>
            <Head>
                <title>Document not Found | Havoc Documentation</title>
            </Head>
            <div className={styles.content}>
                <p className={styles.subtitle}>Document not found</p>
            </div>
        </>
    }

    return <>
        <Head>
            <title>{`${metadata?.title || metadata?.filename || 'Untitled Document'} | Havoc Documentation`}</title>
        </Head>
        <PageList list={infos} />
        <div className={styles.content}>
            {metadata?.title ? <h1 className={styles.title}>{metadata.title}</h1> : <></>}
            {metadata?.description ? <p className={styles.subtitle}>{metadata.description}</p> : <></>}
            <section className={styles.markdown} id="markdown">
                <MarkdownBlock markdown={content} />
            </section>
        </div>
        <TableOfContents markdown={content} />
    </>
}

export function getStaticPaths() {
    let files = glob.sync(`./docs/**/*.md`);
    let paths = files.map(f => {
        let name = f.split('. ');
        name.shift();
        name = name.join('').replace('.md', '').toLowerCase();
        let doc = name.replace('./docs/', '').replace('.md', '').split(' ').join('_').split('/');
        if(doc[doc.length - 1] === 'index') {
            doc.pop();
        }
        return {params: {doc}};
    });
    return {paths, fallback: false};
}

export function getStaticProps(context) {

    let files = glob.sync(`./docs/**/*.md`);
    files.sort((a, b) => {
        let av = Number(a.replace('/docs/', '').split('. ')[0].replace('.', ''));
        let bv = Number(b.replace('/docs/', '').split('. ')[0].replace('.', ''));
        return av - bv;
    });

    let doc = files.map(f => ({
        name: f,
        id: f.toLowerCase().split(' ').join('_')
    })).find(f => {
        let idf = context.params['doc'].join('/') || f.id;
        return f.id.endsWith(idf) || f.id.includes(idf);
    }).name;
    let mdFile;
    if(existsSync(doc)) {
        mdFile = readFileSync(doc, 'utf8');
    } else if(existsSync(`${doc}/index.md`)) {
        mdFile = readFileSync(`${doc}/index.md`, 'utf8');
    } else {
        return {props: {nf: true}};
    }

    let { metadata, content } = parseMD(mdFile);
    metadata.filename = doc.split('/').pop();

    let infos = [];
    for(let i = 0; i < files.length; i++) {
        let mdFile = readFileSync(files[i], 'utf8');
        let { metadata } = parseMD(mdFile);
        let title = metadata?.title;
        let name = files[i].split('. ');
        name.shift();
        name = name.join('').replace('.md', '');
        let path = name.toLowerCase().split(' ').join('_').replace('.', '').replace('/index', '');
        if(!title) {
            let parts = name.split('/');
            title = parts[parts.length - 1];
        }
        if(path === '/docs') {
            path += '/main';
        }
        infos.push({path, title});
    }

    infos.sort((a, b) => a.path === '/docs/main' ? -1 : b.path === '/docs/main' ? 1 : 0);

    return {
        props: {infos, metadata, content}
    }
}
