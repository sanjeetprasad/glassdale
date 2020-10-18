export const Criminal = (criminalObj) => {
    return `
    <div class= "criminal__card">
    <h2 class="name">${criminalObj.name}</h2>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term start: ${new Date(criminalObj.incarceration.start).toDateString('en-US')}</p>
    <p>Term end: ${new Date(criminalObj.incarceration.end).toDateString('en-US')}</p>
    </div>
    `
}