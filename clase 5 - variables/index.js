//comentarios

/* linea 1
linea 2
linea 3 */

console.log("******************VARIABLE LET****************")
let edad = 25
console.log(edad);

{
    let edad = 30;
    console.log(edad);
}

console.log(edad);
// en esta se muestra la modificacion de la edad en el bloque, variable local.

/*
let edad = 25
edad = "veinticinco" --> si declarara esta variable con string se rompe el codigo.
console.log(edad);

{
    let edad = 30;
    console.log(edad);
}


*/

console.log("******************VARIABLE CONST****************")


const edad2 = 25
console.log(edad2)

{
    const edad2 = 30;
    console.log(edad2);
}

console.log(edad2);

// en esta se muestra la modificacion de la edad en el bloque, variable local.

console.log("-----------------------")

const edad3 = 25
console.log(edad2)

{
    //const edad3 = 30; --> esto al comentarlo no se usa, y pasan los 3 a valer 25
    console.log(edad3);
}

console.log(edad3);


/*
const edad3 = 25
edad3 = 40  --> esto estaria mal ya que la constante no permite cambiar el valor.
console.log(edad2)

{
    const edad3 = 30;
    console.log(edad3);
}

console.log(edad3); 

*/


console.log("******************VARIABLE VAR****************")

var mi_variable= 1;
console.log(mi_variable);

{
    var mi_variable= 2;
    console.log(mi_variable);
}

console.log(mi_variable);

/* aca es donde se ve el scope global de la variable VAR, ya que nosotros estamos
modificando la variable VAR adentro del bloque, sin embargo me lo modifia tambien 
afuera del bloque cuando imprimimos el que esta afuera pasa a ser ahora tambien el 
numero 2 como el bloque de adentro, pasando todo a 1,2,2. si nosotros cambiaramos esta formulo a let volveria
al 1,2,1:

let mi_variable= 1;
console.log(mi_variable);

{
    let mi_variable= 2;
    console.log(mi_variable);
}

console.log(mi_variable);
*/

// ahora lo declaro e incializo directamente adentro del bloque:

console.log("-----------------------")

{
    var mi_variable3= 2;
    console.log(mi_variable3);
}

console.log(mi_variable3);

/* como se puede ver en la consola se imprime 2,2 es decir tambien toma por afuera 
lo declarado adentro del bloque, pero si yo la definicion la cambio a let, esto me 
va a dar error:

{
    let mi_variable3= 2;
    console.log(mi_variable3);
}

console.log(mi_variable3);

me va a imprimir el 2 de adentro y afuera nada, va a caer en error porque no se declaro
nada, no existe esa variable no esta definida.

*/

console.log("-----------------------")

let mi_variable4= 2;
{
    console.log(mi_variable4);
}

console.log(mi_variable4);

/* aca al reves (no como antes que el let estaba solo adentro) con let si se puede afuera
me toma tanto el de adentro como el de afuera, habiendo sido declarado una vez pero afuera.

ahora por ejemplo es lo mismo que si lo hicieramos de esta manera, con una cascada de
bloques: */

console.log("-----------------------")

let mi_variable5= 2;
{
    {
        {
            {
                console.log(mi_variable5);
            }
        }
    }
}

console.log("-----------------------")

//ahora si utilizo otro valor:

let mi_variable6= 2;
{
    {
        let mi_variable6= 4;
        {
            {
                console.log(mi_variable6);
            }
        }
    }
}

console.log(mi_variable6);
/* como se ve aca si imprime adentro del codigo la nueva variable indicada let 4 
porque es el mas cercano, y cuando sale de todos los bloques vuelve al 2.

y ahora cuando realizamos esto:*/

console.log("-----------------------")

let mi_variable7= 2;
{
    {
        let mi_variable7= 4;
        {
            {
                console.log(mi_variable7);
            }
        }
    }
    console.log(mi_variable7);
}

/* aca como se ve, vuelve a imprimir 2 al final de todo ya que salio dentro del radio de
{} en la cual se habia declarado e inicializado la nueva variable (4), imprime la variable 
que si esta dentro de su "radio" (4) y vuelve a la original (2) cuando sale de ese radio y 
entra en el "radio* de la original.*/