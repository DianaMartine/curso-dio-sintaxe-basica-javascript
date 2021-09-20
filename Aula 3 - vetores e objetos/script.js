// o que são vetores ou arrays

/* // como declarar um array
let array = ['string', 1, true];
// deve ser declarado entre colchetes "[]";
console.log(array); */

// como um array pode guardar difentes valores inclusive outros arrays
//let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];

/* // como acessar o índice de um array
console.log(array[0]); */


// manipulando um array

//forEach - realiza uma função para cada item do array
//array.forEach(function(item, index){console.log(item, index);})

//push - add item no final do array
//array.push('novo item');
//console.log(array);

//pop - remove o último item do array
//array.pop();
//console.log(array);

//shift - remove o primeiro item do array
//array.shift();
//console.log(array);

//unshift - add item no início do array
//array.unshift('novo item');
//console.log(array);

//indexOf - retorna o índice de um item do array
//console.log(array.indexOf(true));

//splice - remove ou substitui item por índice
//array.splice(0, 3);
//console.log(array);

//slice - retorna uma parte de um array existente
//let novoArray = array.slice(0, 3);
//console.log(novoArray);


/* // o que são objetos
// como declarar um objeto
let object = { propriedade1: 'valor1', propriedade2: 'valor2' }
// deve ser declarado entre chaves "{}";
console.log(object); */

// assim como arrays as propriedades de objetos podem guardar quaisquer valores
// let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno' } };

/* // como acessar propriedades de objetos
// usando ponto "."
console.log(object.objectInterno); */

// manipulando objeto
// desestruturando objeto
/* let string = object.string;
let number = object.number;
let boolean = object.boolean; */


// desestruturando usando chaves
// let { string, number, boolean } = object;
// console.log(string, number, boolean);