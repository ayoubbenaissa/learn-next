import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between py-4 mx-2 max-w-6xl sm:mx-auto items-center">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2>
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
            <span className="text-xl hidden sm:inline mr-1">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
