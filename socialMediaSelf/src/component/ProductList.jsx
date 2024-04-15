import { useContext } from "react";
import { ProductListContext } from "../store/ProductFetch";


import Product from "./Product";

const ProductList = () => {
    const {productList,addProductToCart} = useContext(ProductListContext);
    return <>
        <div className="product-div ">
            {productList.map((product)=>{
                return <Product key={product.id} product={product}/>
            })}
            
        </div>
    </>
}
export default ProductList;