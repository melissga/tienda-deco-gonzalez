import React from 'react';
import useCartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';
import { createBuyOrder } from '../../data/database';
import './CartView.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HourglassFull, SportsMotorsportsSharp } from '@material-ui/icons';
import cartEmpty from '../imagenes/empty-cart2.svg';

/* Steps:
1- consumir el CartContextProvider
2- mostrar el contenido CartContex
3- mostrar una interfaz para eliminar items o vaciar Carrito */

function CartView(props) {
    const { cart, removeFromCart, clearCart, getTotalPrice } = useCartContext();

    function handleBuy() {
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
        clearCart();
    }


    console.log("CART", cart);
    if (cart.length === 0) {
        return <div style={{ textAlign: "center" }}>
            <h2 className='estiloMsj titulos color'>Tu carrito está vacio</h2>
            <Link to="/">
            <button type="button" className='btn btn-primary btn-sm titulos'>Volver al catálogo</button>
            </Link>
            <figure>
            <img className='imagenCartView' src={cartEmpty} alt="" />
            </figure>
            
        </div>
    }
    else {
        return <div className='seccion'>
            <h1 className='titulos tit color'>Tu Carrito</h1>
           
            <table className="table color">
                <thead>
                    <tr className='titulos'>
                        <th scope="col">Productos</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody className='titulos'>
                    {cart.map(itemCart => {
                        return <>
                            <tr key={itemCart.id}>
                                <th scope="row">{itemCart.title}</th>
                                <td>{itemCart.cant}</td>
                                <td>${itemCart.cant * itemCart.price}</td>
                                <td><button onClick={() => removeFromCart(itemCart.id)} className='btn btn-outline-danger' >Eliminar</button></td>
                            </tr>
                        </>
                    })}
                </tbody>
            </table>
            
            <h4 className='titulos color'>Total: ${getTotalPrice()} </h4>

            <button onClick={clearCart} type="button" className='btn btn-outline-info titulos botones' >Vaciar Carrito</button>
            <button onClick={handleBuy} type="button" className='btn btn-outline-info titulos botones' >Finalizar Comprar</button>
            <br />
            <br />
            <Link to="/">
            <button type="button" className='btn btn-primary btn-lg botonAdd titulos'>¡Seguir comprando!</button></Link>
            
        </div>
    }

}

export default CartView;