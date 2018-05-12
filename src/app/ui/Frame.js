export const createUIFrame = () => {
    const root = document.querySelector("#root")
    root.innerHTML = `<div class="ui-container">
                        <h1 class="title">Air Traffic FE</h1>
                            <div class="btn-container">
                                <button class="allow-btn">Allow Geolocation</button>
                            <div class="slider-container"> 
                            <label>Select wanted range (0-250km):    
                            <input id="slider" type="range" list="tickmarks" value="0"/>
                                <datalist id="tickmarks">
                                    <option value="0" label="0km">
                                    <option value="25">
                                    <option value="50">
                                    <option value="75">
                                    <option value="100">
                                    <option value="125" label="125km">
                                    <option value="150">
                                    <option value="175">
                                    <option value="200">
                                    <option value="225">
                                    <option value="250" label="250km">
                                </datalist>
                                </label>
                            </div>                     
                            </div>
                            <div class="errorContainer"></div>
                            <div class="loader"></div>
                            </div>
                          <div class="header"></div>
                        <div class="list-container"></div>`


        }
        
