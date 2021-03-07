import React, { useState } from 'react'

const Ex3 = ()=>{
    const styles={

        "display": "block",
        "margin": "5px",
        

    }
    const styles2={
        
        "padding": "40px"
    }

    const [datos, setDatos] = useState({
        "nombre": null,
        "apellido": null,
        "fechaNac": null,
        "ciudadNac": "Hermosillo",
        "estado": null,
        "pais": null,
        "correo": null,
        "comentarios": null

    })

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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
                case "estado":
                    setDatos({...datos, "estado": value})
                    return;
                case "pais":
                    setDatos({...datos, "pais": value})
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
                case "estado":
                    document.getElementById("estado").value=datos.estado
                    return;
                case "pais":
                    document.getElementById("pais").value=datos.pais
                    return;
            }
            return;
        }
    }

  
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(datos.nombre == null || datos.apellido == null ||datos.fechaNac == null  || datos.ciudadNac == null
            ||datos.estado == null ||datos.correo == null || datos.comentarios == null || datos.nombre == "" || 
            datos.apellido == "" ||datos.fechaNac == ""  || datos.ciudadNac == ""
            ||datos.estado == "" ||datos.correo == "" || datos.comentarios == ""
            ){
                alert("Llena todos los campos")
            }
            else{
                if(validateEmail(datos.correo)){
                    alert("datos enviados")
                }else{
                    alert("ingres un correo valido")
                }
                
            }
    }

    const handleDate= (e)=>{
        setDatos({...datos, "fechaNac": e})
        console.log(datos.fechaNac)
    }

    return (
        <React.Fragment>
            <div style={styles2}>
            <p className="ejercicio">  Realizar un formulario con los siguientes campos:

            Nombre: campo de texto (validar solo letras y requerido)
            Apellido Paterno: campo de texto (validar solo letras y requerido)
            Fecha de nacimiento (validar fecha año-mes-dia)
            Ciudad de nacimiento: Lista de selección: Hermosillo, Nogales, Obregón, Navojoa, obligatorio
            Estado: campo de texto, obligatorio
            País: campo de texto
            Correo electrónico: campo de texto, requerido y validar e-mail
            Comentarios: textarea, con un máximo de 125 caracteres y obligatorio.
            Toda la información del formulario debe ser mostrada en la misma página y debe mostrar 
            al usuario alertas en caso de existir errores y una ventana de confirmación cuando envíe 
            el formulario, se debe validar también que el formulario no se envié varias veces.
            </p>
            <div className="main-content">

            <form>
            <div className="form-input" style={styles}>
            <label for="nombre" style={styles}>Nombre</label>
            <input id="nombre" type="text" onChange={e=>handleTextInput(e.target.value, "nombre")}></input>
            </div>

            <div className="form-input" style={styles}>
            <label for="apellido" style={styles}>Apellido</label>
            <input id="apellido" type="text" onChange={e=>handleTextInput(e.target.value, "apellido")}></input>
            </div>

            <div className="form-input" style={styles}>
            <label for="fecha-nac" style={styles}>Fecha de nacimiento</label>
            <input id="fecha-nac"  onChange={e=>handleDate(e.target.value)} type="date" ></input>
            </div>

            <div className="form-input" style={styles}>
            <label for="ciudadNac" style={styles}>Ciudad de nacimiento</label>
            <select name="ciudad-nac" id="ciudaNac" onChange={e=>setDatos({...datos, "ciudadNac":e.target.value})}>
                <option value="Hermosillo">Hermosillo</option>
                <option value="Obregon">Obregon</option>
                <option value="Navojoa">Navojoa</option>
                <option value="Nogales">Nogales</option>
            </select>
            </div>

            <div className="form-input" style={styles}>
            <label for="estado" style={styles}>Estado</label>
            <input id="estado" type="text" onChange={e=>handleTextInput(e.target.value, "estado")} ></input>
            </div>

            <div className="form-input" style={styles}>
            <label for="pais" style={styles}>Pais</label>
            <input id="pais" type="text" onChange={e=>handleTextInput(e.target.value, "pais")} ></input>
            </div>

            <div className="form-input" style={styles}>
            <label for="correo" style={styles}>Correo</label>
            <input id="correo" type="email"  onChange={e=>setDatos({...datos, "correo":e.target.value})}></input>
            </div>
            
            <div className="form-input" style={styles}>
            <label for="comentarios" style={styles}>Comentarios</label>
            <textarea id="comentarios" name="comentarios" rows="4" cols="50" maxlength = "150" onChange={e=>setDatos({...datos, "comentarios":e.target.value})}></textarea>
            </div>
            <input type="submit" onClick={handleSubmit}/>
            </form>
            </div>
            </div>
            
        </React.Fragment>
    )
}

export default Ex3;