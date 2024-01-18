import predictFutureLocation from "./predictFutureLocation.js";

function detectCollision(arrOfStationaryItems) {
    const collisionDetected = [];

    const itemDimensions = {
        length: 10,  // replace with the actual length
        breadth: 5   // replace with the actual breadth
    };

    for (let i = 0; i < arrOfStationaryItems.length; i++) {
        const newLocationOfCar1 = predictFutureLocation(arrOfStationaryItems[i].coords, arrOfStationaryItems[i].speed, arrOfStationaryItems[i].direction);

        for (let j = i + 1; j < arrOfStationaryItems.length; j++) {
            const newLocationOfCar2 = predictFutureLocation(arrOfStationaryItems[j].coords, arrOfStationaryItems[j].speed, arrOfStationaryItems[j].direction);

            // Check for collision by comparing coordinates
            if (
                Math.abs(newLocationOfCar1.x - newLocationOfCar2.x) < itemDimensions.length &&
                Math.abs(newLocationOfCar1.y - newLocationOfCar2.y) < itemDimensions.breadth
            ) {
                // Collision detected, add the pair of colliding items to the result
                collisionDetected.push({ item1: arrOfStationaryItems[i], item2: arrOfStationaryItems[j] });
            }
        }
    }
    return collisionDetected;
}
export default detectCollision;
