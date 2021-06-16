import { getReservations } from "./data.js"

export const Reservations = () => {
    const reservations = getReservations()

    let html = '<ul>'

    const listItems = reservations.map(reservation => {
        return `
        <li>
        ${reservation.parentName} would like to reserve a clown for ${reservation.childName} on ${reservation.date} 
        for ${reservation.duration} hour(s) at ${reservation.address}.
            <button class="reservation__delete delete" 
                id="reservation--${reservation.id}"> Delete
                </button>
            
        </li>
    `
    
                    })

    html += listItems.join("")
    html += '</ul>'                

    return html
}



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})