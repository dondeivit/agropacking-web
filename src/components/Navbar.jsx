/**
 * Componente Navbar dinámico.
 * @component
 * @description Barra de navegación responsiva que cambia de estado (transparente a sólido)
 * basado en el evento de scroll. Implementa swap de assets para mantener el ratio de contraste.
 */
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

// Importación de assets condicionales para manejo de contraste
import logoOscuro from '../assets/logo.svg'; 
import logoBlanco from '../assets/logo_blanco.svg'; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Contenedor del Logo con swap condicional */}
          <a href="#inicio" className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-300">
            <img 
              src={isScrolled ? logoOscuro : logoBlanco} 
              alt="Logo Agropacking Aconcagua" 
              className="h-12 md:h-14 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Navegación Desktop*/}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a 
              href="#inicio" 
              className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-agro-verde' : 'text-gray-200 hover:text-white'}`}
            >
              INICIO
            </a>
            <a 
              href="#servicios" 
              className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-agro-verde' : 'text-gray-200 hover:text-white'}`}
            >
              SERVICIOS
            </a>
            <a 
              href="#empresa" 
              className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-agro-verde' : 'text-gray-200 hover:text-white'}`}
            >
              NOSOTROS
            </a>
            <a 
              href="#contacto" 
              className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-agro-verde' : 'text-gray-200 hover:text-white'}`}
            >
              CONTACTO
            </a>
          </nav>

          {/* CTA Principal (Botón WhatsApp) */}
          <div className="flex items-center">
            <a 
              href="https://wa.me/56993401218" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow-sm transition-colors duration-300"
            >
              <FaWhatsapp className="text-lg md:hidden" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}