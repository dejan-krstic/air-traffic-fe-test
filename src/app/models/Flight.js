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
        if ( this.course < 45 || this.course >= 315 ) return 'NORTH'
        if ( this.course < 135 || this.course >= 45 ) return 'EAST'
        if ( this.course < 225 || this.course >= 135 ) return 'SOUTH'
        if ( this.course < 315 || this.course >= 225 ) return 'WEST'        
    }
    
}

export default Flight;
