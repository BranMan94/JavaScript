/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/


//Arreglos (objeto)
var casaArreglo = [3, 2, 1, "Rojo"]; //


//Objetos Casa
const casa = {numHabitaciones:3 , numBaños : 1 , numPisos : 2 , color : "Rojo"};

//Para imprimir la informacion de un objeto, utilizo la referencia al objeto, despues un punto, y por ultimo el nombre de la propiedad o metodo que quiero mostrar.

console.log("El color de mi casa es: " , casa.color);


//Instruccion: Crear 50 casas, con la misma estructura pero colores diferentes

//Clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (keys) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esa informacion se va a ir personalizando.

class casaPlantilla {

    //1.- Definir mis propiedades como variables, para posteriormente agregarle valores

    numHabitaciones = 0;
    numBaños = 0;
    numPisos = 0;
    color = "";


    //3.- Definir una funcion constructora. Esta funcion es una funcion especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlas como parametros de construccion y asi poder instanciar nuestro objeto.

    //Los parametros se pasan en el orden en el que fueron declarados, para que cada valor que se use, se asigne a la variable correspondiente
    constructor(numHabitaciones, numBaños, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBaños = numBaños;
        this.numPisos = numPisos;
        this.color = color;
    }




    //2.- Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer mi objeto

    encenderLuces(){
        console.log("Click, luces encendidas");
    }

    abrirVentanas(){
        console.log("Swiiiish, ventanas abiertas");
    }

    guardarmeDelFresnito(){
        console.log("Que agusticidad");
    }

    imprimirInfoDeLaCasa(){
        console.log("El numero de habitaciones es de: ", this. numHabitaciones);
    }
}

//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;, pero cuando el objeto se crea (instnacia), se visualiza de otra forma con : y , entre cada valor)



/*Instanciar objetos

Para instanciar objets, usamos la siguiente sintaxis:


variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de construccion);

let objeto = new ClaseObjeto (parametros);

*/


//Tengo una variable llamada "casa de Felipe", que es un nuevo objeto de la clase "casa Plantilla" y que tiene los siguientes parametros
let casaDeFelipe = new casaPlantilla (6, 3, 3, "Azul");

console.log(casaDeFelipe);
casaDeFelipe.encenderLuces();



//Ejemplo de POO con Gatitos

//1. Definir clase
class gatitos {

    //2. Propiedades
    nombre = "";
    edad = 0;
    tamaño = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

    //4. Constructor
    constructor (nombre, edad, tamaño, caracter, numeroVidas, color, raza, vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;
    }


    //3. Metodos

    imprimirInfo(){
        console.log("El nombre de mi gato es: ", this.nombre);
        console.log("La edad de mi gato es: ", this.edad);
        console.log("El tamaño de mi gato es: ", this.tamaño);
        console.log("El caracter de mi gato es ", this.caracter);
        console.log("El numero de vidas de mi gato es ", this.numeroVidas);
        console.log("El color de mi gato es ", this.color);
        console.log("La raza de mi gato es ", this.raza);
        console.log("Mi gato tiene sus vacunas? ", this.vacunas);
    };

    maullar(){
        console.log("Miauuu");
    };

    rasguñar(){
        console.log("El gato ha rasguñado el sillon");
    };

    ronronear(){
        console.log("Rrrrrrrr");
    };

    cuidarGato(){
        if(this.numeroVidas < 3){
            console.log("Cuida a tu gatito porque tiene pocas vidas");
        }
    }
}


//5. Instanciar
let juanchoDelCampo = new gatitos("Juancho Del Campo", 5, "Grande", "Tranquilo", 7, "Naranja", "Angora", true);

juanchoDelCampo.imprimirInfo();



/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

objeto = {
    nombre: "Felipe",
    edad: 15,
}
console.log (objeto);

/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

sintaxis par apasar de objeto normal de JS a JSON es

JSON.stringify(objeto que quiero serializar)

*/

console.log(JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ", objetoSerialziado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerialziado.nombre);


//Para deserealizar un objeto JSON, vamos a utilizar un metodo llamado JSON.parse(objeto que queremos deserealizar)

let objetoDeserializado = (JSON.parse(objetoSerializado))
console.log(objetoDeserisalizado)