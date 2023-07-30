/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido por parámetro.
    // Tu código:
    var primero = array[0];
    return primero;
}

function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    var ultimo = array[array.length - 1];
    return ultimo;
}

function obtenerLargoDelArray(array) {
    // Retornar la longitud del arreglo recibido por parámetro.
    // Tu código:
    var longitudDelArray = array.length;
    return longitudDelArray;
}

function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    let masUno = array.map((num) => {
        return num + 1;
    });
    return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.push(elemento);
    return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.unshift(elemento);
    return array;
}

function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello',  'world!'] -> 'Hello world!'.
    // Tu código:
    let nuevaPalabra = palabras.join(" ");
    return nuevaPalabra;
}

function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:
    let existe = array.includes(elemento);
    return existe;
}

function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    let suma = 0;
    arrayOfNums.map((element) => {
        suma += element;
    });
    return suma;
}

function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
    let suma = 0;
    let division;
    resultadosTest.map((element) => {
        suma += element;
    });
    division = suma / resultadosTest.length;
    return division;
}

function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
    let numeroMasGrande = arrayOfNums[0];
    // arrayOfNums = [5, 2, 6] ======>>>>> son los elementos
    arrayOfNums.map((element) => {
        if (element > numeroMasGrande) {
            numeroMasGrande = element;
        }
    });
    return numeroMasGrande;
}

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    if (arguments.length === 0) {
        return 0;
    } else if (arguments.length === 1) {
        return arguments[0];
    }
    let producto = 1;
    for (let i = 0; i < arguments.length; i++) {
        producto *= arguments[i];
    }
    return producto;
}

function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    let numeros = 0;
    array.forEach((element) => {
        if (element > 18) {
            numeros++;
        }
    });
    return numeros;
}

function diaDeLaSemana(numeroDeDia) {
    // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
    // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
    // Tu código:
    switch (numeroDeDia) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Es dia laboral";

            break;

        default:
            return "Es fin de semana";
            break;
    }
}

function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    let numString = "" + num;
    let nuevoNumero = numString.split("");
    if (nuevoNumero[0] === "9") {
        return true;
    } else {
        return false;
    }
}

function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
    if (array.length === 0) {
        return true;
    }
    const primerElemento = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== primerElemento) {
            return false;
        }
    }
    return true;
}

function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
    const meses = ["Enero", "Marzo", "Noviembre"];
    const nuevoArray = [];

    for (let mes of array) {
        if (meses.includes(mes)) {
            nuevoArray.push(mes);
        }
    }

    if (nuevoArray.length !== meses.length) {
        return "No se encontraron los meses pedidos";
    } else {
        return nuevoArray;
    }
}

function tablaDelSeis() {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:
    let seis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let nuevoArray = [];
    let multiplicacion;
    let total;
    for (let i = 0; i < seis.length; i++) {
        multiplicacion = 6 * i;
        total = multiplicacion;
        nuevoArray.push(total);
    }
    return nuevoArray;
}

function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:
    let nuevoArray = [];
    array.forEach((element) => {
        if (element > 100) {
            nuevoArray.push(element);
        }
    });
    return nuevoArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    let limite = 10;
    let nuevoArray = [];
    let sumaEnDosHastaDiezVeces = num;
    for (let i = 0; i < limite; i++) {
        sumaEnDosHastaDiezVeces += 2;
        nuevoArray.push(sumaEnDosHastaDiezVeces);
        if (sumaEnDosHastaDiezVeces === i) {
            return "Se interrumpió la ejecución";
        }
        if (sumaEnDosHastaDiezVeces === i) {
            break;
        }
    }
    return nuevoArray;
}

function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    let limite = 10;
    let nuevoArray = [];
    let sumaEnDosHastaDiezVeces = num;
    for (let i = 0; i < limite; i++) {
        sumaEnDosHastaDiezVeces += 2;
        nuevoArray.push(sumaEnDosHastaDiezVeces);
        if (i === 5) {
            i++;
            continue;
        }
    }
    return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    diaDeLaSemana,
    empiezaConNueve,
    todosIguales,
    mesesDelAño,
    tablaDelSeis,
    mayorACien,
    breakStatement,
    continueStatement,
};
