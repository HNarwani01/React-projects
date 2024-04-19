import { useContext } from "react";
import { ProductListContext } from "../store/ProductFetch.jsx";
import EmptyCart from "./EmptyCart.jsx";
import NonEmptyCart from "./NonEmptyCart.jsx";

const CartPage = () => {
    const {cartItems} = useContext(ProductListContext)
    return <>
            {cartItems.length===0?<EmptyCart/> : <NonEmptyCart/>}
    </>


}
export default CartPage;