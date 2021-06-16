import { getReservations } from "./data.js"

export const Reservations = () => {
    const reservations = getReservations()

    let html = '<ul>'

    const listItems = reservations.map(reservation => {
        return `
        <li>
            ${reservation.parentName} would like to reserve a clown for ${reservation.childName} on ${reservation.date} 
            for ${reservation.duration} hour(s) at ${reservation.address}.
            
        </li>
    `
    
                    })

    html += listItems.join("")
    html += '</ul>'                

    return html
}



