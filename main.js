console.log("Script initiated");

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Create a bad timer app. The user can input the time they want the timer to go for.
// After the time is up make an alert. Sometimes it does not make the alert

/*
* 1. Forstå problemet
* 2. Lav mockup
* 3. Lav html
* 4. Lav en plan ift. implementation
* 5. Igang med at kode
* */

// 1. Click listener op på knappen
const button = document.querySelector('button');
const input = document.querySelector('input');
console.log(input);
console.log(button);
button.addEventListener('click', function() {
    // 2. Hive fat i tiden brugeren har skrevet
    const seconds = parseInt(input.value);
    //console.log(seconds);
    const milliseconds = seconds * 1000;
    //console.log(milliseconds);
    // 3. Vente det tid som brugeren har skrevet
    setTimeout(function(){
        // 4. Alert
        const randomNumber = randomIntFromInterval(1, 1000);
        console.log(randomNumber);
        if(randomNumber !== 1) {
            alert("asd");
        }
    }, milliseconds);
});






