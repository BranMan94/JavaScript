/*

Control de FLujo

Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).



Condicionales:

Son estructuras o condiciones que nos permiten modificar el orden natural de ejecucion de nuestro programa. Son sentencias especificas que nos ayudaran a decidir si una condicion se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones.

Ej:
Tengo limpia mi playera de la suerte? //pregunta o instruccion que detona la condicion
    true: Entonces voy a la fiesta //respuesta con su posible instruccion
    false:: Entonces me quedo a mimir //respuesta con su posible instruccion



*/




/* 

Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){
    //Ejecuto este bloque de codigo
}


*/


// Felipe tiene 17 años y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 años). Ayuda a Felipe decidir si puede ir a la fiesta o no.


// Evaluamos solo una expresion (si Felipe tiene mas de 18 años), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esta situacion (incertidubmre).

let edadFelipe = 17; //Debemos tomar en cuenta primero la edad de Felipe
let edadPermitida = 18;

if (edadFelipe < edadPermitida){
    console.log("Lo siento Felipe, no puedes ir a la fiesta");
}


/*

Else (de otro modo -si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.


Estructura basica del Else

if (condicion) {
    // Este bloque se ejecuta si la condicion es verdadera
} else {
    // Este bloque se ejecuta si la condicion es falsa
}

*/


let edadAxel = prompt("Ingresa tu edad")
let edadParaEntrarALaFiesta = 18;

if (edadAxel < edadParaEntrarALaFiesta){ //verdadero

    //Se ejecuta cuando es verdadero (que Axel es menor a la edad permitida)
    console.log("Lo siento, no puedes entrar a la fiesta")

} else {

    //Se ejecuta cuando es falso (que Axel es mayor a la edad permitida)
    console.log("Felicidades, tienes la edad permitida para entrar a la fiesta");
}


/* Test de nuestro programa (valores que tambien se evaluan como falsos)

    -"false" (String)
    -NaN
    -false (boolean dispara verdadero)

*/


/*
Else If (ademas si / si no entonces)

Esta condicional nos ayuda a ejectuar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else. Else es el puente entre una funcion y otra.


Estructura basica del else if

if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 tambien es falsa
} else{
    //bloque de codigo que se ejecuta si la condicion 1, 2 y 3 son falsas
}

Se pueden anidar x cantidad de "else if" entre el if que evalua la condicion inicial y el else que termina toda la expresion

*/

let hora = prompt("Ingrese la hora actual");
if (hora < 12){
    console.log("Buenos dias")
} else if (hora <= 19){
    console.log("Buenas tardes ya, que barbaro como pasa el tiempo");
} else {
    console.log("Buenas noches, vamos a mimir")
}




/*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)



switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break;

    case valor2:
        //Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        //Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        //Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        //Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}
*/

//Ejemplo de Switch

let pisoDestino = prompt("Ingresa el piso al que quieras ir (1 al 5)");

switch(pisoDestino) {

    //para jugar con nuestros casos, el tipo de dato debe coincidir para que se ejecute correctamente
    case "1":
        console.log("Vamos a piso 1 (suena musica de elevador de fondo)");
        break;

    case "2":
        console.log("Vamos a piso 2 (suena musica de elevador de fondo)");
        break;
    
    case "3":
        console.log("Vamos a piso 3 (suena musica de elevador de fondo)");
        break;

    case "4":
        console.log("Vamos a piso 4 (suena musica de elevador de fondo)");
        break;

    case "5":
        console.log("Vamos a piso 5 (suena musica de elevador de fondo)");
        break;

    default:
        console.log("Ingresaste un piso que no es valido");
}


//Ejercicio de Eevee

var elementoEvolucion = prompt("Ingresa el elemento con el que evolucionaras a tu pokemon");

switch(elementoEvolucion){

    case "piedraFuego":
        console.log("Tu Eevee ha evolucionado a Flareon")
        break;

    case "piedraTrueno":
        console.log("Tu Eevee ha evolucionado a Jolteon")
        break;

    case "piedraAgua":
        console.log("Tu Eevee ha evolucionado a Vaporeon")
        break;

    case "piedraHielo":
        console.log("Tu Eevee ha evolucionado a Glaceon")
        break;

    case "piedraHierba":
        console.log("Tu Eevee ha evolucionado a Leafeon")
        break;

    case "amistadDia":
        console.log("Tu Eevee ha evolucionado a Espeon")
        break;

    case "amistadNoche":
        console.log("Tu Eevee ha evolucionado a Umbreon")
        break;
}




/*

NECESITAMOS AND PARA QUE TENGA SENTIDO ESTE EJERCICIO

edadDeDavid = 19;
edadPermitidaDelAntro = 18;
dineroDeDavid = 50;
coverDelAntro = 150;

if (edadDeDavid > edadPermitidaDelAntro){
    console.log("Muy bien, puedes ir al antro")
} else if (dineroDeDavid > coverDelAntro){
    console.log("David si puede entrar al antro")
} else {
    console.log("Lo siento, no tienes dinerito suficiente para pagar el cover")
}

*/





/*
El IMC resulta a de la división de la masa del individuo (en kg) entre el cuadrado de la estatura (en metros). El índice de masa corporal es un indicador del peso de una persona en relación con su altura. 
Clasificación del IMC de acuerdo con la OMS de la ONU:
・Menor a 16: Criterio de ingreso.
・16 a 16.9: infrapeso.
・17 a 18.4: bajopeso
・18.5 a 24.9: peso normal.
・25 a 29.9: sobrepeso
・30 a 34.9: obesidad premórbida
・50 a 45: obesidad mórbida
・Mayor a 45: obesidad hipérmorbida

Escriba un programa que dado el peso de una persona en libras (1 libra = 0.453592 kg) y su estatura en centímetros, calcule su IMC e indique como salida el peso en kilogramos, el valor de IMC de la person a y la categoría en la cual fue clasificado.
*/

let pesoLibras = prompt("Ingrese su peso en libras");
let estaturaCM = prompt("Ingrese su estatura en centímetros");
     
function calculoIMC() {
    pesoKG = pesoLibras * 0.453592;
    estaturaMetros = estaturaCM / 100;
    indiceMasa = pesoKG / (estaturaMetros ** 2);
    console.log("Su peso en kilogramos es:", pesoKG);
    console.log("Su estatura en metros es:", estaturaMetros);
    console.log("Su IMC es", indiceMasa);
    if (indiceMasa < 16) {
        console.log("Criterio de ingreso");
    } else if (indiceMasa >= 16 && indiceMasa <= 16.9) {
        console.log("Infrapeso");
    } else if (indiceMasa >= 17 && indiceMasa <= 18.4) {
        console.log("Bajopeso");
    } else if (indiceMasa >= 18.5 && indiceMasa <= 24.9) {
        console.log("Peso normal");
    } else if (indiceMasa >= 25 && indiceMasa <= 29.9) {
        console.log("Sobrepeso");
    } else if (indiceMasa >= 30 && indiceMasa <= 34.9) {
        console.log("Obesidad premórbida");
    } else if (indiceMasa >= 35 && indiceMasa <= 45) {
        console.log("Obesidad mórbida");
    } else if (indiceMasa > 45) {
        console.log("Obesidad hipérmorbida");
    }
}

calculoIMC();