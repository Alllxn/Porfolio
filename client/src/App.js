import './App.css';
import Nav from './PortfolioContainer/Nav/Nav';
import About from './PortfolioContainer/About/About';
import { Home } from './PortfolioContainer/Home/Home';
import Work from './PortfolioContainer/Work/Work';
import { Contact } from './PortfolioContainer/Contact/Contact';
import './assets/fontawesome';

const App = () => {
  return (
    <div className="App" id="App">
      <Nav/>
      <Home/>
      <main>
        <About/>
        <Work/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
