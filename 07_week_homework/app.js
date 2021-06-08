var hourElement = document.getElementById("hour");
var minuteElement = document.getElementById("minutes");
var secondElement = document.getElementById("seconds");


var minutesCount = 0;
var secondsCount = 00;
var hoursCount = 0;

function updateMinutes() {
    if (secondsCount === 60) {
        secondsCount = 0;
        minutesCount++;

        minuteElement.innerText =
            minutesCount < 10 ? "0" + minutesCount : minutesCount;
    }


}

function updateHours() {
    if (minutesCount === 60) {
        minutesCount = 0;
        hoursCount++;

        hourElement.innerText =
            hoursCount < 10 ? "0" + hoursCount : hoursCount;
    }

}

function updateDomTimer() {

    if (secondsCount < 10) {
        secondElement.innerText = "0" + secondsCount;
    } else {
        secondElement.innerText = secondsCount;
    }
}

function updateTime() {
    secondsCount = secondsCount + 1;

    updateHours();
    updateMinutes();
    updateDomTimer();
}
//Adaugam functionalitate la butonul de start
let btnCount = 0;
var intervalId;
const btnStart = document.getElementById('start-btn');
btnStart.addEventListener('click', function() {
    if (btnCount < 1) {

        intervalId = setInterval(updateTime, 1000);
    }
    btnCount++;
})

//Adaugam functionalitate la butonul de stop

const btnStop = document.getElementById('stop-btn');
btnStop.addEventListener('click', function() {
    clearInterval(intervalId);
    btnCount = 0;

})

//Adaugam functionalitate la butonul de reset

const btnReset = document.getElementById('reset-btn');
btnReset.addEventListener('click', function() {
        secondsCount = 0;
        document.getElementById("hour").innerHTML = '00';
        document.getElementById("minutes").innerHTML = '00';
        document.getElementById("seconds").innerHTML = '00';


    })
    //Adaugam functionalitate la butonul de save

const btnSave = document.getElementById('save-btn');
btnSave.addEventListener('click', function() {
    const container = document.querySelector('container');



    container.innerHTML = 'span';

})