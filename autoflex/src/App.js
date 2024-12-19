import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 
import Nav from './components/Nav';
import HeroMain from './components/HeroMain';
import Flota from './components/Flota';
import CochesDisponibles from './components/CochesDisponibles';
import Experiencia from './components/Experiencia';
import Banner from './components/Banner';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Reserva from './components/Reserva';
import Blog from './components/Blog';
import './styles/general.scss';

function Main() {
  return (
    <>
      <Nav />
      <HeroMain />
      <Flota />
      <CochesDisponibles />
      <Experiencia fotoCoche="../mercedes-frontal.jpg" descripcionFotoCoche="Mercedes-Benz" />
      <Banner />
      <Posts />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
  <Router>
    <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} /> {/* Ruta principal */}
          <Route path="/blog" element={<Blog />} /> {/* Ruta Blog */}
          <Route path="/reserva" element={<Reserva />} /> {/* Ruta Reserva */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
