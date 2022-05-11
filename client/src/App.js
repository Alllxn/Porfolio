import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Nav from './PortfolioContainer/Nav/Nav';
import Work from './PortfolioContainer/Work/Work';
// import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Work />
      {/* <p>gola</p> */}
    </div>
  );
}

export default App;
