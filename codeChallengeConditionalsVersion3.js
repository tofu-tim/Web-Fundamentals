// MVP
// If I finish my coursework, I reward myself with a treat
const d = new Date();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = weekday[d.getDay()];
const today = new Date();
const time = today.getHours();

function treatTime(currentTime, currentDay) {
    if (currentTime <= 10) {
        return 'You deserve a latte!';
    } else if (10 < currentTime && currentTime < 15) {
        return 'Get yourself some hot chocolate babe you earned this.';
    } else if (
        15 < currentTime &&
        currentTime <= 18 &&
        currentTime % 2 !== 0
    ) {
        return 'Get yourself some hot chocolate babe you earned this.';
    } else if (
        15 < currentTime &&
        currentTime <= 22 &&
        currentTime % 2 === 0 &&
        currentDay === 'Wednesday'
    ) {
        return 'Time to reward yourself with a bowl of strawberry ice cream.';
    } else if (
        15 < currentTime &&
        currentTime <= 22 &&
        currentTime % 2 === 0 &&
        currentDay !== 'Wednesday'
    ) {
        return 'Time to reward yourself with a bowl of vanilla ice cream.';
    } else {
        return 'Get some rest homie <3';
    }
}

function homeworkDone(answer) {
    if (answer === 'yes') {
        return treatTime(time, day);
    } else {
        return 'Finish your homework!';
    }
}