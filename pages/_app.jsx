import Head from 'next/head';
import { CSSReset } from "../src/components/CSSReset";
import { ThemeProvider } from 'styled-components';
import ColorModeProvider, { ColorModeContext } from '../src/components/Menu/components/ColorMode';
import { useContext } from 'react';
import { RegisterVideo } from '../src/components/RegisterVideo';

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

function ProviderWrapper({ children }) {
    return (
        <ColorModeProvider initialMode={'dark'}>
            {children}
        </ColorModeProvider>
    );
}

function MyApp({ Component, pageProps }) {
    const context = useContext(ColorModeContext);

    return (
        <ThemeProvider theme={theme[context.mode]}>
            <Head>
                <title>AluraTube</title>
                <meta property="og:image" content="/og-image.png" />
            </Head>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
        </ThemeProvider >
    );
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    );
};