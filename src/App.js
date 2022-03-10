import './App.css';

function App() {
    /* Spread/Rest Operator */

    // 1. Completá el siguiente código para obtener el resultado deseado en el console.log, 
    // utilizando el operador de propagación (spread operator). 

    const delUnoAlTres = [1, 2, 3];
    const delUnoAlCinco = [...delUnoAlTres, 4, 5]
    console.log ( delUnoAlCinco )

    // 2. A partir del array dado, creá un nuevo array que empiece con 
    // el elemento ‘CERO’ y termine con el elemento ‘CUATRO’

    const arrayDado = ['UNO', 'DOS', 'TRES'];
    const nuevoArray = ["CERO", ...arrayDado, "CUATRO"]
    console.log( nuevoArray ); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']

    // 3. Completá el código para poder unir los 3 arrays en uno solo y 
    //llegar al resultado esperado utilizando el spread operator.
    
    const frase0 = ['¡', 'Hola'];
    const frase1 = [',', ' ', 'Mundo'];
    const frase2 = ['!'];

    const fraseCompleta = [...frase0, ...frase1, ...frase2]
    console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!
    // 4. Completá el siguiente código para llegar al resultado esperado (respetar orden).
    // Quiero obtener un único objeto final con todas las propiedades

    const reviews = {
    reviewIMDB: 9,
    reviewFilmAffinity: 8.1
    };

    const peliInfo = {
    titulo: 'The Dark Knight',
    anio: 2008
    };

    const pelicula = {
      ...peliInfo,
      ...reviews
    }

    console.log(pelicula);
      // {
      //   titulo: 'The Dark Knight',
      //   anio: 2008,
      //   reviewIMDB: 9,
      //   reviewFilmAffinity: 8.1
      // }

    //5. Completá el siguiente código para llegar al resultado esperado (respetar orden).
    // Tengo un objeto con propiedades que representa una alumna
    // Las propiedades que contiene son: nombre y apellido
    // Queremos agregar la propiedad sabeJS con valor true, y la propiedad edad con el valor 27
    // La propiedad sabeJS queremos que esté al principio y la propiedad edad al final

    const estudiante = {
    nombre: 'Ada',
    apellido: 'Lovelace'
    };

    const estudianteJS = {
      sabeJS:true,
      ...estudiante,
      edad:27
    }

    console.log(estudianteJS);
    // { sabeJS: true, nombre: 'Ada', apellido: 'Lovelace', edad: 27 }
    

    //6. La función Math.max() recibe varios números (distintos parámetros) y retorna el más alto.
    // ¿Cómo modificarías el siguiente código para que funcione con 
    // distintos arrays sin tener que estar todo el tiempo usando los índices?

    console.log( Math.max(4, 7) ); // 7

    const tresNums = [9, 4, 7];
    console.log( Math.max(tresNums[0], tresNums[1], tresNums[2]) ); // 9
    // console.log( Math.max(tresNums) ); // NaN
    const masAlto = [Math.max(...tresNums)] //SOLUCION
    console.log(masAlto);

    const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];
    // console.log( Math.max(masNums) ); // NaN, y debería ser 132
    const masAlto1 = [Math.max(...masNums)] // SOLUCION
    console.log(masAlto1);

    // 7. Escribir una arrow function llamada agregarNumeroAlArray, que recibe un número como 
    // primer parámetro y un array como segundo parámetro
    // Utilizando spread operator, la función tiene que retornar un array conteniendo los 
    // números del array pasado por parámetro y concatenarle al final el nuevo número.
    // Utilizar Spread Operator
    // ejemplo de uso

    const agregarNumeroAlArray = (numero, array) =>{
      return [...array, numero]
    }

    console.log( agregarNumeroAlArray(1, [6, 19]) ) // [6, 19, 1]
    console.log( agregarNumeroAlArray(4, [1, 2, 3]) ) // [1, 2, 3, 4]

    // 8. Crear la función contarLosArgumentos, que toma un número variable de parámetros y 
    // retorna la cantidad de parámetros que tiene
    // Utilizar Rest Operator

    const contarLosArgumentos = (...variable) => {
      return variable.length
    }
    contarLosArgumentos('uno', 'dos'); // 2
    contarLosArgumentos('uno', 'dos', 'tres', 'cuatro'); // 4
    console.log(contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17))// 16

    // 9. Escribir la función alCuadradoYSumar, que toma un número variable de parámetros, 
    // los eleva al cuadrado y retorna la suma de todos
    // Utilizar Rest Operator
    const alCuadradoYSumar = (...numeros) => {
      const alCuadrado = numeros.reduce((acc, curr)=>{
        return acc + curr*curr
      }, 0)
      return alCuadrado
    }
    console.log(alCuadradoYSumar(2, 4, 3)) // 29
    console.log(alCuadradoYSumar(1, 2)) // 5

    // 10. Ejercicio 10
    // Tengo un array con arrays adentro
    // Tomando la idea del ejercicio 3, ¿cómo podemos implementar una solución que 
    // desde un array de arrays, me retorne un solo array con todos los elementos juntos?
    // 💡 Pista

    const fraseEnPartes = [['¡', 'Hola'],[',', ' ', 'Mundo'],['!']]

    const fraseCompletas = [
      ...fraseEnPartes[0],
      ...fraseEnPartes[1],
      ...fraseEnPartes[2],
    ];

    console.log( fraseCompletas.join('') ); // ¡Hola, Mundo!

    // 11. Ejercicio 11
    // Escribir la función combinarArrays, que toma un número variable de parámetros
    // Cada parámetro es un array
    // Combinar todos los arrays y retornar uno solo para obtener el resultado esperado
    // Utilizar Rest Operator y Spread operator

    const combinarArrays  = (...variable) => {
      return variable
    }

    console.log(combinarArrays([1, 2], [4, 5, 6])); // [1, 2, 4, 5, 6]
    console.log(combinarArrays(['a', 'b'])); // ['a', 'b']
    console.log(combinarArrays([true, false], [1, 2, 3], ['a'], [{}])) // [true, false, 1, 2, 3, 'a', {}]

    /* Destructuring */

    // 1. Crear una función (arrow function) llamada mostrarInfo
    // mostrarInfo recibe un objeto y retorna la cadena “Tu nombre completo es ” 
    // concatenado con el valor de la propiedad nombre, un espacio y el valor de la propiedad apellido
    // Tenés que usar destructuring dentro de la función.

    const persona = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };

    const mostrarInfo = obj => {
      return `tu nombre completo es ${obj.nombre} ${obj.apellido}`
    }

    console.log( mostrarInfo(persona) ); // Tu nombre completo es Ada Lovelace
        

    // 2. Utilizando destructuring, debemos extraer la propiedad nombre de cada objeto 
    // y crear un array en la variable nombres con los 3 nombres que obtuvimos de cada persona.
    // 💡 Pista: vamos a tener que crear una variable para cada nombre

    const persona1 = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };
    const persona2 = { nombre: 'Grace', apellido: 'Hopper', edad: 25 };
    const persona3 = { nombre: 'Hedy', apellido: 'Lamarr', edad: 45 };

    const nombres = [persona1.nombre, persona2.nombre, persona3.nombre];

    console.log( nombres );
    // [ 'Ada', 'Grace', 'Hedy' ]

    // 3. Tenemos un array datosPersonales, con el nombre, apellido, día nacimiento, 
    // mes nacimiento, año nacimiento, lugar nacimiento (respetando el orden) de una persona
    // Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.
    
    const datosPersonales = [ 'Ada', 'Lovelace', 10, 12, 1815, 'Londres' ];

    // utilizando destructuring
    // extraer las variables nombre, lugar, dia, mes, anio

    console.log(`${datosPersonales[0]} nació en ${datosPersonales[5]}, el ${datosPersonales[2]}/${datosPersonales[3]}/${datosPersonales[4]}.`);
    // Ada nació en Londres, el 10/12/1815.



    // 4. Tenemos un objeto persona, con sus datos personales
    // Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.

    const personaObjeto = {
    nombre: 'Ada',
    apellido: 'Lovelace',
    fechaNacimiento: [10, 12, 1815],
    lugarNacimiento: {
      pais: 'Inglaterra',
      ciudad: 'Londres'
    }
    };

    console.log(`${personaObjeto.nombre} nació en ${personaObjeto.lugarNacimiento.ciudad}, el ${personaObjeto.fechaNacimiento[0]}/${personaObjeto.fechaNacimiento[1]}/${personaObjeto.fechaNacimiento[2]}.`);
    // Ada nació en Londres, el 10/12/1815.


    // 5. Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.

    const persona5 = [
      'Ada Lovelace', 
      [ { 
        edad: 30, 
        idioma: 'inglés' 
      } ]
    ];

    // usando destructuring, obtener las variables idioma y nombrePersona

    const nombrePersona =  persona5[1][0]

    console.log(`${persona5[0]} habla en ${nombrePersona.idioma}.`);
    // Ada Lovelace habla en ingles











    return (
    
    <div>
    </div>
  );
}

export default App;
