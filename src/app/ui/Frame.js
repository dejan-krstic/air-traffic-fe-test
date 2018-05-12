export const createUIFrame = () => {
    const root = document.querySelector("#root")
    root.innerHTML = `<div class="ui-container">
                        <h1 class="title">Air Traffic FE</h1>
                            <div class="btn-container">
                                <button class="allow-btn">Allow Geolocation</button>
                            <div class="slider-container"> 
                            <label>Select wanted range (0-500km):    
                            <input class="slider" type="range" list="tickmarks" />
                                <datalist id="tickmarks">
                                    <option value="0" label="0km">
                                    <option value="50">
                                    <option value="100">
                                    <option value="150">
                                    <option value="200">
                                    <option value="250" label="250km">
                                    <option value="300">
                                    <option value="350">
                                    <option value="400">
                                    <option value="450">
                                    <option value="500" label="500km">
                                </datalist>
                                </label>
                            </div>                     
                            </div>
                            <div class="error"></div>
                            <div class="loader"></div>
                            </div>
                          <div class="header"></div>
                        <div class="list-container"></div>`


        }
        
