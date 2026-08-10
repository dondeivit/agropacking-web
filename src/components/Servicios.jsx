/**
 * Componente Servicios.
 * @component
 * @description Despliega la oferta de valor mediante un grid modular de tarjetas.
 */
import { FiSettings, FiBox, FiCheckCircle, FiLayers } from 'react-icons/fi';

const listaServicios = [
  {
    id: 1,
    titulo: "Servicio Técnico",
    descripcion: "Mantención preventiva y correctiva de sus equipos. Solucionamos fallas y realizamos ajustes mecánicos para minimizar tiempos de detención.",
    icono: <FiSettings strokeWidth={1.5} className="w-8 h-8 text-agro-verde" />
  },
  {
    id: 2,
    titulo: "Fabricación e Instalación",
    descripcion: "Diseño de cámaras y carros dosificadores a medida. Incluye instalación, puesta en marcha y capacitación integral para sus operarios.",
    icono: <FiBox strokeWidth={1.5} className="w-8 h-8 text-agro-verde" />
  },
  {
    id: 3,
    titulo: "Certificación Técnica",
    descripcion: "Evaluación exhaustiva de operatividad y seguridad. Entregamos informes detallados y certificados de funcionamiento de sus cámaras.",
    icono: <FiCheckCircle strokeWidth={1.5} className="w-8 h-8 text-agro-verde" />
  },
  {
    id: 4,
    titulo: "Insumos y Repuestos",
    descripcion: "Suministro de componentes clave, recambios estructurales y piezas calibradas para asegurar la correcta aplicación del gas en todo momento.",
    icono: <FiLayers strokeWidth={1.5} className="w-8 h-8 text-agro-verde" />
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-agro-verde font-bold tracking-widest uppercase text-sm md:text-base mb-4 block">
            Nuestro Método
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            El respaldo técnico que tu operación necesita
          </h2>
          <p className="text-lg text-gray-700 font-light">
            Intervenimos en cada etapa crítica del proceso de sulfitado para garantizar que tus equipos funcionen sin interrupciones y bajo la normativa vigente.
          </p>
        </div>

        {/* Cuadrícula de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {listaServicios.map((servicio) => (
            <div 
              key={servicio.id} 
              className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200"
            >
              <div className="w-16 h-16 bg-agro-verde/10 rounded-2xl flex items-center justify-center mb-6">
                {servicio.icono}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                {servicio.titulo}
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}