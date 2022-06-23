import './App.css';
import Nav from './PortfolioContainer/Nav/Nav';
import About from './PortfolioContainer/About/About';
import { Home } from './PortfolioContainer/Home/Home';
import Work from './PortfolioContainer/Work/Work';
import './assets/fontawesome';

const App = () => {
  return (
    <div className="App" id="App">
      <Nav/>
      <Home/>
      <main>
        <About/>
        <Work/>
      </main>
    </div>
  );
}

export default App;
