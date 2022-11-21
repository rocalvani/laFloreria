// IMPORT

import { carrito, florPrincipal, florSecundaria, Flor, Color, colores, cart, cuentaTotal} from '../js/script.js';

// CREACION DE RAMO

const ramoPrincipal = [];
const ramoSecundario = [];

let seleccion = document.getElementById("seleccion");
let seleccion2 = document.getElementById("seleccionDos");
let settingsPrincipal = document.getElementById("settings__principal");
let settingsSecundario = document.getElementById("settings__secundario");

settingsPrincipal.innerHTML = `Flor principal:`;
settingsSecundario.innerHTML = `Flor Secundario:`;


// SELECCIÓN FLOR PRINCIPAL

florPrincipal.forEach((el) => {

  let principal = document.createElement("div");
  principal.className = "selectPrincipal"

  principal.innerHTML = el.nombre;

  settingsPrincipal.appendChild(principal);

  principal.addEventListener("click", () => {

    seleccion.innerHTML = `
    <img src="${el.img}">`;

    // SUMAR FLORES
    ramoPrincipal.push({
      nombre: el.nombre,
      precio: el.precio,
    });

    // ELIMINAR FLORES EXTRA
    if (ramoPrincipal.length == 2) {
      ramoPrincipal.shift();
    };

    ramoCompleto();

  })

})

// CANTIDAD DE FLORES EN RAMO 
let cantidadTotal = 0;
let seis = document.getElementById("settings__cantidad--6");
let doce = document.getElementById("settings__cantidad--12");
let dieciocho = document.getElementById("settings__cantidad--18");
let cantidad = 1;

seis.addEventListener("click", () => {
  ramoPrincipal.forEach((el) => {
    cantidadTotal = el.precio * 6;
    cantidad = 6;
  })
  ramoCompleto();
});

doce.addEventListener("click", () => {

  ramoPrincipal.forEach((el) => {
    cantidadTotal = el.precio * 12;
    cantidad = 12;
  })
  ramoCompleto();
});

dieciocho.addEventListener("click", () => {
  ramoPrincipal.forEach((el) => {
    cantidadTotal = el.precio * 18;
    cantidad = 18;
  })
  ramoCompleto();
});



// SELECCIÓN FLOR SECUNDARIA

florSecundaria.forEach((el) => {

  let secundaria = document.createElement("div");
  secundaria.className = "selectSecundaria"

  secundaria.innerHTML = el.nombre;

  settingsSecundario.appendChild(secundaria);

  // SELECCION

  secundaria.addEventListener("click", () => {

    seleccion2.innerHTML = `
    <img src="${el.img}">`;

    // SUMAR AL RAMO

    ramoSecundario.push({
        nombre: el.nombre,
        precio: el.precio,
      });

      // ELIMINAR FLORES EXTRA
      if (ramoSecundario.length == 2) {
        ramoSecundario.shift();
      };

      ramoCompleto();

  })

})

// SELECCIÓN COLOR Y MENSAJE

let detail = [];

// COLOR

let color = document.getElementById("seleccionColor");
let settingsColor = document.getElementById("settings__color");

colores.forEach((el) => {

  let colorBoton = document.createElement("div");
  colorBoton.className = "settings__color--boton";

  colorBoton.style.backgroundColor = `${el.color}`;

  settingsColor.appendChild(colorBoton);

  // COLOR ELEGIDO APLICADO

  colorBoton.addEventListener("click", () => {

    color.style.backgroundColor = `${el.color}`;

    detail.push({
      nombre: el.nombre,
      precio: 0,
    });
    // ELIMINAR FLORES EXTRA
    if (detail.length == 2) {
      detail.shift();
    };
  })

})

// AGREGAR MENSAJE

let msj = document.getElementById("settings__msj--form");

// CUENTA TOTAL

let settingsTotal = document.getElementById("settings__compra--total");

let ramoTotal = 0;
let ramo;

function ramoCompleto() {
  
  if (ramoPrincipal && ramoSecundario) {
    let ramoFlores = ramoPrincipal.concat(ramoSecundario);
    ramo = ramoFlores.concat(detail);

    ramoTotal = (ramo.reduce((acc, el) => acc + el.precio, 0) + cantidadTotal) * 1.21;
    
    settingsTotal.innerHTML = `
   <p>Total: </p>
   <p>$${ramoTotal} </p>
  `
  }
}

// SUMAR AL CARRITO 
let settingsButton = document.getElementById("settings__compra--button");

settingsButton.addEventListener("click", () => {

  const ramoCarrito = {
    nombre : "ramo personalizado",
    img : "https://i.pinimg.com/originals/c5/33/81/c53381a8780246c8f7b532be95d4610e.jpg",
    precio : (ramo.reduce((acc, el) => acc + el.precio, 0) + cantidadTotal) * 1.21,
    flores :[ramo[0].nombre, ramo[1].nombre],
    mensaje: msj.value,
    color: ramo[2].nombre,
    cantidad : cantidad,
  }

carrito.push(ramoCarrito);

cart();

cuentaTotal.innerHTML = carrito.length;


});
