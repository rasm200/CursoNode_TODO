/**
 * _listado :
 *          { 'uid-4554654564564564564: {id:12,  desc: asd, completadoEn: 92231} '}
 **/

const Tarea = require("./tarea");

class Tareas {
    _listasdo = {};

    constructor() {
        this._listasdo = {}
    }

    crearTarea ( desc = '' ){

        const tarea = new Tarea( desc )
        this._listasdo[tarea.id] = tarea;
    }
}

module.exports = Tareas;
