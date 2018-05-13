import { geolocationService } from './services/GeolocationService'
import { dataService } from './services/DataService'
import { API_URL } from './constants/constants'
import Flight from './models/Flight'
import DetailsPage from './ui/DetailsPage/DetailsPage'
import displayError from './error/displayError'
import { createUIFrame } from './ui/FlightsPage/Frame'
import { addFlightListItem } from './ui/FlightsPage/ListItem'



const data = {}

const definePages = () => {
    data.root = document.getElementById('root'),
    data.details = document.getElementById('details')
}

const getUserLocationData = () => {
    geolocationService.getUserCoordinates(
        userCoordinates => {
            data.userCoordinates = userCoordinates
            data.button.classList.add('translate-left')
            data.sliderContainer.classList.add('translate-left')
            data.listHeader.classList.add('translate-left')
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
    data.button = document.querySelector('button')
    data.slider = document.querySelector('input')
    data.showRadius = document.querySelector('.show-radius')
    data.listContainer = document.querySelector('.list-container')
    data.sliderContainer = document.querySelector('.slider-container')
    data.listHeader = document.querySelector('.header')
    data.uiContainer = document.querySelector('.ui-container')

    data.button.addEventListener('click', (e) => {
        e.preventDefault()
        getUserLocationData()
    })
    data.slider.addEventListener('change', (e) => {
        e.preventDefault();
        data.distance = 2.5 * e.target.value
        data.showRadius.textContent = data.distance + 'km'
        data.uiContainer.classList.add('translate-up')
        getFlights(data.userCoordinates, data.distance)
        if (data.intervalSet) return
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
    window.location.hash = `#details/${e.code}`
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
        data.root.classList.add('display-none')
        data.details.classList.remove('display-none')
    } else {
        window.location.hash = `#flights`
    }
}