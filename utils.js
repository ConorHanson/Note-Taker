const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'

        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'

        },

    },
    handler: (argv) => notes.addNote(argv.title, argv.body)


})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        },
        

    },
    handler: ()=> {
        console.log('Removing note:', yargs.argv.title)
        notes.removeNote(yargs.argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading your note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function () {
        console.log('Reading the note!')
        notes.readNote(yargs.argv.title)

    }
})

yargs.command({
    command: 'list',
    describe: 'Lists your notes',
    handler: function () {
        console.log('Listing your notes!')
        notes.listNotes()
    }
})

yargs.parse()

