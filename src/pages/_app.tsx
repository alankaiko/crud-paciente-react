import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

export default function App({Component, pageProps}: AppProps) {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
