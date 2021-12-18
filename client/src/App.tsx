import { useState } from "react";


function App() {
  const [products, setProducts] = useState([
    { name: 'product1', price: 100.00 },
    { name: 'product2', price: 200.00 }
  ]);

  function addProduct() {
    setProducts(prevState => [...prevState, { 
      name: 'product' + (prevState.length + 1), price: prevState.length * 100 + 100 }]);
  }

  return (
    <div>
      <h1>Re-store</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index} >{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App;
