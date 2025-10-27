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
import opcionesSelects from './db-mock/opciones.js';

function App() {
  const anioActual = new Date().getFullYear();
  return (
    <div className="App">
      <NavbarHelio />
      <Hero />
      <Servicios />
      <Soluciones />
      <CalculadoraIntegral opcionesSelects={opcionesSelects}/>
      <Planes />
      <Testimonios />
      <FAQ />
      <Contacto />
      <Footer anio={anioActual}/>
    </div>
  );
}

export default App;
