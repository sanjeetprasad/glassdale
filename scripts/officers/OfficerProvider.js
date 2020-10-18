let officers = [];

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
    .then(responce => responce.json())
    .then(
        parsedOfficers => {
            console.table(parsedOfficers)
            officers = parsedOfficers
        }
    )
}