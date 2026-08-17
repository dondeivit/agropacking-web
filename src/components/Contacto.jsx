import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Tu Form Access Key de Web3Forms
    formData.append("access_key", "e4fdad22-2c5c-426f-9c78-f3ae55774fae");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (response) => {
        const json = await response.json();
        if (response.status === 200) {
          setEnviado(true);
        } else {
          alert(json.message || "Hubo un error al enviar el mensaje.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error de red al enviar la solicitud.");
      });
  };

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
            Escríbenos y <span className="font-semibold text-gray-900">Marco Solis</span>, junto a nuestro equipo técnico, te contactará a la brevedad para evaluar tus equipos y coordinar la mejor solución.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Columna Izquierda: Formulario / Mensaje de Éxito */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between h-full min-h-[580px]">
            
            {enviado ? (
              <div className="text-center py-20 my-auto space-y-4">
                <FiCheckCircle className="mx-auto text-6xl text-emerald-500" />
                <h3 className="text-2xl font-bold text-gray-900">¡Solicitud enviada con éxito!</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Gracias por contactarnos. Marco Solis o un miembro de nuestro equipo técnico te responderá a la brevedad posible.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="mt-6 inline-block bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                  Envíanos tu solicitud
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
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
                        name="email"
                        required
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
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agro-verde/20 focus:border-agro-verde transition-colors resize-none"
                      placeholder="Cuéntanos qué necesitas..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 mt-auto">
                    <button
                      type="submit"
                      className="flex-1 bg-gray-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Enviar solicitud
                    </button>

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
            )}
          </div>

          {/* Columna Derecha: Tarjetas de Información con altura sincronizada */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 h-full min-h-[580px]">
            
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <FiMapPin className="text-xl text-gray-900" />
              </div>
              <div className="my-auto">
                <h4 className="font-bold text-gray-900 mb-1">Cobertura y atención</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Despliegue y soporte técnico directo en terreno a lo largo de Chile, coordinando visitas según los requerimientos de cada cliente.
                </p>
              </div>
            </div>

            <a
              href="tel:+56993401218"
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 flex items-start gap-4 hover:shadow-md transition-shadow group flex-1"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-agro-verde/10 transition-colors">
                <FiPhone className="text-xl text-gray-900 group-hover:text-agro-verde transition-colors" />
              </div>
              <div className="my-auto">
                <h4 className="font-bold text-gray-900 mb-1">Teléfono</h4>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold text-gray-900">Marco Solis:</span> +56 9 9340 1218
                </p>
              </div>
            </a>

            <a
              href="mailto:agropacking.servicios@gmail.com"
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 flex items-start gap-4 hover:shadow-md transition-shadow group flex-1"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-agro-verde/10 transition-colors">
                <FiMail className="text-xl text-gray-900 group-hover:text-agro-verde transition-colors" />
              </div>
              <div className="my-auto">
                <h4 className="font-bold text-gray-900 mb-1">Correo electrónico</h4>
                <p className="text-gray-700 text-sm">agropacking.servicios@gmail.com</p>
              </div>
            </a>

            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-200 flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <FiClock className="text-xl text-gray-900" />
              </div>
              <div className="my-auto">
                <h4 className="font-bold text-gray-900 mb-1">Horario de atención</h4>
                <p className="text-gray-700 text-sm">Lunes a Viernes: 09:00 - 18:00 hrs.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}