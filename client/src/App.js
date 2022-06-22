import './App.css';
import Nav from './PortfolioContainer/Nav/Nav';
import About from './PortfolioContainer/About/About';
import Home from './PortfolioContainer/Home/Home';
import Work from './PortfolioContainer/Work/Work';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


library.add(faHouseChimney, faHistory, faBars, faComments, faXmark, faAddressCard, faGithub);

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
