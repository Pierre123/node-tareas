const fs = require('fs');


let listadoPorHacer = [];


const guardarDb = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`database/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo guardar', err)
    });
};

const cargarDb = () => {
    try {
        listadoPorHacer = require('../database/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};


const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };


    cargarDb();
    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
};

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
};

const actualizarTarea = (descripcion, completado = true) => {
    cargarDb();
    let indice = listadoPorHacer.findIndex(tarea => { return tarea.descripcion === descripcion });
    if (indice >= 0) {
        listadoPorHacer[indice].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
};

const borrarTarea = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length !== nuevoListado.length) {
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const getListadoFiltrado = (completado) => {
    cargarDb();
    const listadoFiltro = listadoPorHacer.filter(tarea => tarea.completado === completado);
    console.log(listadoFiltro);
    if (listadoPorHacer.length !== listadoFiltro.length) {
        listadoPorHacer = listadoFiltro;
        return listadoFiltro;
    } else {
        return listadoPorHacer;
    }
};

module.exports = {
    crear,
    getListado,
    actualizarTarea,
    borrarTarea,
    getListadoFiltrado
}