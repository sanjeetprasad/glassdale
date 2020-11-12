import { getCriminals, useCriminals } from './CriminalProvider.js'
import {Criminal} from "./Criminal.js"
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { getFacilities, useFacilities } from '../facility/FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js'

const criminalContainer = document.querySelector(".caseDataContainer")
const eventHub = document.querySelector(".container")
// console.log(eventHub)
let criminals = []
let facilities = []
let criminalFacilities = []
export const CriminalList = () => {
    getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then( () => {
        criminals = useCriminals()
        facilities = useFacilities()
        criminalFacilities = useCriminalFacilities()
        
        render()
    })
} 
// Listen for the custom event you dispatched in convictionSeclect
eventHub.addEventListener("crimeSelected", event => {
 

    if(event.detail.crimeThatWasChosen !== 0) {

        // Get the list of criminals
    const criminalsArray = useCriminals()
    const convictionsArray = useConvictions()
    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
        // debugger
        return convictionObj.id === event.detail.crimeThatWasChosen
    })
    const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
        return criminalObj.conviction === convictionThatWasChosen.name
    })
       
   criminals = filteredCriminalsArray
   render()
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
    
    criminals = filteredArrayCriminals
    render()

})

const render = () => {
    let criminalsHTMLRepresentation = ""
         // step1 - Iterate all criminals
    for (const criminal of criminals) {
        
        // step2 - filter all relationships to get only ones for this criminal
        const facilityRelationshipsForThisCriminal = criminalFacilities.filter(cf => cf.criminalId === criminal.id)
        
        //step3 - convert the relationships to facilities with map()
        const matchedFacilities = facilityRelationshipsForThisCriminal.map(cf => {
            const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
            return matchingFacilityObject
        })

        criminalsHTMLRepresentation += Criminal(criminal, matchedFacilities)

    }

        criminalContainer.innerHTML = `
        <h1 class="header">Criminals of Glassdale</h1>
        <section class= "criminalList">
           ${criminalsHTMLRepresentation}
        </section>
        `
    }


