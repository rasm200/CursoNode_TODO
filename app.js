require('colors')
const {
    inquirerMenu,
    inquirerPausa,
    leerInput
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    do {
        //console.clear()
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                    //Crear opción
                    const desc = await leerInput( 'Descripción: ' );
                    tareas.crearTarea( desc );
                break;
            case '2':
                    console.log( tareas._listasdo )
                break;

            default:
                break;
        }


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