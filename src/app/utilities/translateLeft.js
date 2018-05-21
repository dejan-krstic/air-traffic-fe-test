import { data } from '../app'

export default () => {
    data.button.classList.add('translate-left')
    data.sliderContainer.classList.remove('visibility-hidden')
    data.listHeader.classList.remove('visibility-hidden')
    data.sliderContainer.classList.add('translate-left')
    data.listHeader.classList.add('translate-left')
}