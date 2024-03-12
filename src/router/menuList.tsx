import { MdDashboard } from "react-icons/md";
import { BsDatabaseFillGear } from "react-icons/bs";

export interface IMenus {
  name: string;
  title: string;
  type: "link" | "dropdown";
  route?: string;
  icon?: JSX.Element;
  children?: IMenus[];
}

export const menuList: IMenus[] = [
  {
    name: "dashboard",
    title: "Dashboard",
    type: "link",
    route: "/dashboard",
    icon: <MdDashboard className="text-xl mb-1" />,
  },
  {
    name: "backoffice",
    title: "Back Office",
    type: "dropdown",
    icon: <BsDatabaseFillGear className="text-xl mb-1" />,
    children: [
      {
        name: "city",
        title: "City",
        type: "link",
        route: "/backoffice/city",
      },
      {
        name: "country",
        title: "Country",
        type: "link",
        route: "/backoffice/country",
      },
      {
        name: "global",
        title: "Global",
        type: "link",
        route: "/backoffice/global",
      },
    ],
  },
];
