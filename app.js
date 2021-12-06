
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
*/




// --------------TAREA 1----------------------
const tarea1 = function(){
let text ="React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien."

console.log(text.replace("React", "Esta libreria"))
console.log(text.includes("eficiente"))
console.log(text.includes("elementos"))
}
// --------------TAREA 2----------------------
const tarea2 = function(){
    text = "Hoy es un buen día para aprender";
    let palabra = text.split(" ");
    console.log(palabra)

    let dia = palabra.indexOf("día");
    let fraseNueva = text.split(" ", dia + 1).join(" ");

    console.log(fraseNueva)
}

// --------------TAREA 3----------------------

const tarea3 = function () {
    palabra = "marmota";
    let mayuscula = palabra.split("");
    mayuscula[0] = mayuscula[0].toUpperCase();
    console.log(mayuscula.join(""));
}
/*
Usando métodos matemáticos
-----------------------------------
- Ingresar 3 números
- indicar cual es el mayor
- indicar cual es el menor
- obtener la raíz cuadrada del segundo número
*/

const metodoMatematico = function (number) {
    
    //let number = [8, 6, 7]

    console.log(Math.max(number[0], number[1], number[2]))
    console.log(Math.min(number[0], number[1], number[2]))
    console.log(Math.sqrt(number[1]))
}

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
*/

const tarea4 = function (num1, num2) {
    //let num1 = parseFloat(prompt("Ingresar un numero"))
    //let num2 = parseFloat(prompt("Ingresar un segundo numero"))

    if (num1 > num2) {
        console.log(`La suma es ${num1 + num2}`)
    } else if (num1 < num2) {
        console.log(`La resta es ${num2 - num1}`)
    } else {
        console.log(`La multiplicacion es ${num1 * num2}`)
    }

}



//--------------TAREA 5----------------------

/*

Usando Switch
-----------------

- Recibir dos valores y la operación a realizar (+, -, *, /)
- Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
- Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.
- Si se ingresa una operación que no está contemplada devolver un mensaje de error.


*/
const tarea5 = function () {
    let num3 = parseFloat(prompt("Ingresar un numero"))
    let num4 = parseFloat(prompt("Ingresar un segundo numero"))
    let operador = parseFloat(prompt("Ingresar la operacion(+, -, *, /)"))




    while (isNaN(num3) || isNaN(num4)) {
    
        if (isNaN(num3)) {
            num3 = parseFloat(prompt("Ingresar un numero"))
        }
    
        if (isNaN(num4)) {
            num4 = parseFloat(prompt("Ingresar un numero"))
        }

    }


    switch (operator) {
        case '+':
            console.log(`La suma es ${num1 + num2}`)
            break;
        case '-':
            console.log(`La resta es ${num1 - num2}`)
            break;
        case '/':
            console.log(`La divicion es ${num1 / num2}`)
            break;
        case '*':
            console.log(`La multiplicacion es ${num1 * num2}`)
            break;

        default:
            console.error("No se ingreso ningun operador")
            break;
    }
}


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

const tarea6 = function () {
    let tareas = []
    for (let i = 0; i < 3; i++) {
        tareas.push(prompt(`Agrega la tarea ${i + 1} de 3:`))
    }

    tareas.sort()

    for (let i = 0; i < tareas.length; i++) {
        console.log(`${i + 1} - ${tareas[i]}`)
    }


    tareas.splice(0, 1, prompt(`Remplazar la tarea uno:`))

    let remplazar = "Hacer la tarea para el 24 de noviembre"

    tareas.splice(tareas.length - 1, 1, remplazar)
}

/*
Funciones
-------------

- Crear una función llamada agregarProducto que pida al usuario ingresar un producto y lo guarde en un arreglo.
 - Se puede hacer que la función pida ingresar productos una y otra vez hasta que se presione cancelar en el prompt 
 o se deje vacio el campo y se presione aceptar.
 - Al final la función debe mostrar por consola la lista de los productos ingresados.

- Crear una función anónima que reciba como parámetros nombre, apellido, domicilio y correo electrónico.
 - La función debe recibir los parámetros y mostrar en el navegador el siguiente mensaje: 'Me llamo <nombre> <apellido> vivo en <domicilio>, si deseas contactarme te dejo mi correo electrónico <email>. Que tengas un buen día.
 - Para mostrar texto en el navegador debemos usar document.write()
 
*/
/*
let prueba = prompt(`Ingresar producto (para salir dejar vacio o cancelar):`)
console.log(!prueba)*/

let agregarProducto = function () {
    
    let arreglo = [];
    let i = -1;
    let agregar;
    do {
        agregar = prompt(`Ingresar producto (para salir dejar vacio o cancelar):`);
        if (agregar) {
            arreglo.push(agregar)
            i++;    
        }
        
    } while (agregar)
    i=0
    arreglo.forEach(element => {
        console.log(`${i++} - ${element}`)
    });
    return arreglo;
}

let datosPersonales = function (nombre, apellido, domicilio, correo) {
    document.write(`Me llamo ${nombre} ${apellido} vivo en ${domicilio}, si deseas 
    contactarme te dejo mi correo electrónico ${correo}. Que tengas un buen día.`)
}

/*

Objeto Persona
------------------

- Crear un objeto llamado persona que contenga los siguientes atributos:
 - Nombre
 - Edad
 - DNI
 - Domicilio
 - Hijos (cantidad)
 - Profesión
- Agregar Métodos:
 - Saludar ( mensaje de presentación en navegador o consola)
 - Listar (muestra la lista con los datos de la persona)


*/

const objetoPersona = function () {
    
    let persona = {
        nombre: "Homero",
        edad: "25",
        DNI: "34578615",
        Domicilio:"Calle falsa 123" ,
        Hijos: "3" ,
        Profesión:"Seguridad nucler" ,
        Saludar() {
            console.log(`Hola me llamo ${this.nombre}`)
        },
            
    }

    for (const key in persona) {
        
        console.log(`${key} : ${persona[key]}`)
    }
    
}




 /*
Arreglo de objetos
-----------------------

- Crear un arreglo de objetos que contenga datos de películas como:
 - Título
 - Género
 - Año
 - sinopsis
- Crea una función que permita mostrar en una lista cada película con sus datos.

*/

const arregloObjetos = function () {
    let peliculas = [
        {
            id: 0,
            Título :"Spider-Man: No Way Home",
            Género : "Acción, Ciencia ficción, Aventura",
            Año :2021,
            sinopsis :"Después de que la identidad de Peter Parker como Spider-Man es expuesta por Mysterio al final de Spider-Man: Lejos de casa, la vida y la reputación de Parker son puestas patas arriba. Para arreglar este asunto, Peter decide contactar al Dr. Stephen Strange para que este lo ayude a restaurar su antigua identidad secreta con magia,1​2​ pero a raíz de esto, algo sale terriblemente mal en el encantamiento y provoca una fractura en el multiverso, causando que cinco supervillanos de otras realidades alternas (que previamente han luchado contra un Spider-Man en sus respectivas dimensiones) ingresen a su universo"
        },
        {
            id: 1,
            Título :"Spider-Man: Homecoming",
            Género : "Acción, Ciencia ficción, Aventura",
            Año :2017,
            sinopsis :"Dos meses después de los terribles acontecimientos de Capitán América: Civil War, Peter Parker, con la ayuda de su mentor Tony Stark, trata de equilibrar su vida como un estudiante de secundaria en Queens, y su lucha contra el crimen como Spider-Man mientras se enfrenta a una nueva amenaza, el Buitre"
        },
        {
            id: 2,
            Título :"Spider-Man: Far From Home",
            Género : "Acción, Ciencia ficción, Aventura",
            Año :2019,
            sinopsis :"Posteriormente a los eventos de Avengers: Endgame y tras 8 meses de la muerte de su mentor Tony Stark, Peter Parker se va de vacaciones a Europa con sus amigos Ned y Michelle; pero sus vacaciones van a tener que esperar ya que se verá obligado a unirse a Mysterio con el objetivo de detener a los Elementales, unos extraños seres que nadie sabe de dónde vienen pero dispuestos a acabar con todo lo que se les atreviese en su camino"
        }
    ]
    for (let i = 0; i < peliculas.length; i++) {
    
        console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
        for (const key in peliculas[i]) {
            console.log(`${key} : ${peliculas[i][key]}`)
        }
        
    }

    
}

