// 1- Traer o referenciar todos los elementos del HTML y los vamos a guardar en variables para poder utilizarlas despues

//Metodos de seleccion
let numeroContador = document.getElementById("numeroContador");
let botonIncremento = document.getElementById("botonIncrementar")
let botonDecremento = document.getElementById("botonDecrementar")
let botonResetear = document.getElementById("botonResetear")
let memeRandom = document.querySelector("#memeRandom")


//Declarar una variable con un estado inicial
var valorContador = 0;

//Logica de negocio

function incrementar(){
    valorContador++;
    numeroContador.innerHTML = valorContador;

    if (valorContador ===10){
        mostrarImagen();
    } else {
        memeRandom.style.display = "none";
    }

}

function decrementar(){
    valorContador--;
    numeroContador.innerHTML = valorContador

    if (valorContador ===10){
        mostrarImagen();
    } else {
        memeRandom.style.display = "none";
    }

}

function resetear(){
    valorContador = 0;
    numeroContador.innerHTML = valorContador;
}

//La intencion de esta funcion es que cuando sea invocada, recorra el arreglo y tome uno de los elementos de forma aleatoria (index)
function mostrarImagen(){
    var coleccionImagenes = ["./img/meme1.png", "./img/meme2.png", "./img/meme3.png", "./img/meme4.png"];

    //Generar un indice aleatorio
    let indexRandom = Math.floor(Math.random()* coleccionImagenes.length);

    //Obtener la URL o direccion de la imagen
    let urlAleatoria = coleccionImagenes[indexRandom];

    //Agrego la URL al atributo src que deje vacio en el HTML
    memeRandom.src = urlAleatoria;
    //Cambio la propiedad de visualizacion (display) a un block
    memeRandom.style.display = "block";
}

/*Evento con EventListener

Permite escuchar el evento indicado (primero parametro) y en el caso de que ocurra (escuche), se ejcuta la funcion asociada (segundo parametro)


Sintaxis

object.addEventListener(nombreDelEvento, funcionQueSeDispara)

*/

//Eventos en los botones

botonIncremento.addEventListener("click", incrementar);
botonDecremento.addEventListener("click", decrementar);
botonResetear.addEventListener("click", resetear);