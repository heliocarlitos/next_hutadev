// src/components/unicos/btnshowmenumob/BtnShowMenuMob.tsx
import { useState } from "react";
import "./btnshowmenumob.css";

export function BtnShowMenuMob() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(prev => !prev);
        if (window.navigator.vibrate) window.navigator.vibrate(30); // vibração opcional
    };

    return (
        <>
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
        </>
    );
}
