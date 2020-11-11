const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    type: 'boolean'
};


const argv = require('yargs')
    .command('crear', 'Crear la tarea requerida', {
        descripcion
    })
    .command('actualizar', 'Actualiza la tarea correspondiente', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar la tarea', {
        descripcion
    })
    .command('listar', 'Listar todas las tareas completadas o no', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}