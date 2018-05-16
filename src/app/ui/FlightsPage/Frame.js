import '../../../../resources/scss/frame.scss'

export const createUIFrame = () => {
    const root = document.querySelector("#root")
     root.innerHTML = `<div class="ui-container">
                        <h1 class="title">Air Traffic FE</h1>
                        
                        <div class="slider-container"> 
                        <div>Select monitoring radius: <p class = "show-radius"></p>
                        </div> 
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
                                    </div>
                                    <div class="btn-container">
                                    <button class="allow-btn">Allow Geolocation</button>
                                    </div> 
                                    <div class="header list-item">
                                    <div class="airplane-container">COURSE</div>
                                    <div class="code-container">FLIGHT CODE</div>
                                    <div class="altitude-container">ALTITUDE</div>
                                </div>
                                </div>
                                <div class="error-container"></div>
                                <div class="loader"></div>
                            <div class="list-container">
                        </div>`
        }
        
