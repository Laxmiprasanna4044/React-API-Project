import {useState,useEffect} from 'react';
import "./App.css";
import Loader from './loading/Loader';

const App = () => {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>{setProducts(data); setLoading(false);}).catch((err)=>{ console.log(err); setLoading(false); setError("please try after sometime!");});
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
        <div className="loader">{loading && <Loader/>}</div>
        <div className="error">{error && <h2>{error}</h2>}</div>
    </div>
  )
}

export default App