import Image from "next/image";
import Link from "next/link";
import "./megamenu.css";
import { IoConstruct, IoGlobeSharp, IoDocument } from "react-icons/io5";
import { SlPresent } from "react-icons/sl";

interface DesktopMenuProps {
  onLinkClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}
export function Produtos({ onLinkClick }: DesktopMenuProps) {
  return (
    <>
      <div className="mega_menu cone mega_menu_produtos cone_produto">
        <div className="box-link">
          <div className="box-ul">
            <ul>
              <li>
                <Link href="#" onClick={onLinkClick}>
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
              </li>

              <li>
                <Link href="#" onClick={onLinkClick}>
                  <div className="icon">
                    <IoConstruct />
                  </div>
                  <div className="detal-link">
                    <p className="title">Componentes Web</p>
                    <p className="text">
                      Criação, personalização e integração de módulos e
                      funcionalidades.
                    </p>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="#" onClick={onLinkClick}>
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
              </li>

              <li>
                <Link href="#" onClick={onLinkClick}>
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
              </li>

              <div className="ver-todos">
                <div className="more-produto">
                  <div className="img">
                    <figure>
                      <img
                        src="https://dummyimage.com/30/999/000&text=H"
                        width={30}
                        height={30}
                        alt="placeholder"
                      />
                    </figure>

                    <figure>
                      <img
                        src="https://dummyimage.com/30/999/000&text=U"
                        width={30}
                        height={30}
                        alt="placeholder"
                      />
                    </figure>

                    <figure>
                      <img
                        src="https://dummyimage.com/30/999/000&text=T"
                        width={30}
                        height={30}
                        alt="placeholder"
                      />
                    </figure>

                    <figure>
                      <img
                        src="https://dummyimage.com/30/999/000&text=A"
                        width={30}
                        height={30}
                        alt="placeholder"
                      />
                    </figure>
                  </div>

                  <p>5 +</p>
                </div>

                <Link href="/produtos" onClick={onLinkClick}>
                  Ver todos produtos
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
