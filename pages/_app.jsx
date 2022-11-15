import Head from 'next/head';
import { CSSReset } from "../src/components/CSSReset";
import { ThemeProvider } from 'styled-components';
import ColorModeProvider, { ColorModeContext } from '../src/components/Menu/components/ColorMode';
import { useContext } from 'react';
import { RegisterVideo } from '../src/components/RegisterVideo';
import { theme } from '../src/common/themes';

function ProviderWrapper({ children }) {
    return (
        <ColorModeProvider initialMode={'dark'}>
            {children}
        </ColorModeProvider>
    );
};

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