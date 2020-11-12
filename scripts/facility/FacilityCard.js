export const FacilityCard = (facilityObject, criminalsArray) => {
    return `
        <div class="facility">
          <h2>${facilityObject.facilityName}</h2>
          <p>Security Level: ${facilityObject.securityLevel}</p>
          <p>Capacity: ${facilityObject.capacity}</p>
          <div>
            <h2>Criminals</h2>
            <ul>
                ${criminalsArray.map(c => `<li>${c.name}</li>`).join("")}
            </ul>
          </div>
        </div>
    `
  }