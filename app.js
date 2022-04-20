document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const date = new Date();
        let seconds = date.getSeconds();
        let minutes = date.getMinutes();
        let hours = date.getHours();
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (hours < 10) {
            hours = "0" + hours
        }
        const clock = hours + ":" + minutes + ":" + seconds
        const hexCode = "#" + hours + minutes + seconds
        document.getElementById("clock").innerHTML = clock;
        document.getElementById("hex-code").innerHTML = "Hex Code: " + hexCode;
        document.querySelector("body").style.background = hexCode;
    }, 1000)
})