import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Sidebar,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Box, Typography, IconButton } from "@mui/material";
import { MdOutlineSwitchLeft, MdOutlineSwitchRight } from "react-icons/md";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useSidebar } from "./useSidebar";
import { menuList } from "../../../router/menuList";

const MyProSidebar = () => {
  const sidebarContext = useSidebar();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  const location = useLocation();

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-anchor": {
          color: "#fff",
          backgroundColor: "transparent !important",
        },
        "& .sub-menu-content": {
          color: "#fff",
          backgroundColor: "#045ea8 !important",
          border: collapsed ? "4px solid #0f74c6" : "",
        },
        "& .expand-icon": {
          marginTop: !collapsed ? "-8px" : "-4px",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarContext?.sidebarRTL}
        backgroundColor={"#045ea8"}
      >
        <Menu>
          <MenuItem
            icon={
              collapsed ? (
                <IconButton onClick={() => collapseSidebar()}>
                  <IoMenuSharp className="text-2xl text-[#fff]" />
                </IconButton>
              ) : sidebarContext?.sidebarRTL ? (
                <IconButton
                  onClick={() =>
                    sidebarContext?.setSidebarRTL(!sidebarContext?.sidebarRTL)
                  }
                >
                  <MdOutlineSwitchLeft className="text-2xl text-[#fff]" />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() =>
                    sidebarContext?.setSidebarRTL(!sidebarContext?.sidebarRTL)
                  }
                >
                  <MdOutlineSwitchRight className="text-2xl text-[#fff]" />
                </IconButton>
              )
            }
            style={{ cursor: "default" }}
            className={`mt-3 mb-5`}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <div className=" flex-1 text-center">
                  <Typography variant="h3" className="cursor-pointer">
                    IKN ID
                  </Typography>
                </div>
                <IconButton
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <IoClose className="text-2xl text-[#fff]" />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box
            paddingLeft={collapsed ? undefined : "10%"}
            paddingRight={collapsed ? undefined : "10%"}
          >
            {menuList.map((nav, idx) => {
              return nav.type === "dropdown" ? (
                <SubMenu
                  key={idx}
                  label={<Typography variant="h6">{nav.title}</Typography>}
                  icon={nav.icon}
                  className={`${
                    location.pathname.includes(nav.name) ? "bg-[#0f74c6]" : ""
                  } ${
                    !collapsed ? "rounded-sm" : ""
                  } transition-all duration-100`}
                >
                  {nav.children?.map((nav, idx) => (
                    <MenuItem
                      key={idx}
                      routerLink={<Link to={nav.route || ""} />}
                      className={`${
                        location.pathname === nav.route ? "bg-[#fff]" : ""
                      } group hover:bg-[#0f74c6] ${
                        !collapsed ? "rounded-sm" : ""
                      } ${!collapsed ? "mt-2" : ""}`}
                    >
                      <Typography
                        className={`${
                          location.pathname === nav.route
                            ? `text-[#045ea8]`
                            : ""
                        } group-hover:text-[#fff] rounded-sm`}
                        variant="h6"
                      >
                        {nav.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem
                  key={idx}
                  routerLink={<Link to={nav.route || ""} />}
                  icon={
                    <span
                      className={`${
                        location.pathname === nav.route ? ` text-[#045ea8]` : ""
                      } group-hover:text-[#fff]`}
                    >
                      {nav.icon}
                    </span>
                  }
                  className={`${
                    location.pathname === nav.route ? `bg-[#fff]` : ""
                  } group hover:bg-[#0f74c6] ${
                    !collapsed ? "rounded-sm" : ""
                  } transition-all duration-300 mb-2`}
                >
                  <Typography
                    className={`${
                      location.pathname === nav.route ? `text-[#045ea8]` : ""
                    } group-hover:text-[#fff]`}
                    variant="h6"
                  >
                    {nav.title}
                  </Typography>
                </MenuItem>
              );
            })}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
