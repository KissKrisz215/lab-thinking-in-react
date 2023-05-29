export function SearchBar({searchProduct}){

    return(
        <div className="container">
            <label htmlFor="search">Search</label>
            <input onChange={(event) => searchProduct(event)} className="form-control" type="text" id="search" />
            <input type="checkbox" name="" id="" />
            <label className="mx-2" htmlFor="">Only Show Products In Stock</label>
        </div>
    );
}