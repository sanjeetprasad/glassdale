const eventHub = document.querySelector(".container")
export const Criminal = (criminalObj, facilities) => {
    return `
    <div id="criminal-${criminalObj.id}", class="criminal__card">
    <h2 class="name">${criminalObj.name}</h2>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term start: ${new Date(criminalObj.incarceration.start).toDateString('en-US')}</p>
    <p>Term end: ${new Date(criminalObj.incarceration.end).toDateString('en-US')}</p>
    <div>
        <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
    <button id="associates--${criminalObj.id}">Associate Alibis</button>
    </div>
    `
}

eventHub.addEventListener("click", (eventObj) =>{

    const [nameOfId, criminalId] = eventObj.target.id.split("--")
    

    if(eventObj.target.id.startsWith("associates--")) {
        console.log("button was click", nameOfId, criminalId )

        const myCustomEvent = new CustomEvent("alibiButtonClicked", {
            detail: {
                criminalId: criminalId
            }
        })
        //dispatch the event to the eventHub so that the other modules can listen for this event
        eventHub.dispatchEvent(myCustomEvent)
    }
})