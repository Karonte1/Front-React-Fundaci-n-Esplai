// crear h1

const newH1 = document.createElement('h1');
newH1.innerText = 'Soy un título creado desde JavaScript';

document.body.prepend(newH1);



// crear boton

const btn = document.createElement('button');
btn.innerText = 'Haz click aquí';
// btn.className = 'rounded';
btn.classList.add('rounded');

btn.style.backgroundColor = 'tomato';
btn.style.color = 'white';



btn.setAttribute('data-id', '12345');
btn.setAttribute('data-city', '12345');
btn.setAttribute('data-ivan', '12345');
btn.setAttribute('data-coche', '12345');

console.log(btn.dataset);
btn.dataset.fruta = 'platano';

// btn.setAttribute('title', 'Soy un título');
btn.title = 'Soy un título';

newH1.after(btn);