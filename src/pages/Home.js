import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import Papa from 'papaparse';

function Home() {
  //const [products, setProducts] = useState([]);
  
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
        //setProducts(results.data);
        localStorage.setItem('products', JSON.stringify(results.data)); 
      },
    });
  };
  
  /*useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);*/

  return (
    <div className='page-wrapper'>
      <h1>Welcome to Eliz BI App</h1>
      <h2>Project Title: A comparison of data visualization libraries in React for Business Intelligence</h2>
      <h3>Research question: How does the React chart library Recharts perform in comparison to other React 
        chart libraries(Bizchart, Victory) in terms of data Visualization and Analysis?</h3>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        {/* File Uploader */}
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        style={{ display: "block", margin: "10px auto" }}
      />
      </div>
    </div>
  );
}

export default Home;