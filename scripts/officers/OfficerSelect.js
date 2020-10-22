import {getOfficers, useOfficers} from "./OfficerProvider.js"

const officersContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {
    // console.log(OfficerSelect)

    getOfficers()
    .then(() => {
        const officersArray = useOfficers()
        // console.log("officersArrays", officersArray)

      render(officersArray)
     
    })
}

const render = (officers) => {
    officersContainer.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer...</option>
        <option>
        ${officers.map(
            officerObj => {
             //    const crime = convictionObject.name
             return  `<option value="${officerObj.name}">${officerObj.name}</option>`
         }).join("")
        }</option>
    </select>
 `
}

eventHub.addEventListener("change", (changeEvent) => {
    // debugger

    if (changeEvent.target.id === "officerSelect") {
    // console.log("OfficerSelect: change in the officer dropdown")

    const officerSelectedEvent = new CustomEvent("officerSelected", {
        detail: {
            officerName: changeEvent.target.value
           
        }
    })
    // console.log(detail)
    eventHub.dispatchEvent(officerSelectedEvent)
}
})


