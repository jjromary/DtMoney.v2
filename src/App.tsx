import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/global";
import { defaultTheme } from "./Styles/Themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Hello, Romary</h1>
    </ThemeProvider>
  )
}

