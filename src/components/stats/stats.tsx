import "./stats.css";
export function Stats() {
  return (
    <>
      <div className="stats">
        <div className="image">
          <div className="logo">
            <figure>
              <img
                src="/logo_png.webp"
                alt="Logo da huta dev"
                width={100}
                height={100}
                loading="lazy"
              />
            </figure>
          </div>
          <figure>
            <img
              src="image/relative/stats.webp"
              alt="Capa"
              width={400}
              height={500}
              loading="lazy"
              className="bg-img"
            />
          </figure>
        </div>

        <div className="the-number">
          <div className="box-number">
            <div className="b-number">
              <p className="title">3+</p>
              <p className="text">Anos no mercado</p>
            </div>
            <div className="b-number">
              <p className="title">3+</p>
              <p className="text">Membro da equipe</p>
            </div>
            <div className="b-number">
              <p className="title">3+</p>
              <p className="text">Usuários activos</p>
            </div>
          </div>

          <div className="box-number">
            <div className="b-number">
              <p className="title">15+</p>
              <p className="text">Projectos de código aberto</p>
            </div>
            <div className="b-number">
              <p className="title">6+</p>
              <p className="text">Produtos lançados</p>
            </div>
            <div className="b-number">
              <p className="title">9+</p>
              <p className="text">Empresas satisfeitas</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
