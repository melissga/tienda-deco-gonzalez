import React from 'react';
import useCartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';
import {createBuyOrder} from '../../data/database';


/* Steps:
1- consumir el CartContextProvider
2- mostrar el contenido CartContex
3- mostrar una interfaz para eliminar items o vaciar Carrito */

function CartView(props) {
    const { cart, removeFromCart, clearCart, getTotalPrice} = useCartContext();

    function handleBuy(){
        const buyOrder = {
            buyer: {
                name: "Melisa",
                phone: "123456789",
                email: "santiago@coder.com"
             },
            items: [...cart],
            date: new Date(),
            total: getTotalPrice(),
        };
        createBuyOrder(buyOrder);
    }
   

    console.log("CART", cart);
    if (cart.length === 0) {
        return <div style={{textAlign: "center"}}>
            <h4>No hay items en el carrito</h4>
            <Link to="/">Volver al catálogo</Link>
        </div>
    }
    else {
        return <div>
        {cart.map(itemCart => {
            return <div style={{textAlign: "center"}} key={itemCart.id}>
                <br />
                <h2>{itemCart.title}</h2>
                <h2>{itemCart.cant}</h2>
                <h2>${itemCart.cant * itemCart.price}</h2>
                <button onClick={() => removeFromCart(itemCart.id)} style={{color: "red"}}>X</button>
                <hr /><br />
            </div>
           
        })}
        <button onClick={clearCart} >Vaciar carrito</button>
        <br />
        <button onClick={handleBuy}>COMPRAR</button>
         </div>
    }
  
}

export default CartView;