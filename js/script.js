// STORE 
class Planta {
  constructor(nombre, precio, stock, tipo, lugar) {
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.stock = stock;
    this.tipo = tipo;
    this.lugar = lugar;
  }
  sumaIva( ) {
    this.precio = this.precio *1.21;
    console.log(this.precio);
  }
  sinStock (){
    if (this.stock == 0) {
      console.log("Este producto no tiene stock.")
    } else {
      console.log("Puede agregarlo al carrito.")
    }
  }
}

const plantas =[];
plantas.push (new Planta ("alocacia", 1800, 25,"perenne", "interior"));
plantas.push (new Planta ("hoya pack", 3000, 1,"perenne", "interior" ));
plantas.push (new Planta ("margarita", 800, 35, "perenne", "exterior"));
plantas.push (new Planta ("salvia", 500, 30, "perenne", "exterior"));
plantas.push (new Planta ("nanouk", 1800, 7, "perenne", "interior"));
plantas.push (new Planta ("ave del paraíso", 1800, 10, "perenne", "exterior"));
plantas.push (new Planta ("hierba mariposa", 2500, 0, "perenne", "exterior"));
plantas.push (new Planta ("geranio", 800, 23, "perenne", "exterior"));
plantas.push (new Planta ("marimonia", 350, 35, "época", "exterior"));

for (const Planta of plantas){
  Planta.sumaIva();
  Planta.sinStock();
}

const perenne = plantas.filter((el) => el.tipo.includes("perenne"));
const epoca = plantas.filter((el) => el.tipo.includes("época" || "epoca"));
const interior = plantas.filter((el) => el.lugar.includes("interior"));
const exterior = plantas.filter((el) => el.lugar.includes("exterior"));

const found = plantas.find(((el) => el.tipo === "época"));

console.log(found);
console.log(exterior);

// RAMOS
class Flor{
  constructor (nombre, color, precio){
    this.nombre = nombre;
    this.color = color;
    this.precio = precio;
  }
}

const ramo =[];
ramo.push (new Flor ("rosa", "negro, rosa, rojo, amarillo, blanco", 1000));
ramo.push (new Flor ("fresia", "rosa, rojo, amarillo, violeta, naranja", 200));
ramo.push (new Flor ("jazmín", "blanco", 700));
ramo.push (new Flor ("margarita", "blanco, amarillo, azul", 400));
ramo.push (new Flor ("lilium", "rojo, blanco, amarillo, rosa", 1500));
ramo.push (new Flor ("manzanilla", "blanco", 200));
ramo.push (new Flor("crisantemo", "blanco, rosa, violeta, rojo, amarillo", 150));

ramo.forEach(el => console.log(el.precio * 1.21));

 let ramoColor = prompt("¿Qué color querés en tu ramo?");
 let florElegir = prompt("Elegí una flor");

 let elegida = ramo.find((el) => el.nombre.includes(florElegir));
 console.log(elegida);

 let elegidaIndex = ramo.indexOf(elegida);
 console.log(elegidaIndex);

 let seleccion = document.getElementById("seleccion");


switch (ramoColor) {
  case "azul":
    console.log("elegiste el color" + ramoColor + "para tu" + ramo[elegidaIndex].nombre);
    seleccion.innerHTML="<img src='../img/clipart1686103.png'>";

    break;
  case "rojo":
    console.log("elegiste el color " + ramoColor + "para tu" + ramo[elegidaIndex].nombre);
    seleccion.innerHTML="<img src='../img/clipart2751895.png'>";

    break;
    case "violeta":
      console.log("elegiste el color " + ramoColor + "para tu" + ramo[elegidaIndex].nombre);
      seleccion.innerHTML="<img src='../img/clipart1686103.png'>";
    
      break;
    case "blanco":
      console.log("elegiste el color " + ramoColor + "para tu" + ramo[elegidaIndex].nombre);
      seleccion.innerHTML="<img src='../img/clipart2751895.png'>";
   
      break;
    case "amarillo":
    console.log("elegiste el color " + ramoColor + "para tu" + ramo[elegidaIndex].nombre);
    seleccion.innerHTML="<img src='../img/clipart940165.png'>";
   
    break;
    case "rosa":
      console.log("elegiste el color " + ramoColor + "para tu" + ramo[elegidaIndex].nombre);
      seleccion.innerHTML="<img src='../img/clipart940165.png'>";
    
      break;
    case "naranja":
      console.log("elegiste el color " + ramoColor + "para tu" + ramo[elegidaIndex].nombre);
      seleccion.innerHTML="<img src='../img/clipart940165.png'>";
    
      break;
    case "negro":
      console.log("elegiste el color " + ramoColor + "para tu" + ramo[elegidaIndex].nombre);
      seleccion.innerHTML="<img src='../img/clipart1686103.png'>";
    
      break;
  default:
    if (ramoColor=" ") {
      prompt("Por favor, no dejes este espacio vacío. ¿Qué color querés en tu ramo?")
    }else {
      alert("No elegiste un color válido.")
    }
    break;
}

let ramoCompleto = [];
function armar(a){
  ramoCompleto.push(ramo[a]);
}

armar(elegidaIndex);
console.log(ramoCompleto);

const ramoPrecio = ramoCompleto.map((el) => el.precio);
console.log(ramoPrecio);
const total = ramoPrecio.reduce((a, b) => a + b, 0);

console.log("el total a pagar es " + total);


// CARRITO
let carrito = [];

let agregarProducto = prompt("ingrese un producto 0 - alocacia 1- hoya pack 2- margarita 3 - salvia 4 - nanouk") 

function comprar(producto){
    carrito.push(plantas[producto]);
}
comprar(agregarProducto);

const conRamo = carrito.concat(ramoCompleto);

const conRamoTotal = conRamo.map((el) => el.precio);
const precioTotal = conRamoTotal.reduce((a, b) => a + b, 0);

const conRamoLista = conRamo.map((el) => el.nombre);
console.log(conRamoLista);

console.log("el total a pagar es " + precioTotal);


// DESCUENTOS 

let codigo = prompt("Ingrese el código de descuento");

if (codigo == "FLO615V") {
  console.log("Se aplicó un 15% de descuento en tu compra.");
  let precioFinal = parseInt(((precioTotal * 15) /100) + precioTotal);
  console.log(precioFinal);
} else {
  console.log ("El código aplicado no existe. El precio total es " + precioTotal);
}

// CUOTAS
let cuotas = Number(prompt("¿En cuantas cuotas abona? 6, 12, o 24."))

switch (cuotas) {
  case 6:
    console.log("Usted abonará en " + cuotas + " cuotas y el total será " + (precioTotal / 6) + " por cuota.")
    break;
    case 12:
    console.log("Usted abonará en " + cuotas + " cuotas y el total será " + (precioTotal / 12) + " por cuota.")
    break;
    case 24:
    console.log("Usted abonará en " + cuotas + " cuotas y el total será " + (precioTotal / 24) + " por cuota.")
    break;
    default: 
    console.log("Usted abonará en un pago, el total de " + precioTotal);
    break;
}

// // CONDICIONALES

// let cantidadFlores = Number(prompt("¿Cuántas flores llevás?"));

// if (cantidadFlores == 0) {
//   console.log("no lleva flores");
// } else if (cantidadFlores < 12) {
//   console.log("lleva menos de 12");
// } else if (cantidadFlores == 12) {
//   console.log("lleva una docena");
// } else if (cantidadFlores < 24) {
//   console.log("lleva más de 12 pero menos de 24");
// } else {
//   console.log("lleva demasiadas flores");
// }

// if (color && cantidadFlores > 0) {
//   alert("Tu ramo tiene" + cantidadFlores + "flores de color" + color);
// } else {
//   alert("Tu pedido está incompleto");
// }

// for(let i=0; i<1; i++) {
//   mensaje = prompt("Ingrese un mensaje para la tarjeta del ramo.");
//   if (mensaje=="") {
//     console.log("usted no ha ingresado ningún mensaje.")
//   } else{
//     console.log("ingresaste un mensaje existosamente.");
//   }

// }

// let colores =[];

// for(let i=0; i<3; i++) {
//   colores[i] =prompt("ingrese un color");
// }
