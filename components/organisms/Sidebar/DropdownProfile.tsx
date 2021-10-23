import Link from "next/link";
import { FaDoorOpen, FaUserCog } from "react-icons/fa";

export default function DropdownProfile() {
  return (
    <div className="origin-top-right absolute right-0 text-gray-700  px-2 py-2 mt-32 mr-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
      <div className="w-full inline-flex items-center hover:bg-gray-600 hover:text-gray-100 rounded py-1 px-1">
        <FaUserCog className="mr-2 w-5 h-5" />
        <Link href="#">
          <a className="font-medium">Profile</a>
        </Link>
      </div>
      <div className="w-full inline-flex items-center hover:bg-gray-600 hover:text-gray-100 rounded py-1 px-1">
        <FaDoorOpen className="mr-2 w-5 h-5" />
        <Link href="#">
          <a className="font-medium">Logout</a>
        </Link>
      </div>
    </div>
  );
}
