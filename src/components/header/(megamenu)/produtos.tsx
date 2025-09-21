import Link from "next/link";
import "./megamenu.css";
import { IoConstruct, IoGlobeSharp, IoDocument } from "react-icons/io5";

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
                                            Sites institucionais, comerciais,
                                            educacionais, blogs e portais.
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
                                        <p className="title">
                                            {" "}
                                            Componentes Web{" "}
                                        </p>
                                        <p className="text">
                                            Criação, personalização e integração
                                            de módulos e funcionalidades.
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
                                        <p className="title">
                                            {" "}
                                            Currículos Digitais{" "}
                                        </p>
                                        <p className="text">
                                            Apresentação moderna, optimizada e
                                            interactiva do seu percurso.
                                        </p>
                                    </div>
                                </Link>
                            </li>

                            <div className="ver-todos">
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
