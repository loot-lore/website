import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { WalletProvider } from "./hooks/wallet-context";
import { CreateEntry, Home } from "./pages";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <WalletProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-entry" element={<CreateEntry />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </WalletProvider>
  );
};

export default App;
