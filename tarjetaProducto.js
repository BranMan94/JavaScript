// 1.- Obtener los elementos del HTML para guardarlos en variables


// Almaceno el lugar de destino de mi tarjetita en una constante
const container = document.getElementById("product-container");
const botonAgregarProductos = document.getElementById("agregarProductos");


//Almacenar elementos del formulario en variables de JS
let nombreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");


function agregarProductos(){

//Guardo los valores de mis inputs

let valorInputProducto = nombreProducto.value;
let valorInputDescripcion = descripcionProducto.value;
let valorInputImagen = imagenProducto.value;

console.log(valorInputProducto);
console.log(valorInputDescripcion);

// Quiero que cada tarjetita tenga su propio div o contenedor
const productCard = document.createElement("div");

productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3> ${valorInputProducto} </h3>
    <p> Descripcion: ${valorInputDescripcion}</p>
    <p> Precio $9.99 </p>
    <button class="btn"> Agregar al carrito </button>
`;


//Agregar esa tarjeta de producto al container especificado (Este es el hijo)
container.appendChild(productCard);
}

botonAgregarProductos.addEventListener("click", agregarProductos);