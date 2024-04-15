import { createContext, useEffect, useReducer, useState} from "react";
export const ProductListContext = createContext({
    productList: [],
    addProduct: () => { },
    removeProduct: () => { },
    loadInitialProduct: () => { },
    fetching:false,
    cartItems:[],
    addProductToCart:()=>{}

})
const productListReducer=(currentValue ,action)=>{
    let newProductList =[]
    if (action.type==='Initial') {
        newProductList=[...action.payload]
    }
    return newProductList
}


const ProductFetch = ({ children }) => {
    const [fetching, setFetching] = useState(false);
    const [productList,dispatchproductList]=useReducer(productListReducer,[])
    const [cartItems, setcartItems]= useState([])
    const addProduct =()=>{
        
    }
    const addProductToCart = (event, productObject) => {
        event.preventDefault();
    
        // Check if the product is already in the cart
        const existingItemIndex = cartItems.findIndex(item => item.id === productObject.id);
    
        if (existingItemIndex !== -1) {
            // If the product exists in the cart, update its quantity
            const updatedCartItems = cartItems.map((item, index) => {
                if (index === existingItemIndex) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                } else {
                    return item;
                }
            });
            setcartItems(updatedCartItems);
        } else {
            // If the product is not in the cart, add it
            const newItem = {
                id: productObject.id,
                brand: productObject.brand,
                images: productObject.images,
                category: productObject.category,
                description: productObject.description,
                price: productObject.price,
                quantity: 1 // Start with quantity 1
            };
            setcartItems([...cartItems, newItem]);
        }
    
        console.log("Item added to cart. The new cart is:");
        console.log(cartItems);
    };
    
    const removeProduct =()=>{

    }
    const loadInitialProduct =(initialProducts)=>{
        dispatchproductList({
            type:'Initial',
            payload:[...initialProducts]
        })
    }
    useEffect(()=>{
        setFetching(true);
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=> {
            loadInitialProduct(data.products)
            setFetching(false);
            console.log(data.products);
        })

    },[])
    

    return <ProductListContext.Provider value={{ productList, addProduct, removeProduct, loadInitialProduct,fetching,addProductToCart,cartItems  }}>
    {children}
</ProductListContext.Provider>
}
export default ProductFetch;