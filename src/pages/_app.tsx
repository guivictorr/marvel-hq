import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import ModalProvider from '../context/modalContext';
import SelectedComicsProvider from '../context/selectedComicsContext';
import GlobalStyles from '../styles/global';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SelectedComicsProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </SelectedComicsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
