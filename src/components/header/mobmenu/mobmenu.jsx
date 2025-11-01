"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./mobmenu.css";

import {
  IoHome,
  IoBriefcase,
  IoMail,
  IoBusiness,
  IoGrid,
  IoChevronDown,
  IoDesktop,
  IoLayers,
  IoMegaphone,
  IoSearch,
  IoCodeSharp,
  IoRocketSharp,
  IoConstruct,
  IoGlobeSharp,
  IoDocument,
} from "react-icons/io5";

import { BiSolidDollarCircle } from "react-icons/bi";
import { SlPresent } from "react-icons/sl";

export function MobMenu({ open, onClose }) {
  const [openSubmenu, setOpenSubmenu] = useState(null); // "servicos", "produtos" ou null
  const pathname = usePathname();

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu((prev) => (prev === submenu ? null : submenu));
  };

  return (
    <>
      {/* Overlay */}
      <div className={`pano ${open ? "show" : ""}`} onClick={onClose}></div>

      {/* White Banner */}
      <div className={`white-banner ${open ? "show slide-in" : ""}`}></div>

      {/* Menu móvel */}
      <nav className={`mobmenu ${open ? "show slide-in" : ""}`}>
        <ul className="mobmenu-ul">
          {/* Home */}
          <li className="mobmenu-ul-li">
            <Link
              href="/"
              onClick={onClose}
              className={pathname === "/" ? "active" : ""}
            >
              <div className="link-content">
                <div className="icon">
                  <IoHome />
                </div>
                Home
              </div>
            </Link>
          </li>

          {/* Serviços */}
          <li className="mobmenu-ul-li">
            <button
              className={`submenu-btn ${
                openSubmenu === "servicos" ? "open" : ""
              }`}
              onClick={() => toggleSubmenu("servicos")}
              aria-expanded={openSubmenu === "servicos"}
            >
              <div className="link-content">
                <div className="icon">
                  <IoBriefcase />
                </div>
                Serviços
              </div>
              <div className="icon c-icon">
                <IoChevronDown />
              </div>
            </button>

            <div
              className={`submenu ${openSubmenu === "servicos" ? "show" : ""}`}
            >
              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <IoDesktop />
                </div>
                <div className="detal-link">
                  <p className="title">Criação de sites</p>
                  <p className="text">
                    Institucionais, comerciais, blogs, portais.
                  </p>
                </div>
              </Link>

              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <IoCodeSharp />
                </div>
                <div className="detal-link">
                  <p className="title">Manutenção de sites</p>
                  <p className="text">
                    Actualização, segurança, performance, backups.
                  </p>
                </div>
              </Link>

              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <IoSearch />
                </div>
                <div className="detal-link">
                  <p className="title">SEO</p>
                  <p className="text">
                    Palavras-chave, tráfego, links, conteúdo.
                  </p>
                </div>
              </Link>

              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <IoLayers />
                </div>
                <div className="detal-link">
                  <p className="title">Consultoria de Design</p>
                  <p className="text">Branding, identidade, layout, cores.</p>
                </div>
              </Link>

              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <IoMegaphone />
                </div>
                <div className="detal-link">
                  <p className="title">Marketing Digital</p>
                  <p className="text">SEO, anúncios, redes, tráfego.</p>
                </div>
              </Link>

              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <IoRocketSharp />
                </div>
                <div className="detal-link">
                  <p className="title">Automação de Processos</p>
                  <p className="text">
                    Workflows, eficiência, integração, notificações.
                  </p>
                </div>
              </Link>
            </div>
          </li>

          {/* Produtos */}
          <li className="mobmenu-ul-li">
            <button
              className={`submenu-btn ${
                openSubmenu === "produtos" ? "open" : ""
              }`}
              onClick={() => toggleSubmenu("produtos")}
              aria-expanded={openSubmenu === "produtos"}
            >
              <div className="link-content">
                <div className="icon">
                  <IoGrid />
                </div>
                Produtos
              </div>
              <div className="icon c-icon">
                <IoChevronDown />
              </div>
            </button>

            <div
              className={`submenu ${openSubmenu === "produtos" ? "show" : ""}`}
            >
              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <IoGlobeSharp />
                </div>
                <div className="detal-link">
                  <p className="title">Websites</p>
                  <p className="text">
                    Sites institucionais, comerciais, blogs e portais.
                  </p>
                </div>
              </Link>

              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <IoConstruct />
                </div>
                <div className="detal-link">
                  <p className="title">Componentes Web</p>
                  <p className="text">
                    Criação, personalização e integração de módulos.
                  </p>
                </div>
              </Link>

              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <IoDocument />
                </div>
                <div className="detal-link">
                  <p className="title">Currículos Digitais</p>
                  <p className="text">
                    Apresentação moderna, optimizada e interactiva.
                  </p>
                </div>
              </Link>

              <Link href="#" onClick={onClose} className="link-submenu">
                <div className="icon">
                  <SlPresent />
                </div>
                <div className="detal-link">
                  <p className="title">Presentes</p>
                  <p className="text">
                    Sistemas operacionais, templates, agentes de IA.
                  </p>
                </div>
              </Link>
            </div>
          </li>

          {/* Outros links */}
          <li className="mobmenu-ul-li">
            <Link
              href="/precos"
              onClick={onClose}
              className={pathname === "/precos" ? "active" : ""}
            >
              <div className="link-content">
                <div className="icon">
                  <BiSolidDollarCircle />
                </div>
                Preços
              </div>
            </Link>
          </li>

          <li className="mobmenu-ul-li">
            <Link
              href="/sobre"
              onClick={onClose}
              className={pathname === "/sobre" ? "active" : ""}
            >
              <div className="link-content">
                <div className="icon">
                  <IoBusiness />
                </div>
                Sobre
              </div>
            </Link>
          </li>

          <li className="mobmenu-ul-li">
            <Link
              href="/contactos"
              onClick={onClose}
              className={pathname === "/contactos" ? "active" : ""}
            >
              <div className="link-content">
                <div className="icon">
                  <IoMail />
                </div>
                Contactos
              </div>
            </Link>
          </li>

          <li className="mobmenu-ul-li">
            <Link href="#" onClick={onClose} className="creat-count">
              Criar conta
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
