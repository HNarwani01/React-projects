import { useContext } from "react";
import CheckoutProducts from "./CheckoutProducts";
import { ProductListContext } from "../store/ProductFetch";


const CartProductBodyLeft=()=>{
    const {cartItems} = useContext(ProductListContext)
    console.log(cartItems);
return <>
             <div className="bodyLeft">
                {cartItems.map(cartitem=>{
                    return <CheckoutProducts cartitem={cartitem}/>
                })}
                
            </div>
        </>
}
export default CartProductBodyLeft;

