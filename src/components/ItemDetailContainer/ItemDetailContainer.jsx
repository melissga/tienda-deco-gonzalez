import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {getItem } from '../../data/database';


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