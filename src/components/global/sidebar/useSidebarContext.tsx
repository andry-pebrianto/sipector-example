import {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import MyProSidebar from "./MyProSidebar";

interface SidebarContextType {
  sidebarRTL: boolean;
  setSidebarRTL: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const MyProSidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarRTL, setSidebarRTL] = useState(false);

  return (
    <ProSidebarProvider>
      <SidebarContext.Provider
        value={{
          sidebarRTL,
          setSidebarRTL,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: sidebarRTL ? "row-reverse" : "row",
          }}
          className="clean"
        >
          <MyProSidebar />
          {children}
        </div>
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
