import { ProductRow } from "./ProductRow";

export function ProductTable({products, setProducts}){
    return(
     <div className="container mt-5">
         <table className="w-100">
            <thead className="bg-light">
                <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Price</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product) => {
             return(
                <ProductRow key={product.id}  product={product} />
             );
            })}
            </tbody>
         </table>
     </div>
    );
}