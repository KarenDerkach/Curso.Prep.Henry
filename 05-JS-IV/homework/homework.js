// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var Gato = { 
  nombre: nombre,
  edad: edad,
  meow:function(){
    return "Meow!"
  },
}
  return Gato
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
  
}
//en el objeto "objeto" no vamos a encontrar la propiedad "property" y su valor. Lo tenemos que agregar.
// pero en este caso property como argumento es un STRING, entonces tenemos que agregar esa nueva propiedad
// pero con BRAKET NOTATION porque no sabemos que el usuario colocara como argunmento y sin comillas porque
// el que va a ingresar el string es el usuario y yo lo tengo que llamar como su nombre oroginal.
// si dentro del objeto habia una propiedad llamada nombre: "Karen" y el usuario dentro de property pone nombre
// entonces se pisa el VALOR de la propiedad nombre que pasa a ser nombre:null
function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  /** el usuario pondrá invocarMetodo({nombre:...,edad:...,saludar:()}, "saludar")
   * entonces si justo coincide con la propiedad saludar que esta dentro del objeto
   * se posiciona en ese lugar y despues lo invoca o imprime.
   * 
   */
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;

}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad]
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
var UsuarioNuevo = {
  nombre: nombre,
  email: email,
  password: password,
}
return UsuarioNuevo;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  // {email: undefined}

  //if (usuario.email === undefined){  // yo se que undefined convertido a booleano es FALSE entonces
  //  return true;                      // no hace falta esa igualacion
  //} else { 
  //  return false
 // }
 if(usuario.email)            //si hay algo definido dentro de email va a ser true, si no hay nada 
 return true                  // seria email:undefined, ese undefined se convierte en false      
return false
}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto[propiedad])
  return true
  return false
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if(password === usuario.password){
    return true
  }return false
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword
  return usuario
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"

  /**
   * usuario ={
   * amigos: [fulanito, fulanito1]}
   * 
   */
  // // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios

  // usuarios = [ usuario={esPremium:...},usuario={esPremium:...},usuario={esPremium:...}]
  // Tu código:
  for (var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma

  //usuario ={posts:[post{likes:12},post{likes:1},post{likes:32}]}
  // Tu código:
  var sumador = 0
  for (var i = 0; i < usuario.posts.length; i++) {
   sumador = sumador + usuario.posts[i].likes
  }
   return sumador   
    }

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento=function(){
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  }
return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
