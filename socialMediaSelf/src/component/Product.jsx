import { useContext } from "react";
import { ProductListContext } from "../store/ProductFetch";


const Product = ({ product }) => {
    const { productList, addProductToCart } = useContext(ProductListContext);

    return <>
        <div className="card" >
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="initial">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-title">{`${product.brand} ${product.category} (${product.stock}left)`}
                </p>
                </div>
                <p className="card-text">{product.description} </p>
                <div className="links">
                    <a href="#" style={{fontSize:'13px'}} className="btn btn-success">{`${product.discountPercentage
}% OFF`} </a>
                    <a href="#" onClick={(event) => { addProductToCart(event, product) }} className="btn btn-primary">₹ {product.price * 90} </a>
                </div>
            </div>
        </div>

    </>
}


export default Product;