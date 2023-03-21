import './App.css';
import { createElement, useState } from 'react';

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

  const [orders, setOrders] = useState([]);

  const buttonAdd = () => {
    const newOrder = {
      name: productName,
      price: price,
      quantity: quantity,
    };
    setOrders([...orders, newOrder]);
    setProductName('');
    setPrice('');
    setQuantity('');
  };

  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  const handleRowHover = (index) => { // Handler pentru a actualiza starea cu indicele rândului peste care se află cursorul mouse-ului
    setHoveredRowIndex(index);
  }

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
        <button type="button" onClick={buttonAdd}>Add Product</button>
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
        <tbody>
        {orders.map((order, index) => (
            <tr 
              key={index} 
              onMouseEnter={() => handleRowHover(index)} onMouseLeave={() => handleRowHover(null)} 
              style={hoveredRowIndex === index ? { backgroundColor: 'red' } : { backgroundColor: 'white' }} 
              >
            <td>{index + 1}</td>
            <td>{order.name}</td>
            <td>{order.price}</td>
            <td>{order.quantity}</td>
            <td>{order.price * order.quantity}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
