"use client";
import { Inter } from "next/font/google";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={lightTheme}>
          <Grid container>
            <Grid item>{children}</Grid>
          </Grid>
        </ThemeProvider>
      </body>
    </html>
  );
}
