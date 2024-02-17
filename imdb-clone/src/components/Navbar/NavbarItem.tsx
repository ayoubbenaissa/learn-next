"use client";

import Link from "next/link";
import { NavbarItemProps } from "./types";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const isItemSelected = genre && genre === param;

  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-400 font-semibold p-2 ${
          isItemSelected && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
