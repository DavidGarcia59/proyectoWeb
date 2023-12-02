/* var user='david';
var pass='Ingresar123';

  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;

document.getElementById("limpiarBtn").addEventListener("click", limpiar);
document.getElementById("ingresarBtn").addEventListener("click", validar);


var validacion = new Promise((resolve, reject )=>{
  setTimeout(() =>{
if((user===usuario)&&(pass===contraseña)){
  resolve("Inio Exitoso"); 
  console.log("Inio Exitoso");
}else {
  reject("Usuario o contraseña incorrecto");
  console.log("Fallo de inicio de seseion")
}
  },2000);
});

/* document.getElementById("ingresarBtn").addEventListener("click", function () {
  validar()
      .then((mensaje) => {
          alert(mensaje);
          window.location.href = "segunda.html";
      })
      .catch((error) => {
          alert(error);
      });
}); */

/* validacion.then((mensaje)=>{
  alert(mensaje);
  window.location.href="segunda.html";
})
.catch((error)=>{
  alert(error);
});

function limpiar() {
  document.getElementById("usuario").value = "";
  document.getElementById("contraseña").value = "";
}

 */ 
/*
var user = 'david';
var pass = 'Ingresar123';

document.getElementById("limpiarBtn").addEventListener("click", limpiar());
document.getElementById("ingresarBtn").addEventListener("click", validar());

function validar() {
  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;

  console.log("Usuario:", usuario);
  console.log("Contraseña:", contraseña);

  var validacion = new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((user === usuario) && (pass === contraseña)) {
        resolve("Inicio Exitoso");
        console.log("Inicio Exitoso");
      } else {
        reject("Usuario o contraseña incorrecto");
        console.log("Fallo de inicio de sesión");
      }
    }, 2000);
  });

  validacion.then((mensaje) => {
    console.log("Promesa resuelta:", mensaje);
    alert(mensaje);
    window.location.href = "segunda.html";
  })
  .catch((error) => {
    console.log("Promesa rechazada:", error);
    alert(error);
  });
}

function limpiar() {
  document.getElementById("usuario").value = "";
  document.getElementById("contraseña").value = "";
}
*/
/*
var user = 'david';
var pass = 'Ingresar123';

document.getElementById("limpiarBtn").addEventListener("click", limpiar);
document.getElementById("ingresarBtn").addEventListener("click", validar);

function validar() {
  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;

  console.log("Usuario:", usuario);
  console.log("Contraseña:", contraseña);

  var validacion = new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((user === usuario) && (pass === contraseña)) {
        resolve("Inicio Exitoso");
        console.log("Inicio Exitoso");
      } else {
        reject("Usuario o contraseña incorrecto");
        console.log("Fallo de inicio de sesión");
      }
    }, 2000);
  });

  validacion.then((mensaje) => {
    console.log("Promesa resuelta:", mensaje);
    alert(mensaje);
    window.location.href = "segunda.html";
  })
  .catch((error) => {
    console.log("Promesa rechazada:", error);
    alert(error);
  });
}

function limpiar() {
  document.getElementById("usuario").value = "";
  document.getElementById("contraseña").value = "";
}
*/

let user = 'david@gmail.com';
let pass = 'Ingresar123';

let user1 = 'prueba@gmail.com';


let user2 = 'garcia@gmail.com';


document.getElementById("limpiarBtn").addEventListener("click", limpiar);
document.getElementById("ingresarBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario
    validar();
});


// Registra el evento 'input' en el campo de contraseña para realizar la validación en cada cambio
document.getElementById("contraseña").addEventListener("input", validarRequisitos);

// Variables para rastrear si se ha ingresado al menos una mayúscula y la cantidad de números ingresados
let mayusculaIngresada = false;
let minusculaIngresada = false;
let numerosIngresados = 0;

// Función de validación de requisitos de contraseña
function validarRequisitos() {
    // Obtiene el campo de contraseña y los párrafos correspondientes
    const contraseñaInput = document.getElementById("contraseña").value;
    const mayusculaParrafo = document.querySelector(".p__mayuscula");
    const minusculaParrafo = document.querySelector(".p__minuscula");
    const numerosParrafo = document.querySelector(".p__numeros");
    const caracteresParrafo = document.querySelector(".P__caracteres");

    console.log(contraseñaInput)

    // Verifica si ya se ha ingresado al menos una mayúscula en la cadena
    if (!mayusculaIngresada && /[A-Z]/.test(contraseñaInput)) {
      console.log("Ingresa a verde")
      console.log(contraseñaInput)

        mayusculaParrafo.style.color = "green";
        mayusculaIngresada = true; // Marca que se ha ingresado al menos una mayúscula
    } else if (mayusculaIngresada && !/[A-Z]/.test(contraseñaInput)) {
      console.log("Ingresa a rojo")

      console.log(contraseñaInput)

        mayusculaParrafo.style.color = "red";
        mayusculaIngresada = false; // Reinicia la variable si se eliminó la última mayúscula
    }
    
    if (!minusculaIngresada && /[a-z]/.test(contraseñaInput)){
      minusculaParrafo.style.color="green";
      minusculaIngresada= true; 
      } else if (minusculaIngresada && !/[a-z]/.test(contraseñaInput)){
        minusculaParrafo.style.color = "red";
        minusculaIngresada=false;
      }
    

    // Verifica si hay al menos dos números en la cadena
    const cantidadNumeros = (contraseñaInput.match(/\d/g) || []).length;
    if (cantidadNumeros >= 2) {
        numerosParrafo.style.color = "green";
        numerosIngresados = true; // Marca que se han ingresado al menos dos números
    } else {
        numerosParrafo.style.color = "red";
        numerosIngresados = false; // Reinicia la variable si no hay al menos dos números
    }

    // Verifica si la contraseña tiene al menos 8 caracteres
    if (contraseñaInput.length >= 8) {
        caracteresParrafo.style.color = "green";
    } else {
        caracteresParrafo.style.color = "red";
    }
  }
  




// termina validacion de mayuscula
function validar() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    console.log("Usuario:", usuario);
    console.log("Contraseña:", contraseña);
    const ingreso= document.getElementById("ingreso");
    ingreso.textContent="ingresando.....";

    let validacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            if ((user === usuario) && (pass === contraseña)||(user1 === usuario) && (pass === contraseña)||(user2 === usuario) && (pass === contraseña)) {
              
                resolve("Inicio Exitoso");
                console.log("Inicio Exitoso");
            } else {
                reject("Usuario o contraseña incorrecto");
                console.log("Fallo de inicio de sesión");
            }
        }, 2000); // Simula una demora de 2 segundos
    });

    validacion.then((mensaje) => {

            console.log("Promesa resuelta:", mensaje);
            
            // Redirige a la página 'segunda.html' si el inicio de sesión es exitoso
            window.location.href = "./segunda.html";
            
        })
        .catch((error) => {
            console.log("Promesa rechazada:", error);
            alert(error);
            ingreso.textContent="";
        });
}

function limpiar() {
    // Limpiar los campos de usuario y contraseña
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
}

