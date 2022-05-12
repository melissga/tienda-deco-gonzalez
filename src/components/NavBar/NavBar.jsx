import React from 'react'; 
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

import useCartContext from '../../store/CartContext';


function NavBar(props) {

    const { contextFunction } = useCartContext(); //llamo al hook useContext y le especifico el contexto al que me quiero conectar
    contextFunction(); //llamo a la funcion 'context'

    return (
        <> 
            <h1 className='h1'>Interior Design</h1>
            <ul className= "nav justify-content-center ul">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/category/sillones">Sillones</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/category/muebles">Muebles</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/category/accesorios">Accesorios Deco</Link>
                </li>

            </ul>
            <CartWidget/>
        </>
    );
}

export default NavBar;