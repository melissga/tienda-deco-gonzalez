import React from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount.jsx';



const ItemListContainer = (props) => {
    return (
    
        <div className='box'>
           <p>{props.greeting}</p> 
         <ItemCount/>
   
        </div>
     
     
    );
};

export default ItemListContainer;


