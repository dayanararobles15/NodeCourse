const nombre='Deadpool';
const real='Winston'

const normal = nombre + ' ' + real;
const template = `${ nombre } ${ real }`;

console.log(normal);
console.log(template);
//Evalua el valor de las const
console.log(normal == template);

const html = `
<h1>Hola</h1>
`
console.log(html);