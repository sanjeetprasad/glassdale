
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import {getConvictions, useConvictions} from "./ConvictionProvider.js"
// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")
export const ConvictionSelect = () => {
// Get all convictions from application state
getConvictions()
.then(() => {
    const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
        /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
   contentTarget.innerHTML = `
   <select class="dropdown" id="crimeSelect">
       <option value="0">Please select a crime...</option>
       <option>
       ${convictionsCollection.map(
           convictionObject => {
            //    const crime = convictionObject.name
            return  `<option value="${convictionObject.id}">${convictionObject.name}</option>`
        }).join("")
       }</option>
   </select>
`
}

eventHub.addEventListener("change", (changeEvent) => {
    // console.log(changeEvent.target.value)

    // only do this if the `crimeSelect` elememt was changed
    if (changeEvent.target.id === "crimeSelect") {

        // create custom event. provide an appropriate name.

    const customEvent = new CustomEvent("crimeSelected", {
        detail: {
            crimeThatWasChosen: parseInt(changeEvent.target.value)
        }
    })
    // Dispatch to event hub
    eventHub.dispatchEvent(customEvent)
    }

})