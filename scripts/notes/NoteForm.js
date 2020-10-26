import { saveNote } from "./NotesDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <input  id="note--dateOfInterview" type="date"/>
    
    <input id="note--author" type="text"  placeholder="Enter your Name"/>
    <input  id="note--suspect" type="text" placeholder="Suspect Name"/>
    <input  id="note--note" type="text" placeholder="Write your notes"/>
   
    
    <button id="saveNote">Save Note</button>
    `
}
eventHub.addEventListener("click", clickEvent => {
    // grab the input values
    if(clickEvent.target.id === "saveNote") {
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const author = document.querySelector("#note--author").value
        const suspect = document.querySelector("#note--suspect").value
        const note = document.querySelector("#note--note").value
        const timestamp = Date.now()

        // make a note object

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            suspect,
            note
        }

        // send object to database/API/json file
        saveNote(newNote)
    }
})

export const NoteForm = () => {
    render()
}

eventHub.addEventListener("noteStateChanged", () => {
   NoteForm()
})