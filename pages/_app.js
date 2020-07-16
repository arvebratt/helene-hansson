import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
html { /* body won't work ¯\_(ツ)_/¯ */
scroll-behavior: smooth;
scroll-snap-type: y proximity;

}
  body {
    margin: 0;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  }
`;

const theme = {
  background: '#EDEAE5',
  text: '#2F3640',
  accent1: 'linear-gradient(195deg, #fdfcfb 0%,#e2d1c3 50%, #e2d1c3 100%);#e2d1c3',
  accent2: '#e2d1c3',
  accent3: 'linear-gradient(15deg, #fdfcfb 0%,#e2d1c3 50%, #e2d1c3 100%);#e2d1c3',
  accent4: '#2E3F7F',
  accent5: '#404040',
  colors: {
    primary: '#0070f3',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    );
  }
}
