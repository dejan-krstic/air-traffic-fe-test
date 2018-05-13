import UserCoordinates from "../models/UserCoordinates"

class GeolocationService {

    getUserCoordinates(responseHandler, errorHandler, geolocationDisabledHandler) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                response => responseHandler(new UserCoordinates(response.coords.latitude, response.coords.longitude)),
                error => errorHandler(error)
            )
            return;
        }
        geolocationDisabledHandler(disabled);

    }
}

export const geolocationService = new GeolocationService(); 