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
  const [servicosAberto, setServicosAberto] = useState(false);
  const [produtosAberto, setProdutosAberto] = useState(false);
  const pathname = usePathname();

  if (!open) return null;

  return (
    <>
      <div className="pano" onClick={onClose}></div>
      <div className="white-banner"></div>
      <nav className={`mobmenu slide-in`}>
        <ul>
          <li>
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
          <li>
            <Link
              className={`submenu-btn ${servicosAberto ? "open" : ""}`}
              onClick={() => setServicosAberto((prev) => !prev)}
              aria-expanded={servicosAberto}
              href="#"
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
            </Link>

            <div className={`submenu ${servicosAberto ? "show" : ""}`}>
              <Link
                href="#"
                onClick={onClose}
                tabIndex={servicosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <IoDesktop />
                </div>
                <div className="detal-link">
                  <p className="title"> Criação de sites </p>
                  <p className="text">
                    Institucionais, comerciais, educacionais, blogs, portais.
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                onClick={onClose}
                tabIndex={servicosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <IoCodeSharp />
                </div>
                <div className="detal-link">
                  <p className="title">Manutenção de sites</p>
                  <p className="text">
                    Actualização, segurança, performance, backups, correções.
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                onClick={onClose}
                tabIndex={servicosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <IoSearch />
                </div>
                <div className="detal-link">
                  <p className="title"> SEO </p>
                  <p className="text">
                    Palavras-chave, tráfego, links, conteúdo, rankeamento.
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                onClick={onClose}
                tabIndex={servicosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <IoLayers />
                </div>
                <div className="detal-link">
                  <p className="title">Consultoria de Design</p>
                  <p className="text">
                    Branding, identidade, layout, cores, tipografia.
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                onClick={onClose}
                tabIndex={servicosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <IoMegaphone />
                </div>
                <div className="detal-link">
                  <p className="title"> Marketing Digital </p>
                  <p className="text">
                    SEO, anúncios, redes, tráfego, conversão.
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                onClick={onClose}
                tabIndex={servicosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <IoRocketSharp />
                </div>
                <div className="detal-link">
                  <p className="title">Automação de Processos</p>
                  <p className="text">
                    Workflows, eficiência, integração, notificações, tarefas.
                  </p>
                </div>
              </Link>
            </div>
          </li>

          {/* Produtos */}
          <li>
            <Link
              className={`submenu-btn ${produtosAberto ? "open" : ""}`}
              onClick={() => setProdutosAberto((prev) => !prev)}
              aria-expanded={produtosAberto}
              href="#"
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
            </Link>

            <div
              className={`submenu submenu-produto ${
                produtosAberto ? "show" : ""
              }`}
            >
              <Link
                href="#"
                onClick={onClose}
                tabIndex={produtosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <IoGlobeSharp />
                </div>
                <div className="detal-link">
                  <p className="title"> Websites </p>
                  <p className="text">
                    Sites institucionais, comerciais, educacionais, blogs e
                    portais.
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                onClick={onClose}
                tabIndex={produtosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <IoConstruct />
                </div>
                <div className="detal-link">
                  <p className="title"> Componentes Web </p>
                  <p className="text">
                    Criação, personalização e integração de módulos e
                    funcionalidades.
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                onClick={onClose}
                tabIndex={produtosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <IoDocument />
                </div>
                <div className="detal-link">
                  <p className="title">Currículos Digitais</p>
                  <p className="text">
                    Apresentação moderna, optimizada e interactiva do seu
                    percurso.
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                onClick={onClose}
                tabIndex={produtosAberto ? 0 : -1}
                className={pathname === "#" ? "active" : ""}
              >
                <div className="icon">
                  <SlPresent />
                </div>
                <div className="detal-link">
                  <p className="title">Presentes</p>
                  <p className="text">
                    Sistemas operacionais, programas, agentes de IA, templates
                    etc.
                  </p>
                </div>
              </Link>
            </div>
          </li>

          <li>
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

          <li>
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

          <li>
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

          <li>
            <Link
              href="#"
              onClick={onClose}
              className={`creat-count ${pathname === "#" ? "active" : ""}`}
            >
              Criar conta
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
