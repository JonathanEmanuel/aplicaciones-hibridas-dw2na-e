let nombre = 'Juan';
console.log('Hola desde node.js');
console.log(`Hola ${nombre} !`);

// Recibe el array y retorna el numero max
function maximo(array){
    let max = array[0];

    array.forEach(element => {
        if( element > max){
            max = element;
        }
    });
    return max
}

const numeros = [ 2, 10, 3, 7, 9];
const max = maximo( numeros );
console.log(`El número max es: ${max}`);