// app/layout.tsx
"use client";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import theme from "../theme"; // นำเข้าธีมที่สร้างขึ้น

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
