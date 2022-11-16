import { ThemeProvider } from "styled-components";
import { Transaction } from "./Pages/Transactions";
import { GlobalStyles } from "./Styles/global";
import { defaultTheme } from "./Styles/Themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transaction />
    </ThemeProvider>
  )
}

