// LUMINENCE CALCULATOR

// Event Listener

document.getElementById("btn").addEventListener("click", showLuminance);


// Event Function

function showLuminance () {
    
    
    let R = document.getElementById("r-in").value;
    let G = document.getElementById("g-in").value;
    let B = document.getElementById("b-in").value;
    let brightness = Math.sqrt(0.299 * (R) ** 2 + 0.587 * (G) ** 2 + 0.114 * (B) ** 2);
    


    document.getElementById("out").innerHTML = brightness;
    document.getElementById("html").style.background = `rgb(${R}, ${G}, ${B})`;
}
