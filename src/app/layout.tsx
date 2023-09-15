"use client";
import { Inter } from "next/font/google";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Grid container md={12} justifyContent="center">
            <Grid item justifyContent="center" alignItems="center">
              <Header />
            </Grid>
            <Grid item md={12} justifyContent="center" alignItems="center">{children}</Grid>
          </Grid>
        </ThemeProvider>
      </body>
    </html>
  );
}
