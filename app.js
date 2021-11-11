/*

Tarea 1:

Dado el siguiente texto:
"React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien."

Reemplazar la palabra React por "Esta librería" en un nuevo texto.
Devuelve en consola si el texto contiene la palabra "eficiente"
Devuelve en consola si el texto contiene la palabra "elementos"

Tarea 2:
 indexOf()
 
Dada la frase: "Hoy es un buen día para aprender"
Separa en un arreglo cada palabra
Crea una nueva frase basandote en la anterior que diga: "Hoy es un buen día"

Tarea 3:

Capitaliza la siguiente palabra: "marmota"

Usando métodos matemáticos
-----------------------------------

- Ingresar 3 números
- indicar cual es el mayor
- indicar cual es el menor
- obtener la raíz cuadrada del segundo número



*/



// --------------TAREA 1----------------------

let text ="React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien."

console.log(text.replace("React", "Esta libreria"))
console.log(text.includes("eficiente"))
console.log(text.includes("elementos"))

// --------------TAREA 2----------------------

text = "Hoy es un buen día para aprender";
let palabra = text.split(" ");
console.log(palabra)

let dia = palabra.indexOf("día");
let fraseNueva = text.split(" ", dia +1).join(" ");

console.log(fraseNueva)


// --------------TAREA 3----------------------

palabra = "marmota";
let mayuscula = palabra.split("");
mayuscula[0] = mayuscula[0].toUpperCase();
console.log(mayuscula.join(""));