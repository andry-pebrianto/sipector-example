import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "../hooks/useTheme";
import { MyProSidebarProvider } from "../components/global/sidebar/useSidebarContext";
import Topbar from "../components/global/Topbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Suspense fallback={<h1>LOOO</h1>}>
                <Outlet />
              </Suspense>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
