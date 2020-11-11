// console.log("Welcome to the main module")
// import {getCriminals} from "./criminals/CriminalProvider.js"

// const criminalArray = getCriminals()

import {CriminalList} from "./criminals/CriminalList.js"
import {OfficerList} from "./officers/OfficerList.js"
// import {getConvictions} from "./convictions/ConvictionProvider.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteList } from "./notes/NoteList.js"
import { NoteForm } from "./notes/NoteForm.js"
import "./criminals/AlibiList.js"
import { renderWitnessButton } from "./witnesses/WitnessStmntButton.js";
import "./witnesses/WitnessStmntList.js";
// import {AlibiList} from "./criminals/AlibiList.js"



CriminalList()
OfficerList()
ConvictionSelect()

OfficerSelect()

NoteList()
NoteForm()


// AlibiList()

renderWitnessButton()



