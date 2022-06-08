import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import {useState} from 'react';
import useCartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';


function ItemDetail({ item }) {
    const [isInCart, setIsInCart] = useState(false);
    const {addToCart} = useCartContext(); //del hook 'useCartContext' saco la fc 'addToCart'

    function onAdd(count) {
        setIsInCart(true);
        addToCart(item, count); //Cuando se ejecuta el 'onAdd' llamo al 'addToCart' y le paso 'item' que viene por props y 'count' que viene de itemCount
        console.log("Agregado al cart: ", item, count);
    }
if (!item) {
    return <h4> Cargando...</h4>
    
} else {
    return (
        <div className='item-detail'>
            <div className='left'>
                <div className='img-detail-container'>
                    <img src={ item?.imageUrl } alt='Imagen del producto' />
                </div>
            </div>
            <div className='right'>
                <div className='info-container'>
                    <h2 className='titulos color'>{ item?.title }</h2>
                    <p className='titulos color'>{ item?.description}</p>
                    <p className='titulos color'>${ item?.price }</p>
                    {isInCart ?

                        <Link to="/cart">
                            <button type="button" className='btn btn-outline-info titulos'>Ir al carrito</button>
                        </Link>

                        :
                    <div className='count-container'>
                        <ItemCount onAdd={onAdd} initial={1} stock={item?.stock} />
                    </div>
                    }
                    
                </div>
            </div>
        </div>
      )
}
  
}

export default ItemDetail;