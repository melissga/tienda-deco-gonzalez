import React, { useEffect, useState } from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import {useParams} from 'react-router-dom';
import {getAllItems as getProducts, getItemsByCategory} from '../../data/database';



function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoryid} = useParams();
  

  useEffect(() => {
    if (categoryid === undefined) {
      getProducts()
      .then(respuestaPromise => {
        setProducts(respuestaPromise);
      });
    } else {
      getItemsByCategory(categoryid).then(respuestaPromise => {
        setProducts(respuestaPromise);
      });
    }
  }, [categoryid]);

  return (
    <div className='list-item-container'>
      <ItemList items={products} />
        {/* <ItemCount initial={0} stock={5} onAdd={dummy} /> */}
    </div>
  )
}

export default ItemListContainer