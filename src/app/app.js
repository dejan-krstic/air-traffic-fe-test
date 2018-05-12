import { geolocationService } from './services/GeolocationService'
import { dataService } from './services/DataService'
import { API_URL } from './constants/constants'
import Flight from './models/Flight'
import displayError  from './error/displayError'
import { createUIFrame } from './ui/Frame'
import { addFlightListItem } from './ui/ListItem'

const data = { }

const getUserLocationData = () => {
    data.button.removeEventListener('click', getUserLocationData)
    geolocationService.getUserCoordinates(
        userCoordinates => {
            data.userCoordinates = userCoordinates
            data.button.classList.add('translate-left')
            console.log(data.userCoordinates);

        },    // ----- add loader
        denied => displayError(denied),
        err => displayError(err)
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
const onErrHandler = err => displayError(err)


const displayFlight = (e) => {
    console.log(e)      //   ---------------------------Routing here --------------------------------------- 
}



const getFlights = (userCoordinates, distance) => {
    const url = `${API_URL}?lat=${userCoordinates.latitude}&lng=${userCoordinates.longitude}&fDstL=0&fDstU=${distance}`
    dataService.getFlightsData(url, onSuccessHandler, onErrHandler)
}

const onDOMLoading = () => {
    data.button = document.querySelector('button')
    data.slider = document.querySelector('input')
    console.log(data.button);
    data.button.addEventListener('click', (e) => {
        e.preventDefault()
        getUserLocationData() })
    data.slider.addEventListener('change', (e) => 
    {
        e.preventDefault();
        data.distance = 2.5 * e.target.value
        console.log(data.distance)
        getFlights(data.userCoordinates, data.distance)
        setInterval(() => getFlights(data.userCoordinates, data.distance), 60000)   // TODO integrate in fn

    })
}

export const startApp = () => {
    createUIFrame()
    onDOMLoading()


}
