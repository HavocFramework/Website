import { createElement } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import codeTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import calculateHash from '../scripts/calculateHash';
  
function HeadingRenderer(props) {
    let content = props.children;
    if(Array.isArray(props.children) && props.children.find(c => typeof c === 'string' ? c.includes('. ') : null)) {
        content = content.join('');
        content = content.split('. ');
        content.shift();
    }
    return createElement(`h${props.level}`, {
        id: calculateHash(content)
    }, content);
}

export default function CodeBlock({markdown}) {
    return <ReactMarkdown
        children={markdown}
        skipHtml
        remarkPlugins={[remarkGfm]}
        components={{
            code({node, inline, className, children, ...props}) {
                const code = String(children);
                const match = /language-(\w+)/.exec(className || '');

                if(code.includes('\n')) {
                    return <SyntaxHighlighter
                        children={code}
                        style={codeTheme}
                        useInlineStyles={inline}
                        language={match?.length > 0 ? match[1] : 'bash'}
                        {...props}
                    />;
                }
                return <code className={['default', className].join(' ')} {...props}>{children}</code>;
            },
            h1: HeadingRenderer,
            h2: HeadingRenderer,
            h3: HeadingRenderer,
            h4: HeadingRenderer,
        }}
    />;
}
