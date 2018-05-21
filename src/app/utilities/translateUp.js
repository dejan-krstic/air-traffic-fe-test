import { data } from '../app'

export default () => {
    data.showRadius.textContent = data.distance + 'km'
    data.uiContainer.classList.add('translate-up')
}