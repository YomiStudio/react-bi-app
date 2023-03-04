import React from 'react';
import logo from "./logo.svg";

function Home() {
  return (
    <div className='page-wrapper'>
      <h1>Welcome to Eliz BI App</h1>
      <h2>Project Title: A comparison of data visualization libraries in React for Business Intelligence</h2>
      <h3>Research question: How does the React chart library Recharts perform in comparison to other React chart libraries(Bizchart, Victory) in terms of data Visualization and Analysis?</h3>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Home;