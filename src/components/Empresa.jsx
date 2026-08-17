/**
 * Componente Empresa (Nosotros).
 * @component
 * @description Renderiza la filosofía y métricas clave de la compañía con un enfoque sobrio y técnico.
 */
export default function Empresa() {
  return (
    <section id="empresa" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal con Propuesta de Valor Integrada */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-agro-verde font-bold tracking-widest uppercase text-sm md:text-base mb-4 block">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            Experiencia en terreno y respaldo técnico en postcosecha.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
            Especialistas en el diseño, fabricación y mantención de cámaras de gasificación orientadas a asegurar el control efectivo de <strong className="font-semibold text-gray-900">botrytis</strong> en uvas y arándanos. Desarrollamos infraestructura de alta hermeticidad y precisión respaldada por mediciones certificadas en ppm, protegiendo la rentabilidad de cada exportación a lo largo de Chile.
          </p>
        </div>

        {/* Bloque de Números de Impacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div className="bg-gray-100 p-12 rounded-3xl border border-gray-200 flex flex-col items-center text-center justify-center">
            <span className="text-6xl md:text-7xl font-extrabold text-agro-verde tracking-tighter mb-4 block">
              40+
            </span>
            <h3 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-widest mb-2">
              Años de Experiencia
            </h3>
            <p className="text-gray-600 font-light">
              Trayectoria técnica acumulada en el rubro agrícola y de procesos para packing.
            </p>
          </div>

          <div className="bg-gray-100 p-12 rounded-3xl border border-gray-200 flex flex-col items-center text-center justify-center">
            <span className="text-6xl md:text-7xl font-extrabold text-agro-verde tracking-tighter mb-4 block">
              9+
            </span>
            <h3 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-widest mb-2">
              Años como Empresa
            </h3>
            <p className="text-gray-600 font-light">
              Trayectoria consolidada desde 2017 desarrollando soluciones de gasificación de alto estándar.
            </p>
          </div>

        </div>

        {/* Bloque de Pilares Técnicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Control y precisión</h4>
            <p className="text-gray-700 font-light leading-relaxed">
              Equipamiento calibrado para asegurar una dosificación exacta y segura del gas en las cámaras de arándanos y uvas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Hermeticidad y seguridad</h4>
            <p className="text-gray-700 font-light leading-relaxed">
              Construcción estructural robusta orientada a garantizar estabilidad operativa y larga vida útil.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Atención en terreno</h4>
            <p className="text-gray-700 font-light leading-relaxed">
              Respuesta directa y soporte técnico oportuno para resolver requerimientos de los productores a lo largo de Chile.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}