import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(props) {
    return (
        <div>
            <h1 className='h1'>Interior Design</h1>
            <ul className= "nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Muebles</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Accesorios</a>
                </li>

            </ul>
        </div>
    );
}

export default NavBar;