import './app.scss';
import Contact from './component/Contact/Contact';
import Cursor from './component/cursor/Cursor';
import Hero from './component/hero/Hero';
import NavBar from './component/navBar/NavBar';
import Parallax from './component/parallax/Parallax';
import Portfolio from './component/portfolio/Portfolio';
import Services from './component/Services/Services';

const App = () => {
  return ( 
  <div>
    <Cursor/>
    <section id="Page d'accueil">
      <NavBar />
      <Hero />
    </section>
    <section id='Services'>
      <Parallax type="services"/>
      </section>
   <section>
      <Services/>
      </section>
    <section id='Portfolio'>
      <Parallax type="portfolio"/>
      </section>
   <Portfolio/>
   <section id='Contact'>
      <Contact/>
      </section>
  </div>
  )
};

export default App;
