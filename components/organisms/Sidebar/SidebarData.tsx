import * as FaIcons from "react-icons/fa";

// Data menu sidebar
export const SidebarData = [
  // Single Menu
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Icon",
    path: "/icon",
    icon: <FaIcons.FaHamburger />,
  },
  // Drop down menu
  {
    title: "Dropdown",
    icon: <FaIcons.FaMagic />,
    // Icon for dropdown closed
    iconClosed: <FaIcons.FaAngleRight />,
    // Icon for dropdown Opened
    iconOpened: <FaIcons.FaAngleDown />,
    // Sub Menu
    subMenu: [
      {
        title: "Dropdown 1",
        subMenuTitle: "Dropdown",
        path: "/dropdown/dropdown-1",
        icon: <FaIcons.FaChessKnight />,
      },
      {
        title: "Dropdown 2",
        subMenuTitle: "Dropdown",
        path: "/dropdown/dropdown-2",
        icon: <FaIcons.FaChessQueen />,
      },
    ],
  },
  // Drop down menu
  {
    title: "Products",
    icon: <FaIcons.FaMagic />,
    // Icon for dropdown closed
    iconClosed: <FaIcons.FaAngleRight />,
    // Icon for dropdown Opened
    iconOpened: <FaIcons.FaAngleDown />,
    // Sub Menu
    subMenu: [
      {
        title: "Products 1",
        subMenuTitle: "Products",
        path: "/products/products-1",
        icon: <FaIcons.FaChessKnight />,
      },
      {
        title: "products 2",
        subMenuTitle: "Products",
        path: "/products/products-2",
        icon: <FaIcons.FaChessQueen />,
      },
    ],
  },
];
