export const addFlightListItem = (flight, counter, callback) => {
    
    const listContainer = document.querySelector(".list-container")

    const listItem = document.createElement("div")
    const airplaneImgContainer = document.createElement("div")
    const airplaneImage = document.createElement("img")
    const altitudeContainer = document.createElement("p")
    const codeNumberContainer = document.createElement("p")

    const { altitude, code } = flight
    
    listItem.classList.add("list-item")
    
    airplaneImage.src = "../assets/airplane.png"
    airplaneImage.alt = "airplane"
    airplaneImage.classList.add("airplane-image")
    airplaneImage.classList.add(flight.getCourse())
    airplaneImgContainer.classList.add("airplane-container")

    altitudeContainer.textContent = altitude
    altitudeContainer.classList.add("altitude-container")
    codeNumberContainer.textContent = code
    codeNumberContainer.classList.add("code-container")
    
    airplaneImgContainer.append(airplaneImage)
    let arr = [airplaneImgContainer, codeNumberContainer, altitudeContainer].map(e=>listItem.append(e))
    listContainer.append(listItem)

    listItem.addEventListener("click", () => callback(flight), false)

    setTimeout(() => {
        listItem.classList.add("translate-left")
    }, (counter+1)*200)

}