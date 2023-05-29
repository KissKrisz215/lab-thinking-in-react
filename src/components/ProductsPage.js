import { useState } from 'react';
import jsonData from '../data.json'
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable'; 

export function ProductsPage(){
    const [products, setProducts] = useState(jsonData);

    const searchProduct = (event) => {
        const searchValue = event.target.value;
        if(searchValue.length === 0){
            setProducts(jsonData);
        }else{
            const productsCopy = [...products];
            const filteredProducts = productsCopy.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()) || product.price.includes(searchValue));
            setProducts(filteredProducts);   
        }
    }
    
    return(
     <div className='container'>
        <h1>IronStore</h1>
        <SearchBar searchProduct={searchProduct}  />
        <ProductTable products={products} setProducts={setProducts} />
     </div>
    );
}