import { actualizarTarea, borrarTarea, completarDescompletarTarea, crearTarea, leerTareas } from './functions/toDoFunctions.js';

// MENU
let selection;

do {
    selection = prompt(`
        ¡Bienvenid@ a tu lista de tareas 1.0!
        ¿Qué quieres hacer?
        (C) Crear una nueva tarea
        (R) Leer tus tareas
        (U) Actualizar una tarea
        (D) Borrar una tarea
        (E) Completar/Descompletar tarea
        (X) Salir
    `);

    if (selection === 'r') {
        leerTareas();
    } else if (selection === 'c') {
        crearTarea();
    } else if (selection === 'u') {
        actualizarTarea();
    } else if (selection === 'd') {
        borrarTarea();
    } else if (selection === 'e') {
        completarDescompletarTarea();
    } else if (selection === 'x' || selection === null) {
        console.log('¡Adios!');
        break;
    }

} while (true)
