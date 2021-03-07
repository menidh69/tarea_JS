import React, { useState } from 'react'


const Ex5 = ()=>{
    const [datos, setDatos] = useState({
        "nombre": "",
        "apellido": "",
        "telefono": "",
        "correo": "",
        "curp": "",
        "direccion": "",
        "codigoPostal": "",
        "estado": "",
        "localidad": ""
    })
    const [form, setForm] = useState(1);
    
    const handleNumber= (val)=>{
        if(isNaN(val)){
            document.getElementById("telefono").value=datos.telefono;
            console.log("no es")
            console.log(val)
            return
        }
        else{
            limit(document.getElementById("telefono"), val, 9)
            return
        }
    }

    const handelCodigo= (val)=>{
        if(isNaN(val)){
            document.getElementById("codigoPostal").value=datos.codigoPostal;
            console.log("no es")
            console.log(val)
            return
        }
        else{
            let el = document.getElementById("codigoPostal")
            let max_chars = 5;

            if(el.value.length > max_chars) {
                el.value = el.value.substr(0, max_chars);
            }else{
                setDatos({...datos, "codigoPostal": val})
            }
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      const styles={

        "display": "block",
        "margin": "5px",
    }
function validateForm1(){
    let elements = document.getElementsByClassName("requerido");
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].value==""||null){
            alert("Llena todos los campos")
            return
        }
     }
     if(validateEmail(datos.correo)){
        setForm(2)
        return
    }else{
        alert("Ingresa un correo valido")
        return
    }
    
}
    function limit(element, val, num)
{
    var max_chars = num;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
        return
    }else{
        setDatos({...datos, "telefono": val})
    }
}

const handleCurp = (e)=>{
    var max_chars = 10;
    let element = document.getElementById("curp")
    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
        return
    }else{
        setDatos({...datos, "curp": e})    
    }
}

const send = (e)=>{
    e.preventDefault();
    let elements = document.getElementsByClassName("requerido2");
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].value==""||null){
            alert("Llena todos los campos")
            return
        }
     }
     let datosEscritos = `<p>Estos son tus datos</p>
            <h1> Nombre: ${datos.nombre} </h1>
            <h4> Apellido: ${datos.apellido}</h4>
            <h4> Telefono: ${datos.telefono}</h4>
            <h4> Correo: ${datos.correo}</h4>
            <h4> CURP: ${datos.curp}</h4>
            <h4> Direccion: ${datos.direccion}</h4>
            <h4> Codigo Postal: ${datos.codigoPostal}</h4>
            <h4> Localidad: ${datos.localidad}</h4>
            <h4> Estado: ${datos.estado}</h4>
            `
            var myWindow = window.open("", "New", "width=400,height=400");
            myWindow.document.write(datosEscritos);
            return
}
    const handleTextInput = (value, nombre)=>{
        var regex = /^[a-zA-Z]*$/;
        console.log(value + " " + nombre)
        if (regex.test(value)) {
            console.log(value +" "+ nombre)
            switch(nombre){
                case "nombre":
                    setDatos({...datos, "nombre": value})
                    return;
                case "apellido":
                    setDatos({...datos, "apellido": value})
                    return;
                case "localidad":
                    setDatos({...datos, "localidad": value})
                    return;
                case "estado":
                    setDatos({...datos, "estado": value})
                    return;
            }
            
        } else {
            console.log("No alfabetico")
            switch(nombre){
                case "nombre":
                    document.getElementById("nombre").value=datos.nombre
                    return;
                case "apellido":
                    document.getElementById("apellido").value=datos.apellido
                    return;
                case "localidad":
                    document.getElementById("localidad").value=datos.localidad
                    return;
                case "estado":
                    document.getElementById("estado").value=datos.estado
                    return;
            }
            return;
        }
    }
    return(
        <React.Fragment>
        <p className="ejercicio"> Crea dos formularios. El primero pedirá al usuario su nombre, apellido, teléfono, correo electrónico y 
            Curp. El segundo pedirá su dirección: dirección, código postal, localidad y estado. Comprueba mediante
             expresiones regulares y lanzando un alert que:

        Nombre y apellido no tengan números y no estén vacíos.
        Que el CURP sea de la forma nueve dígitos + letra.
        Que el teléfono tenga nueve dígitos exclusivamente.
        Que el correo electrónico sea de la forma texto@texto.texto
        Coloca el foco en el segundo elemento del primer formulario por defecto (apellido).
        La validación se debe hacer mediante clases asociadas a los elementos del formulario. Por ejemplo: <input type="text" id="nombre" name="nombre" /></p>
        <div className="main-content">

        {form==1 ?
        <React.Fragment>
        <div id="form1">
        <div className="form-input" style={styles}>
            <label for="nombre" style={styles}>Nombre</label>
            <input id="nombre" className="requerido" type="text" value={datos.nombre}  onChange={e=>handleTextInput(e.target.value, "nombre")}></input>
            </div>

            <div className="form-input" style={styles}>
            <label for="apellido" style={styles}>Apellido</label>
            <input id="apellido" className="requerido" type="text" value={datos.apellido} onChange={e=>handleTextInput(e.target.value, "apellido")}></input>
            </div>
            <div className="form-input" style={styles}>
            <label for="telefono" style={styles}>Telefono</label>
            <input id="telefono" className="requerido" type="tel" value={datos.telefono} onChange={e=>handleNumber(e.target.value)}></input>
            </div>
            <div className="form-input" style={styles}>
            <label for="correo" style={styles}>Correo electrónico</label>
            <input id="correo" className="requerido" type="email" value={datos.correo} onChange={e=>setDatos({...datos, "correo": e.target.value})}></input>
            </div>
            <div className="form-input" style={styles}>
            <label for="curp" style={styles}>CURP</label>
            <input id="curp" className="requerido" value={datos.curp} type="text" value={datos.curp} onChange={e=>handleCurp(e.target.value)}></input>
            </div>
            <button onClick={validateForm1}>Next</button>
        </div>
        </React.Fragment>
        :
        <React.Fragment>
        <div id="form2">
            <div>
            <label for="direccion" style={styles}>Direccion</label>
            <input id="direccion" className="requerido2" type="text" value={datos.direccion}  onChange={e=>setDatos({...datos, "direccion": e.target.value})}></input>
            </div>

            <div className="form-input" style={styles}>
            <label for="codigoPostal" style={styles}>Codigo Postal</label>
            <input id="codigoPostal" className="requerido2" type="text" value={datos.codigoPostal} onChange={e=>handelCodigo(e.target.value)}></input>
            </div>
            <div className="form-input" style={styles}>
            <label for="localidad" style={styles}>Localidad</label>
            <input id="localidad" className="requerido2" type="text" value={datos.localidad} onChange={e=>handleTextInput(e.target.value, "localidad")}></input>
            </div>
            <div className="form-input" style={styles}>
            <label for="estado" style={styles}>Estado</label>
            <input id="estado" className="requerido2" type="text" value={datos.estado} onChange={e=>handleTextInput(e.target.value, "estado")}></input>
            </div>
           
            <button onClick={()=>setForm(1)}>Previous</button>
            <button onClick={send}>Enviar</button>
        </div>
        </React.Fragment>
        }
        </div>
        </React.Fragment>
    )

}

export default Ex5;