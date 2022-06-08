import React from 'react';
import logo from '../imagenes/carrito6.png';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import useCartContext from '../../store/CartContext';

const CartWidget = () => {
    const{cantTotalcart}=useCartContext();

    return (
        <div>
            <Link to="/cart">
            <img className='img'
            src={logo} alt="" />
            <h5 className='textWidget'>{cantTotalcart()}</h5>
            </Link>
           
        </div>
    );
};

export default CartWidget;