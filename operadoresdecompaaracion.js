console.log(12>9);
console.log(0<9);
console.log(3>3); 
console.log(4==9);

//operador de asignacion"="

//operador de igualdad debil "==" compara dos valores para ver sii son iguales realizando una conversion de tipo si es necesaio. esto significa quede comparar valres de diferentes tipos y tratara de convertirlos antes de hace la comparacion

// Operador de igualdad escrita "===": compara dos valores para ver si son iguales, sin realzar ninguna conversion de tipo. Ademas de comparar el valor, tambien compara el tipo de datos. solo vuelve true si los valores son identicos en tipo y contenido.

// 3 es un dato tipo number
//"3" es dato de tipo string

console.log (3==3);
console.log(3===3);
console.log (3=="3");
console.log (3==="3");

//asociatividad: en jv, el operador de asignacion (=) se evalua de derecha a izquierda.

var a = 1;
var b= 2;
var c = a = b;
console.log (c);



