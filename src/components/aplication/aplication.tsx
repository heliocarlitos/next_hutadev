import "./aplication.css";
import {
  IoDesktop,
  IoLayers,
  IoMegaphone,
  IoSearch,
  IoCodeSharp,
  IoRocketSharp,
  IoHelp,
} from "react-icons/io5";
export function Aplication() {
  return (
    <>
      <div className="aplication">
        <div className="intro">
          <p className="app-title">Aplicativo</p>

          <p className="title">
            Cria uma conta para puder gerênciar e acompanhar seus serviços e
            produtos
          </p>

          <p className="text">
            Antes de solicitar um serviço ou prodotudo, você precisa criar uma
            conta, onde terá acesso a um painel que lhe permitirá gerenciar os
            serviços ou produtos que requisitou, podendo acompanhar o progresso,
            actualizar seu plano ou mesmo cancelar
          </p>
        </div>
        <div className="img">
          <figure>
            <img src="image/relative/bg_dot.png" alt="bot" />
          </figure>
        </div>
        <div className="box-content">
          <div className="box">
            <div className="box-item">
              <div className="icon">
                <IoDesktop />
              </div>
            </div>

            <div className="box-item hidden">
              <div className="circle"></div>
            </div>

            <div className="box-item">
              <div className="icon">
                <IoSearch />
              </div>
            </div>

            <div className="box-item hidden">
              <div className="circle yellow"></div>
            </div>

            <div className="box-item">
              <div className="icon">
                <IoLayers />
              </div>
            </div>

            <div className="box-item hidden">
              <div className="circle lilac"></div>
            </div>

          </div>

          <div className="box">

            <div className="box-item hidden">
              <div className="circle green"></div>
            </div>

            <div className="box-item">
              <div className="icon">
                <IoCodeSharp />
              </div>
            </div>

            <div className="box-item hidden">
              <div className="circle orange"></div>
            </div>

            <div className="box-item">
              <div className="icon">
                <IoMegaphone />
              </div>
            </div>

            <div className="box-item hidden">
              <div className="circle blue"></div>
            </div>

            <div className="box-item">
              <div className="icon">
                <IoRocketSharp />
              </div>

            </div>

          </div>

        </div>
        
      </div>
    </>
  );
}
