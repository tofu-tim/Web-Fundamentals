function getTruckLocation(customerLocations) {
    let truckLocation = [];

    // Extract x and y arrays from customerLocations
    let xArray = customerLocations.map((location) => location[0]);
    let yArray = customerLocations.map((location) => location[1]);

    // Calculate average of x values
    function xAverage(xArray) {
        let sumX = 0;
        for (let i = 0; i < xArray.length; i++) {
            sumX += xArray[i];
        }
        return sumX / xArray.length;
    }

    // Calculate average of y values
    function yAverage(yArray) {
        let sumY = 0;
        for (let i = 0; i < yArray.length; i++) {
            sumY += yArray[i];
        }
        return sumY / yArray.length;
    }

    // Round average x and y values to the nearest integer
    let truckxLocationRounded = Math.round(xAverage(xArray));
    let truckyLocationRounded = Math.round(yAverage(yArray));

    // Populate the truck location array with the optimal coordinates
    truckLocation.push(truckxLocationRounded, truckyLocationRounded);
    return truckLocation;
}

var test1 = [
    [10, 10],
    [11, 11],
    [12, 12],
    [13, 13],
    [14, 14],
    [15, 15]
];

console.log(getTruckLocation(test1));