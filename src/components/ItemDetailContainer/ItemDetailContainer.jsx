import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


function getItem() {
    const miPromesa = new Promise((resolve, reject) => {
        const productItem =
        {
            id: 3,
            title: 'Rack TV',
            description: 'Mueble de TV modular',
            price: '$8000',
            stock: 5,
            imageUrl: 'https://i.pinimg.com/564x/38/93/46/389346e3d02323de0430cd26bde4108d.jpg'
        };
        setTimeout(() => {
            resolve(productItem);
        }, 2000);
    });
    return miPromesa;
}

function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrió un error, revisar la consola!');
            });
    }, []);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;