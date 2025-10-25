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
            <Image
              src="/image/relative/dark.webp"
              alt="capa dark"
              width={980}
              height={600}
              className="dark"
              fetchPriority="high"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAMAAACDi47UAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAADnUExURf////v9/u/y9Pv7+vj4//X1/fv7+/r6+vz8/Ozs7aOhpOrp6v7///3+/v39/fLy8/Dw8vPz8/T09PLy8vHx8eHh4dDQ0NTV1dPT09bW19XV1dDQ0ePj4/7+/u/v7/Dw8PTz9O3t7e7u7vX19f7+/87G57Wq2r203vTz+vr6+dPR2srI1c/M2Nzc3uDg4Pn6+fn5+eTk5OLj4uLi4ubm5uHh4/Py9//+//z6/vb0+f37/vv7/vr6/fHs+t/Z8/f6/f3+///8//Tp9+rh7+jh7+zn9fTy//L0/uLO++KO+evR/On1/vn8/gRFWRwAAAABYktHRACIBR1IAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6QoZFik1kGBkVAAAAIlJREFUCNdVyNUOwjAARuEfa4sVOhxGB8OdoYPhbu//PGQJId25Ox8Anz+AYIhQRghBOBKFWywOnkgKIbSUBpZm+MUz2Vy+UCzpZShRKaUhJVUNrFI1TVljHqw3mq12h3sMtNvrD/ThyINja2JNZ/OFQkt7tbYdZ7Pd7Q9/PJ7Ol+vt/ni+3h/3v642DX5t34KOAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTEwLTI1VDIyOjQxOjAwKzAwOjAwUj6O/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0xMC0yNVQyMjo0MTowMCswMDowMCNjNkMAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMTAtMjVUMjI6NDE6NTMrMDA6MDANfgNlAAAAAElFTkSuQmCC"
            />
            <Image
              src="/image/relative/light.webp"
              alt="capa light"
              width={980}
              height={600}
              className="light"
              fetchPriority="high"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAMAAACDi47UAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAADnUExURf////v9/u/y9Pv7+vj4//X1/fv7+/r6+vz8/Ozs7aOhpOrp6v7///3+/v39/fLy8/Dw8vPz8/T09PLy8vHx8eHh4dDQ0NTV1dPT09bW19XV1dDQ0ePj4/7+/u/v7/Dw8PTz9O3t7e7u7vX19f7+/87G57Wq2r203vTz+vr6+dPR2srI1c/M2Nzc3uDg4Pn6+fn5+eTk5OLj4uLi4ubm5uHh4/Py9//+//z6/vb0+f37/vv7/vr6/fHs+t/Z8/f6/f3+///8//Tp9+rh7+jh7+zn9fTy//L0/uLO++KO+evR/On1/vn8/gRFWRwAAAABYktHRACIBR1IAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6QoZFik1kGBkVAAAAIlJREFUCNdVyNUOwjAARuEfa4sVOhxGB8OdoYPhbu//PGQJId25Ox8Anz+AYIhQRghBOBKFWywOnkgKIbSUBpZm+MUz2Vy+UCzpZShRKaUhJVUNrFI1TVljHqw3mq12h3sMtNvrD/ThyINja2JNZ/OFQkt7tbYdZ7Pd7Q9/PJ7Ol+vt/ni+3h/3v642DX5t34KOAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTEwLTI1VDIyOjQxOjAwKzAwOjAwUj6O/wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0xMC0yNVQyMjo0MTowMCswMDowMCNjNkMAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMTAtMjVUMjI6NDE6NTMrMDA6MDANfgNlAAAAAElFTkSuQmCC"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
