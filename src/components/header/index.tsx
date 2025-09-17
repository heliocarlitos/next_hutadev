"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BtnChangeTheme } from "../btn/btnchangetheme";
import "./header.css";
import { BtnShowMenuMob } from "../btn/btnshowmenumob";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const hideScroll = 900;
            setScrolled(currentScroll > 30);
            if (currentScroll > lastScroll && currentScroll > hideScroll) {
                setHidden(true);
            } else if (currentScroll < lastScroll) {
                setHidden(false);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <header
            className={`header ${scrolled ? "scrolled" : ""} ${
                hidden ? "hidden" : ""
            }`}
        >
            <nav className={scrolled ? "scrolled" : ""}>
                <Link href="/" className="logo">
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
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/servicos">Serviços</Link>
                    </li>

                    <li>
                        <Link href="/produtos">Produtos</Link>
                    </li>

                    <li>
                        <Link href="/precos">Preços</Link>
                    </li>

                    <li>
                        <Link href="/sobre">Sobre</Link>
                    </li>

                    <li>
                        <Link href="/contactos">Contactos</Link>
                    </li>
                </ul>

                <div className="btn-local">
                    <BtnChangeTheme />
                    <div className="btn">
                        <button className="border-gradient creat-count">
                            Criar conta
                        </button>
                    </div>
                    <BtnShowMenuMob />
                </div>
            </nav>
        </header>
    );
}
