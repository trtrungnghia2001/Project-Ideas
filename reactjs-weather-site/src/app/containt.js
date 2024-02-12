import {
  MdDashboard,
  MdMap,
  MdLocationOn,
  MdCalendarMonth,
} from "react-icons/md";

export const menuLink = [
  {
    title: "dashboard",
    path: "",
    icon: <MdDashboard />,
  },
  {
    title: "map",
    path: "map",
    icon: <MdMap />,
  },
  {
    title: "saved location",
    path: "saved-location",
    icon: <MdLocationOn />,
  },
  {
    title: "calendar",
    path: "calendar",
    icon: <MdCalendarMonth />,
  },
];
