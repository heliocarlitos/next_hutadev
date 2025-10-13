"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";

import { BtnChangeTheme } from "../btn/btnchangetheme";
import { BtnShowMenuMob } from "../btn/btnshowmenumob/btnshowmenumob";
import { MobMenu } from "./mobmenu/mobmenu";
import { Servicos } from "./(megamenu)/servicos";
import { Produtos } from "./(megamenu)/produtos";

import "./header.css";
import { UserMenu } from "./usermenu/usermenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [menuMobAberto, setMenuMobAberto] = useState(false);
  const pathname = usePathname();

  const toggleMenuMob = () => {
    setMenuMobAberto((prev) => !prev);
    if (window.navigator.vibrate) window.navigator.vibrate(30);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const hideScroll = 900;
      setScrolled(currentScroll > 30);
      setHidden(currentScroll > lastScroll && currentScroll > hideScroll);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const handleMouseEnter = (menu: string) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);
  const handleMenuLinkClick = () => setOpenMenu(null);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    menu: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenMenu(openMenu === menu ? null : menu);
    }
  };

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        hidden ? "hidden" : ""
      }`}
    >
      <nav className={scrolled ? "scrolled" : ""} aria-label="Menu principal">
        <Link href="/" className={`logo ${pathname === "/" ? "active" : ""}`}>
          <figure>
            <img
              src="/logo_png.webp"
              alt="Logo da Huta Dev"
              width={30}
              height={30}
            />
          </figure>
          <p>Hutadev</p>
        </Link>

        <ul className="ul-links">
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>

          {/* Serviços */}
          <li
            onMouseEnter={() => handleMouseEnter("servicos")}
            onMouseLeave={handleMouseLeave}
            className={pathname === "/servicos" ? "active" : ""}
          >
            <Link
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded={openMenu === "servicos"}
              onKeyDown={(e) => handleKeyDown(e, "servicos")}
            >
              Serviços
              <div
                className={`icon ${openMenu === "servicos" ? "rotated" : ""}`}
              >
                <FaCaretDown />
              </div>
            </Link>

            {openMenu === "servicos" && (
              <Servicos onLinkClick={handleMenuLinkClick} />
            )}
          </li>

          {/* Produtos */}
          <li
            onMouseEnter={() => handleMouseEnter("produtos")}
            onMouseLeave={handleMouseLeave}
            className={pathname === "/produtos" ? "active" : ""}
          >
            <Link
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded={openMenu === "produtos"}
              onKeyDown={(e) => handleKeyDown(e, "produtos")}
            >
              Produtos
              <div
                className={`icon ${openMenu === "produtos" ? "rotated" : ""}`}
              >
                <FaCaretDown />
              </div>
            </Link>

            {openMenu === "produtos" && (
              <Produtos onLinkClick={handleMenuLinkClick} />
            )}
          </li>

          <li>
            <Link
              href="/precos"
              className={pathname === "/precos" ? "active" : ""}
            >
              Preços
            </Link>
          </li>

          <li>
            <Link
              href="/sobre"
              className={pathname === "/sobre" ? "active" : ""}
            >
              Sobre
            </Link>
          </li>

          <li>
            <Link
              href="/contactos"
              className={pathname === "/contactos" ? "active" : ""}
            >
              Contactos
            </Link>
          </li>
        </ul>

        <div className="btn-local">
          
          <BtnChangeTheme />

          <div className="btn">
            <button className="border-gradient creat-count">Criar conta</button>
          </div>

          <UserMenu/>

          <BtnShowMenuMob
            menuAberto={menuMobAberto}
            toggleMenu={toggleMenuMob}
          />
        </div>
      </nav>
      <MobMenu open={menuMobAberto} onClose={() => setMenuMobAberto(false)} />
    </header>
  );
}
