export const WitnessStatement = (witness) => {
   return `
   <div class="witness">
   <h3>Name: ${witness.name}</h3>
   <p>Statement: ${witness.statement}</p>
   </div>
   `
}