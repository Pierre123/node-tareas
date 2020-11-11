descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear la tarea requerida', {
        descripcion
    })
    .command('actualizar', 'Actualiza la tarea correspondiente', {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borrar la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}