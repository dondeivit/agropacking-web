/**
 * Componente Hero principal de la Landing Page.
 * @component
 * @description Renderiza la sección superior con enfoque técnico, sin frases exageradas y SEO a escala nacional.
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
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Contenedor del contenido */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-16">
        
        <h2 className="text-gray-300 font-medium tracking-widest text-sm md:text-base mb-4 uppercase">
          Tecnología y Postcosecha a lo largo de Chile
        </h2>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-sm">
          Protección especializada para uvas y arándanos.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
          Diseño, mantención y certificación de cámaras de <strong className="font-bold text-white">SO<span className="text-[0.6em] align-baseline">2</span></strong> con un riguroso estándar técnico para asegurar la rentabilidad de la fruta de exportación.
        </p>
        
        {/* Contenedor de botones */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#servicios" 
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 active:bg-gray-300 transition-colors"
          >
            Ver servicios
          </a>
          
          <a 
            href="https://wa.me/56993401218" 
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 active:bg-gray-200 active:border-gray-200 active:text-gray-900 transition-colors"
          >
            Contactanos
          </a>
        </div>

      </div>
    </section>
  );
}