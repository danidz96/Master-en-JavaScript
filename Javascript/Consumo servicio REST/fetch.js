"use strict";

//Fetch y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_leanne = document.querySelector("#leanne");
var div_alumno = document.querySelector("#alumno");

getUsuarios()
  .then(data => data.json())
  .then(users => {
    listadoUsuarios(users);

    return getInfo();
  })
  .then(data => {
    div_alumno.innerHTML = data;
    return getLeanne();
  })
  .then(data => data.json())
  .then(user => {
    mostrarLeanne(user);
  })
  .catch(error =>{
      console.error(error);
      
  });

function listadoUsuarios(usuarios) {
  for (let i = 0; i < usuarios.length; i++) {
    let nombre = document.createElement("h2");
    nombre.innerHTML = i + " " + usuarios[i].name;
    div_usuarios.appendChild(nombre);
  }

  /*         usuarios.map((user, i) =>{
                let nombre = document.createElement('h2');
                nombre.innerHTML = i + user.name;
                div_usuarios.appendChild(nombre);
            }); */

  document.querySelector(".loading").style.display = "none";
}

function mostrarLeanne(usuarios) {
  let nombre = document.createElement("h4");
  nombre.innerHTML = usuarios.name;
  div_leanne.appendChild(nombre);

  let email = document.createElement("h5");
  email.innerHTML = usuarios.email;
  div_leanne.appendChild(email);

  document.querySelector("#leanne .loading").style.display = "none";
}

function getUsuarios() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}

function getLeanne() {
  return fetch("https://jsonplaceholder.typicode.com/users/1");
}
function getInfo() {
  var alumno = {
    nombre: "Dani Domínguez",
    email: "dani@gmail.com"
  };
  
  return new Promise((resolve, reject) => {
    var alumno_string = "";
    setTimeout(() => {
      alumno_string = JSON.stringify(alumno);
      if (typeof alumno_string != "string" || alumno_string == "") {
        return reject("error");
      }

      return resolve(alumno_string);
    }, 5000);
  });
}
