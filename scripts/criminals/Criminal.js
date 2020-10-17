export const Criminal = (criminalObj) => {
    return `
    <div class= "criminal__card">
    <h2 class="name">${criminalObj.name}</h2>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term start: ${criminalObj.incarceration.start}</p>
    <p>Term end: ${criminalObj.incarceration.end}</p>
    </div>
    `
}