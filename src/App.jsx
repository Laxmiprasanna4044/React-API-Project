import {useState,useEffect} from 'react';
import "./App.css";


const App = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>setProducts(data))
  },[])
  return (
    <div className="products-container">
      <h2 className="title">Products List</h2>
      <div className="products-grid">{
        products.map((product)=>(
          <div className='product-card' key={product.id}>
            <img className='product-image' src={product.image} alt=""/>
            <h3 className='product-title'>{product.title}</h3>
            <p className='product-price'>{product.price}</p>
            <p className='product-rating'>⭐{product.rating.rate}-{product.rating.count}</p>
        </div>
        ))
        }
        </div>
    </div>
  )
}

export default App