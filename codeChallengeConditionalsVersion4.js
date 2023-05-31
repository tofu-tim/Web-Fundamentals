// MVP
// If I finish my coursework, I reward myself with a treat
const today = new Date();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = weekday[today.getDay()];
const time = today.getHours();

let latte = 'You deserve a latte!';
let hotChocolate = 'Get yourself some hot chocolate babe you earned this.';
let wednesdayIceCream = 'Time to reward yourself with a bowl of strawberry ice cream.';
let notWednesdayIceCream = 'Time to reward yourself with a bowl of vanilla ice cream.';
let sleepTime = 'Get some rest homie <3';
let afternoonOdd = ['hot chocolate', 'tea', 'cake'];
let afternoonEven = ['ice cream', 'cookies', 'candy'];
let randomOdd = Math.floor(Math.random() * afternoonOdd.length);
let randomEven = Math.floor(Math.random() * afternoonEven.length);


function treatTime(currentTime, currentDay) {
    if (currentTime > 6 && currentTime <= 10)
        return latte;
    else if (10 < currentTime && currentTime < 15)
        return hotChocolate;
    else if (15 < currentTime && currentTime <= 18 && currentTime % 2 !== 0)
        return 'Its time for' + afternoonOdd[randomOdd] + '. Enjoy!'
    else if (15 < currentTime && currentTime <= 22 && currentTime % 2 === 0 && currentDay === 'Wednesday')
        return 'Its time for' + afternoonEven[randomEven] + '. Enjoy!';
    else if (15 < currentTime && currentTime <= 22 && currentTime % 2 === 0 && currentDay !== 'Wednesday')
        return notWednesdayIceCream;
    else
        return sleepTime;
}

function homeworkDone(answer) {
    if (answer === 'yes')
        return treatTime(time, day);
    else
        return 'Finish your homework!';
}