import { useEffect } from "react";
import { createContext, useState } from "react";

//helper function to find if the id of tje product already exists in the addItemtoCart array

const addCartItem = (cartItems,productToAdd) =>{
    //find if cartItems contains productToAdd
    const exisitingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    //if found , increment quantity
    if(exisitingCartItems){
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id ? {...cartItem, quantity : cartItem.quantity + 1}
        : cartItem
        )
    }
    // return new array with modified cart items/new cart Items
    //empty cart, adding items for the first time: we add productToAdd and quantity = 1

    return [...cartItems,{...productToAdd,quantity:1}]
    
}

const removeItemFromCart = (cartItems,productToAdd) => {
    const exisitingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    //if found , increment quantity
    if(exisitingCartItems.quantity === 1){
        return cartItems.filter((item) => item.id !== productToAdd.id)
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id ? {...cartItem, quantity : cartItem.quantity - 1}
        : cartItem
        )
}

export const CartContext = createContext({
    toggle : false,
    setToggle : () => {},
    //Array for the items inside the cart similar to product array with extra item quantity
    // we want to have id,name,price,imageUrl,quantity
    cartItems : [],
    addItemToCart : () => {},
    // quantity : 0,
    // setQuantity : () => 0,
    cartItemCount: 0,
    removeCartItem : () => {}


}
)
export const CartProvider = ({children}) => {

    const [toggle,setToggle] = useState(false);
    const [cartItems,setCartItems] = useState([])
    //const [quantity,setQuantity] = useState(0)
    const [cartItemCount, setCartItemCount] = useState(0);
    // to add items to cart , we are going to need the productToAdd once the add to cart button is clicked
    const [totalPrice,setTotalPrice] = useState(0);
    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd))
        
    }

    const removeCartItem = (productToAdd) =>{
        setCartItems(removeItemFromCart(cartItems,productToAdd))
        
    }

    useEffect (()=>{
        const total = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity*cartItem.price,
            0
          );
          setTotalPrice(total);
    },[cartItems])


    useEffect(() => {
        const count = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        setCartItemCount(count);
      }, [cartItems]);
    

    const value = {toggle,setToggle,addItemToCart,cartItems,setCartItems,cartItemCount,setCartItemCount,removeCartItem,totalPrice}
 
    
    


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

