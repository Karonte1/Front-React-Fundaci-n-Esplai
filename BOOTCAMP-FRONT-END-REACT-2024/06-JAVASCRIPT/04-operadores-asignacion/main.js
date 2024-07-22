//? Operadores de asignación

//* Asignación y reasignación  -->   =

let nombre = 'Ivan';
nombre = 'Carlos';


//* Cuando queremos utilizar el valor de la misma variable que estamos reasignando

let edad = 37;

edad = edad + 3; // forma larga

console.log(edad);

// Podemos hacer corto usando la asignación y suma

edad += 3;
console.log(edad);

// lo mismo con el resto de operadores matemáticos

// edad = edad - 5;
edad -= 5;
console.log(edad);

edad *= 2;
console.log(edad);

edad /= 4;
console.log(edad);

//* ========================================== *//
//* ========================================== *//

//* Llevado a la mínima expresión tiene OTRA FORMA DE HACERLO más corta, pero que sol ovale para sumar o restar de 1 en 1


edad = 20;

edad = edad + 1;
console.log(edad);

edad += 1;
console.log(edad);

edad++;
console.log(edad);

edad--;
console.log(edad);
