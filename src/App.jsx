import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Empresa from './components/Empresa'
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900 scroll-smooth">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Empresa/>
        <Servicios/>
        <Galeria/>
        <Contacto/>
      </main>

      <Footer />
    </div>
  );
}

export default App;