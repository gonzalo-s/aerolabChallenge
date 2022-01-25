import { createGlobalStyle } from "styled-components";
import { AppContextProvider } from "../components/context";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Montserrat';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;900&display=swap')
    
}
html,body {
    
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}

export default MyApp;
