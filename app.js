require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

const {
    inquirerMenu,
    inquirerPausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
} = require('./helpers/inquirer');

const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }


    //    await inquirerPausa()

    do {
        //console.clear()
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //Crear opción
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                //console.log( tareas.listadoArr )
                tareas.listadoCompleto();

                break;

            case '3':

                tareas.listarPendientesCompletadas(true);

                break;

            case '4':

                tareas.listarPendientesCompletadas(false);

                break;

            case '5':
                const ids = await mostrarListadoCheckList( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿Está segudo de borrar la tarea ?')
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada!')
                    }
                }
                break;

            default:
                break;
        }

        guardarDB(tareas.listadoArr);

        //console.log('main', opt);
        // const tareas = new Tareas();
        // const tarea = new Tarea('Comprar comida');
        // tareas._listasdo[tarea.id] = tarea;
        // console.log( tareas );
        await inquirerPausa()

        console.clear();

    } while (opt !== '0')
}

main();