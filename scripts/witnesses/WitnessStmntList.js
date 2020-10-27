import { useWitnessStatements, getWitnessStatements } from "./WitnessStmntProvider.js";
import { WitnessStatement } from "./WitnessStmnt.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { renderWitnessButton } from "./WitnessStmntButton.js";


const eventHub = document.querySelector(".container")
const witnessesCointainer = document.querySelector(".caseDataContainer")

eventHub.addEventListener("witnessesClicked", () => {
    console.log("heard the witness statement button")
    WitnessesList()
})

const WitnessesList = () => {
    getWitnessStatements()
    .then(() => {
        const witnessesArray = useWitnessStatements()
        console.log(witnessesArray)
        render(witnessesArray)
    })
}

const render = (witnessStatementArray) => {
    let witnessStatementHTMLRepresentations = ""
    for(const witness of witnessStatementArray) {
        witnessStatementHTMLRepresentations += WitnessStatement(witness)

        witnessesCointainer.innerHTML = `
        <h3>Glassdale Witnesses<h3>
        <section class="witnessesList">
        ${witnessStatementHTMLRepresentations}
        </section>
        `
    }
}