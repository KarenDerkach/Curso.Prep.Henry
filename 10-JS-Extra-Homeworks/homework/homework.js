// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for(var i = 0; i < string.length; i++){
    var letra = string[i];
    var NoHayLetra = !objeto[letra]
    if(NoHayLetra){
      objeto[letra] = 0;
    }
    objeto[letra] ++;
  }return objeto;
}

/**
 * Otra forma
function cantidadLetras(string) {
  objeto = {};
    for (let i = 0; i < string.length; i++) {
      if (Object.keys(objeto).includes(string[i])) {
        objeto[string[i]] = objeto[string[i]] + 1;
      } else {
        objeto[string[i]] = 1;
      }
    }
    return objeto;
  }
 */


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var LetraMayus = "";
  var LetraMinus = ""; 
for (var i = 0; i < s.length ; i++){
  if(s[i] === s[i].toUpperCase()){
        LetraMayus = LetraMayus + s[i]
    }if (s[i] === s[i].toLowerCase()){
      LetraMinus = LetraMinus + s[i]
          }  
    } return LetraMayus+LetraMinus;
}




function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var str2 = '';
var espejo = [];

for(var i = str.length-1; i>=0; i--){
  str2 += str[i]
}
var str2 = str2.split(' ')

for(var i = str2.length-1; i>=0; i--){
espejo.push(str2[i])
}

return espejo.join(' ')
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa/palindromo.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //var numRevez = numero.split("").reverse().join("");
  var stringNumero = numero.toString()
  var numeroRevez = stringNumero.split("").reverse().join("")
  if(stringNumero === numeroRevez){
    return "Es capicua";
  }else { 
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replace("a","");
  cadena = cadena.replace("b","")
  cadena = cadena.replace	("c","")
 return cadena   
}
// otra forma
/**
 * function borrarAbc(cadena){
  var array = cadena.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "a" || array[i] === "b" || array[i] === "c") {
      array.splice(i, 1);
       i--;
    }
    return array.join("")
  }
 * 
 */

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrOrdenado = arr.sort(function(elementoPrimero, elementoSiguiente){
    return elementoPrimero.length - elementoSiguiente.length;
  });
  return arrOrdenado
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var ArrComun = [];
  for(var i = 0; i<arreglo1.length; i++){
    for(var x = 0; x<arreglo2.length; x++){
      if(arreglo1[i] === arreglo2[x]){
        ArrComun.push(arreglo1[i])
      }
    }
  }return ArrComun;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

