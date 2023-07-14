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

  // funcion expresada : la funcion es anonima (sin nombre) se guarda dentro de una variable.
  var sumaTres3 = function (x) {  
    return x + 3; // en esta parte retornamos lo que asignemos a nuestra funcion
  }
// console.log(sumaTres3(9)); 


/* INVOCAR A UNA FUNCION
Una vez que declaramos nuestra funcion para poder utilizarla debemos invocarla. Para ello escribiremos el nombre de la funcion seguido de () */
suma3(5, 10);
 
// funcion de flecha
// es una alternaiva compacta a la expresion de funcion tradicional, pero es limitada y no se puede utuilizar en todas las situaciones.
// Caracteristicas: 
// *es una funcion anonima, para declararla necesito almacenarla en una variable para llamarla despues.
// + ya no se necesita  la palabra reeservada funcion
// - despues de los parentecis colocamos una "flecha". En caso que haya un solo parametro podemos sacar laas parentecis.Cuando la funcion no tiene parametros los parentecis seran obligatorios.
// # a continuacion de la flecha el uso de LLAVES es OPCIONAL (solo si hay mas de una linea se usa). en caso de no usarlas las flechas seran un return incluido para que este inmediatamente despues en la misma linea 

 var sumaTres4 = () => 5 + 3;
 
 console.log(sumaTres4());

 let buscar = () => "no encontramos lo que buscabas"; //en este caso es necesaria la palabra return, ya que se encuentra incluido en flecha. en caso de que haya mas de una linea si necesitaremos las llaves{}.
  console.log(buscar());                                        