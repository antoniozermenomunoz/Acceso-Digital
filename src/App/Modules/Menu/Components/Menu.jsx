import { useEffect } from "react";
import "./Menu.css";
import { UseMenu } from "../Hooks/UseMenu";

function Menu() {
  const { options, ConsultarOpciones } = UseMenu();
  useEffect(() => {
    ConsultarOpciones();
  }, []);

  return (
    <div className="container py-5">
      {/* Contenedor Grid de Bootstrap: vital para que funcionen los "col" */}
      <div className="row g-4 justify-content-center">
        {options?.map((option) => (
          <div key={option.nombre} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 card-akron">
              <figure className="card-img-top text-center pt-4 mb-0 bg-light">
                <img
                  src={`public/IMG/${option.nombre}.png`}
                  alt={`${option.nombre}`}
                  className="img-fluid product-img-akron"
                />
              </figure>

              <div className="card-body text-center d-flex align-items-center justify-content-center">
                <h3 className="card-title fw-bold title-akron mb-0">
                  {option.nombre}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Menu };
