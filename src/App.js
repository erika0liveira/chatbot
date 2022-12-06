import React from "react";
import { Company } from "./MockedCompany";
import { Bot } from "./Bot";
import { ThemeProvider } from "@mui/material";
import { CustomTheme } from "./theme/CustomTheme";

function App() {
  const theme = CustomTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Bot />
        <Company />
      </ThemeProvider>
    </>
  );
}

export default App;
