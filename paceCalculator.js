//calculates pace required for race times

const marathonPace = (time) => {
  //let time = userTimeChoice;
  //minutes = minutes + hours * 60;
  speed = 26.2 / time;
  return speed;
}
console.log(marathonPace(360));

const convertHours = (hours) => {
  return hours * 60;
}


// time (in hours mins FROM mins); pace in mins per km
