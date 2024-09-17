import React from 'react';
import { Contact } from './contact';

export const AplicacionesWeb = () => {
    return (
        <>
            <div style={{ fontFamily: "'Inter', sans-serif", maxWidth: '900px', margin: '0 auto', padding: '20px', lineHeight: '1.8', color: '#2A2A2A',marginTop:'70px'}}>
            <h1 style={{ textAlign: 'center', fontSize: '3.2em', marginBottom: '0.5em', color: '#212529', letterSpacing: '0.05em', fontWeight: '700' }}>
                Aplicaciones Web
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25em', color: '#6c757d', marginBottom: '2em', maxWidth: '700px', margin: '0 auto' }}>
                Mantenimiento de código heredado y construcción de una plataforma robusta y de fácil mantenimiento
            </p>

            <div style={{ marginBottom: '2em', overflow: 'hidden', borderRadius: '20px' }}>
                <img 
                    src="img/aplicaciones-web.jpg" 
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
                    QualitySoft se especializa en el desarrollo de páginas web personalizadas y de alta calidad, diseñadas para satisfacer las necesidades específicas de cada cliente. Desde sitios corporativos hasta tiendas en línea y plataformas interactivas, QualitySoft combina creatividad, tecnología y una sólida metodología de trabajo para entregar soluciones web eficientes, modernas y escalables. Cada proyecto es abordado de manera integral, asegurando un diseño atractivo, una experiencia de usuario óptima y un rendimiento excepcional.
                    </p>

                    <h3 style={{ fontSize: '1.8em', marginTop: '1.8em', color: '#343a40', fontWeight: '500' }}>El Cliente</h3>
                    <p>
                        Nuestros clientes varían desde pequeñas empresas locales hasta grandes corporaciones que buscan establecer o mejorar su presencia en línea. Todos comparten la necesidad de una página web que no solo refleje su identidad de marca, sino que también ofrezca a sus usuarios una experiencia memorable y funcional. Los clientes buscan un socio tecnológico que pueda entender sus objetivos, transformar sus ideas en una solución web efectiva, y proporcionar un soporte continuo para adaptarse a las cambiantes necesidades del mercado.
                    </p>

                    <h3 style={{ fontSize: '1.8em', marginTop: '1.8em', color: '#343a40', fontWeight: '500' }}>El Desafío</h3>
                    <p>
                    En un mundo cada vez más digital, tener una presencia en línea sólida y efectiva es esencial. Sin embargo, muchos negocios enfrentan desafíos como la falta de personalización, diseños desactualizados, rendimiento deficiente y sitios web que no están optimizados para dispositivos móviles. Además, la necesidad de integrar diversas funcionalidades, como formularios de contacto, sistemas de reservas, tiendas en línea y áreas de usuario personalizadas, agrega complejidad al desarrollo de un sitio web. QualitySoft enfrenta el desafío de crear páginas web que no solo sean visualmente atractivas, sino también seguras, rápidas, optimizadas para SEO, y capaces de brindar una experiencia de usuario excepcional en todos los dispositivos.
                    </p>

                </div>

                <div style={{ flex: '0.35', padding: '1.5em', border: '1px solid #e9ecef', borderRadius: '15px', backgroundColor: '#ffffff', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)' }}>
                    <h2 style={{ fontSize: '1.8em', paddingBottom: '0.1em' , width: '200px', marginTop: '20px', position:'relative' }}>
                        Detalles del Proyecto
                    </h2>
                    <p style={{ marginTop: '1em', fontWeight: 'bold', color: '#212529' }}>Cliente:</p>
                    <p style={{ color: '#495057' }}>Desarrollo Web</p>
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

export default AplicacionesWeb;
