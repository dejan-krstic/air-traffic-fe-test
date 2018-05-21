import '../resources/scss/main.scss';
import router from './app/router/router'
import { startApp, displayFlights, displayDetails } from './app/app';


window.addEventListener('hashchange', () => router( displayFlights, displayDetails ))

startApp();



