import React from 'react';
import logo from '../imagenes/carrito7.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <img className='img'
            src={logo} alt="" />
        </div>
    );
};

export default CartWidget;