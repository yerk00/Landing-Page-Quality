import React from "react";
import { useNavigate } from "react-router-dom";

export const Services = (props) => {
  const navigate = useNavigate();

  const handleViewMore = (name) => {
    // Redirige según el nombre del servicio
    switch (name) {
      case "TRABAJOS":
        navigate("/trabajos");
        break;
      case "MEDICINA":
        navigate("/medicina");
        break;
      case "APLICACIONES WEB":
        navigate("/aplicaciones-web");
        break;
      default:
        navigate("/"); // Ruta por defecto
    }
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Servicios de Soluciones Innovadoras y Personalizadas</h2>
          <p>
            La empresa QualitySoft ofrece soluciones innovadoras y personalizadas en desarrollo de software. Su enfoque está en el desarrollo de aplicaciones web, aplicaciones móviles, sistemas empresariales, software a medida tecnológica.
          </p>
        </div>
        <div className="row">
          <div className="portafolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                      <button
  onClick={() => handleViewMore(d.name)}
  style={{
    background: 'linear-gradient(to right, #ecedf0 0%, #a6c9ef 100%)',
    border: 'none',
    color: '#272727',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  }}
  onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #a6c9ef 0%, #ecedf0 100%)'}
  onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #ecedf0 0%, #a6c9ef 100%)'}
  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  Ver Más
</button>

                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
