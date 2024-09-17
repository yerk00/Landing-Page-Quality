import React, { useEffect, useState } from "react";

export const Tecno = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000); // Cambia cada 3 segundos
      return () => clearInterval(interval);
    }
  }, [data]);

  if (!data || data.length === 0) {
    return <div>No technologies</div>;
  }

  const angle = 360 / data.length;

  return (
    <div id="Testimonials">
      <div className="section-title text-center">
          <h2>Tecnologias usadas</h2>
          <p>
          "En QualitySoft, utilizamos tecnologías como JavaScript, Python, React y Angular para desarrollar soluciones de software innovadoras"
          </p>
      </div>
      <div className="carousel-container">
        {data.map((item, index) => {
          const rotateY = `rotateY(${index * angle}deg) translateZ(300px)`;
          const isCenter = index === currentIndex;

          return (
            <div
              key={index}
              className={`carousel-item ${isCenter ? "center" : ""}`}
              style={{ transform: rotateY }}
            >
              <img src={item.img} alt={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
