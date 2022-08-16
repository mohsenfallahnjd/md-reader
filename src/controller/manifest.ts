export default {
    name            : 'The Markdown reader',
    short_name      : 'MD reader',
    description     : 'The markdown reader with react.js',
    scope           : '.',
    orientation     : 'any',
    background_color: '#ffffff',
    theme_color     : '#0000ff',
    start_url       : '.',
    display         : 'standalone',
    dir             : 'ltr',
    lang            : 'en',
    categories      : ['markdown'],
    icons           : [
        {
            src  : 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type : 'image/x-icon',
        },
        {
            src  : 'logo192.png',
            type : 'image/png',
            sizes: '192x192',
        },
        {
            src  : 'logo512.png',
            type : 'image/png',
            sizes: '512x512',
        },
    ],
};
