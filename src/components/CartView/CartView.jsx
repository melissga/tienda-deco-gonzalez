import React from 'react';
import useCartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';

/* Steps:
1- consumir el CartContextProvider
2- mostrar el contenido CartContex
3- mostrar una interfaz para eliminar items o vaciar Carrito */

function CartView(props) {
    const { cart } = useCartContext();
    console.log("CART", cart);
    if (cart.length === 0) {
        return <div style={{textAlign: "center"}}>
            <h4>No hay items en el carrito</h4>
            <Link to="/">Volver al catálogo</Link>
        </div>
    }
    else {
        return cart.map(itemCart => {
            return <div style={{textAlign: "center"}} key={itemCart.id}>
                <br />
                <h2>{itemCart.title}</h2>
                <h2>{itemCart.cant}</h2>
                <h2>${itemCart.cant * itemCart.price}</h2>
                <button style={{color: "red"}}>X</button>
                <hr /><br />
            </div>
        });
    }
}

export default CartView;