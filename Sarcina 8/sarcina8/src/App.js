import './App.css';
import { useState } from 'react';

function App() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const buttonReset = () => {
    setProductName('');
    setPrice('');
    setQuantity('');
  };


  return (
    <div className="App">
      <form>
        <label>
          Denumire produs:
          <input type="text" value={productName} onChange={handleProductNameChange} />
        </label>
        <br />
        <label>
          Pret pe unitate:
          <input type="number" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <label>
          Cantitate:
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </label>
        <br />
        <button type="button">Add Product</button>
        <button type="button" onClick={buttonReset}>Reset</button>
      </form>

      <br />

      <table>
        <thead>
          <tr>
            <th>|Nr|</th>
            <th>Nume|</th>
            <th>Pret unitate|</th>
            <th>Cantitate|</th>
            <th>Pret total|</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
