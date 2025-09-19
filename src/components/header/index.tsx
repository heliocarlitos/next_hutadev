'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BtnChangeTheme } from '../btn/btnchangetheme';
import { BtnShowMenuMob } from '../btn/btnshowmenumob';
import { Desktop_Menu } from './(megamenu)/desktop/desktop';
import { FaCaretDown } from 'react-icons/fa';
import './header.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const hideScroll = 900;
      setScrolled(currentScroll > 30);
      setHidden(currentScroll > lastScroll && currentScroll > hideScroll);
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const handleMouseEnter = () => setMenuOpen(true);
  const handleMouseLeave = () => setMenuOpen(false);
  const handleMenuLinkClick = () => setMenuOpen(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setMenuOpen((prev) => !prev);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <nav className={scrolled ? 'scrolled' : ''} aria-label="Menu principal">
        <Link href="/" className={`logo ${pathname === '/' ? 'active' : ''}`}>
          <figure>
            <img src="/logo_png.webp" alt="Logo da Huta Dev" width={30} height={30} />
          </figure>
          <p>Hutadev</p>
        </Link>

        <ul className="ul-links">
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>

          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={pathname === '/servicos' ? 'active' : ''}
          >
            <Link
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded={menuOpen}
              onKeyDown={handleKeyDown}
            >
              Serviços
              <div className={`icon ${menuOpen ? 'rotated' : ''}`}>
                <FaCaretDown />
              </div>
            </Link>

            {menuOpen && <Desktop_Menu onLinkClick={handleMenuLinkClick} />}
          </li>

          <li>
            <Link href="/produtos" className={pathname === '/produtos' ? 'active' : ''}>
              Produtos
            </Link>
          </li>

          <li>
            <Link href="/precos" className={pathname === '/precos' ? 'active' : ''}>
              Preços
            </Link>
          </li>

          <li>
            <Link href="/sobre" className={pathname === '/sobre' ? 'active' : ''}>
              Sobre
            </Link>
          </li>

          <li>
            <Link href="/contactos" className={pathname === '/contactos' ? 'active' : ''}>
              Contactos
            </Link>
          </li>
        </ul>

        <div className="btn-local">
          <BtnChangeTheme />
          <div className="btn">
            <button className="border-gradient creat-count">Criar conta</button>
          </div>
          <BtnShowMenuMob />
        </div>
      </nav>
    </header> 
  );
}

