import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../scss/home.scss';
import { MarkdownEditor } from '../components/Markdown';

/**
 * Home jsx
 */
export const Home: React.FC = () => {
    const [markdown, setMarkdown] = React.useState('Hello, **world**!');

    /**
     * Handle input fields
     * 
     * @param {string} e - textarea input
     */
    const onChangeInput: Function = (e: string) => setMarkdown(e);

    return (
        <div className="m-home">
            <Helmet>
                <title>Home</title>
                <link rel="canonical" href={ window.location.href } />
            </Helmet>

            <MarkdownEditor onChangeInput={ onChangeInput } />

            <h3>Output</h3>
            {/* eslint-disable-next-line react/no-children-prop */}
            <ReactMarkdown children={ markdown } remarkPlugins={ [remarkGfm] } />
        </div>
    );
};
