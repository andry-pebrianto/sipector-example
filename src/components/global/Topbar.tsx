import { useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { IoMenuSharp, IoNotifications } from "react-icons/io5";

const Topbar = () => {
  const { toggleSidebar, broken, rtl } = useProSidebar();

  return (
    <Box display="flex" justifyContent="space-between" p={2} bgcolor={"#fff"}>
      <Box display="flex" alignItems={"center"} gap={1}>
        {broken && !rtl && (
          <IconButton onClick={() => toggleSidebar()}>
            <IoMenuSharp className="text-2xl" />
          </IconButton>
        )}
        <Typography variant="h5" fontWeight={"bold"}>
          PT Solusi Integrasi Pratama
        </Typography>
      </Box>

      <Box display="flex">
        <IconButton>
          <IoNotifications className="text-2xl" />
        </IconButton>
        {broken && rtl && (
          <IconButton onClick={() => toggleSidebar()}>
            <IoMenuSharp className="text-2xl" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
