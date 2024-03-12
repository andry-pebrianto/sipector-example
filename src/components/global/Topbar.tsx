import { useContext } from "react";
import { useProSidebar } from "react-pro-sidebar";
import { useTheme, Box, IconButton, Typography } from "@mui/material";
import { IoMenuSharp, IoNotifications } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ColorModeContext } from "../../hooks/useTheme";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { toggleSidebar, broken, rtl } = useProSidebar();

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" alignItems={"center"}>
        {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <IoMenuSharp />
          </IconButton>
        )}
        <Typography variant="h5" fontStyle={"italic"}>
          PT Solusi Integrasi Pratama
        </Typography>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <MdLightMode /> : <MdDarkMode />}
        </IconButton>
        <IconButton>
          <IoNotifications />
        </IconButton>
        {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <IoMenuSharp />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
