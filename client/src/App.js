import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Nav from './PortfolioContainer/Nav/Nav';
import Work from './PortfolioContainer/Work/Work';
// import styled from 'styled-components'

const App = () => {
  return (
    <div className="App">
      <Nav className="componente"/>
      <Home className="componente"/>
      <Work className="componente"/>
    </div>
  );
}

export default App;
