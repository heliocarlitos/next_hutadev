import Link from "next/link";
import "./desenvolvemos.css";
import {
  FaGlobe,
  FaArrowRightLong,
  FaBagShopping,
  FaFile,
} from "react-icons/fa6";

export function Desenvolvemos() {
  return (
    <>
      <div className="desenvolvemos">
        <div className="intro">
          <div className="pre-text">
            <div className="dot-top"></div>
            <div className="dot-bottom"></div>
            <p>Sempre actualizados</p>
          </div>
          <p className="title">
            Desenvolvemos seus produtos pensando no <span>seu crescimento</span>
          </p>
          <p className="text">
            Trabalhamos consigo para materializar suas ideias em soluções úteis,
            criando <span>produtos que acompanham</span> o ritmo do seu negócio
            e ajudam a conquistar espaço e reconhecimento no mercado.
          </p>
        </div>

        <div className="box-card">
          <div className="box-c">
            <div className="card">
              <div className="icon">
                <FaBagShopping />
              </div>
              <p className="title">Produtos</p>
              <p className="text">
                Plataformas web intuitivas e protegidas que permitem às empresas
                vender e expandir digitalmente, sem conhecimentos técnicos
                avançados.
              </p>

              <Link href="#">
                <div className="text-area">
                  <div className="text">Saber mais</div>
                  <div className="text">Saber mais</div>
                </div>
                <div className="box-icon">
                  <div className="icon">
                    <FaArrowRightLong />
                  </div>
                  <div className="icon">
                    <FaArrowRightLong />
                  </div>
                </div>
              </Link>
            </div>

            <div className="card">
              <div className="icon">
                <FaGlobe />
              </div>
              <p className="title">Componentes Web</p>
              <p className="text">
                Biblioteca de componentes reutilizáveis, acessíveis e
                responsivos, desenvolvidos para acelerar projectos e melhorar a
                experiência do utilizador.
              </p>

              <Link href="#">
                <div className="text-area">
                  <div className="text">Saber mais</div>
                  <div className="text">Saber mais</div>
                </div>
                <div className="box-icon">
                  <div className="icon">
                    <FaArrowRightLong />
                  </div>
                  <div className="icon">
                    <FaArrowRightLong />
                  </div>
                </div>
              </Link>
            </div>

            <div className="card">
              <div className="icon">
                <FaFile />
              </div>
              <p className="title">Currículo Vitae</p>
              <p className="text">
                Cria connosco ou descarrega gratuitamente o teu currículo
                moderno, com modelos adaptados às exigências actuais das
                empresas.
              </p>

              <Link href="#">
                <div className="text-area">
                  <div className="text">Saber mais</div>
                  <div className="text">Saber mais</div>
                </div>
                <div className="box-icon">
                  <div className="icon">
                    <FaArrowRightLong />
                  </div>
                  <div className="icon">
                    <FaArrowRightLong />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
