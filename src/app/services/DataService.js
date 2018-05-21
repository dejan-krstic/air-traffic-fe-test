import jsonp from 'jsonp'


class DataService {

    getFlightsData(url, successHandler, errHandler) {
        jsonp(url, null,
            (err, response) => {
                if (err) {
                    errHandler(err.message)
                } else {
                    successHandler(response.acList)
                }
            }
        )
    }
}
export const dataService = new DataService

