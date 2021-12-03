import './App.css';
import Artists from './components/home page/artists';
import Choise from './components/home page/chois';
import Footer from './components/home page/footer';
import Home from './components/home page/home';
import Sub from './components/home page/influencer';
import Detail from './components/infuencer/detail';
import Details from './components/infuencer/details';
import Indicateur from './components/infuencer/indicateur';


function App() {

  return (
    <div className="App">
      {/* <Home />
      <Choise/>
      <Artists />
      <Sub />
      <Footer /> */}

      {/* 2end page */}
      <Details />
      <Indicateur />
      <Detail />

    </div>
  );
}

export default App;
