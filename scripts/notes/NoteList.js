
import { NoteAsHTML } from './NoteHTMLConverter.js'
import { getNotes, useNotes} from "./NotesDataProvider.js"
import {getCriminals, useCriminals} from "../criminals/CriminalProvider.js"

// get the notes from the api >> use the notes array
// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM


const notesContainer = document.querySelector(".noteDisplayContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())


export const NoteList = () => {
    getNotes()
    .then(() => {
    const allNotes = useNotes()
    const allCriminals = useCriminals()
    render(allNotes, allCriminals)

    })
}

const render = (notesArray, crimainalsArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
        const relatedCriminal = crimainalsArray.find(criminal => criminal.id === note.criminalId)

        notesHTMLRepresentations += NoteAsHTML(note, relatedCriminal)
    }
    notesContainer.innerHTML = `
    <h3>Case Notes</h3>
    ${notesHTMLRepresentations}
    `

}





