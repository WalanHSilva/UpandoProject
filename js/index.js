
function teamClick () {
    document.querySelectorAll(".container__team__link").forEach(element => element.addEventListener("click", () => {
        const ref = element.getAttribute("data-ref")
    
        document.querySelectorAll(".team__figure").forEach(teamFigure => teamFigure.classList.remove("active"))
        element.querySelector(".team__figure").classList.add("active")

        document.querySelectorAll(".container__team__description").forEach(teamDescription => teamDescription.classList.remove("show"))
        document.querySelector(`#${ref}`).classList.add("show")
    }))
}


window.onload = () => {
    teamClick()
}