function calculateNewLocation(x, y, v, theta, t) {
    const thetaRad = (Math.PI / 180) * (theta + 90);
    const deltaX = v * t * Math.cos(thetaRad); 
    const deltaY = v * t * Math.sin(thetaRad);
    const xNew = x + deltaX;
    const yNew = y + deltaY;
    return { x: xNew, y: yNew, rx: parseFloat(xNew.toFixed(2)), ry: parseFloat(yNew.toFixed(2)) };
}
export default function predictFutureLocation(location,spe,dir){
const currentLocation = location; 
const speed = spe; 
const direction = dir;  
const timeElapsed = 1;

return calculateNewLocation(currentLocation.x, currentLocation.y, speed, direction, timeElapsed);

}