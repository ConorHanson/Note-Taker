const fs = require('fs')
const notesmsg = 'Your notes...'
const chalk = require('chalk')

const getNote = () => {notesmsg}

const addNote = function (title, body) {
    const notes = loadNotes()
    const dupes = notes.find((note) => note.title === title)
    if (!dupes) {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes)
        console.log('New note added!')

    }
    else {
        console.log('Note title taken!')
    }
    
    
}

const removeNote = function (title) {
    const notes = loadNotes()  
    const dupe = notes.filter((note) => note.title !== title)

    if (notes.length > dupe.length) {
            savedNotes(dupe)
            console.log('Note Deleted')

        }
        else {
            console.log('Note title taken not valid')
        }
    }

const listNotes = function () {
    const notes = loadNotes()
    notes.forEach((item) => {
        console.log(item.title)
    }) 

}

const readNote = function (title) {
    const notes = loadNotes()
    const read = notes.find((note) => note.title === title)
    if (read) {
        console.log(chalk.green.bold(read.title))
        console.log(read.body)
    }
    else {
        console.log(chalk.red.inverse('Error, note not found'))
    }
    
   

}

const savedNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) { 
        return []

    }
    

    }

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}