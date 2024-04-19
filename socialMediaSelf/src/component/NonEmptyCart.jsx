import CartProductBodyLeft from "./CartProductBodyLeft"
import CartProductBodyRight from "./CartProductBodyRight"
import CartProductHeading from "./CartProductHeading"
import SimpleBanner from "./SimpleBanner"

const NonEmptyCart = ()=>{
    return <>
        <SimpleBanner />
        <CartProductHeading />
        <div className="mainBody">
            <CartProductBodyLeft/>
            <CartProductBodyRight/>
        </div> 
    </>
}
export default NonEmptyCart; 