import { Suspense, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { MdAllInclusive, MdLocalPostOffice, MdPieChart } from "react-icons/md";
import { Transition } from "@headlessui/react";

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
        route: "page1/page2",
      },
      {
        name: "page3",
        title: "Page 3",
        type: "link",
        route: "page1/page2/page3",
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
        route: "page1/page2/page3/page4",
      },
      {
        name: "page5",
        title: "Page 5",
        type: "link",
        route: "page1/page2/page3/page4/page5",
      },
    ],
  },
];

const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MainLayout() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open sidebar"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MdAllInclusive />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SIPECTOR
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <MdAllInclusive />
            ) : (
              <MdAllInclusive />
            )}
          </IconButton>
        </DrawerHeader>
        <Sidebar onClick={handleDrawerOpen} collapsed={!open} width="100">
          <Menu>
            {menus.map((nav, idx: number) => {
              return nav.type === "dropdown" ? (
                <SubMenu
                  key={idx}
                  label={
                    <div className="flex items-center gap-2">
                      <span>{nav.icon}</span>
                      {open && <span>{nav.title}</span>}
                    </div>
                  }
                >
                  <Transition
                    show={open}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    {nav.children?.map((nav, idx) => (
                      <MenuItem component={<Link to={nav.route || ""} />}>
                        {nav.title}
                      </MenuItem>
                    ))}
                  </Transition>
                </SubMenu>
              ) : (
                <MenuItem key={idx}>{nav.icon}</MenuItem>
              );
            })}
          </Menu>
        </Sidebar>
        ;
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Suspense fallback={<h1>LOOO</h1>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
}
