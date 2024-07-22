const foto1 = document.querySelector('.foto-1');
const input1 = document.querySelector('.input-1');


foto1.addEventListener('mousemove', (event) => {

  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y);

  // console.log('lo que te de la gana');

  foto1.style.boxShadow = `${x / 2}px ${y / 2}px 10px 0px crimson`;
});


input1.addEventListener('keypress', (event) => {
   
  if (event.code === 'KeyQ' && event.ctrlKey) {
    console.log('Has apretado Ctrl + Q');
  }

  if (event.key === 'Enter') {
    console.log('Has apretando Enter');
  }
  
});

//! Si no utilizamos una función anónima, y en su lugar queremos pasarle una referencia a una función, de igual forma en esa función tendremos como primer parámetro el objeto Event

function handleClick (event) {
  console.log('has hecho click', event);
}


foto1.addEventListener('dblclick', handleClick);
