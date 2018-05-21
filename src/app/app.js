import { geolocationService } from './services/GeolocationService'
import { dataService } from './services/DataService'
import { API_URL } from './constants/constants'
import Flight from './models/Flight'
import DetailsPage from './ui/DetailsPage/DetailsPage'
import displayError from './utilities/displayError'
import { createUIFrame } from './ui/FlightsPage/Frame'
import { addFlightListItem } from './ui/FlightsPage/ListItem'
import createSetBack from './utilities/createSetBack'
import toggleDisplay from './utilities/toggleDisplay'
import translateLeft from './utilities/translateLeft'
import initializeDOM_Selectors from './utilities/initializeDOM_Selectors'
import translateUp from './utilities/translateUp'



export const data = {}

const definePages = () => {
    data.root = document.getElementById('root'),
        data.details = document.getElementById('details')
}

const getUserLocationData = () => {
    geolocationService.getUserCoordinates(
        userCoordinates => {
            data.userCoordinates = userCoordinates
            translateLeft()
        },
        denied => displayError(denied),
        err => displayError(err)
    )
}

const onSuccessHandler = response => {
    data.flightsList = response
        .map(e => {
            const { Trak, Alt, Id, Man, Mdl, To, From, Op } = e
            return new Flight(Trak, Alt, Id, Man, Mdl, To, From, Op)
        })
        .sort((a, b) => b.altitude - a.altitude)
    data.flightsList
        .forEach((e, i) => addFlightListItem(e, i, editHash))

}

const onErrHandler = err => displayError(err)


const getFlights = (userCoordinates, distance) => {
    data.listContainer.innerHTML = '';
    const url = `${API_URL}?lat=${userCoordinates.latitude}&lng=${userCoordinates.longitude}&fDstL=0&fDstU=${distance}`
    dataService.getFlightsData(url, onSuccessHandler, onErrHandler)
}

const onDOMLoading = () => {
    initializeDOM_Selectors()

    data.button.addEventListener('click', (e) => {
        e.preventDefault()
        getUserLocationData()
    })
    data.slider.addEventListener('change', (e) => {
        e.preventDefault()
        data.distance = 2.5 * e.target.value
        translateUp()
        getFlights(data.userCoordinates, data.distance)
        if (data.intervalSet) {
            return
        }
        setInterval(() => getFlights(data.userCoordinates, data.distance), 60000)
        data.intervalSet = true
    })
}

export const startApp = () => {
    definePages()
    createUIFrame()
    onDOMLoading()
}

const editHash = (e) => {
    const listItem = document.getElementById(e.code)
    listItem.classList.add('go-to-details')
    setTimeout(() => {
        window.location.hash = `#details/${e.code}`
        listItem.classList.remove('go-to-details')
    }, 350)
}

export const displayFlights = () => {
    data.details.classList.add('display-none')
    data.root.classList.remove('display-none')
}

export const displayDetails = (code) => {

    const detailsPage = data.details.firstChild
    if (detailsPage.id == code) {
        data.root.classList.add('display-none')
        data.details.classList.remove('display-none')        
        return
    }

    const flight = data.flightsList.filter(e => e.code == code)[0]

    if (flight) {
        data.details.innerHTML = DetailsPage(flight)
        toggleDisplay()
        createSetBack()
    } else {
        window.location.hash = `#flights`
    }
}