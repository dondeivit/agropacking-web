/**
 * Componente Footer.
 * @component
 * @description Pie de página de la aplicación. Contiene branding, navegación rápida,
 * datos de contacto y enlaces a redes sociales. 
 */
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import logo from '../assets/logo_blanco_verde.svg';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agro-vino text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/20">
          
          {/* Columna 1: Branding y Propuesta de Valor */}
          <div className="pr-4">
            <a href="#inicio" className="inline-block mb-6 transition-opacity hover:opacity-90">
              <img 
                src={logo} 
                alt="Logo Agropacking Aconcagua" 
                className="h-16 w-auto object-contain" 
              />
            </a>
            <p className="text-sm text-gray-300 leading-relaxed">
              Diseño y fabricación de cámaras de gasificación de alta hermeticidad para el control efectivo de botrytis y protección de uvas y arándanos, integrando eficiencia técnica, control certificado en ppm y atención en terreno a lo largo de Chile.
            </p>
          </div>

          {/* Columna 2: Navegación Interna*/}
          <nav aria-label="Navegación del pie de página">
            <h4 className="text-sm font-bold tracking-wider mb-6 uppercase">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#empresa" className="hover:text-white transition-colors">Empresa</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </nav>

          {/* Columna 3: Información de Contacto*/}
          <address className="not-italic">
            <h4 className="text-sm font-bold tracking-wider mb-6 uppercase">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              <li>Atención en terreno a lo largo de Chile</li>
              <li>Marco Solis: +56 9 9340 1218</li>
              <li><a href="mailto:agropacking.servicios@gmail.com" className="hover:text-white transition-colors">agropacking.servicios@gmail.com</a></li>
            </ul>
            
            {/* Redes Sociales*/}
            <div className="flex gap-4">
              <a href="mailto:agropacking.servicios@gmail.com" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-verde transition-colors" aria-label="Enviar correo">
                <SiGmail size={16} />
              </a>
              <a href="https://wa.me/56993401218" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-verde transition-colors" aria-label="Contactar por WhatsApp">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://instagram.com/agropacking.aconcaguaspa" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-verde transition-colors" aria-label="Visitar Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://youtube.com/@agropackingaconcagua6339" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-verde transition-colors" aria-label="Visitar YouTube">
                <FaYoutube size={16} />
              </a>
            </div>
          </address>

        </div>

        <div className="pt-6 text-center text-xs text-gray-400 flex flex-col gap-2">
          <p>© {currentYear} Agropacking Aconcagua SpA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}