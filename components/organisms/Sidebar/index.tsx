// import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Brand from "./Brand";
import MenuItem from "./MenuItem";
// Import SidebarData for MenuItem
import SidebarData from "./SidebarData";
import DropdownProfile from "./DropdownProfile";
import { useRouter } from "next/dist/client/router";

export default function Sidebar() {
  // Get Path Active
  const { asPath } = useRouter();

  // State for dropdown profile
  const [isDropdown, setIsDropdown] = useState(false);
  // State for display sidebar
  const [isSidebar, setIsSidebar] = useState(false);
  //   Function for show or hidden sidebar
  const showSidebar = () => setIsSidebar(!isSidebar);

  return (
    <div>
      {/* Navbar */}
      <div className="bg-gray-800 h-16 flex fixed top-0 justify-between items-center shadow-lg px-9 w-full z-10">
        {/* Div left */}
        <div>
          {/* Icon Bar Menu */}
          <button className="cursor-pointer text-gray-100 hover:text-gray-400 transition-colors duration-150">
            <FaBars
              onClick={showSidebar}
              className="text-xl h-20 flex justify-start items-center"
            />
          </button>
        </div>
        {/* Div right profile */}
        <button
          onClick={() => setIsDropdown(!isDropdown)}
          className="text-gray-100 inline-flex items-center cursor-pointer hover:text-gray-400"
        >
          <div className="relative w-10 h-10 mr-2">
            <Image
              src="/image/user.png"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <div>
            <span className="font-medium font-mono">Rizky Darmawan</span>
          </div>
          <div className="ml-2">
            <FaAngleDown />
          </div>
        </button>
        {/* Dropdown profile */}
        {isDropdown && <DropdownProfile />}
      </div>

      {/* Sidebar */}
      <nav
        className={`${
          isSidebar ? "visible" : "invisible"
        } bg-gray-800 w-60 h-screen lg:visible flex justify-center fixed top-0 transition-all duration-300 z-10 shadow-lg`}
      >
        <div className="flex-col flex w-full">
          {/* Logo close sidebar */}
          <div className="w-full lg:hidden inline-flex items-center bg-gray-600">
            {/* Sidebar Wrap */}
            {/* Icon Close Sidebar */}
            <div>
              <button className="cursor-pointer text-gray-100 hover:text-gray-400 transition-colors duration-150">
                <FaTimes
                  onClick={showSidebar}
                  className="ml-8 text-3xl flex justify-start items-center"
                />
              </button>
            </div>
            {/* Brand */}
            <Brand title="Jabutech" />
          </div>
          {/* Brand */}
          <div className="w-full hidden lg:block bg-gray-600">
            <Brand title="Jabutech" />
          </div>
          <div className="w-full overflow-y-auto">
            <MenuItem items={SidebarData} pathActive={asPath} />
          </div>
        </div>
      </nav>
    </div>
  );
}
