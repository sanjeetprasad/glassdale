
import { useCriminals} from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("alibiButtonClicked", (eventObj) => {
    console.log("Hey I am listing", eventObj)

    const arrayOfCriminals = useCriminals()
    const foundCriminal = arrayOfCriminals.find((criminalObj) => {
        return criminalObj.id === parseInt(eventObj.detail.criminalId)
    })

    // console.log("Found the criminal", foundCriminal)
    // AlibiList(foundCriminal)
 render(foundCriminal)

})
// const AlibiList = (criminalObj) => {
//     render(criminalObj)
// }

    const render = (criminalObj) => {
        // console.log(criminalObj)
        const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)
        contentTarget.innerHTML += `
        <div class="alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
            return`
            <p>${alibiObj.name}</p>
            <p>${alibiObj.alibi}</p>
            `
        }).join("")}
        
        </div>
        `
    
    }