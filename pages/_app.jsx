import Head from 'next/head';
import { CSSReset } from "../src/components/CSSReset";
import { ThemeProvider } from 'styled-components';
// import { useState } from 'react';

const theme = {
    light: {
        backgroundBase: '#f9f9f9',
        backgroundLevel1: '#ffffff',
        backgroundLevel2: '#f0f0f0',
        borderBase: '#e5e5e5',
        textColorBase: '#222222'
    },
    dark: {
        backgroundBase: '#181818',
        backgroundLevel1: '#202020',
        backgroundLevel2: '#313131',
        borderBase: '#383838',
        textColorBase: '#ffffff'
    }
};

function MyApp({ Component, pageProps }) {
    // const [theme, setTheme] = useState(true);

    return (
        <ThemeProvider theme={theme.light}>
            <Head>
                <title>AluraTube</title>
                <meta property="og:image" content="/og-image.png" />
            </Head>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider >
    );
}

export default MyApp;