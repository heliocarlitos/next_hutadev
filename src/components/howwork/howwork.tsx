import { Intro } from "../intro/intro";
import { FaCircleUser } from "react-icons/fa6";
import "./howwork.css";
import Link from "next/link";

export function Howwork() {
  return (
    <>
      <div className="howwork">
        <Intro
          icon={<FaCircleUser />}
          tag="Perfil"
          title="Como isso funciona do seu lado?"
          text="Depois de criares a tua conta, podes aceder à tua área pessoal, guardar informações, escolher produtos e acompanhar tudo o que fazes dentro da plataforma de forma simples e rápida."
        />

        <div className="box">
          <figure>
            <img
              src="/image/relative/set.webp"
              alt="Set"
              width={300}
              height={400}
              loading="lazy"
            />
          </figure>

          <div className="it-work">
            <div className="item">
              <div className="item-number">
                <p>01</p>
              </div>
              <div className="item-content">
                <p className="title">Cria uma conta</p>
                <p>
                  Faz o teu registo com o e-mail ou número de telefone. É rápido
                  e fácil, e logo ficas pronto para usar todos os recursos da
                  plataforma.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item-number">
                <p>02</p>
              </div>
              <div className="item-content">
                <p className="title">Personaliza o teu perfil</p>
                <p>
                  Coloca uma foto, escreve um pequeno texto sobre ti e escolhe
                  as tuas preferências. Assim o teu perfil fica com o teu
                  estilo e mais completo.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item-number">
                <p>03</p>
              </div>
              <div className="item-content">
                <p className="title">Escolhe o teu produto ou serviço</p>
                <p>
                  Vê as opções disponíveis, lê as descrições e escolhe o que
                  mais te agrada. Depois é só confirmar e começar a aproveitar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="update-plan">
          <div className="info">
            <p className="title">
              Se já tens uma conta, considera ser um <span>Membro Especial</span>
            </p>
            <p>
              Ao tornares-te Membro Especial, tens acesso a mais vantagens, como
              descontos, ferramentas extras e prioridade no atendimento. Vale a
              pena actualizar.
            </p>

            <div className="btn">
              <div className="btn">
                <Link href="#" className="start">
                  <div className="text-area">
                    <div className="text">Actualizar agora</div>
                    <div className="text">Actualizar agora</div>
                  </div>
                </Link>

                <Link href="#" className="who-are">
                  <div className="text-area">
                    <div className="text">Mais detalhes</div>
                    <div className="text">Mais detalhes</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <figure>
            <img
              src="/image/relative/mini-painel.webp"
              alt="Demo"
              width={700}
              height={450}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
