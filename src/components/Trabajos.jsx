import React from 'react';
import { Contact } from './contact';

export const Trabajos = () => {
    return (
        <>
            <div style={{ fontFamily: "'Inter', sans-serif", maxWidth: '900px', margin: '0 auto', padding: '20px', lineHeight: '1.8', color: '#2A2A2A',marginTop:'70px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3.2em', marginBottom: '0.5em', color: '#212529', letterSpacing: '0.05em', fontWeight: '700' }}>
                Plataforma de Trabajos
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25em', color: '#6c757d', marginBottom: '2em', maxWidth: '700px', margin: '0 auto' }}>
                Mantenimiento de código heredado y construcción de una plataforma robusta y de fácil mantenimiento
            </p>

            <div style={{ marginBottom: '2em', overflow: 'hidden', borderRadius: '20px' }}>
                <img 
                    src="img/trabajos.jpg" 
                    alt="Healthcare Platform" 
                    style={{ width: '100%', display: 'block', transition: 'transform 0.3s ease', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }} 
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '3em', gap: '2em' }}>
                <div style={{ flex: '1' }}>
                    <h2 style={{ fontSize: '1.8em', paddingBottom: '0.1em' , width: '200px', marginTop: '20px', position:'relative'  }}>
                        Descripción del Proyecto
                    </h2>
                    <p>
                        En La Paz, Bolivia, y otras ciudades, la búsqueda de trabajadores de confianza para servicios domésticos y de mantenimiento puede ser un desafío. Ante la falta de un sistema centralizado y confiable, QualitySoft desarrolló "Manos a la Obra: Plataforma de Servicios Inmediatos," una solución tecnológica que conecta a clientes con trabajadores independientes de manera eficiente, segura y rápida. La plataforma tiene como objetivo revolucionar la forma en que se contratan servicios como limpieza, plomería, electricidad y jardinería, proporcionando una experiencia similar a las aplicaciones de entrega a domicilio, pero enfocada en trabajos domésticos y profesionales.
                    </p>

                    <h3 style={{ fontSize: '1.8em', marginTop: '1.8em', color: '#343a40', fontWeight: '500' }}>El Cliente</h3>
                    <p>
                        El cliente para este proyecto es una entidad comprometida con mejorar la accesibilidad y la calidad de los servicios laborales en La Paz, Bolivia. Reconoció la necesidad de un sistema innovador que facilitara la contratación de servicios frecuentes y de mantenimiento, tanto para los clientes como para los trabajadores independientes. La visión del cliente era crear una plataforma que no solo agilizara el proceso de contratación, sino que también empoderara a los trabajadores, brindándoles una herramienta que les permitiera aumentar su visibilidad y expandir sus oportunidades laborales.
                    </p>

                    <h3 style={{ fontSize: '1.8em', marginTop: '1.8em', color: '#343a40', fontWeight: '500' }}>El Desafío</h3>
                    <p>
                        En Bolivia, la contratación de trabajadores para servicios domésticos y de mantenimiento se basaba principalmente en recomendaciones informales y métodos de búsqueda convencionales, que a menudo resultaban insuficientes para garantizar la calidad y disponibilidad inmediata de los servicios. Este modelo fragmentado generaba desafíos significativos para los clientes, que enfrentaban dificultades para encontrar profesionales confiables y competentes. Además, los trabajadores independientes carecían de una plataforma centralizada que les permitiera ofrecer sus servicios de manera efectiva y llegar a una audiencia más amplia.
                    </p>

                    <h3 style={{ fontSize: '1.8em', marginTop: '1.8em', color: '#343a40', fontWeight: '500' }}>La Solución Aseguró</h3>
                    <p>
                        QualitySoft desarrolló "Manos a la Obra: Plataforma de Servicios Inmediatos," una plataforma web innovadora que utiliza tecnología de geolocalización para conectar a los clientes con trabajadores disponibles en su área. La solución permite a los usuarios encontrar y contratar servicios con rapidez, optimizando los tiempos de respuesta. A través de una interfaz intuitiva, los clientes pueden buscar y filtrar profesionales especializados según sus necesidades específicas.
                    </p>
                </div>

                <div style={{ flex: '0.35', padding: '1.5em', border: '1px solid #e9ecef', borderRadius: '15px', backgroundColor: '#ffffff', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)' }}>
                    <h2 style={{ fontSize: '1.8em', paddingBottom: '0.1em' , width: '200px', marginTop: '20px', position:'relative' }}>
                        Detalles del Proyecto
                    </h2>
                    <p style={{ marginTop: '1em', fontWeight: 'bold', color: '#212529' }}>Cliente:</p>
                    <p style={{ color: '#495057' }}>Plataforma de Trabajos</p>
                    <p style={{ marginTop: '1em', fontWeight: 'bold', color: '#212529' }}>Fecha:</p>
                    <p style={{ color: '#495057' }}>04 de diciembre de 2017</p>
                    <p style={{ marginTop: '1em', fontWeight: 'bold', color: '#212529' }}>Categorías:</p>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'none', margin: '0', color: '#495057' }}>
                        <li style={{ marginBottom: '0.8em', display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#007BFF', marginRight: '10px' }}></span>
                            Servicios de desarrollo web
                        </li>
                        <li style={{ marginBottom: '0.8em', display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#007BFF', marginRight: '10px' }}></span>
                            JavaScript, Angular
                        </li>
                        <li style={{ marginBottom: '0.8em', display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#007BFF', marginRight: '10px' }}></span>
                            Soluciones de diseño creativo
                        </li>
                        <li style={{ marginBottom: '0.8em', display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#007BFF', marginRight: '10px' }}></span>
                            Servicios de calidad
                        </li>
                        <li style={{ marginBottom: '0.8em', display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#007BFF', marginRight: '10px' }}></span>
                            Subcontratación, Nearshore
                        </li>
                        <li style={{ marginBottom: '0.8em', display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#007BFF', marginRight: '10px' }}></span>
                            Automatización
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <>
            <Contact/>
        </>
        </>
    );
};

export default Trabajos;
