import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <React.Fragment>
            <nav>
            <ul>
                <li>
                    <Link className="link" to="/home">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/ejercicio1">Ejercicio1</Link>
                </li>
                <li>
                    <Link className="link" to="/ejercicio2">Ejercicio2</Link>
                </li>
                <li>
                    <Link className="link" to="/ejercicio3">Ejercicio3</Link>
                </li>
                <li>
                    <Link className="link" to="/ejercicio4">Ejercicio4</Link>
                </li>
                <li>
                    <Link className="link" to="/ejercicio5">Ejercicio5</Link>
                </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;