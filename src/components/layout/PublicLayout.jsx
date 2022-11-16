import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../../utils/theme";
import { Categories } from "../categories/Categories";
import { Footer } from "../footer/Footer";
import NavbarPapepilito from "../navbar/Navbar";

export const PublicLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarPapepilito />
      <Categories />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
