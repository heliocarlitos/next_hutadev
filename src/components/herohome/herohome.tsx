import { BsStars } from "react-icons/bs";
import Image from "next/image";
import {
    IoLogoHtml5,
    IoLogoFigma,
    IoLogoReact,
    IoLogoFirebase,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import "./herohome.css";
export function HeroHome() {
    return (
        <>
            <div className="herohome">
                <p className="title gradient-text">
                    Resultados mensuráveis em design, desenvolvimento e
                    marketing.
                </p>

                <p className="text">
                    Nossa missão é simplificar as complexidades das startups
                    modernas de negócios e tecnologia, permitindo que nossos
                    clientes se concentrem no que realmente importa - seu
                    crescimento e sucesso.
                </p>

                <button>
                    Começar agora
                    <div className="icon">
                        <BsStars />
                    </div>
                </button>

                <div className="tecnology">
                    <div className="icon">
                        <IoLogoHtml5 />
                    </div>
                    <div className="icon">
                        <RiTailwindCssFill />
                    </div>

                    <div className="icon">
                        <IoLogoFigma />
                    </div>

                    <div className="icon">
                        <IoLogoReact />
                    </div>

                    <div className="icon">
                        <SiTypescript />
                    </div>

                    <div className="icon">
                        <IoLogoFirebase />
                    </div>
                </div>

                <div className="banner">
                    <figure>
                        <img
                            src="/image/relative/dark.png"
                            alt="capa dark"
                            width={980}
                            height={600}
                            className="dark"
                        />
                        <img
                            src="/image/relative/light.png"
                            alt="capa light"
                            width={980}
                            height={600}
                            className="light"
                        />
                    </figure>
                </div>
            </div>
        </>
    );
}
