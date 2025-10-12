import { useEffect, useRef, useState } from "react";
import "./usermenu.css";
import Link from "next/link";
import { FiUser, FiSettings, FiLogOut, FiAtSign } from "react-icons/fi";

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Fecha o submenu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="user-menu" ref={menuRef}>
      <button className="btn-photo" onClick={() => setOpen(!open)}>
        <figure>
          <img
            src="image/relative/user-default.webp"
            width={35}
            height={35}
            alt="Foto de perfil"
          />
        </figure>
      </button>

      <nav className={`user-submenu ${open ? "open" : ""}`}>
        <div className="user-detal">
          <figure>
            <img
              src="image/relative/user-default.webp"
              width={40}
              height={40}
              alt="Foto de perfil"
              loading="lazy"
            />
          </figure>
          <div className="name-username">
            <p className="full-name">Full Name</p>
            <div className="username">
              <div className="icon">
                <FiAtSign />
              </div>
              username
            </div>
          </div>
        </div>

        <ul className="list">
          <li>
            <Link href="#">
              <div className="icon">
                <FiUser />
              </div>
              Meu perfil
            </Link>
          </li>

          <li>
            <Link href="#">
              <div className="icon">
                <FiSettings />
              </div>
              Configurações da conta
            </Link>
          </li>

          <button>
            <div className="icon">
              <FiLogOut />
            </div>
            Sair
          </button>
        </ul>
      </nav>
    </div>
  );
}
