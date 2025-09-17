"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BtnChangeTheme } from "../btn/btnchangetheme";
import "./header.css";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => { 
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Encolhe o heaader aos 55
            setScrolled(currentScroll > 55);

            // distância mínima para ocultar o header
            const hideScroll = 900;

            if (currentScroll > lastScroll && currentScroll > hideScroll) {
                setHidden(true);
            } else if (currentScroll < lastScroll) {
                // rolou para cima → mostrar header imediatamente
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
                        <button className="border-gradient">Criar conta</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
