/* Fundamentos  */
console.log("Acceder a los elementos HTML")
console.log(document.body)
console.log(document.head)

console.log("Obtener las clases del elemento")
console.log(document.body.style)
console.log(document.body.className)

console.log("Seleccionar elementos por clase")
const parrafo = document.getElementsByClassName('p2')
console.log(parrafo[0])

console.log("Seleccionar elementos por id")
const div = document.getElementById('div1')
console.log(div)

console.log("Seleccionar elementos con querySelector")
const div1 = document.querySelector('#div1')
console.log(div1)
const p1 = document.querySelector('.p2')
console.log(p1)
const primerDiv = document.querySelector('div')
console.log(primerDiv)

console.log("Seleccionar elementos con querySelectorAll")
const divs = document.querySelectorAll('div')
console.log(divs)

/* Acceder al contenido */


/* Modificar el contenido */


/* Modificar el estilo */

//----------------------------------------------------------------------------------
// /* Agregar elementos */
// // Crear una lista vacía de productos en el carrito
var productosEnCarrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto) {
  // Agregar el producto a la lista de productos en el carrito
  productosEnCarrito.push(nombreProducto);

  // Mostrar una notificación al usuario
  console.log("Se ha agregado " + nombreProducto + " al carrito.");
}

// Agregar algunos productos al carrito para probar
agregarAlCarrito("Producto 1");
agregarAlCarrito("Producto 2");
agregarAlCarrito("Producto 3");

// Mostrar la lista de productos en el carrito
console.log("Productos en el carrito:");
for (var i = 0; i < productosEnCarrito.length; i++) {
  console.log("- " + productosEnCarrito[i]);
}

//-----------------------------------------------------------------------------------
/* Eliminar elementos */
// Crear una lista de tareas pendientes
var tareasPendientes = ["Tarea 1", "Tarea 2", "Tarea 3"];

// Función para eliminar una tarea pendiente
function eliminarTarea(index) {
  // Verificar si el índice es válido
  if (index >= 0 && index < tareasPendientes.length) {
    // Eliminar la tarea del array
    tareasPendientes.splice(index, 1);

    // Mostrar una notificación al usuario
    console.log("Se ha eliminado la tarea número " + (index + 1) + ".");
  } else {
    // Mostrar una notificación al usuario si el índice no es válido
    console.log("El índice especificado no es válido.");
  }
}

// Eliminar la segunda tarea pendiente para probar
eliminarTarea(1);

// Mostrar la lista actualizada de tareas pendientes
console.log("Tareas pendientes:");
for (var i = 0; i < tareasPendientes.length; i++) {
  console.log("- " + tareasPendientes[i]);
}

//----------------------------------------------------------------------------------------

/* Eventos */

