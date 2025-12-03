let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
// buena practica usar get para ver las propiedades de nuestros objetos 
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.nombreCompleto );

