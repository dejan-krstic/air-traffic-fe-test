import { data } from '../app'

export default () => {
    data.button = document.querySelector('button')
    data.slider = document.querySelector('input')
    data.showRadius = document.querySelector('.show-radius')
    data.listContainer = document.querySelector('.list-container')
    data.sliderContainer = document.querySelector('.slider-container')
    data.listHeader = document.querySelector('.header')
    data.uiContainer = document.querySelector('.ui-container')
}