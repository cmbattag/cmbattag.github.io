//variables
const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');

const fchnacimiento = document.querySelector('#fnacimiento');
const age = document.querySelector('#age');
const nacionalidad = document.querySelector('#nacion');
const locacion = document.querySelector('#locate');


const generarUsuario = async() => {
  
    const url = 'https://randomuser.me/api/?results=1&gender=male';
    const response = await fetch(url);
    const {results } = await response.json();
    const datos = results[0];
    console.log(datos);
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    foto.src = datos.picture.large;
    correo.textContent = datos.email;
    telefono.textContent = datos.cell;
    fchnacimiento.textContent = datos.dob.date;
    age.textContent = datos.dob.age;
    nacionalidad.textContent = datos.nat;
    locacion.textContent = datos.location.country;
}
 
/*boton.addEventListener('clck', generarUsuario);*/
document.addEventListener('DOMContentLoaded', generarUsuario)


 
 
 /**fetch('https://apis.datos.gob.ar/georef/api/provincias?nombre=cordoba')
        .then (response => response.json())
        .then (usuario => console.log(usuario))

   

  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      */
 
 /** 
      async function consulta(){ 
    let resultado = await fetch('https://randomuser.me/api/?results=1&inc=name,gender=male,nat,picture')
      .then(response => response.json())
      .then(dato => dato)
        console.log(resultado)
    }

    consulta() */