// console.log("Welcome to the main module")
// import {getCriminals} from "./criminals/CriminalProvider.js"

// const criminalArray = getCriminals()

import {CriminalList} from "./criminals/CriminalList.js"
import {OfficerList} from "./officers/OfficerList.js"
// import {getConvictions} from "./convictions/ConvictionProvider.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
CriminalList()
OfficerList()
ConvictionSelect()
// getConvictions()