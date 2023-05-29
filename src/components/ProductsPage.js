import { useState } from 'react';
import jsonData from '../data.json'
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable'; 

export function ProductsPage(){
    const [products, setProducts] = useState(jsonData);
    const [inStock, setInStock] = useState(false);

    const filterProducts = (value) => {
       if(value === null && inStock === false){
        const productsCopy = [...products];
        const filteredProducts = productsCopy.filter((product) => product.inStock === true);
        setProducts(filteredProducts);  
       }else if(value === null & inStock === true){
        setProducts(jsonData);  
       }else if(value.length === 0 && inStock === true){
            const productsCopy = [...jsonData];
            const filteredProducts = productsCopy.filter((product) => product.inStock);
            setProducts(filteredProducts);   
       }else{
            const productsCopy = [...jsonData];
            const filteredProducts = productsCopy.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()) || product.price.includes(value));
            setProducts(filteredProducts); 
       }
    }

    const searchProduct = (event) => {
        const searchValue = event.target.value;
        filterProducts(searchValue)
    }

    const showInStock = () => {
        setInStock(!inStock);
        filterProducts(null)
    }

    return(
     <div className='container'>
        <h1>IronStore</h1>
        <SearchBar showInStock={showInStock} searchProduct={searchProduct}  />
        <ProductTable products={products} setProducts={setProducts} />
     </div>
    );
}