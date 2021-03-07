import React, { useState } from 'react'



const Ex1 = ()=>{
    const [valor, setValor] = useState("");

   
    const handleChange= (val)=>{
        if(isNaN(val)){
            document.getElementById("grados").value=valor;
            console.log("no es")
            console.log(val)
            return
        }
        else{
            setValor(val)
            console.log(val)
            return
        }
    }

    function convertir(e){
        e.preventDefault();
        console.log(valor)
        let numero = parseFloat(valor)
        let resultado = parseFloat(((numero*9)/5)+32)

        alert(resultado + " ºF")
    }

    return(
        <React.Fragment >
        <p className="ejercicio">
            Realizar a través de un formulario un programa que convierta de °C a °F, el campo de texto solo debe permitir
             introducir valores numéricos. El resultado se deberá mostrar a través de un alert y permitir al usuario realizar nuevas operaciones.
        </p>
        <div className="main-content">
        <label for="grados">Grados ºC</label>
        <input name="grados" id="grados" type="text" onChange={e=>handleChange(e.target.value)}></input>
        <button onClick={convertir}>Convertir</button>
        </div>
        </React.Fragment>
    )
}

export default Ex1;