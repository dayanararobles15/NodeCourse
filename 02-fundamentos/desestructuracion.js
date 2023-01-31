const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//extracion de atributos uno por uno
//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeHeroe(heroe){
    const { nombre, apellido, poder, edad=0}= heroe;
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

function imprimeHeroe({ nombre, apellido, poder, edad=0}){
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

const heroes= ['Deadpool','Superman'];
//const h1=heroes[0];
//const h2=heroes[1];
//Desestructuracion de arreglo
//const [h1, h2]=heroes;
//no me interesa alguno pongo ,
const [, h2]=heroes;
console.log(h2);

//desestructurar el código
//atributos de una sola
//const { nombre, apellido, poder, edad=0}= deadpool;
//console.log(nombre, apellido, poder);
//Impresion con metodo
 //console.log(deadpool.getNombre());