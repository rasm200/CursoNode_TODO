/**
 * _listado :
 *          { 'uid-4554654564564564564: {id:12,  desc: asd, completadoEn: 92231} '}
 **/

require('colors')

const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr() {

        const listado = []

        Object.keys(this._listado).forEach(key => {

            const tarea = this._listado[key];
            listado.push(tarea);
            //console.log(key);
        })

        return listado;
    }

    constructor() {
        this._listado = {}
    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }

    borrarTarea( id='' ) {

        if(this._listado[id]){

            delete this._listado[id];

        }

    }
    cargarTareasFromArray(tareas = []) {

        tareas.forEach((tarea) => {
            //var dato = 
            this._listado[tarea.id] = tarea;
        })

    }


    listadoCompleto() {

        let txtTareas = '';
        let contador = 1;

        Object.keys(this._listado).forEach(key => {

            const tarea = this._listado[key];

            const idx = `${contador++}`.green
            const estado = `${tarea.completadoEn == null ? "PENDIENTE".red : "COMPLETADA".green}`

            txtTareas = txtTareas + `  ${idx} - ${tarea.desc} - ${estado}  \n`

        })

        console.log(txtTareas);

    }

    listarPendientesCompletadas(completadas = true) {
        let txtTareas = '';
        let contador = 1;
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            const idx = `${contador++}`.green
            const estado = `${tarea.completadoEn == null ? "PENDIENTE".red : "COMPLETADA".green}`
            if (completadas) {
                if (tarea.completadoEn == completadas) {
                    txtTareas = txtTareas + `  ${idx} - ${tarea.desc} - ${estado}  \n`
                }
            }
            else {
                if (!tarea.completadoEn) {
                    txtTareas = txtTareas + `  ${idx} - ${tarea.desc} - ${estado}  \n`
                }
            }
        })

        console.log(txtTareas);

    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];

            if(!tarea.completadoEn){

                tarea.completadoEn = new Date().toISOString();
            }

        })

        this.listadoArr.forEach( tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }

        })

    }
}



module.exports = Tareas;
