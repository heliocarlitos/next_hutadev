import { BsStars } from "react-icons/bs";
import Link from "next/link";
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

        <p className="title">
          Resultados mensuráveis em design, desenvolvimento e marketing.
        </p>

        <p className="text">
          Nossa missão é simplificar as complexidades das startups modernas de
          negócios e tecnologia, permitindo que nossos clientes se concentrem no
          que realmente importa - seu crescimento e sucesso.
        </p>

        <div className="btn">
          <button className="start">
            <div className="text-area">
              <div className="text">Começar agora</div>
              <div className="text">Começar agora</div>
            </div>
            <div className="icon">
              <BsStars />
            </div>
          </button>
          
          <Link href="#" className="who-are">
           <div className="text-area">
              <div className="text">Sobre nós</div>
              <div className="text">Sobre nós</div>
            </div>
          </Link>
        </div>

        <div className="tecnology">
          <div className="icon" data-text="HTML5">
            <IoLogoHtml5 />
          </div>
          <div className="icon" data-text="Tailwind">
            <RiTailwindCssFill />
          </div>

          <div className="icon" data-text="Figma">
            <IoLogoFigma />
          </div>

          <div className="icon" data-text="React">
            <IoLogoReact />
          </div>

          <div className="icon" data-text="TypeScript">
            <SiTypescript />
          </div>

          <div className="icon" data-text="Firebase">
            <IoLogoFirebase />
          </div>
        </div>

        <div className="banner">
          <figure>
            <img
              src="/image/relative/dark.webp"
              alt="capa dark"
              width={980}
              height={600}
              className="dark"
              fetchPriority="high"
            />
            <img
              src="/image/relative/light.webp"
              alt="capa light"
              width={980}
              height={600}
              className="light"
              fetchPriority="high"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
