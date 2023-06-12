class empleados {

    nombre = "";
    edad = 0;
    RFC = "";
    diasTrabajados = 0;
    sueldoPorDia = 156.78;



    constructor (nombre, edad, RFC, diasTrabajados, sueldoPorDia){
        this.nombre = nombre;
        this.edad = edad;
        this.RFC = RFC;
        this.diasTrabajados = diasTrabajados;
        this.sueldoPorDia = sueldoPorDia;
    }




    imprimirInfo(){
        console.log("Nombre del empleado: ", this.nombre);
        console.log("Edad del empleado: ", this.edad);
        console.log("RFC del empleado: ", this.RFC);
        console.log("Dias trabajados del empleado: ", this.diasTrabajados);
        console.log("Sueldo diario del empleado: $", this.sueldoPorDia);
    };

    calcularSueldo() {

        console.log("Sueldo semanal bruto: $", (this.diasTrabajados * this.sueldoPorDia).toFixed(2));

        console.log("Sueldo semanal neto (31% de ISR): $", ((this.diasTrabajados * this.sueldoPorDia) * 0.69).toFixed(2));

        console.log("Sueldo quincenal bruto: $", (15 * this.sueldoPorDia).toFixed(2));

        console.log("Sueldo quincenal neto (31% de ISR): $", ((15 * this.sueldoPorDia) * 0.69).toFixed(2));

        console.log("Sueldo mensual bruto: $", (30 * this.sueldoPorDia).toFixed(2));
        
        console.log("Sueldo mensual neto (31% de ISR): $", ((30 * this.sueldoPorDia) * 0.69).toFixed(2));
    }
}

let Brandon = new empleados("Brandon", 29, "GULB9405136U5", 7, 156.78);

Brandon.imprimirInfo();
Brandon.calcularSueldo();