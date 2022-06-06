require('colors')
const {
    monstrarMenu,
    pausa
} = require('./helpers/mensajes');

console.clear()


const main = async () => {
    //console.log('Hola Mundo!'.bgCyan.blue);
    let opt = '';

    do {

        opt = await monstrarMenu();
        debugger;
        console.log(opt);

        if (opt !== '0') {
            await pausa();
        }

    } while (opt !== '0')
    //pausa();

}

main();