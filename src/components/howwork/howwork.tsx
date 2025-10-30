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
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestiae laborum quasi quos officiis tenetur illo quae distinctio expedita mollitia veniam rem quo."
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatem officiis aut placeat vel rem quos.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item-number">
                <p>02</p>
              </div>
              <div className="item-content">
                <p className="title">Personaliza seu perfil</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatem officiis aut placeat vel rem quos.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="item-number">
                <p>03</p>
              </div>
              <div className="item-content">
                <p className="title">Escolha seu produto ou serviço</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatem officiis aut placeat vel rem quos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="update-plan">

          <div className="info">
            <p className="title">
              Se já tem uma conta, considere ser um <span>Membro Especíal</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              deleniti nisi sapiente iusto aperiam, atque quasi amet,
              consequuntur.
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
            <img src="/image/relative/mini-painel.webp" alt="Demo" width={700} height={450} loading="lazy"/>
          </figure>
        </div>
      </div>
    </>
  );
}
