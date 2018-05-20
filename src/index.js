import '../resources/scss/main.scss';
import { startApp, displayFlights, displayDetails } from './app/app';
import router from './app/router/router'


window.addEventListener('hashchange', () => router( displayFlights, displayDetails ))

startApp();



