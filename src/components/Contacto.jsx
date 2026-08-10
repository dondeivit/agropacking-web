/**
 * Componente de Contacto.
 * @component
 * @description Maneja la captura de leads mediante un formulario integrado nativamente con Netlify Forms.
 */
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-agro-verde font-bold tracking-widest uppercase text-sm md:text-base mb-4 block">
            Hablemos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Asegura tu próxima cosecha
          </h2>
          <p className="text-lg text-gray-700 font-light">
            Escríbenos y <span className="font-semibold text-gray-900">Marcos Solis</span>, junto a nuestro equipo técnico, te contactará a la brevedad para evaluar tus equipos y coordinar la mejor solución.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Columna Izquierda: Formulario Netlify */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
              Envíanos tu solicitud
            </h3>

            <form
              name="contacto"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6 flex-grow flex flex-col justify-between"
            >
              {/* Campos requeridos por Netlify */}
              <input type="hidden" name="form-name" value="contacto" />
              <p className="hidden">
                <label>
                  No llenes este campo si eres humano: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agro-verde/20 focus:border-agro-verde transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    pattern="^(\+?56)?\s?9\s?[0-9]{8}$"
                    title="Ingresa un número válido, ej: +56 9 1234 5678 o 912345678"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agro-verde/20 focus:border-agro-verde transition-colors"
                    placeholder="+56 9..."
                  />
                </div>
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    title="Ingresa un correo válido, ej: tu@correo.com"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agro-verde/20 focus:border-agro-verde transition-colors"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agro-verde/20 focus:border-agro-verde transition-colors resize-none"
                  placeholder="Cuéntanos qué necesitas (mantención, certificación, equipos...)"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 mt-auto">
                <button
                  type="submit"
                  className="flex-1 bg-gray-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  Enviar solicitud
                </button>

                {/* CTA Secundario WhatsApp */}
                <a
                  href="https://wa.me/56993401218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white border border-gray-200 text-gray-900 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-md flex items-center justify-center gap-2 group"
                >
                  <FaWhatsapp className="text-emerald-500 text-xl group-hover:text-white transition-colors duration-300" />
                  WhatsApp Directo
                </a>
              </div>
            </form>
          </div>

          {/* Columna Derecha: Tarjetas de Información */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 lg:space-y-0 h-full py-2">
            
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <FiMapPin className="text-xl text-gray-900" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Área de cobertura
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Base en San Felipe, Región de Valparaíso. Atendemos productores y packing del Valle de Aconcagua.
                </p>
              </div>
            </div>

            <a
              href="tel:+56993401218"
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 flex items-start gap-4 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-agro-verde/10 transition-colors">
                <FiPhone className="text-xl text-gray-900 group-hover:text-agro-verde transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Teléfono</h4>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold text-gray-900">
                    Marcos Solis:
                  </span>{" "}
                  +56 9 9340 1218
                </p>
              </div>
            </a>

            <a
              href="mailto:contacto@agropacking.cl"
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 flex items-start gap-4 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-agro-verde/10 transition-colors">
                <FiMail className="text-xl text-gray-900 group-hover:text-agro-verde transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Correo electrónico
                </h4>
                <p className="text-gray-700 text-sm">contacto@agropacking.cl</p>
              </div>
            </a>

            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <FiClock className="text-xl text-gray-900" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Horario de atención
                </h4>
                <p className="text-gray-700 text-sm">
                  Lunes a Viernes: 09:00 - 18:00 hrs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}