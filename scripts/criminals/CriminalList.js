import { getCriminals, useCriminals } from './CriminalProvider.js'
import {Criminal} from "./Criminal.js"

const criminalContainer = document.querySelector(".criminalsContainer")
export const CriminalList = () => {
    getCriminals()
    .then( () => {
        const criminalArray = useCriminals()
        // console.log(criminalArray)
        let criminalsHTMLRepresentation = ""

        for (const criminal of criminalArray) {
            criminalsHTMLRepresentation += Criminal(criminal)

            criminalContainer.innerHTML = `
            <h1 class="header">Criminals of Glassdale</h1>
            <section class= "criminalList">
               ${criminalsHTMLRepresentation}
            </section>
            `
        }


    }
     
    )
} 