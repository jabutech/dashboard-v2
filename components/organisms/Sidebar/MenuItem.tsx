import Link from "next/link";
import classActive from "classnames";
import { useState } from "react";

// Declarate props
interface MenuItemProps {
  item: Object;
  pathActive: String;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { item, pathActive } = props;

  // State for display sub navigation
  const [subMenu, setSubMenu] = useState(false);

  // Function fro show sub navigation
  const showSubMenu = () => setSubMenu(!subMenu);

  return (
    <>
      <div>
        {/* Cek jika tidak memiliki sub menu masukkan pathnya */}
        <Link href={`${!item.subMenu ? item.path : "#"}`}>
          <a
            onClick={item.subMenu && showSubMenu}
            className={`${
              pathActive === item.path && "bg-red-700"
            } flex justify-between items-center py-1 px-4 list-none h-10 no-underline text-sm font-normal text-gray-100 hover:bg-red-500 hover:border-red-500 cursor-pointer`}
          >
            <div className="inline-flex items-center">
              {item.icon}
              <span className="ml-4">{item.title}</span>
            </div>
            <div>
              {/* Cek apakah ada sub navigation dan state subnav dalam kondisi true */}
              {item.subMenu && subMenu
                ? //   Jika iya tampilkan icon buka
                  item.iconOpened
                : // dan apakah icon Subnav ada
                item.subMenu
                ? // Jika tidak tampilkan icon tutup
                  item.iconClosed
                : //   Jika tidak punya sub navigation Jangan tampilkan icon
                  null}
            </div>
          </a>
        </Link>
      </div>

      {/* Sub Navigation */}
      {/* cek state subnav dalam kondisi true? jika iya tampilkan isi sub navigation */}
      {subMenu &&
        item.subMenu.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <a
                className={`${
                  pathActive === item.path && "bg-blue-700"
                } h-10 pl-12 flex items-center no-underline text-gray-100 text-sm font-normal hover:bg-blue-500 bg-gray-500 cursor-pointer`}
              >
                {item.icon}
                <span className="ml-4">{item.title}</span>
              </a>
            </Link>
          );
        })}
    </>
  );
}
