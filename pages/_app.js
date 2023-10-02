import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apolio";

import { ThemeProvider } from "styled-components";

import theme from "../styles/theme/Theme";
import GlobalStyle from "../styles/global/Golbal";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
