import React from 'react';
import {Link} from 'react-router-dom'


const Home = ()=>{
    return(
        <div id="home">
            <h1>Tarea de Javascript</h1>
        <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/ejercicio1">Ejercicio1</Link>
                </li>
                <li>
                    <Link to="/ejercicio2">Ejercicio2</Link>
                </li>
                <li>
                    <Link to="/ejercicio3">Ejercicio3</Link>
                </li>
                <li>
                    <Link to="/ejercicio4">Ejercicio4</Link>
                </li>
                <li>
                    <Link to="/ejercicio5">Ejercicio5</Link>
                </li>
                </ul>
        </div>
    )
}

export default Home;