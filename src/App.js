import './App.css';
import Artists from './components/home page/artists';
import Choise from './components/home page/chois';
import Footer from './components/home page/footer';
import Home from './components/home page/home';
import Sub from './components/home page/influencer';



function App() {

  return (
    <div className="App">
      <Home />
      <Choise/>
      <Artists />
      <Sub />
      <Footer />
    </div>
  );
}

export default App;
