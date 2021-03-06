import '../../../../resources/scss/detailsPage.scss'
import airplaneImageSrc from '../../../../resources/assets/img/airplane.png'
import placeholderImageSrc from '../../../../resources/assets/img/placeholder.png'

const DetailsPage = (e) => {
    const { course, altitude, code, manufacturer, model, destination, flightOrigin, airline } = e
        const logo = e.getAirlineLogoUrl() 
    return (
    
        `<div class="details-container">
            <h1 class="details-title">Flight Details</h1>
            <a class="details-btn-container" href="#flights">
                <button class="details-back-btn">Back to Flights Page</button>
            </a>
            <div class=details-body-container>
                <div class="details-airplane-container">
                    <img src="${airplaneImageSrc}" class=${e.getCourse()} alt="airplane" />
                </div> 
                <div class="details-logo-container">
                    <img src="${e.getAirlineLogoUrl()}"  alt="${airline}" id="details-logo-image"  class="display-none"/>
                    <img src="${placeholderImageSrc}"  alt="${airline}" id="details-logo-placeholder"/>
                </div>
                <div class="details-info-container">
                    <div class="details-paragraph"> <span class="paragraph-property"> Airline: </span> <span class="paragraph-value"> ${airline} </span></div>
                    <div class="details-paragraph"> <span class="paragraph-property"> Manufacturer: </span> <span class="paragraph-value"> ${manufacturer} </span></div>
                    <div class="details-paragraph"> <span class="paragraph-property"> Model: </span> <span class="paragraph-value"> ${model} </span ></div>
                    <div class="details-paragraph"> <span class="paragraph-property"> Flight code: </span> <span class="paragraph-value"> ${code} </span></div>
                    <div class="details-paragraph"> <span class="paragraph-property"> Altitude: </span> <span class="paragraph-value"> ${altitude} </span></div>
                    <div class="details-paragraph"> <span class="paragraph-property"> From: </span> <span class="paragraph-value"> ${flightOrigin} </span></div>
                    <div class="details-paragraph"> <span class="paragraph-property"> To: </span> <span class="paragraph-value"> ${destination} </span></div>
                    <div class="details-paragraph"> <span class="paragraph-property"> Heading: </span> <span class="paragraph-value"> ${e.getCourse()} </span></div>
                </div>
            </div>
        </div>`
    )    
}

export default DetailsPage