import React, { useState } from 'react'

const Ex4 = ()=>{

    const [datos, setDatos] = useState({
        "nombre": null,
        "lengua": null,
        "pasatiempos": [],
        "fruta": "Pera",
        "sexo": "Hombre",
        "fechaNac": null

    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(datos.nombre==null || "" || datos.lengua==null ||
         datos.fruta==null || datos.sexo==null || datos.fechaNac==null || datos.fechaNac=="" || datos.pasatiempos.length<1){
             alert("Llena todos los campos")
         }else{
            let datosEscritos = `<p>Estos son tus datos</p>
            <h1> Nombre: ${datos.nombre} </h1>
            <h4> Lengua: ${datos.lengua}</h4>
            <h4> Pasatiempos: ${datos.pasatiempos.map(item=>(item +", "))}</h4>
            <h4> Fruta: ${datos.fruta}</h4>
            <h4> Sexo: ${datos.sexo}</h4>
            <h4> Fecha de Nacimiento: ${datos.fechaNac}</h4>
            `
            var myWindow = window.open("", "New", "width=400,height=400");
            myWindow.document.write(datosEscritos);
         }
    }

    const handleTextInput = (value)=>{
        var regex = /^[a-zA-Z]*$/;
        console.log(value)
        if (regex.test(value)) {
            setDatos({...datos, "nombre": value})
            return;
        }else{
            document.getElementById("nombre").value=datos.nombre
        }
        return;     
    }
    const styles={
        "display": "block",
        "margin": "5px",
    }

    const handleCheckbox = (e)=>{
        if(datos.pasatiempos.includes(e)){
            console.log("se quiere eliminar "+e)
            setDatos({...datos, "pasatiempos": datos.pasatiempos.filter(item=> item !==e)})
        }else{  
            console.log("Se agregó")
            setDatos({...datos, "pasatiempos": [...datos.pasatiempos, e]})
        }
    }

    const handleDate= (e)=>{
        setDatos({...datos, "fechaNac": e})
        console.log(datos.fechaNac)
    }
    const styleContainer = {
        "padding": "20px"
    }

    return(
    <React.Fragment>
        <div style={styleContainer}>
        <p className="ejercicio">Realizar un formulario con los siguientes campos
<p>
Nombre completo: campo de texto, requerido.
</p>
<p>
Selecciona tu lengua materna: radio button
Español
Inglés
Alemán
Francés
</p>
<p>
Selecciona tus pasatiempos favoritos: checkbox
Lectura
Deporte
Video juegos
Dormir
Viajar
</p>
<p>
Fruta favorita: lista desplegable
Naranja
Pera
Fresa
Manzana
Plátano
</p>
<p>
Selecciona tu sexo: radio button
Hombre
Mujer
</p>
<p>
Elije tu fecha de nacimiento:  dd/mm/aaaa
</p>
Los resultados del formulario se deberán mostrar en una segunda página html, se deberán mostrar alertas, confirmaciones y mensajes de ERROR/VALIDACIÓN.</p>
<div className="main-content">

<form>
    <div style={styles}>
<label for="nombre" style={styles}>Nombre</label>
<input id="nombre" type="text" onChange={e=>handleTextInput(e.target.value)}></input>
</div>

<div style={styles}>
<h4>Selecciona tu lengua materna</h4>
<input type="radio" id="español" name="español" checked={datos.lengua === 'español'} onClick={e=>setDatos({...datos, "lengua": e.target.value})} value="español"/>
<label for="Español">Español</label><br/>
<input type="radio" checked={datos.lengua === 'Ingles'} id="Ingles" name="Ingles" value="Ingles" onClick={e=>setDatos({...datos, "lengua": e.target.value})}/>
<label for="Ingles">Ingles</label><br/>
<input type="radio" id="Aleman" checked={datos.lengua === 'Aleman'} name="Aleman" value="Aleman" onClick={e=>setDatos({...datos, "lengua": e.target.value})}/>
<label for="Aleman">Aleman</label><br/>
<input type="radio" id="Frances"  checked={datos.lengua === 'Frances'} name="Frances" value="Frances" onClick={e=>setDatos({...datos, "lengua": e.target.value})}/>
<label for="Frances">Frances</label>
<br/>
</div>
<div style={styles}>
<h4>Selecciona tus pasatiempos favoritos</h4>
<input type="checkbox" id="Lectura" name="Lectura" checked={datos.pasatiempos.includes("Lectura")} value="Lectura" onClick={e=>handleCheckbox(e.target.value)} />
<label for="Lectura"> Lectura</label><br/>
<input type="checkbox" id="Deporte" name="Deporte" checked={datos.pasatiempos.includes("Deporte")} value="Deporte" onClick={e=>handleCheckbox(e.target.value)} />
<label for="Deporte"> Deporte</label><br/>
<input type="checkbox" id="Videojuegos" name="Videojuegos" checked={datos.pasatiempos.includes("Videojuegos")} value="Videojuegos" onClick={e=>handleCheckbox(e.target.value)}/>
<label for="Videojuegos"> Videojuegos</label><br/>
<input type="checkbox" id="Dormir" name="Dormir" checked={datos.pasatiempos.includes("Dormir")} value="Dormir" onClick={e=>handleCheckbox(e.target.value)}/>
<label for="Dormir"> Dormir</label><br/>
<input type="checkbox" id="Viajar" name="Viajar" checked={datos.pasatiempos.includes("Viajar")} value="Viajar" onClick={e=>handleCheckbox(e.target.value)}/>
<label for="Viajar"> Viajar</label><br/>
</div>
<div style={styles}>

<label for="fruta" style={styles}><h4>Fruta favorita</h4></label>
<select name="fruta" id="fruta" onChange={e=>setDatos({...datos, "fruta":e.target.value})}>
    <option value="Pera">Pera</option>
    <option value="Fresa">Fresa</option>
    <option value="Manzana">Manzana</option>
    <option value="Naranja">Naranja</option>
    <option value="Platano">Platano</option>
</select>
</div>

<div style={styles}>
<h4>Sexo</h4>
<input type="radio" id="Hombre" checked={datos.sexo === 'Hombre'} onClick={e=>setDatos({...datos, "sexo":e.target.value})} name="Hombre" value="Hombre"/>
<label for="Hombre">Hombre</label><br/>
<input type="radio" id="Mujer" checked={datos.sexo === 'Mujer'} name="Mujer" value="Mujer" onClick={e=>setDatos({...datos, "sexo":e.target.value})}/>
<label for="Mujer">Mujer</label><br/>
</div>
<div style={styles}>

<div className="form-input" style={styles}>
<label for="fecha-nac" style={styles}><h4>Fecha de nacimiento</h4></label>
<input id="fecha-nac"  onChange={e=>handleDate(e.target.value)} type="date" ></input>
</div>
</div>
<input type="submit" onClick={handleSubmit}/>
</form>
</div>
</div>
    </React.Fragment>
    )
}

export default Ex4;