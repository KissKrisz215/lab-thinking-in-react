export function SearchBar({searchProduct, showInStock}){

    return(
        <div className="container">
            <label htmlFor="search">Search</label>
            <input onChange={(event) => searchProduct(event)} className="form-control" type="text" id="search" />
            <input onChange={showInStock} type="checkbox" name="checkbox" id="checkbox" />
            <label className="mx-2" htmlFor="checkbox">Only Show Products In Stock</label>
        </div>
    );
}