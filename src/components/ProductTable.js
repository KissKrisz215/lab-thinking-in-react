import { ProductRow } from "./ProductRow";

export function ProductTable(){
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
                <ProductRow />
            </tbody>
         </table>
     </div>
    );
}