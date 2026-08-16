/**
 * Componente Servicios.
 * @component
 * @description Despliega la oferta de valor y soluciones técnicas especializadas para packing.
 */
import { FiSettings, FiBox, FiCheckCircle, FiUsers, FiCheck } from 'react-icons/fi';

const listaServicios = [
  {
    id: 1,
    titulo: "Servicio Técnico y Mantención",
    descripcion: "Mantención preventiva y correctiva para asegurar la eficiencia, seguridad y correcta aplicación del tratamiento en terreno.",
    puntos: [
      "Mantención Preventiva: Inspección completa, limpieza técnica, revisión estructural, cambio de componentes y calibración.",
      "Mantención Correctiva: Reparación de fallas, reemplazo de piezas, soldaduras, refuerzos estructurales y ajustes mecánicos."
    ],
    icono: <FiSettings strokeWidth={1.5} className="w-8 h-8 text-agro-verde" />
  },
  {
    id: 2,
    titulo: "Fabricación e Instalación",
    descripcion: "Diseño a medida de equipos y sistemas de postcosecha optimizados exclusivamente para uva de mesa y arándanos a lo largo de Chile.",
    puntos: [
      "Cámaras de sulfitado (SO2) de alta hermeticidad y resistencia estructural.",
      "Termoeléctrico industrial de acero inoxidable (control digital y electrónico entre 25°C y 10°C para evitar condensación y quemaduras en la fruta).",
      "Gasificador móvil con panel electrónico y doble memoria (M1/M2).",
      "Sulfo dosificadores de precisión."
    ],
    icono: <FiBox strokeWidth={1.5} className="w-8 h-8 text-agro-verde" />
  },
  {
    id: 3,
    titulo: "Certificación Técnica",
    descripcion: "Evaluación exhaustiva tras cada inspección para garantizar el cumplimiento de estándares técnicos.",
    puntos: [
      "Informe de estado general, condiciones de seguridad y operatividad.",
      "Recomendaciones técnicas y entrega de certificación oficial de funcionamiento."
    ],
    icono: <FiCheckCircle strokeWidth={1.5} className="w-8 h-8 text-agro-verde" />
  },
  {
    id: 4,
    titulo: "Capacitación Operativa",
    descripcion: "Inducción técnica integral en terreno para asegurar el correcto funcionamiento de los equipos por parte de tu personal.",
    puntos: [
      "Capacitación para operarios y jefes de packing.",
      "Instrucción en el manejo de paneles con memorias M1/M2 y protocolos de seguridad operacional."
    ],
    icono: <FiUsers strokeWidth={1.5} className="w-8 h-8 text-agro-verde" />
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-agro-verde font-bold tracking-widest uppercase text-sm md:text-base mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Ingeniería y soporte técnico para uvas y arándanos
          </h2>
          <p className="text-lg text-gray-700 font-light">
            Soluciones integrales de postcosecha diseñadas para proteger la fruta en cada etapa del proceso a lo largo de Chile.
          </p>
        </div>

        {/* Cuadrícula de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {listaServicios.map((servicio) => (
            <div 
              key={servicio.id} 
              className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-agro-verde/10 rounded-2xl flex items-center justify-center mb-6">
                  {servicio.icono}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-700 font-light mb-6">
                  {servicio.descripcion}
                </p>
              </div>

              <ul className="space-y-2.5 border-t border-gray-100 pt-6">
                {servicio.puntos.map((punto, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FiCheck className="text-agro-verde shrink-0 mt-1" size={16} />
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}