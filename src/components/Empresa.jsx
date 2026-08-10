/**
 * Componente Empresa (Nosotros).
 * @component
 * @description Renderiza la filosofía y métricas clave de la compañía.
 */
export default function Empresa() {
  return (
    <section id="empresa" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-agro-verde font-bold tracking-widest uppercase text-sm md:text-base mb-4 block">
            Nuestra Filosofía
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            Pasión por la tierra, precisión en la postcosecha.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
            Fusionamos el arte de preservar la frescura con un profundo conocimiento técnico. Desarrollamos soluciones de gasificación que protegen tu inversión, integrando <strong className="font-semibold text-gray-900">impacto económico</strong> y <strong className="font-semibold text-gray-900">responsabilidad medioambiental</strong>.
          </p>
        </div>

        {/* Bloque de Números de Impacto (Contraste aumentado en fondo y textos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div className="bg-gray-100 p-12 rounded-3xl border border-gray-200 flex flex-col items-center text-center justify-center">
            <span className="text-6xl md:text-7xl font-extrabold text-agro-verde tracking-tighter mb-4 block">
              40+
            </span>
            <h3 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-widest mb-2">
              Años de Experiencia
            </h3>
            <p className="text-gray-600 font-light">
              Conocimiento técnico profundo del sector agrícola y postcosecha.
            </p>
          </div>

          <div className="bg-gray-100 p-12 rounded-3xl border border-gray-200 flex flex-col items-center text-center justify-center">
            <span className="text-6xl md:text-7xl font-extrabold text-agro-verde tracking-tighter mb-4 block">
              7
            </span>
            <h3 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-widest mb-2">
              Años como Empresa
            </h3>
            <p className="text-gray-600 font-light">
              Trayectoria consolidada desarrollando soluciones de gasificación de alto estándar.
            </p>
          </div>

        </div>

        {/* Bloque de Pilares Técnicos (Bordes ajustados para mayor definición) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Control certificado en ppm</h4>
            <p className="text-gray-700 font-light leading-relaxed">
              Mediciones exactas para respaldar la precisión y el control total en el proceso de gasificación.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Alta hermeticidad</h4>
            <p className="text-gray-700 font-light leading-relaxed">
              Diseño estructural orientado a mantener la máxima estabilidad y seguridad operativa en postcosecha.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Cumplimiento y estándares</h4>
            <p className="text-gray-700 font-light leading-relaxed">
              Enfoque riguroso alineado a las regulaciones vigentes y estándares técnicos aplicables al sector.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}