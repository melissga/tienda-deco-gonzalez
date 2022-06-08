import React from 'react';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Item({ item }) {
    return (
        < div className='card' style={{width: "18rem"}} >
            <img src={item?.imageUrl} className='card-img-top' alt="..."/>
                <div className='card-body'>
                    <h4 className='card-title titulos color'>{item?.title}</h4>
                    <b className='card-text color'>${item?.price}</b>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <Link to={`/producto/${item.id}`}>
                        <button type="button" className='btn btn-outline-info titulos'>Ver detalle</button>
                        </Link>
                    </li>
                </ul>
        </div>
       
        
    )
}

export default Item;