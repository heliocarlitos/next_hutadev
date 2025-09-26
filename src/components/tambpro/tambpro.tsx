import "./tambpro.css";
export function TambPro() {
  return (
    <>
      <div className="tambpro">
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
          <div className="card">
            <figure>
              <img
                src="image/relative/building_websites.svg"
                alt="Capa"
                width={300}
                height={500}
              />
            </figure>
            <div className="content">
              <p className="title">Desenvolvimento de web sites</p>
              <p className="text">
                Sites responsivos, seguros e otimizados, que oferecem excelente
                experiência em todos os dispositivos.
              </p>
            </div>
          </div>
          <div className="card">
            <figure>
              <img
                src="image/relative/undraw.svg"
                alt="Capa"
                width={300}
                height={500}
              />
            </figure>
            <div className="content">
              <p className="title">Componentes web</p>
              <p className="text">
                Componentes modulares e reutilizáveis, garantindo consistência,
                eficiência e facilidade de manutenção.
              </p>
            </div>
          </div>
          <div className="card">
            <figure>
              <img
                src="image/relative/undraw_online_cv.svg"
                alt="Capa"
                width={300}
                height={500}
              />
            </figure>
            <div className="content">
              <p className="title">Criação de currículo vitae</p>
              <p className="text">
                Currículos claros e estruturados, que destacam competências e
                experiências de forma profissional.
              </p>
            </div>
          </div>
            <div className="card">
            <figure>
              <img
                src="image/relative/undraw_gift_box.svg"
                alt="Capa"
                width={300}
                height={500}
              />
            </figure>
            <div className="content">
              <p className="title">Nossos presentes</p>
              <p className="text">
                Sistemas operacionais, programas, agentes de inteligência artificial e templates modernos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
