import jsonp from 'jsonp'
import axios from 'axios'


class DataService {

    async getFlightsData(url, successHandler, errHandler) {
        await jsonp(url, null,
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
export const dataService = new DataService;

