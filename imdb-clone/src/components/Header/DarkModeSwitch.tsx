"use client";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode className="cursor-pointer text-xl hover:text-amber-500" onClick={() => setTheme("light")} />
        ) : (
          <BsFillMoonFill className="cursor-pointer text-xl hover:text-amber-500" onClick={() => setTheme("dark")} />
        ))}
    </>
  );
}
