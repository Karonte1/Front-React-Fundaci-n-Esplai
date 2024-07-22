const lista1 = document.querySelector('.lista-1');
const btn1 = document.querySelector('.btn-1');

//* hacer traversing es VIAJAR POR EL ÁRBOL DEL DOM sin necesidad de cazar otros elementos

btn1.onclick = () => lista1.style.border = '2px solid black'



//* Viajar a mis hijos --> firstElementChild o lastElementChild
console.log(lista1.firstElementChild.style.textDecoration = 'underline');
console.log(lista1.lastElementChild);

//* Viajar a mi padre --> parentElement
console.log(btn1.parentElement); // body
console.log(btn1.parentElement.parentElement); // html
console.log(btn1.parentElement.parentElement.firstElementChild); // head


//* Viajar por hermanos --> nextElementSibling y previousElementSibling

console.log(lista1.firstElementChild); // primer li
console.log(lista1.firstElementChild.nextElementSibling); // segundo li

console.log(lista1.previousElementSibling); // h2
