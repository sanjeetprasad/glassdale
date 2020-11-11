import { getCriminals, useCriminals } from './CriminalProvider.js'
import {Criminal} from "./Criminal.js"
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { getFacilities, useFacilities } from '../facility/FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js'


const eventHub = document.querySelector(".container")
// console.log(eventHub)

export const CriminalList = () => {
    getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then( () => {
        const criminalArray = useCriminals()

        const facilities = useFacilities()
        const criminalFacilities = useCriminalFacilities()
        
        render(criminalArray, facilities, criminalFacilities)
    })
} 

const render = (criminalsToRender, allFacilities, allRelationships) => {
    
    // Step 1 - Iterate all criminals
    const criminalContainer = document.querySelector(".caseDataContainer")
    const matchedFacilities = criminalsToRender.map((criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
    criminalContainer.innerHTML = `
    <h1 class="header">Criminals of Glassdale</h1>
   <section class = "criminalList">
    ${matchedFacilities}
   </section>

`
}




// Listen for the custom event you dispatched in convictionSeclect
eventHub.addEventListener("crimeSelected", event => {
    // debugger
    // console.log("crimeSelected event happened", event.detail.crimeThatWasChosen)

    // use the property you added to the event datail.

    if(event.detail.crimeThatWasChosen !== 0) {

        // Get the list of criminals
    const criminalsArray = useCriminals()
    // console.log("array of criminals", criminalsArray)

    //We have the id of the conviction that the user selected from the drop down.
    //But each criminal object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier.

    //Get the array of convictions
    const convictionsArray = useConvictions()
    // console.log("array of convictions", convictionsArray)

    //Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime

    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
        // debugger
        return convictionObj.id === event.detail.crimeThatWasChosen
    })

    // console.log("convictionThatWasChosen", convictionThatWasChosen)

    // Now that we have the name of the chosen crime, filter the criminals application state down to the people that committed the crime.

    const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
        return criminalObj.conviction === convictionThatWasChosen.name
    })
    // console.log("filteredCriminalsArray", filteredCriminalsArray)

    // Then invoke render() and pass the filtered collection as an argument

    render(filteredCriminalsArray)
}
})

eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
    const selectedOfficerName = officerSelectedEventObj.detail.officerName

    

    const criminalsArray = useCriminals()

    const filteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
            if (criminalObj.arrestingOfficer === selectedOfficerName) {
                return true
            }
            return false
        }
    )
    render(filteredArrayCriminals)

})

// const render = (criminalsArray) => {
//     let criminalsHTMLRepresentation = ""

//     for (const criminal of criminalsArray) {
//         criminalsHTMLRepresentation += Criminal(criminal)

//         criminalContainer.innerHTML = `
//         <h1 class="header">Criminals of Glassdale</h1>
//         <section class= "criminalList">
//            ${criminalsHTMLRepresentation}
//         </section>
//         `
//     }

// }


