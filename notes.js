const fs = require('fs');
const { title } = require('process');


// const addNote = (title, body) => {
//     const notes = loadnotes()
//     notes.push({
//         title,
//         body
//     })
//     saveNotes(notes)
// }
// const loadnotes = () => {
//     try {
//         let m = fs.readFileSync('notes.json').toString()
//         return json.parse(m)
//     } catch (e) {
//         return []
//     }
// }
// const saveNotes = (notes) => {
//     let jsonNotes = JSON.stringify(notes);
//     fs.appendFileSync('notes.json', jsonNotes)
// }



const addNote = (title, body) => {
    const notes = loadNotes()
        // console.log(notes);
    const duplicateTitles = notes.filter((note) => {
            return note.title === title
        })
        // console.log(duplicateTitles);
    if (duplicateTitles.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log("Saved Note")
    } else {
        console.log("this note is exsist");
    }

}

const loadNotes = () => {
    try {
        let m = fs.readFileSync('notes.json').toString()
            // console.log(m)
        return JSON.parse(m)
    } catch (e) {
        return []
    }
}
const saveNotes = (notes) => {
    // console.log(notes)
    let jsonNotes = JSON.stringify(notes);
    // console.log(jsonNotes)
    fs.writeFileSync('notes.json', jsonNotes)
}
const remove = (title) => {
    const notes = loadNotes()
    const noteKeep = notes.filter((note) => {
        return note.title !== title
    })

    saveNotes(noteKeep)
    console.log('done delete note');
}


const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.title === title
    })
    if (note) {
        console.log(note);
    } else {
        console.log("This Note Is Not Exsist");
    }

}
const showAll = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(`Note Title '${note.title}' ===> Body is '${note.body}'`);
    });
}





module.exports = {
    addNote,
    remove,
    readNote,
    showAll
}