const mainContainer = document.querySelector("#container");

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


export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            // ...and this
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })

}
