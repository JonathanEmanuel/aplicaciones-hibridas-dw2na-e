const fs = require('fs/promises');
const path = 'usuarios.json';
let lista = [];

async function escribir( usuarios) {
    const texto = JSON.stringify(usuarios, null, 2);
    await fs.writeFile(path, texto);
}

async function leerJSON() {
    const data = await fs.readFile(path, 'utf-8');
    const array = JSON.parse(data);
    return array;
}

const usuario1 = {
    nombre: 'Jose',
    edad: 21,
    email: 'jose@gamil.com'
}

// Lectura del JSON
leerJSON().then( data => {
    lista = data;
    lista.push(usuario1);
    console.table(lista)

    escribir(lista).then( () => {
        console.log('Datos guardados')
    })
})


