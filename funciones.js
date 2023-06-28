/*forma 1
function saludo(){
    alert('hola');
}
saludo();
*/ 
//FORMA 2 ASIGANA UNA FUNCION A UNA VARIABLE
const saludo= function(){
    console.log('Hola');
};
saludo();

//funciones de tipo flecha 
const saludo2 = () => console.log('Hola desde flecha');
saludo2();