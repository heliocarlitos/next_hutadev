"use client";

import { useEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import "./index.css";

export function BtnChangeTheme() {
    const [darkMode, setDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") setDarkMode(true);
        else if (savedTheme === "light") setDarkMode(false);
        else setDarkMode(prefersDark.matches);

        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem("theme")) setDarkMode(e.matches);
        };

        prefersDark.addEventListener("change", handleSystemThemeChange);
        return () =>
            prefersDark.removeEventListener("change", handleSystemThemeChange);
    }, []);

    useEffect(() => {
        if (darkMode === null) return;
        if (darkMode) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [darkMode]);

    const toggleTheme = () => {
        if (darkMode === null) return;
        setDarkMode(!darkMode);
        localStorage.setItem("theme", !darkMode ? "dark" : "light");
    };

    return (
        <div className="btnchangetheme">
            <button aria-label="Mudar tema" onClick={toggleTheme}>
                <span className={`icon sun ${darkMode ? "exit" : "enter"}`}>
                    <IoMdMoon />
                </span>
                <span className={`icon moon ${darkMode ? "enter" : "exit"}`}>
                    <IoMdSunny />
                </span>
            </button>
        </div>
    );
}
