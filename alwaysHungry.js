function alwaysHungry(array) {
    var hungry = true;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === 'food') {
            console.log('yummy');
            hungry = false;
        }
    }
    if (hungry) {
        console.log("I'm hungry.")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"