const hourInput = document.getElementById('hourDisp');
const minInput = document.getElementById('minDisp');
const secInput = document.getElementById('secDisp');

//let time = (hourInput*60*60) + (minInput*60) + secInput;
let time = (5 * 60 * 60) + (49 * 60) + 10;
function start() { setInterval(decrementTime, 1000); }

function decrementTime() {
    let hr = Math.floor(time / (60 * 60));
    let min = Math.floor(time % (60 * 60) / 60);
    let sec = Math.floor(time % 60);

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hourInput.innerHTML = hr;
    minInput.innerHTML = min;
    secInput.innerHTML = sec;

    time--;
}
