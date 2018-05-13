const displayError = error => {
    const errorContainer = document.querySelector('.error-container');

    if (error.code === 1) {
        errorContainer.textContent = "We are unable to display results. Please enable geolocation in your browser's settings.";
    } else if (error.code === 2 ) {
        errorContainer.textContent = 'Unfortunately, geolocation in not available.';
    } else if (error.code === 3) {
        errorContainer.textContent = 'Geolocation search timed out. Please refresh your page.';
    } else {
        errorContainer.textContent = 'Oops, something has went wrong. Please refresh your page.';
    }
};

export default displayError;