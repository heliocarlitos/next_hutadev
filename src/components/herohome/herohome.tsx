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
        <div className="bg-img">
          <figure>
            <img
              className="neon"
              src="image/relative/bg_neon.webp"
              alt="Imagem de fundo"
              width={1500}
              height={900}
            />
            <img
              className="solid light"
              src="image/relative/bg_solid.webp"
              alt="Imagem de fundo"
              width={1500}
              height={900}
            />
          </figure>
        </div>
        <p className="title gradient-text">
          Resultados mensuráveis em design, desenvolvimento e marketing.
        </p>

        <p className="text">
          Nossa missão é simplificar as complexidades das startups modernas de
          negócios e tecnologia, permitindo que nossos clientes se concentrem no
          que realmente importa - seu crescimento e sucesso.
        </p>

        <button>
          Começar agora
          <div className="icon">
            <BsStars />
          </div>
        </button>

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
              src="/image/relative/dark.png"
              alt="capa dark"
              width={980}
              height={600}
              className="dark"
              loading="lazy"
            />
            <img
              src="/image/relative/light.png"
              alt="capa light"
              width={980}
              height={600}
              className="light"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="cumpany">
          <figure>
            <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" alt="Empresa" width={200} height={60} />
          </figure>
           <figure>
            <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" alt="Empresa" width={200} height={60} />
          </figure>
           <figure>
            <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="Empresa" width={200} height={60} />
          </figure>
           <figure>
            <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" alt="Empresa" width={200} height={60} />
          </figure>
           <figure>
            <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" alt="Empresa" width={200} height={60} />
          </figure>
           <figure>
            <img src="https://tailwindcss.com/plus-assets/img/logos/laravel-logo-white.svg" alt="Empresa" width={200} height={60} />
          </figure>
    
        </div>
      </div>
    </>
  );
}
