import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import parseMD from 'parse-md';
import { glob } from 'glob';
import { readFileSync } from 'node:fs';

export default function HavocDoc({infos}) {

    const router = useRouter();

    useEffect(() => {
        router.replace(infos[0].path);
    }, []);

    return <>
        <Head>
            <title>Index | Havoc Documentation</title>
        </Head>
    </>
}

export function getStaticProps(context) {
    let files = glob.sync(`./docs/**/*.md`);
    let infos = [];
    for(let i = 0; i < files.length; i++) {
        let mdFile = readFileSync(files[i], 'utf8');
        let { metadata } = parseMD(mdFile);
        let title = metadata?.title;
        let name = files[i].split('. ');
        name.shift();
        name = name.join('').replace('.md', '');
        let path = ('/docs/' + name.replace('.', '/').replace('/index', '')).toLowerCase();
        if(!title) {
            let parts = name.split('/');
            title = parts[parts.length - 1];
        }
        infos.push({path, title});
    }

    return {
        props: {infos}
    }
}
