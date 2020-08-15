import React from 'react';
import ProductTable from './components/ProductTable';
import './App.css';

const products = [
  {
    price : 10,
    name : "Electronic product 1",
    category : "Electronics"
  },
  {
    price : 20,
    name : "Electronic product 2",
    category: "Electronics"
  },
  {
    price : 30,
    name : "Electronic product 3",
    category: "Electronics"
  },
  {
    price : 10,
    name : "Clothes product 1",
    category: "Clothes"
  },
  {
    price : 20,
    name : "Clothes product 2",
    category: "Clothes"
  },
  {
    price : 30,
    name : "Clothes product 3",
    category: "Clothes"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductTable products={products}/>
      </header>
    </div>
  );
}

export default App;
