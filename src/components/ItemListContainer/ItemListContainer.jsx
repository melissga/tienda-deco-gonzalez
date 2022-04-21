import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div className='box'>
            {props.greeting}
        </div>
    );
};

export default ItemListContainer;