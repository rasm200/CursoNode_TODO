
const inquirer = require('inquirer');

require('colors');

const pausar = [{
    type: 'input',
    name: 'pausa',
    message: `Presione ${'ENTER'.green} para continuar`
}]

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        {
            value: '1',
            name: '1. Crear Tarea'
            ,
        },
        {
            value: '2',
            name: '2. Listar Tarea'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name: '5. Completar tareas'
        },
        {
            value: '6',
            name: '6. Borrar tareas'
        },
        {
            value: '0',
            name: '0. Salir'
        }
    ]
}];

const inquirerMenu = async () => {
    //console.clear();

    console.log('=============================='.green);
    console.log('   Seleccione una opción      '.bold);
    console.log('==============================\n'.green);
    const { opcion } = await inquirer.prompt(preguntas);
    console.log('inquirerMenu', opcion);

    return opcion;

}

const inquirerPausa = async () => {

    console.log('\n');

    const pausa = await inquirer.prompt(pausar);
}


const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor igrese un valor'
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc;
}


module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput
}