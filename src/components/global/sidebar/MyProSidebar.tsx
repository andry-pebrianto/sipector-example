import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Sidebar,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import {
  MdLocalPostOffice,
  MdPieChart,
  MdOutlineSwitchLeft,
  MdOutlineSwitchRight,
} from "react-icons/md";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { tokens } from "../../../hooks/useTheme";
import { useSidebarContext } from "./useSidebarContext";

export interface IMenus {
  name: string;
  title: string;
  type: "link" | "dropdown";
  route?: string;
  icon?: JSX.Element;
  children?: IMenus[];
}

export const menus: IMenus[] = [
  {
    name: "page1",
    title: "Page 1",
    type: "link",
    route: "/page1",
    icon: <MdPieChart className="text-xl" />,
  },
  {
    name: "page2&3",
    title: "Page 2 & 3",
    type: "dropdown",
    icon: <MdLocalPostOffice className="text-xl" />,
    children: [
      {
        name: "page2",
        title: "Page 2",
        type: "link",
        route: "/page1/page2",
      },
      {
        name: "page3",
        title: "Page 3",
        type: "link",
        route: "/page1/page2/page3",
      },
    ],
  },
  {
    name: "page4&5",
    title: "Page 4 & 5",
    type: "dropdown",
    icon: <MdLocalPostOffice className="text-xl" />,
    children: [
      {
        name: "page4",
        title: "Page 4",
        type: "link",
        route: "/page1/page2/page3/page4",
      },
      {
        name: "page5",
        title: "Page 5",
        type: "link",
        route: "/page1/page2/page3/page4/page5",
      },
    ],
  },
];

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const sidebarC = useSidebarContext();
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
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .sub-menu-content": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarC?.sidebarRTL}
        backgroundColor={colors.primary[400]}
      >
        <Menu>
          <MenuItem
            icon={
              collapsed ? (
                <IoMenuSharp onClick={() => collapseSidebar()} />
              ) : sidebarC?.sidebarRTL ? (
                <MdOutlineSwitchLeft
                  onClick={() => sidebarC?.setSidebarRTL(!sidebarC?.sidebarRTL)}
                />
              ) : (
                <MdOutlineSwitchRight
                  onClick={() => sidebarC?.setSidebarRTL(!sidebarC?.sidebarRTL)}
                />
              )
            }
            className={`mt-[10px] mb-[20px] color-[${colors.grey[100]}]`}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  AAABBB
                </Typography>
                <IconButton
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <IoClose />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            {menus.map((nav, idx) => {
              return nav.type === "dropdown" ? (
                <SubMenu key={idx} label={nav.title} icon={nav.icon}>
                  {nav.children?.map((nav, idx) => (
                    <MenuItem
                      key={idx}
                      routerLink={<Link to={nav.route || ""} />}
                      active={location.pathname === nav.route ? true : false}
                      icon={nav.icon}
                    >
                      <Typography>{nav.title}</Typography>
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem
                  key={idx}
                  routerLink={<Link to={nav.route || ""} />}
                  active={location.pathname === nav.route ? true : false}
                  icon={nav.icon}
                >
                  <Typography>{nav.title}</Typography>
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
