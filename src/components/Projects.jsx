import { Image } from "./image";
import React from "react";

export const Projects = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Proyectos</h2>
          <p>
          La empresa QualitySoft ofrece soluciones innovadoras y personalizadas en desarrollo de software. Su enfoque está en el desarrollo de aplicaciones web, aplicaciones móviles, sistemas empresariales, software a medida tecnológica
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
