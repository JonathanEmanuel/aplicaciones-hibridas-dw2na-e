let nombre = 'José';
// Objetos literales
let alumno = {
    // Atributos
    nombre: 'Josefina',
    apellido: 'Ruiz',
    edad: 21,
    casado: false,
    password: '123abc456',
    libros: ['Programación en JS', 'Los 100', 'Las cronicas de Narnia'],
    // Métodos
    mostarNombreCompleto: function(){
        return `Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`
    },
    modificarNombre: function(nombre){
        this.nombre = nombre;
    }
}

alumno.edad = 22;
alumno.modificarNombre('Carla')
console.log(alumno.libros[1]);
console.log('Apellido:', alumno.apellido);
console.log(alumno.edad);
let mensaje = alumno.mostarNombreCompleto();
console.log(mensaje);