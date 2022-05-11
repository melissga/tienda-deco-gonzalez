import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import datos from '../../data/datos';
import { useParams } from 'react-router-dom';


function getItem(id) {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            const producto = datos.find((item) => {
                return Number (id) === item.id;
            })
            resolve(producto);
        }, 300);
    });
}

function ItemDetailContainer() {
    
    const [item, setItem] = useState([]);
    const {itemid} = useParams();
    useEffect(() => {
        getItem(itemid)
            .then(respuestaPromise => {
                setItem(respuestaPromise);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrió un error, revisar la consola!');
            });
    }, [itemid]);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;