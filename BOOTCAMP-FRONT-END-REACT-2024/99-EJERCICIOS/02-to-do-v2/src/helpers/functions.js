import { nanoid } from 'nanoid';
import createAlertTailwind from './createAlert';

const BASE_URL = 'https://apideto-dos.onrender.com/to-dos';
let allToDos = [];

//* Fake Data
// const allToDos = [
//   {
//     id: nanoid(5),
//     task: 'Pasear a las perras',
//     isCompleted: true
//   },
//   {
//     id: nanoid(5),
//     task: 'Estudiar JavaScript',
//     isCompleted: false
//   },
//   {
//     id: crypto.randomUUID(),
//     task: 'Comprar el pan',
//     isCompleted: false
//   },
// ];

// console.log(allToDos);


const toDoList = document.querySelector('.toDo-list');

export function deleteToDo (idDelete) {

  fetch(BASE_URL + `/${idDelete}`, { method: 'DELETE' })
    .then(resp => {
      
      if (resp.status === 200) {
        readToDos();
        countUncompletedToDos();
      }
      
    })
    .catch(err => createAlertTailwind(err.message));
  
}

export async function completeUncompleteToDo (toDo) {
  
  try {
    const changes = { isCompleted: !toDo.isCompleted };
    
    const resp = await fetch(BASE_URL + `/${toDo.id}`, {
      method: 'PATCH',
      body: JSON.stringify(changes),
      headers: {
        'Content-type': 'application/json'
      }
    });

    if (resp.status === 200) {
      readToDos();
      countUncompletedToDos();
    }

  } catch (error) {
    createAlertTailwind(error.message);
  }

}

export function clearAllCompleted () {
  // consigues todos los todos (fetch - GET)

  // filtras por los que estan completados (filter)

  // borras todos los que estan completados (fetch - DELETE)
}

export async function addToDo (newTask) {
  const newToDo = {
    task: newTask,
    isCompleted: false
  };

  try {
    const resp = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(newToDo),
      headers: {
        'Content-type': 'application/json'
      }
    });

    if (resp.status === 201) {
      // reimprime los toDos volviendo a mirar en el backend
      readToDos();
      countUncompletedToDos();
    }   

  } catch (error) {
    createAlertTailwind(error.message);
  }

}

export async function countUncompletedToDos () {
  try {
    const resp = await fetch(BASE_URL);
    const toDos = await resp.json();

    const uncompletedToDos = toDos.filter(toDo => !toDo.isCompleted).length;
    console.log(uncompletedToDos);

    document.querySelector('.uncompleted-counter').innerText = uncompletedToDos;

  } catch (error) {
    createAlertTailwind(error.message);
  }

}

export function filterCompleted () {
  const filteredToDos = allToDos.filter(toDo => toDo.isCompleted);
  readToDos(filteredToDos);
  
}
export function filterActive () {
  const filteredToDos = allToDos.filter(toDo => !toDo.isCompleted);
  readToDos(filteredToDos);
}
export function filterAll () {
  readToDos(allToDos);
}



function generateToDoHTML (toDo) {
  // por cada uno, creao un ARTICLE
  const toDoHTML = document.createElement('article');

  // data-id
  toDoHTML.dataset.id = toDo.id;

  // classes
  toDoHTML.className = 'flex items-center gap-3 bg-white px-6 py-3 border-b-[1px] border-gray-300';

  const isChecked = toDo.isCompleted ? 'checked' : '';
  const completedStyles = toDo.isCompleted ? 'text-gray-400 line-through' : '';

  // contenido
  toDoHTML.innerHTML = `
  <label class="complete-btn flex items-center justify-center border border-black rounded-full cursor-pointer size-5 hover:border-indigo-500">
    <input class="hidden peer" type="checkbox" ${isChecked}>
    <svg class="hidden text-green-500 peer-checked:block size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 8"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
  </label>
  <span class="${completedStyles}">${toDo.task}</span>
  <button class="delete-button ml-auto" name="delete">
    <svg class="hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
  </button>
  `;

  // opción de añadir listeners CUANDO ESTAMOS CREANDO EL CONTENIDO CON innerHTML
  const deleteBtn = toDoHTML.querySelector('.delete-button');
  deleteBtn.onclick = () => deleteToDo(toDo.id);

  const completeCheckbox = toDoHTML.querySelector('.complete-btn input');
  completeCheckbox.onchange = () => completeUncompleteToDo(toDo);

  return toDoHTML;
}

export async function readToDos (arrayToDos) { // undefined
  // borramos lo que haya en toDoList
  toDoList.innerHTML = '';

  try {
    // Pedimos los toDos al Backend
    if (!arrayToDos) {
      const resp = await fetch(BASE_URL);
      const toDos = await resp.json();
  
      allToDos = toDos;
    }
  
    // recorro todos los toDos
    for (const toDo of arrayToDos || allToDos) {
      // genero el HTML
      const toDoHTML = generateToDoHTML(toDo);
      // lo meto en el DOM
      toDoList.append(toDoHTML);    
    }
    
  } catch (error) {
    createAlertTailwind(error.message);
  }
}



//* Opción de añadir listeners usando event delegation
// toDoList.onclick = (event) => {
//   const target = event.target;

//   // if (target.closest('button') && target.closest('button').name === 'delete') {
//   if (target.closest('button')?.name === 'delete') {
//     const idToDo = target.closest('article').dataset.id;

//     deleteToDo(idToDo);
//   }
  
// }

// export { readToDos };