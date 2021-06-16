const makeReservations = {
    reservations: []
}

const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (requestReservations) => {
                // Store the external state in application state
                makeReservations.reservations = requestReservations
            }
        )
        
}

export const getReservations = () => {
    return [...makeReservations.reservations]
}