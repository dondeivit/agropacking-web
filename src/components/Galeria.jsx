/**
 * Componente Galería.
 * @component
 * @description Renderiza un grid asimétrico con etiquetas flotantes y un lightbox minimalista en pantalla completa.
 */
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import img1 from '../assets/imagen1.jpeg';
import img2 from '../assets/imagen2.jpeg';
import img3 from '../assets/imagen3.jpeg';

const colIzquierda = [
  { 
    id: 1, 
    tipo: 'img', 
    src: img1, 
    titulo: "Tablero de Gasificador S02",
    subtitulo: "",
    alt: "Tablero de Gasificador S02" 
  }, 
  { 
    id: 2, 
    tipo: 'video', 
    src: video1, 
    titulo: "Sulfodosificador de SO2",
    subtitulo: "",
    alt: "Sulfodosificador para cámara de SO2" 
  },
  { 
    id: 3, 
    tipo: 'video', 
    src: video3, 
    titulo: "Termo eléctrico - Sulfodosificador de SO2",
    subtitulo: "Instalacion de equipos para cámara de SO2",
    alt: "Video de operación de equipos en cámara" 
  }
];

const colDerecha = [
  { 
    id: 4, 
    tipo: 'video', 
    src: video2, 
    titulo: "Gasificador de SO2",
    subtitulo: "",
    alt: "Gasificador de SO2"
  },
  { 
    id: 5, 
    tipo: 'img', 
    src: img2, 
    horizontal: true, 
    titulo: "Seguridad y Calibración",
    subtitulo: "MSA ALTAIR 2X",
    alt: "medición de seguridad con detector portátil de gas dióxido de azufre (SO2) MSA ALTAIR 2X en instalaciones de packing" 
  },
  { 
    id: 6, 
    tipo: 'video', 
    src: video4, 
    titulo: "instalación de equipos para cámara de SO2",
    subtitulo: "Control técnico",
    alt: "Sulfodosificador para cámaras de SO2" 
  },
  { 
    id: 7, 
    tipo: 'img', 
    src: img3, 
    titulo: "Sulfodosificador SO2",
    subtitulo: "Dosificación industrial",
    alt: "Tablero de control y automatización con sistema dosificador para procesos industriales en packing" 
  } 
];

export default function Galeria() {
  const [elementoActivo, setElementoActivo] = useState(null);

  const clasesBase = "w-full rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 transition-all duration-500 ease-out";

  return (
    <section id="galeria" className="py-24 md:py-32 bg-white relative">
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
            Resultados reales en los principales packing a lo largo de Chile. Así se ve la protección, seguridad y eficiencia cuando nuestros equipos operan a máxima capacidad.
          </p>
        </div>

        {/* Grid de Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Columna Izquierda */}
          <div className="flex flex-col gap-8">
            {colIzquierda.map(item => (
              <div 
                key={item.id} 
                onClick={() => setElementoActivo(item)}
                className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gray-900"
              >
                {item.titulo && (
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-gray-100 pointer-events-none transition-transform duration-300 group-hover:scale-105">
                    <span className="text-xs md:text-sm font-bold text-gray-900 tracking-tight block">
                      {item.titulo}
                    </span>
                    {item.subtitulo && (
                      <span className="text-[11px] text-gray-600 font-light block">
                        {item.subtitulo}
                      </span>
                    )}
                  </div>
                )}
                {item.tipo === 'img' ? (
                  <img src={item.src} alt={item.alt} className={`${clasesBase} group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] h-auto`} />
                ) : (
                  <video 
                    src={item.src} 
                    playsInline 
                    muted 
                    autoPlay 
                    loop 
                    preload="auto" 
                    aria-label={item.alt} 
                    className={`${clasesBase} group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] h-auto`} 
                  />
                )}
              </div>
            ))}
          </div>

          {/* Columna Derecha */}
          <div className="flex flex-col gap-8">
            {colDerecha.map(item => (
              <div 
                key={item.id} 
                onClick={() => setElementoActivo(item)}
                className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gray-900"
              >
                {item.titulo && (
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-gray-100 pointer-events-none transition-transform duration-300 group-hover:scale-105">
                    <span className="text-xs md:text-sm font-bold text-gray-900 tracking-tight block">
                      {item.titulo}
                    </span>
                    {item.subtitulo && (
                      <span className="text-[11px] text-gray-600 font-light block">
                        {item.subtitulo}
                      </span>
                    )}
                  </div>
                )}
                {item.tipo === 'img' ? (
                  <img src={item.src} alt={item.alt} className={`${clasesBase} group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] ${item.horizontal ? 'aspect-video' : 'h-auto'}`} />
                ) : (
                  <video 
                    src={item.src} 
                    playsInline 
                    muted 
                    autoPlay 
                    loop 
                    preload="auto" 
                    aria-label={item.alt} 
                    className={`${clasesBase} group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] h-auto`} 
                  />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Minimalista en Pantalla Completa */}
      {elementoActivo && (
        <div 
          onClick={() => setElementoActivo(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
        >
          {/* Botón de Cerrar Flotante Discreto */}
          <button 
            onClick={() => setElementoActivo(null)}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all backdrop-blur-sm"
            aria-label="Cerrar vista"
          >
            <FiX size={24} />
          </button>

          {/* Contenedor puramente multimedia y limpio */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-6xl w-full flex flex-col items-center justify-center"
          >
            {elementoActivo.tipo === 'img' ? (
              <img 
                src={elementoActivo.src} 
                alt={elementoActivo.alt} 
                className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl"
              />
            ) : (
              <video 
                src={elementoActivo.src} 
                controls 
                autoPlay 
                muted
                playsInline
                className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl"
              />
            )}

            {/* Título y subtítulo sutiles en la parte inferior flotando */}
            {elementoActivo.titulo && (
              <div className="mt-4 text-center">
                <h3 className="text-white font-medium text-base tracking-wide">{elementoActivo.titulo}</h3>
                {elementoActivo.subtitulo && <p className="text-gray-400 text-xs font-light mt-0.5">{elementoActivo.subtitulo}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}