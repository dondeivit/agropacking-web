/**
 * Componente Hero principal de la Landing Page.
 * @component
 * @description Renderiza la sección superior con un overlay más oscuro y tipografía de mayor contraste para una lectura óptima.
 */
import fondoHero from '../assets/fondo-hero.webp'; 

export default function Hero() {
  return (
    <section 
      id="inicio"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center px-4"
      style={{ 
        backgroundImage: `url(${fondoHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay oscuro optimizado para mayor contraste */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Contenedor del contenido */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-16">
        
        <h2 className="text-gray-200 font-semibold tracking-widest text-sm md:text-base mb-4 uppercase">
          Tecnología y Postcosecha a lo largo de Chile
        </h2>

        {/* Título principal sin punto final y con sombra marcada */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-md">
          Protección especializada para uvas y arándanos
        </h1>
        
        {/* Párrafo con tipografía más clara, nítida y legible */}
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl font-normal leading-relaxed drop-shadow">
          Diseño y fabricación de <strong className="font-bold text-white">equipos de postcosecha</strong> para uvas y arándanos. Creamos soluciones en <strong className="font-bold text-white">cámaras de gasificación</strong> que protegen tu fruta, reducen la botrytis y aseguran una conservación óptima.
        </p>
        
        {/* Contenedor de botones */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#servicios" 
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 active:bg-gray-300 transition-colors shadow-lg"
          >
            Ver servicios
          </a>
          
          <a 
            href="https://wa.me/56993401218" 
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md bg-white/15 border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 active:bg-gray-200 active:border-gray-200 active:text-gray-900 transition-colors shadow-lg"
          >
            Contactanos
          </a>
        </div>

      </div>
    </section>
  );
}