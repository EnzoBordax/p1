// funciones:  son bloques de codigo que permiten encapsular comportamientos para ser reutilizados 

/* DECLARACIÓN DE UNA FUNCIÓN:
 funcion declarada:
consta de 
1. palabra reservada function
2. nombre de la funcion con ()
3. bloque de llaves donde se ingresara el codigo que realizara la funcion */

  // funcion declarada:
  function suma3 (variable1, variable2) {
    console.log(variable1 + variable2); // en esta parte retornamos lo que queremos que haga nuestra funcion
  }

  // funcion expresada
//   var sumaTres3 = function (x) {  
//     return x + 3; // en esta parte retornamos lo que asignemos a nuestra funcion
//   }
// console.log(sumaTres3(9)); 


/* INVOCAR A UNA FUNCION
Una vez que declaramos nuestra funcion para poder utilizarla debemos invocarla. para ello escribiremos el nombre de la funcion seguido de () */
suma3(5, 10);
 
// funcion de flecha
// es una alternaiva compacta a la expresion de funcio n tradicional, pero es limitada y no se ppuede utuilizar en todas las situaciones

 var sumaTres4 = () => 5 + 3;
 
 console.log(sumaTres4());