import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// import the components
import Home from './pages/Home';
import RechartsBI from './pages/RechartsBI';
import VictoryBI from './pages/VictoryBI';
import BizchartsBI from './pages/BizchartsBI';

function App() {
  return (
    <Router>
      <div>
        <nav className='App-header'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rechart">Recharts BI</Link>
            </li>
            <li>
              <Link to="/victory">Victory BI</Link>
            </li>
            <li>
              <Link to="/bizchart">Bizchart BI</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/rechart">
            <RechartsBI />
          </Route>
          <Route path="/victory">
            <VictoryBI />
          </Route>
          <Route path="/bizchart">
            <BizchartsBI />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
