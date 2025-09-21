"use client";

import React from "react";
import "./btnshowmenumob.css";

interface BtnShowMenuMobProps {
    menuAberto: boolean;
    toggleMenu: () => void;
}

export function BtnShowMenuMob({
    menuAberto,
    toggleMenu,
}: BtnShowMenuMobProps) {
    return (
        <div className="btnshowmenumob">
            <button
                className={`icon-menu ${menuAberto ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuAberto}
                aria-controls="HeaderMob"
            >
                <span></span>
                <span></span>
                <span className="Ultimo"></span>
            </button>
        </div>
    );
}
