import './app.scss';
import NavBar from './component/navBar/NavBar';

const App = () => {
  return <div>
    <section id="Page d'accueil">
      <NavBar />
    </section>
    <section id='Services'>parllax</section>
    <section>Service</section>
    <section id='Portfolio'>Parallax</section>
    <section>Potfolio1</section>
    <section>Potfolio2</section>
    <section>Potfolio3</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
