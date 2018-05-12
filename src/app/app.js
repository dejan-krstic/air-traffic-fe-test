import { geolocationService } from './services/GeolocationService'
import { dataService } from './services/DataService'
import { API_URL } from './constants/constants'
import Flight from './models/Flight'
import { createUIFrame } from './ui/Frame';
import { addFlightListItem } from './ui/ListItem'

const data = {
    flightsList: [],
    distance: 200,
}

const getUserLocationData = () => {
    geolocationService.getUserCoordinates(
        userCoordinates => {
            getFlights(userCoordinates, data.distance)
            setInterval(() => getFlights(userCoordinates, data.distance), 60000)
        },    // ----- add loader
        error => displayError(error),
        disabled => displayError(disabled)
    )
}

const onSuccessHandler = response => {
    console.log(response)
    data.flightsList = response
        .map(e => {
            const { Trak, Alt, Id, Man, Mdl, To, From } = e
            return new Flight(Trak, Alt, Id, Man, Mdl, To, From)
        })
        .sort((a, b) => b.altitude - a.altitude)
        .forEach((e,i) => addFlightListItem(e, i, displayFlight))  
        console.log('no await = '+data.flightsList);


        
}

const displayFlight = (e) => {
    console.log(e)      //   ---------------------------Routing here --------------------------------------- 
}

const onErrHandler = err => console.log(err)


const getFlights = (userCoordinates, distance) => {
    const url = `${API_URL}?lat=${userCoordinates.latitude}&lng=${userCoordinates.longitude}&fDstL=0&fDstU=${distance}`
    dataService.getFlightsData(url, onSuccessHandler, onErrHandler)
}




export const startApp = () => {
    createUIFrame()
    getUserLocationData()
}
