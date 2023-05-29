export function ProductRow({product}){
    return(
     <tr className="border-bottom border-muted">
        {product.inStock ? <td className="p-3">{product.name}</td> : <td className="p-3 text-danger">{product.name}</td> }
        <td className="p-3">{product.price}</td>
     </tr>
    );
}