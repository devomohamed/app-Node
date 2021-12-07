const fs = require('fs');
const { argv } = require('process');
fs.writeFileSync('notes.txt', 'Hello')
fs.appendFileSync('notes.txt', 'data to append');







// console.log(fs.readFileSync('notes.txt').toString());

// const x = require('./data')
// console.log(x.firstName);
// console.log(x.lastName);
// console.log(x.sum1(5, 6));


// var validator = require('validator');

// console.log(validator.isEmail('mohamed@mm.com'));


// let chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));


const yargs = require('yargs')

/////////////////////////////////////////////
// v1

// yargs.command({
//     command: 'add',
//     describe: 'add note',
//     handler: () => {
//         console.log('add notes');
//     }
// })
// yargs.command({
//     command: 'delete',
//     describe: 'delete note',
//     handler: () => {
//         console.log('delete notes');
//     }
// })
// yargs.command({
//     command: 'read',
//     describe: 'read note',
//     handler: () => {
//         console.log('read notes');
//     }
// })

// yargs.command({
//     command: 'list',
//     describe: 'list note',
//     handler: () => {
//         console.log('list notes');
//     }
// })

//////////////////////////////////////////////////////////////////
// v2 

const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'add note',
    builder: {
        title: {
            describe: 'This Is Title In Add Command',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'This Is Body In Add Command',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argsv) => {
        notes.addNote(argsv.title, argsv.body)
            // console.log('add notes');
    }
})
yargs.command({
    command: 'delete',
    describe: 'delete note',
    builder: {
        title: {
            describe: 'This Is Title In delete Command',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argsv) => {
        notes.remove(argsv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'This Is Title In read Command',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argsv) => {
        notes.readNote(argsv.title)
            // console.log('read notes');
    }
})

yargs.command({
    command: 'list',
    describe: 'list note',
    handler: () => {
        notes.showAll()
            // console.log('list notes');
    }
})

yargs.command({
    command: '*',
    describe: 'list note',
    handler: () => {
        console.log('This Is Not a Command');
    }
})

console.log(yargs.argv);
// yargs.parse()