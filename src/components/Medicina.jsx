import React from 'react';
import { Contact } from './contact';

export const Medicina = () => {
    return (
        <>
            <div style={{ fontFamily: "'Inter', sans-serif", maxWidth: '900px', margin: '0 auto', padding: '20px', lineHeight: '1.8', color: '#2A2A2A',marginTop:'70px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3.2em', marginBottom: '0.5em', color: '#212529', letterSpacing: '0.05em', fontWeight: '700' }}>
                Plataforma de Atención Sanitaria
            </h1>
            <p style={{ textAlign: 'center', fontSize: '1.25em', color: '#6c757d', marginBottom: '2em', maxWidth: '700px', margin: '0 auto' }}>
                Mantenimiento de código heredado y construcción de una plataforma robusta y de fácil mantenimiento
            </p>

            <div style={{ marginBottom: '2em', overflow: 'hidden', borderRadius: '20px' }}>
                <img 
                    src="img/medicina.jpg" 
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
                    En un contexto donde el acceso rápido y eficiente a los servicios médicos es crucial, QualitySoft desarrolló una plataforma integral de medicina diseñada para conectar a pacientes con profesionales de la salud, facilitando la gestión de citas, la atención médica remota y el acceso a historiales clínicos. Esta solución tecnológica tiene como objetivo mejorar la experiencia de los pacientes y optimizar los procesos para los profesionales de la salud, promoviendo un sistema de salud más accesible, eficiente y moderno.
                    </p>

                    <h3 style={{ fontSize: '1.8em', marginTop: '1.8em', color: '#343a40', fontWeight: '500' }}>El Cliente</h3>
                    <p>
                    Nuestro cliente es una red de clínicas y hospitales en Bolivia, comprometida con mejorar la calidad y la accesibilidad de los servicios médicos. Buscaban una plataforma que permitiera a los pacientes acceder a atención médica de manera rápida y sencilla, al tiempo que proporcionaba a los profesionales de la salud una herramienta robusta para gestionar sus consultas, historiales médicos y la comunicación con los pacientes. El cliente deseaba una solución que fuera tanto segura como adaptable, capaz de manejar las complejidades del sector de la salud y de cumplir con las normativas vigentes.
                    </p>

                    <h3 style={{ fontSize: '1.8em', marginTop: '1.8em', color: '#343a40', fontWeight: '500' }}>El Desafío</h3>
                    <p>
                    El sistema de salud en Bolivia enfrentaba desafíos significativos en términos de eficiencia y accesibilidad. Los pacientes a menudo experimentaban dificultades para programar citas, acceder a su historial médico, y recibir atención médica oportuna. Por otro lado, los profesionales de la salud necesitaban una solución que les permitiera gestionar sus consultas de manera más efectiva, especialmente en un entorno donde la demanda de atención médica remota había aumentado significativamente. La fragmentación de los datos y la falta de un sistema centralizado hacían que el proceso de atención fuera lento y a veces ineficiente.

                    QualitySoft tenía la tarea de crear una plataforma que abordara estas necesidades de manera integral. Esto requería no solo la implementación de funcionalidades avanzadas, como la gestión de citas y la telemedicina, sino también la garantía de que los datos médicos se manejaran de forma segura y conforme a las regulaciones de privacidad, como la Ley de Protección de Datos Personales en Bolivia.
                    </p>

                    <h3 style={{ fontSize: '1.8em', marginTop: '1.8em', color: '#343a40', fontWeight: '500' }}>La Solución Aseguró</h3>
                    <p>
                    QualitySoft desarrolló una plataforma de medicina integral que centraliza y optimiza la gestión de los servicios médicos. A través de una interfaz amigable, los pacientes pueden programar y gestionar sus citas médicas de manera sencilla, ya sea para consultas presenciales o teleconsultas. La plataforma también proporciona acceso a historiales médicos electrónicos, permitiendo a los pacientes y profesionales de la salud revisar información importante como diagnósticos, recetas y tratamientos previos.

                    La funcionalidad de telemedicina permite a los profesionales de la salud brindar atención remota, facilitando consultas en línea a través de videollamadas seguras. Esto no solo mejora el acceso a la atención médica, especialmente para pacientes en áreas remotas, sino que también reduce los tiempos de espera y la saturación de las clínicas y hospitales. Los profesionales de la salud cuentan con herramientas avanzadas para gestionar su agenda, realizar un seguimiento de la evolución de los pacientes, y compartir documentos médicos de forma segura.
                    </p>
                </div>

                <div style={{ flex: '0.35', padding: '1.5em', border: '1px solid #e9ecef', borderRadius: '15px', backgroundColor: '#ffffff', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)' }}>
                    <h2 style={{ fontSize: '1.8em', paddingBottom: '0.1em' , width: '200px', marginTop: '20px', position:'relative' }}>
                        Detalles del Proyecto
                    </h2>
                    <p style={{ marginTop: '1em', fontWeight: 'bold', color: '#212529' }}>Cliente:</p>
                    <p style={{ color: '#495057' }}>Plataforma de atención sanitaria</p>
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

export default Medicina;
