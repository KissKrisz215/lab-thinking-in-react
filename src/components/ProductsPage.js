import { useState } from 'react';
import jsonData from '../data.json'
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable'; 

export function ProductsPage(){

    const [products, setProducts] = useState(jsonData);
    return(
     <div className='container'>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable products={products} setProducts={setProducts} />
     </div>
    );
}