import 'babel-polyfill';

import './index.css';
import { startApp, displayFlights, displayDetails } from './app/app';
import router from './app/router/router'


window.addEventListener('hashchange', () => router( displayFlights, displayDetails ))

startApp();



