import Link from "next/link";
import { useState } from "react";

// Declarate props
interface MenuItemProps {
  items: any;
  pathActive: String;
}
export default function MenuItem(props: MenuItemProps) {
  const { items, pathActive } = props;

  // State for display sub navigation
  const [subMenu, setSubMenu] = useState(false);

  // Function fro show sub navigation
  const showSubMenu = () => setSubMenu(!subMenu);
  return (
    <div>
      {/* Cek jika tidak memiliki sub menu masukkan pathnya */}
      <Link href={`${!items.subMenu ? items.path : "#"}`}>
        <a
          onClick={items.subMenu && showSubMenu}
          className={`${
            pathActive === items.path && "bg-red-700"
          } w-full flex justify-between items-center py-1 px-4 list-none h-10 no-underline text-sm font-normal text-gray-100 hover:bg-red-500 hover:border-red-500 cursor-pointer`}
        >
          <div className="inline-flex items-center">
            <span className="w-5 h-5">{items.icon}</span>
            <span className="ml-4">{items.title}</span>
          </div>
          <div>
            {/* Cek apakah ada sub navigation dan state subnav dalam kondisi true */}
            {items.subMenu && subMenu
              ? items.iconOpened
              : items.subMenu
              ? items.iconClosed
              : null}
          </div>
        </a>
      </Link>
      {/* Sub Navigation */}
      {/* cek state SubMenu dalam kondisi true dan items.subMenu tidak kondisi undefined */}
      {subMenu &&
        items.subMenu.map((itemSubmenu: any) => (
          <Link href={itemSubmenu.path}>
            <a
              className={`${
                pathActive === itemSubmenu.path && "bg-blue-700"
              } h-10 pl-12 flex items-center no-underline text-gray-100 text-sm font-normal hover:bg-blue-500 bg-gray-500 cursor-pointer`}
            >
              <span className="w-5 h-5">{itemSubmenu.icon}</span>
              <span className="ml-4">{itemSubmenu.title}</span>
            </a>
          </Link>
        ))}
    </div>
  );
}
