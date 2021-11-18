
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

/*
Usando métodos matemáticos
-----------------------------------
- Ingresar 3 números
- indicar cual es el mayor
- indicar cual es el menor
- obtener la raíz cuadrada del segundo número



let number = [8, 6, 7]

console.log(Math.max(number[0], number[1], number[2]))
console.log(Math.min(number[0], number[1], number[2]))
console.log(Math.sqrt(number[1]))


//--------------TAREA 4----------------------

/*
Usando If And Else
-----------------------
**Números con condicionales**

- Ingresan dos números
- Si el primero es mayor que el segundo mostrar en consola 
la suma de ambos
- Si el primero es menor que el segundo mostrar en consola 
la resta del segundo menos el primero.
- Si son iguales mostrar en consola la multiplicación de ambos.

ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3



let num1 = parseFloat(prompt("Ingresar un numero"))
let num2 = parseFloat(prompt("Ingresar un segundo numero"))

if (num1>num2) {
    console.log(`La suma es ${num1 + num2}`)
} else if (num1 < num2) {
    console.log(`La resta es ${num2 - num1}`)
} else {
    console.log(`La multiplicacion es ${num1 * num2}`)
}





//--------------TAREA 5----------------------

/*

Usando Switch
-----------------

- Recibir dos valores y la operación a realizar (+, -, *, /)
- Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
- Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.
- Si se ingresa una operación que no está contemplada devolver un mensaje de error.



let num3 = parseFloat(prompt("Ingresar un numero"))
let num4 = parseFloat(prompt("Ingresar un segundo numero"))
let operador = parseFloat(prompt("Ingresar la operacion(+, -, *, /)"))




while (isNaN(num3) || isNaN(num4)) {
    
    if (isNaN(num3)) {
        num3= parseFloat(prompt("Ingresar un numero"))
    }
    
    if (isNaN(num4)) {
        num4= parseFloat(prompt("Ingresar un numero"))
    }

}


switch (operator) {
    case '+':
        console.log(`La suma es ${ num1 + num2}`)
        break;
    case '-':
        console.log(`La resta es ${ num1 - num2}`)
    break;
    case '/':
        console.log(`La divicion es ${ num1 / num2}`)
        break;
    case '*':
        console.log(`La multiplicacion es ${ num1 * num2}`)
    break;

    default:
        console.error("No se ingreso ningun operador")
        break;
}

*/

/*--------------TAREA 6----------------------

Array
------

- Crea un arreglo llamado tareas
- Agregar mínimo tres tareas con el método correspondiente
- Mostrar en consola o por pantalla la lista de las tareas ordenadas alfabéticamente y numeradas. Por ejemplo:
1 - Estudiar javascript
2 - Sacar al perro
3 - Tirar la basura
- Mostrar tambien la cantidad de tareas que hay en el arreglo
- Eliminar la primer tarea y agregar una nueva en su lugar. Usar los métodos correspondientes.
- Reemplazar el valor de la última tarea por "Hacer la tarea para el 24 de noviembre" usando algún método de los arreglos.
*/

let tareas = []
for (let i = 0; i < 3; i++) {
    tareas.push(prompt(`Agrega la tarea ${i+1} de 3:`))
}

tareas.sort()

for (let i = 0; i < tareas.length; i++) {
    console.log(`${i + 1} - ${tareas[i]}`)
}


tareas.splice(0, 1, prompt(`Remplazar la tarea uno:`))

let remplazar = "Hacer la tarea para el 24 de noviembre"

tareas.splice(tareas.length-1, 1,remplazar)
