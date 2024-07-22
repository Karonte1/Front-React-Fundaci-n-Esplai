import './styles/style.css';
import { readToDos, addToDo, countUncompletedToDos, filterCompleted, filterActive, filterAll } from './helpers/functions';
import createAlertTailwind from './helpers/createAlert';


// cazar todo lo que necesitemos
const mainForm = document.querySelector('.main-form');
const filterCompletedBtn = document.querySelector('.filter-completed');
const filterActiveBtn = document.querySelector('.filter-active');
const filterAllBtn = document.querySelector('.filter-all');


// escuchar el evento submit del formulario para saber cuando estamos añadiendo un nuevo toDo
mainForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTask = mainForm.task.value;

  // if (newTask === '') {
  //   mainForm.task.classList.add('outline-red-400');
  // } else {
  //   mainForm.task.classList.remove('outline-red-400');
  // }
  mainForm.task.classList.toggle('outline-red-400', newTask === '');

  if (!newTask) {
    createAlertTailwind('No puedes dejar el campo vacío')
    return;
  }

  addToDo(newTask);  

});

// clicks en los filtros
filterCompletedBtn.onclick = () => filterCompleted();
filterActiveBtn.onclick = () => filterActive();
filterAllBtn.onclick = () => filterAll();


// EJECUTAMOS
readToDos();
countUncompletedToDos();
