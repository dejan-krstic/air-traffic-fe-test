const router = ( flights, details ) => {
    if (window.location.hash.includes('flights')) {
        flights()
    } else if ( window.location.hash.includes('details') ){
        const code = location.hash.split('/')[1]
        details(code)
    }
}

export default router; 