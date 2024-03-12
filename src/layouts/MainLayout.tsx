import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { MyProSidebarProvider } from "../components/global/sidebar/useSidebar";
import Topbar from "../components/global/Topbar";
import { useTheme } from "../hooks/useTheme";

export default function MainLayout() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <MyProSidebarProvider>
        <div className="w-full h-screen bg-[#ECECEC] overflow-auto">
          <main>
            <Topbar />
            <Suspense fallback={<h1>Loading...</h1>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </MyProSidebarProvider>
    </ThemeProvider>
  );
}
