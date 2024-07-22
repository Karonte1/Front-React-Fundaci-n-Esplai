import { askNumber, askText } from '../helpers/askData.js';

// Mini "base de datos"
const toDos = [
  {
      id: 1,
      task: 'Estudiar JavaScript',
      isCompleted: true
  },
  {
      id: 2,
      task: 'Pasear a las perras. 🐶',
      isCompleted: false
  }
];

let toDoId = 2;


export function leerTareas () {
  console.clear();
  
  for (const toDo of toDos) {
    const completedIcon = toDo.isCompleted ? '✅' : '❌';
    console.log(`${completedIcon} ${toDo.id}: ${toDo.task}`);
  }
}


export function crearTarea () {
  // pedir el texto de la nueva tarea

  const newTask = askText('¿Cuál es el texto de la nueva tarea?')

  // añado uno al identificador
  toDoId++;

  // creo la nueva tarea igual que las otras
  const newToDo = {
    id: toDoId,
    task: newTask,
    isCompleted: false
  };

  // la añadimos al array de tareas
  toDos.push(newToDo);

  console.log(`Tarea "${newTask}" añadida correctamente.`);
}


export function borrarTarea () {
  // mostrar las tareas
  leerTareas();

  // te pido el ID de la tarea que quieres borrar
  const deleteId = askNumber('Dime el ID de la tarea que quieres borrar.');

  // comrpobamos si existe la tarea con ese ID
  let isFound = false;

  for (const i in toDos) {
    const toDo = toDos[i];

    if (toDo.id === deleteId) {
      // lo hemos encontrado
      // lo borramos
      toDos.splice(i, 1);
      isFound = true;
      console.log(`La tarea "${toDo.task}" ha sido borrada.`);
    }
 
  }

  // si no lo hemos encontrado, mensaje
  if (!isFound) {
    const areYouSure = confirm(`No existe la tarea con el ID ${deleteId}. ¿Quieres darme otro ID?`);

    if (areYouSure) borrarTarea();    
  }  
}


export function actualizarTarea () {
  // mostrar las tareas
  leerTareas();

  // te pido el ID de la tarea que quieres actualizar
  const updateId = askNumber('Dime el ID de la tarea que quieres actualizar.');

  // comrpobamos si existe la tarea con ese ID
  let isFound = false;

  for (const i in toDos) {
    const toDo = toDos[i];

    if (toDo.id === updateId) {
      // lo hemos encontrado
    
      // pedir el texto de la nueva tarea
      const newTask = askText('¿Cuál es el nuevo texto de la tarea?');

      console.log(`La tarea "${toDo.task}" ha sido actualizada a "${newTask}".`);

      // cambiamos el texto de la tarea por el nuevo
      toDo.task = newTask;

      isFound = true;
    }
  }

  // si no lo hemos encontrado, mensaje
  if (!isFound) {
    const areYouSure = confirm(`No existe la tarea con el ID ${updateId}. ¿Quieres darme otro ID?`);

    if (areYouSure) actualizarTarea();    
  }  


}

export function completarDescompletarTarea () {
  leerTareas();

  // pido el ID
  const completeUncompleteId = askNumber('Dime el ID de la tarea que quieres marcar/desmarcar.');

  let isFound = false;

  for (const i in toDos) {
    const toDo = toDos[i];

    if (toDo.id === completeUncompleteId) {
      // lo hemos encontrado
      // invertimos su propiedad isCompleted
      toDo.isCompleted = !toDo.isCompleted;
      
      isFound = true;
      const completedUncompletedText = toDo.isCompleted ? 'completada' : 'no completada';
      console.log(`La tarea "${toDo.task}" ha sido marcada como ${completedUncompletedText}.`); 
      leerTareas();
    } 
  }

  // si no lo hemos encontrado, mensaje
  if (!isFound) {
    const areYouSure = confirm(`No existe la tarea con el ID ${updateId}. ¿Quieres darme otro ID?`);

    if (areYouSure) completarDescompletarTarea();    
  }  



}


// export { leerTareas, borrarTarea, crearTarea };