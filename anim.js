//function randomIntFromInterval(min, max) { // min and max included 
//    return Math.floor(Math.random() * (max - min + 1) + min);
//}
let y = 0; 

setInterval(() => {
    document.getElementById("circle").style.fill = "yellow";
    document.getElementById("image").style.top = y + "px";
    document.getElementById("pallette").style.top = y + "px";
    document.getElementById("pallette").style.left = y + "px";
    y++;
}, 10)
    
