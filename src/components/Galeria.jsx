/**
 * Componente Galería.
 * @component
 * @description Renderiza un grid asimétrico para el material audiovisual con etiquetas alt optimizadas para SEO.
 */
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import img1 from '../assets/imagen1.jpeg';
import img2 from '../assets/imagen2.jpeg';
import img3 from '../assets/imagen3.jpeg';

// Arreglos con descripciones específicas orientadas a SEO local y técnico
const colIzquierda = [
  { 
    id: 1, 
    tipo: 'img', 
    src: img1, 
    alt: "Tablero de Gasificador S02" 
  }, 
  { 
    id: 2, 
    tipo: 'video', 
    src: video1, 
    alt: "Video de instalación en línea de proceso de packing" 
  }
];

const colDerecha = [
  { 
    id: 3, 
    tipo: 'video', 
    src: video2, 
    alt: "Gasificador S02" 
  },
  { 
    id: 4, 
    tipo: 'img', 
    src: img2, 
    horizontal: true, 
    alt: "medición de seguridad con detector portátil de gas dióxido de azufre (SO2) MSA ALTAIR 2X en instalaciones de packing" 
  }, 
  { 
    id: 5, 
    tipo: 'img', 
    src: img3, 
    alt: "Tablero de control y automatización con sistema dosificador para procesos industriales en packing" 
  } 
];

const MediaItem = ({ tipo, src, alt, horizontal }) => {
  const clasesBase = "w-full rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 transition-shadow duration-500 ease-out";
  
  return (
    <div className="relative group cursor-pointer">
      {tipo === 'img' ? (
        <img 
          src={src} 
          alt={alt} 
          className={`${clasesBase} hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] ${horizontal ? 'aspect-video' : 'h-auto'}`}
        />
      ) : (
        <video 
          src={src} 
          controls 
          playsInline
          muted
          autoPlay
          loop
          preload="auto"
          aria-label={alt}
          className={`${clasesBase} hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] h-auto`} 
        />
      )}
    </div>
  );
};

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-agro-verde font-bold tracking-widest uppercase text-sm md:text-base mb-4 block">
            Evidencia en Terreno
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Nuestra tecnología en acción
          </h2>
          <p className="text-lg text-gray-700 font-light">
            Resultados reales en los principales packing del Valle del Aconcagua. Así se ve la protección, seguridad y eficiencia cuando nuestros equipos operan a máxima capacidad.
          </p>
        </div>

        {/* Grid de Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-8">
            {colIzquierda.map(item => <MediaItem key={item.id} {...item} />)}
          </div>

          <div className="flex flex-col gap-8">
            {colDerecha.map(item => <MediaItem key={item.id} {...item} />)}
          </div>

        </div>
      </div>
    </section>
  );
}