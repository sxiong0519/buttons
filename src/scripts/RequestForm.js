import { sendRequest } from "./data.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => { //when something in the maincontainer is clicked - maincontainer is referenced in main.js
    if (clickEvent.target.id === "submitRequest") { //the button below
        // Get what the user typed into the form fields
        const parent = document.querySelector("input[name='parentName']").value //the input value of description is = to userDescription
        const child = document.querySelector("input[name='childName']").value // ""
        const party = document.querySelector("input[name='attendants']").value
        const location = document.querySelector("input[name='address']").value // ""
        const userDate = document.querySelector("input[name='serviceDate']").value // ""
        const time = document.querySelector("input[name='duration']").value // ""
        
        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parent,
            childName: child,
            attendants: party,
            address: location,
            date: userDate,
            duration: time
        }
        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})



export const requestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendants">Party Size</label>
            <input type="number" name="attendants" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="duration">Duration (hours)</label>
            <input type="number" name="duration" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}