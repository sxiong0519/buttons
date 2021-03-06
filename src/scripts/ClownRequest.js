import { requestForm } from "./RequestForm.js";
import { Reservations } from "./Reservations.js";


export const ClownRequest = () => {
    return `
        <h1>Buttons' Clowns and More</h1>
        <section class="reservationForm">
            ${requestForm()}
        </section>
        
        <section class="reservationRequest">
            <h2>Reservation Request</h2>
            ${Reservations()}
        </section>
        `
}