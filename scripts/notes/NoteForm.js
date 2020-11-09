import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { saveNote } from "./NotesDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (arrayOfCriminals) => {
    // debugger
    contentTarget.innerHTML = `
    <input  id="note--dateOfInterview" type="date"/>
    
    <input id="note--author" type="text"  placeholder="Enter your Name"/>
    <select id="note--criminal" class="criminalSelect">
    <option value="0">Please select a criminal...</option>
    ${
        arrayOfCriminals.map(criminal => {
            return `<option value="${ criminal.id }">${ criminal.name }</option>`
        }).join("")
    }
    </select>
   <input  id="note--note" type="text" placeholder="Write your notes"/>
   
    
    <button id="saveNote">Save Note</button>
    `
}
eventHub.addEventListener("click", clickEvent => {
    // grab the input values
    if(clickEvent.target.id === "saveNote") {
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const author = document.querySelector("#note--author").value
        const criminalId = parseInt(document.querySelector("#note--criminal").value)
        const note = document.querySelector("#note--note").value
        const timestamp = Date.now()
    //    debugger

        // make a note object

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            criminalId,
            note
        }

        // send object to database/API/json file
        saveNote(newNote)
    }
})

export const NoteForm = () => {
     getCriminals()
     .then(() => {
         const listOfCriminals = useCriminals()
         render(listOfCriminals)
     })
    
}

// eventHub.addEventListener("noteStateChanged", () => {
//    NoteForm()
// })