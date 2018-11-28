// a calculator to give a rough estimate of how elevation, temperature and wind affect race times.

// input - temp, elevation, distance, time
// output - race time if conditions perfect



const courseEqualiser = (time, ascent) => {
  timeSecs = time * 60;
  time = timeSecs + (ascent * 4);
  return Math.floor(time/60);
}


console.log(courseEqualiser(40, 0));
console.log(courseEqualiser(40, 10));
console.log(courseEqualiser(40, 1000));
