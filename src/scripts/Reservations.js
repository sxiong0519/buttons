import { getReservations } from "./data.js"

export const Reservations = () => {
    const reservations = getReservations()

    let html = '<ul>'

    const listItems = reservations.map(reservation => {
        return `
        <li>
            ${reservation.parentName}
            
        </li>
    `
    
                    })

    html += listItems.join("")
    html += '</ul>'                

    return html
}



