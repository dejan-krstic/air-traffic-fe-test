class Flight {
    constructor (course, altitude, code, manufacturer, model, destination, flightOrigin){
        this.course = course;
        this.altitude = altitude;
        this.code = code;
        this.manufacturer = manufacturer;
        this.model = model;
        this.destination = destination;
        this.flightOrigin = flightOrigin;
    }
    getCourse(){
        if ( this.course < 45 || this.course >= 315 ) {
            return 'north'
        } 
        if ( this.course < 135 && this.course >= 45 ) {
            return 'east'
        } 
        if ( this.course < 225 && this.course >= 135 ) {
            return 'south'
        }   
        return 'west'      
    }
    
}

export default Flight;
