function init() {
    const drankbtn = document.getElementById("drankbtn")
    const etenbtn = document.getElementById("etenbtn")
    const teabtn = document.getElementById("teabtn")
    const drankmenu = document.getElementsByClassName("menu-drank")
    const etenmenu = document.getElementsByClassName("menu-eten")
    const teamenu = document.getElementsByClassName("menu-tea")
    drankbtn.onclick = function() {
        event.preventDefault()
        Array.from(drankmenu).forEach(function(element) {
            element.style.display = "block"
        })
        Array.from(etenmenu).forEach(function(element) {
            element.style.display = "none"
        })
        Array.from(teamenu).forEach(function(element) {
            element.style.display = "none"
        })
        drankbtn.style = "-webkit-text-stroke: 1.5px #BA3D20"
        etenbtn.style = "-webkit-text-stroke: 0px #BA3D20"
        teabtn.style = "-webkit-text-stroke: 0px #BA3D20"
    }
    etenbtn.onclick = function() {
        event.preventDefault()
        Array.from(drankmenu).forEach(function(element) {
            element.style.display = "none"
        })
        Array.from(etenmenu).forEach(function(element) {
            element.style.display = "block"
        })
        Array.from(teamenu).forEach(function(element) {
            element.style.display = "none"
        })
        drankbtn.style = "-webkit-text-stroke: 0px #BA3D20"
        etenbtn.style = "-webkit-text-stroke: 1.5px #BA3D20"
        teabtn.style = "-webkit-text-stroke: 0px #BA3D20"
    }
    teabtn.onclick = function() {
        event.preventDefault()
        Array.from(drankmenu).forEach(function(element) {
            element.style.display = "none"
        })
        Array.from(etenmenu).forEach(function(element) {
            element.style.display = "none"
        })
        Array.from(teamenu).forEach(function(element) {
            element.style.display = "block"
        })
        drankbtn.style = "-webkit-text-stroke: 0px #BA3D20"
        etenbtn.style = "-webkit-text-stroke: 0px #BA3D20"
        teabtn.style = "-webkit-text-stroke: 1.5px #BA3D20"
    }
}

window.onload = init

const style="-webkit-text-stroke: 1.5px #BA3D20"