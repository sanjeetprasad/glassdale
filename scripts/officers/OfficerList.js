import {useOfficers, getOfficers} from "./OfficerProvider.js"
import {Officer} from "./Officer.js"


const officerContainer = document.querySelector(".officersContainer");

export const OfficerList = () => {
    getOfficers()
    .then( () =>{
        const officerArray = useOfficers()
        // console.log(officerArray)
        let officersHTMLRepresentation = ""

        for (const officer of officerArray) {
            officersHTMLRepresentation += Officer(officer)

            officerContainer.innerHTML = `
            <h2 class= "officerHeader">Officers of Glassdale</h2>
            <section class= "officerList">
            ${officersHTMLRepresentation}
            </section>`
        }

    })
}