// MVP
// If I finish my coursework, I reward myself with a treat

var today = new Date();
var time = today.getHours();

function treatTime(currentTime) {
    if (currentTime <= 10) {
        console.log('You deserve a latte!');
    } else if (10 < currentTime && currentTime <= 16) {
        console.log('Get yourself some hot chocolate babe you earned this.');
    } else if (16 < currentTime && currentTime <= 22) {
        console.log('Time to reward yourself with a bowl of ice cream.');
    } else {
        console.log('Get some rest homie <3');
    }
}

function homeworkDone(answer) {
    if (answer === 'yes') {
        treatTime(time);
    } else {
        console.log('Finish your homework!');
    }
}

var test1 = 'yes';
var test2 = 'nope'
homeworkDone(test2);