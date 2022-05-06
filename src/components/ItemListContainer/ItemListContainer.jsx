import React, { useEffect, useState } from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import datos from '../../data/datos';
import {useParams} from 'react-router-dom';


function getProducts(categoryid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryid !== undefined) {
        const arrayFiltered = datos.filter((item) => {
          return item.category === categoryid;
        });
        resolve(arrayFiltered);
      } else {
        resolve(datos);
      }
    }, 300);
  });
}

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoryid} = useParams();
  

  useEffect(() => {
    getProducts(categoryid)
      .then(respuestaPromise => {
        setProducts(respuestaPromise);
      })
  }, [categoryid]);

  return (
    <div className='list-item-container'>
      <ItemList items={products} />
        {/* <ItemCount initial={0} stock={5} onAdd={dummy} /> */}
    </div>
  )
}

export default ItemListContainer