import './App.css';
import { useState, useEffect } from 'react';
import {Welcome} from './components/Welcome';
import { Tables } from './components/Tables';

function App() {
  const [products, setProduct] = useState([]);
  const fetchProduct = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
    <Welcome title="Here is Our Products" />
    <div className="App">
      <table class="table table-bordered border-primary">
        <thead className='table-success'>
          <tr >
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <Tables products={products} />
      </table>
    </div>
    </>
  );
}
export default App;
