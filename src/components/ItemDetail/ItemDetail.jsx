import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import {useState} from 'react';
import useCartContext from '../../store/CartContext';


function ItemDetail({ item }) {
    const [isInCart, setIsInCart] = useState(false);
    const {addToCart} = useCartContext(); //del hook 'useCartContext' saco la fc 'addToCart'

    function onAdd(count) {
        setIsInCart(true);
        addToCart(item, count); //Cuando se ejecuta el 'onAdd' llamo al 'addToCart' y le paso 'item' que viene por props y 'count' que viene de itemCount
        console.log("Agregado al cart: ", item, count);
    }

  return (
    <div className='item-detail'>
        <div className='left'>
            <div className='img-detail-container'>
                <img src={ item?.imageUrl } alt='Imagen del producto' />
            </div>
        </div>
        <div className='right'>
            <div className='info-container'>
                <h2>{ item?.title }</h2>
                <p>{ item?.description}</p>
                <p>{ item?.price }</p>
                { isInCart? 
                    <p>Sí está en el carrito</p>
                :
                <div className='count-container'>
                    <ItemCount onAdd={onAdd} initial={1} stock={item.stock} />
                </div>
                }
                
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;