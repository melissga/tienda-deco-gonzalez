import { createContext, useState, useContext } from "react";//UseContext es un hook que permite conectar con el context


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const {Provider} = CartContext; 

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]); //0-crear el estado para guardar los items

    const addToCart = (item, cant) =>{
        if (IsInCart(item.id)) {
            const newCart = cart.map(cartItem => {
                if (cartItem.id=== item.id) {
                    const copyItem = {...cartItem}
                    copyItem.cant+=cant;
                    console.log("cantidad sumada: ", copyItem.cant);
                    return copyItem;
                } else {
                    return cartItem;
                }
            });
            setCart(newCart);
        } else {
            const newItem = {...item, cant}; //me copio item y le agrego 'cant'
            setCart([...cart, newItem]);
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter( item => {
            return item.id !== id;
        });
        setCart(cartFilter);
    }

    const clearCart = () => {
        setCart([]);   
    }

    const IsInCart = (id) => {
        const newCart = [...cart];
        const cartIs = newCart.some(item => {
            return item.id === id;
        });
        return cartIs;
    }

    function getTotalPrice() {
        let totalPrice =0;
        cart.forEach(item => totalPrice += item.cant * item.price)
        return totalPrice;
    }

    const cantTotalcart = () =>{
        let total = 0;
        cart.forEach (item =>{
            total += 1;
        });
        return total;
    }

    const contextFunction = () => console.log("Contexto listo");

    return (
        <Provider value={ {contextFunction, cart, cantTotalcart, addToCart, removeFromCart,clearCart, IsInCart, getTotalPrice} }> {/* le pasamos como value para ver que hay en el carrito */}
            {children}
        </Provider>
    );
}

export default useCartContext; 