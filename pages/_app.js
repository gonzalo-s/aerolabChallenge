import { createGlobalStyle } from "styled-components";
import { AppContextProvider } from "../components/context";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}

html,body {
    padding: 0;
    margin: 0 auto;
    width:100%;
    font-family: 'Montserrat', sans-serif;
    font-size:16px;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
