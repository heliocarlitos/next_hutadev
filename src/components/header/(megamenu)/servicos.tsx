import Link from "next/link";
import "./megamenu.css";
import {
    IoDesktop,
    IoLayers,
    IoMegaphone,
    IoSearch,
    IoCodeSharp,
    IoRocketSharp,
    IoHelp,
} from "react-icons/io5";
interface DesktopMenuProps {
    onLinkClick?: (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => void;
}

export function Servicos({ onLinkClick }: DesktopMenuProps) {
    return (
        <div className="mega_menu cone">
            <div className="box-link">
                <div className="box-ul">
                    <ul>
                        <li>
                            <Link href="#" onClick={onLinkClick}>
                                <div className="icon">
                                    <IoDesktop />
                                </div>
                                <div className="detal-link">
                                    <p className="title"> Criação de sites </p>
                                    <p className="text">
                                        Institucionais, comerciais,
                                        educacionais, blogs, portais.
                                    </p>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="#" onClick={onLinkClick}>
                                <div className="icon">
                                    <IoCodeSharp />
                                </div>
                                <div className="detal-link">
                                    <p className="title">
                                        
                                        Manutenção de sites
                                    </p>
                                    <p className="text">
                                        Actualização, segurança, performance,
                                        backups, correções.
                                    </p>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="#" onClick={onLinkClick}>
                                <div className="icon">
                                    <IoSearch />
                                </div>
                                <div className="detal-link">
                                    <p className="title"> SEO </p>
                                    <p className="text">
                                        Palavras-chave, tráfego, links,
                                        conteúdo, rankeamento.
                                    </p>
                                </div>
                            </Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link href="#" onClick={onLinkClick}>
                                <div className="icon">
                                    <IoLayers />
                                </div>
                                <div className="detal-link">
                                    <p className="title">
                                        
                                        Consultoria de Design
                                    </p>
                                    <p className="text">
                                        Branding, identidade, layout, cores,
                                        tipografia.
                                    </p>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="#" onClick={onLinkClick}>
                                <div className="icon">
                                    <IoMegaphone />
                                </div>
                                <div className="detal-link">
                                    <p className="title"> Marketing Digital </p>
                                    <p className="text">
                                        SEO, anúncios, redes, tráfego,
                                        conversão.
                                    </p>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="#" onClick={onLinkClick}>
                                <div className="icon">
                                    <IoRocketSharp />
                                </div>
                                <div className="detal-link">
                                    <p className="title">
                                        
                                        Automação de Processos
                                    </p>
                                    <p className="text">
                                        Workflows, eficiência, integração,
                                        notificações, tarefas.
                                    </p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer">
                    <Link href="#" className="faq">
                        <div className="icon">
                            <IoHelp />
                        </div>
                        Perguntas frequentes
                    </Link>
                    <Link href="#" className="pricing">
                        Preços
                    </Link>
                </div>
            </div>

            <div className="important-link">
                <p className="title"> Links úteis </p>
                <ul>
                    <li>
                        <Link href="#" onClick={onLinkClick}>
                            Política de serviços
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={onLinkClick}>
                            Política de reembolso
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
