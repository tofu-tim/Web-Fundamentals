/* the goal of this project is to find the optimum location for a taco truck.
Each customer exists on a cartesian plane, with an 'x' and a 'y' coordinate.

To find the optimal location, I need to iterate through the array, taking the average 'x' and average 'y'
location fo each customer, rounding to the nearest integer*/

var customerLocations = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
]

truckLocation = []

xArray = (customerLocations)[0];
yArray = (customerLocations)[1];

function xAverage(xArray) {
    let sumX = 0;
    for (let i = 0; i < xArray.length; i++) {
        sumX += xArray[i];
    }
    return sumX / xArray.length;
}

function yAverage(yArray) {
    let sumY = 0;
    for (let i = 0; i < xArray.length; i++) {
        sumY += yArray[i];
    }
    return sumY / yArray.length;
}

let truckxLocationRounded = Math.round(xAverage(xArray));
let truckyLocationRounded = Math.round(yAverage(yArray));


truckLocation.push(truckxLocationRounded, truckyLocationRounded);
console.log(truckLocation);