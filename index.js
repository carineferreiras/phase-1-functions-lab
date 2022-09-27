// Code your solution in this file!
function distanceFromHqInBlocks(location){
    const hq = 42;

    if(location > hq) {
     return location - hq;}
     else {
        return hq - location;
     }

    }
function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;

}

function distanceTravelledInFeet(start, dest){
    if (start> dest){
    return (start - dest)*264;}
    else{ 
        return (dest - start)*264;}
        //return Math.abs(start-dest)*264;
    }
function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start,destination);
    if (feet <=400){
        return 0;
    }
    else if (feet > 400 && feet < 2000){
        return 0.02 *(feet - 400);
    }
    else if (feet > 2000 && feet <= 2500){
        return 25;

    }
    else if (feet >2500){
        return  'cannot travel that far';
    }
}
    