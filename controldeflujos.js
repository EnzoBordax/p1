function viajar(destino) {
    if (destino === 'Brasil') {
        console.log('gire a la izquierda');
    } else if (destino === 'Argentina') {
        console.log('gire a la derecha');
    } else { 
        console.log('nos perdimos');
    }
}
 viajar ('Argentina');

 //* CONDICIONAL: IF, ELSE, ELSE IF Y SWITCH
 //! IF
 // es una estructura de control utilizada para tomar desiciones basadas en una condicion
 if ('llueve') {
     alert ("cae agua")
 }
 // las {} son necesarias  pero cuando los utilizamos, el codigo queda mas claro, por que por que se puede apreciar en un rapido vistazo que instrucciones estn dependendo del if.
 // los saltos de linea tampoco son necessariaas y se han colocado tambien para que se vea mejor la estructura.
   
 //else se utiliza en conjunto con if y nos permite ejecututar  un bloque de codigo cuando la condicion de if es falsa.
 
 if ('llueve') {
    alert ("cae agua");
 } else {
    alert ("se despejo");
 }
 
 //else if:
 // permite comprobar multiples condiciones secuencialmente hasta que se cumpla una de ellas.
 // se utiliza para evaluar  multiples condiciones en orden y ejectar bloques de codigo correspondiente a la primera condicion que se cumpla.
 
 if (10>6) {
    // el codigo se ejerce solo si 10 es mayor que 6
 } else if (3<7){
    //se ejecuta solo si la primera condicion es falsa  y esta es verdadera
 } else{
    // si no, hara lo que este aqui adentro
 }

 // If anidado
 // Con un solo IF podemos evaluar y realizar una acción u otra según 2 posibilidades, pero si tenemos más posibilidades que evaluar podemos añadir IFs

let num1 = 23;
let num2 = 63;

if (num1 == num2) {
    console.log("los dos num son iguales");
} else {
    if (num1 > num2) {
        console.log("El primer num es mayor al primero");
    } else {
        console.log("El segundo num es mayor al segundo");
    }
}
//SWITCH
// Switch se utiliza para tomar decisiones en función de distintos estados de las variables. Esta expresión se utiliza cuando tenemos múltiples posibilidades a avaluar.

switch (expresión) {
    case valor1:
        // Sentencias a ejecutar si la expresión tiene como valor1
        break;
    case valor2:
        // Sentencias a ejecutar si la expresión tiene como valor2
        break;
    case valor3:
        // Sentencias a ejecutar si la expresión tiene como valor3
        break;
    default:
        // Sentencias a ejecutar si el valor no es ninguno de los anteriores
}

let semaforo = "verde";

switch (semaforo) {
    case "verde":
        console.log("Cruzo");
        break;
    case "amarillo":
        console.log("Precaucion");
        break;
    case "rojo":
        console.log("Freno");
        break;
    default:
        console.log("No se encontro opcion");
}

//! Operador Ternario:
/* nos sirve para escribir el código de una sentencia if de una forma más sencilla:
condición ? expr1 : expr2;

condición > es una expresión que se evalúa como true o false.
expr1 > si la condición es true retorna este valor.
expr2 > si la condición es false. */

var edad = 18;
var mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);
    
 