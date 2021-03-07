import React, {useState} from 'react'


const Ex2 = ()=>{
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
        let resultado = parseFloat(((numero-32)*5)/9)

        alert(resultado + " ºC")
    }

    return(
        <React.Fragment>
        <p className="ejercicio">
        Realizar el ejercicio anterior, pero con el uso de la función convierteAFarenheit(gc).
        </p>
        <div className="main-content">

        <label for="grados">Grados ºF</label>
        <input name="grados" id="grados" type="text" onChange={e=>handleChange(e.target.value)}></input>
        <button onClick={convertir}>Convertir</button>
        </div>
        </React.Fragment>
    )
}

export default Ex2;