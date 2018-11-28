// calculates the elevation gain when treadmill is set at an incline.


const treadmillElevation = (distanceM, inclinePercent) => {
  return Math.sin(Math.atan(inclinePercent/100)) * distanceM;
}



console.log(treadmillElevation(1000, 1.5));
console.log(treadmillElevation(5000, 1));
console.log(treadmillElevation(15000, 8));
console.log(treadmillElevation(10000, 1.5));
console.log(treadmillElevation(5000, 0));
console.log(treadmillElevation(5000, -0.5));



// helper function for conversions to metres
/*
const convertToM = (selectedUnit, distance) => {

  distanceUnit = selectedUnit;
  //user selects distance
  switch (distanceUnit) {
    case distanceUnit = "Miles":
      distance = distance * 1609.34;
      return distance;
      break;
    case distanceUnit = "Kilometers":
      distance = distance * 1000;
      return distance;
      break;
    default:
      break;
  }

}

console.log(treadmillElevation("Miles", 4)); */
