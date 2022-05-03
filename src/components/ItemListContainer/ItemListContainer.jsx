import React, { useEffect, useState } from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function getProducts() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: 'Silla',
        description: 'Silla de madera tapizada en color blanco',
        price: '$4500',
        imageUrl: 'https://i.pinimg.com/564x/25/8e/17/258e17aa135cd9d7f4de6dad164b2c1b.jpg'
      },
      {
        id: 2,
        title: 'Juego de comedor',
        description: 'Juego de comedor x6',
        price: '$2600',
        imageUrl: 'https://i.pinimg.com/564x/d2/30/19/d23019fc3dbd05e6ad12e091be9667d8.jpg'
      },
      {
        id: 3,
        title: 'Rack TV',
        description: 'Mueble de TV modular',
        price: '$8000',
        imageUrl: 'https://i.pinimg.com/564x/38/93/46/389346e3d02323de0430cd26bde4108d.jpg'
      },
      {
        id: 4,
        title: 'Rack TV',
        description: 'Mueble de TV modular',
        price: '$8000',
        imageUrl: 'https://i.pinimg.com/564x/38/93/46/389346e3d02323de0430cd26bde4108d.jpg'
      }
     
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  // function dummy() {
  //   console.log('dummy prop function');
  // }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
  }, []);

  return (
    <div className='list-item-container'>
      <ItemList items={products} />
        {/* <ItemCount initial={0} stock={5} onAdd={dummy} /> */}
    </div>
  )
}

export default ItemListContainer