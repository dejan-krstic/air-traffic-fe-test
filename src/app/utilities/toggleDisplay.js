import { data } from '../app'

export default () => {
    data.root.classList.add('display-none')
    data.details.classList.remove('display-none')
    document.getElementById("details-logo-image").addEventListener('load', () => {
        document.getElementById("details-logo-image").classList.toggle('display-none')
        document.getElementById("details-logo-placeholder").classList.toggle('display-none')
    })
}