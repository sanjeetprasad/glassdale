
let convictions = []
export const useConvictions = () => {
    return convictions.slice()
}

// the above code can be written as in one line its works the same.
// export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(
        parsedConvictions => {
            // console.table(convictionsArray)
            convictions = parsedConvictions
        }
    )
}