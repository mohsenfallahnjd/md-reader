import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HelmetMetaTagsProps {}

// eslint-disable-next-line require-jsdoc
export const HelmetMetaTags: React.FC<HelmetMetaTagsProps> = () => (
    <Helmet
        titleTemplate="MySite.com - %s"
        defaultTitle="My Default Title"
        defer={ false }
    >
        {/* html attributes */}
        <html lang="en" />

        {/* title attributes and value */}
        <title itemProp="name" lang="en">
            My Plain Title or
            {' '}
            dynamic
            {' '}
            title
        </title>

        {/* base element */}
        <base target="_blank" href={ window.location.href } />

        {/* multiple meta elements */}
        <meta name="description" content="Helmet application" />
        <meta property="og:type" content="article" />

        {/* multiple link elements */}
        <link rel="canonical" href={ window.location.href } />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="logo512.png" />
    </Helmet>
);
