import "./cumpany.css";

export function Cumpany() {
  return (
    <>
      <div className="cumpany">

        <div className="intro-logo">
          <p className="title">Nossos serviços e produtos foram usados ​​por pessoas dessas empresas em seus projectos.</p>
        </div>

        <div className="logos">
          <figure>
            <img src="image/logo/lam-logo.webp" alt="Logo" width={150} height={40} loading="lazy"/>
          </figure>

          <figure>
            <img src="image/logo/cfm-logo.webp" alt="Logo" width={150} height={40} loading="lazy"/>
          </figure>

          <figure>
            <img src="image/logo/global-logo.webp" alt="Logo" width={150} height={40} loading="lazy"/>
          </figure>

          <figure>
            <img src="image/logo/mozrural-logo.webp" alt="Logo" width={150} height={40} loading="lazy"/>
          </figure>

        </div>
      </div>
    </>
  );
}

