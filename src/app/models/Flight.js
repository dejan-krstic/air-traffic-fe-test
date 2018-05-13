class Flight {
    constructor (course, altitude, code, manufacturer, model, destination, flightOrigin, airline){
        this.course = course;
        this.altitude = altitude;
        this.code = code;
        this.manufacturer = manufacturer;
        this.model = model;
        this.destination = destination || 'Unknown destination';
        this.flightOrigin = flightOrigin || 'Unknown start point'; 
        this.airline = airline;
    }
    getCourse(){
        if ( this.course < 45 || this.course >= 315 ) {
            return 'North'
        } 
        if ( this.course < 135 && this.course >= 45 ) {
            return 'East'
        } 
        if ( this.course < 225 && this.course >= 135 ) {
            return 'South'
        }   
        return 'West'      
    }

    getAirlineLogoUrl (){
        if ( this.airline ){
            return `https://logo.clearbit.com/${this.airline.split(' ').join('').concat('.com')}?size=300x300`
        } else {
            return "https://s3.pixers.pics/pixers/700/FO/44/32/61/46/700_FO44326146_fc68331e90610582a306f5ed3dc2169a.jpg"
        }
    }
    
}

export default Flight;
