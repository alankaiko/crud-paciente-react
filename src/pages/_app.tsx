import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

export default function App({Component, pageProps}: AppProps) {
    const lightTheme = createTheme({
        palette: {
            mode: "light",
        },
    });

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
