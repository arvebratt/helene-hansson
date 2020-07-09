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
  background: '#FAFAF2',
  text: '#414042',
  accent1: '#ffe5d9',
  accent2: '#ffcad4',
  accent3: '#f4acb7',
  accent4: '#9d8189',
  accent5: '#d8e2dc',
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
