import './App.css';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import Contacto from './components/Contacto';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavbarHelio from './components/NavbarHelio';
import Planes from './components/Planes';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import Testimonios from './components/Testimonios';

function App() {
  return (
    <div className="App">
      <NavbarHelio />
      <Hero />
      <Servicios />
      <Soluciones />
      <CalculadoraIntegral />
      <Planes />
      <Testimonios />
      <FAQ />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
