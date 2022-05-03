import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

function Item({item}) {
    return (
        <div className='card'>
        <div className='header'>{ item?.title }</div>
        <div className='content'>
            <div className='img-container'>
                <img className='product-img' src={ item?.imageUrl } alt="Imagen del producto" />
            </div>
        </div>
        <div>
            <p>{item?.description}</p>
        </div>
        
        <div className='footer'>{ item?.price }</div>
        <div><ItemCount initial={1} stock={5}/></div>
    </div>
    )
}

export default Item;