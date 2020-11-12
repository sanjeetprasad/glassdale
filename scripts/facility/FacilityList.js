import {getCriminals, useCriminals} from "../criminals/CriminalProvider.js"
import {getCriminalFacilities, useCriminalFacilities} from "./CriminalFacilityProvider.js"

import {getFacilities, useFacilities} from "./FacilityProvider.js"
import {FacilityCard} from "./FacilityCard.js"
import { Criminal } from "../criminals/Criminal.js"
import { renderFacilityButton } from "./DisplayFacilitiesButton.js"

const eventHub = document.querySelector(".container")
const facilitiesContainer = document.querySelector(".caseDataContainer")

let facilities = []
let criminals = []
let criminalFaclities = []

const FacilityList = () => {
    getFacilities()
    .then(getCriminals)
    .then(getCriminalFacilities)
    .then(() => {
        facilities = useFacilities()
        criminals = useCriminals()
        criminalFaclities = useCriminalFacilities()

        render()
    })
}

eventHub.addEventListener("facilityButtonClicked", () => {
    
    FacilityList()
})

const render = () => {
   facilitiesContainer.innerHTML = `
   <h2>Glassdale Facilities</h2>
   <section class="facilityList">
      ${facilities.map(facility => {
          const criminalRelationshipsForThisFacility = criminalFaclities.filter(
              cf => cf.facilityId === facility.id
          )
          const criminalsAtThisFacility = criminalRelationshipsForThisFacility.map(cf => {
              const matchingCriminalObj = criminals.find(criminal => criminal.id === cf.criminalId)
              return matchingCriminalObj
          })
          return FacilityCard(facility, criminalsAtThisFacility)

      }).join("")
    }
   
   </section>
   `
}

// const render = () => {
//     let criminalsHTMLRepresentation = ""
//          // step1 - Iterate all criminals
//     for (const criminal of criminals) {
        
//         // step2 - filter all relationships to get only ones for this criminal
//         const facilityRelationshipsForThisCriminal = criminalFacilities.filter(cf => cf.criminalId === criminal.id)
        
//         //step3 - convert the relationships to facilities with map()
//         const matchedFacilities = facilityRelationshipsForThisCriminal.map(cf => {
//             const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
//             return matchingFacilityObject
//         })

//         criminalsHTMLRepresentation += Criminal(criminal, matchedFacilities)

//     }

//         criminalContainer.innerHTML = `
//         <h1 class="header">Criminals of Glassdale</h1>
//         <section class= "criminalList">
//            ${criminalsHTMLRepresentation}
//         </section>
//         `
//     }


