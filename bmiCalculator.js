// simple BMI calculator

const bmiCalculator = (weight, height) => {
  bmi = ((weight / height) / height).toFixed(2);
  if (bmi < 18.5) {
    return 'Your BMI is ' + bmi + '. You are underweight, over time this will have a negative impact on your performance.';
  } else if (bmi > 25) {
    return 'Your BMI is ' + bmi + '. You are overweight';
  } else {
    return 'Your BMI is ' + bmi + '. This is optimal weight!';
  }
}

console.log(bmiCalculator(45, 1.57));
console.log(bmiCalculator(66, 1.57));
console.log(bmiCalculator(54, 1.57));
