import Link from "next/link";
import { MenuItemProps } from "./types";

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    <div>
      <Link href={address} className="flex lg:mx-6 hover:text-amber-600 w-fit">
        <Icon className="text-2xl mx-4 sm:hidden" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
