// Calculates the amount of Tailwind required for a given activity. 92g carbs per 100g tailwind.

const tailwindCalc = (time, weight) => {
  // calculates carbs required and adjusts for tailwind which is not 100% carbs (*1.08 accounts for this)
  let tailwind = ((time/60) * weight) * 1.08;
  tailwind = tailwind.toFixed(1);
  if (time > 60) {
  return "You need " + tailwind + "g of Tailwind for your race. That's " + (tailwind / (time/60)).toFixed(1) + "g per hour.";
} else {
  return "Tailwind works best for races longer than an hour. But you could use " + tailwind + "g.";
}
}

console.log(tailwindCalc(55, 50));
console.log(tailwindCalc(120, 50));
console.log(tailwindCalc(180, 70));
console.log(tailwindCalc(360, 60));
console.log(tailwindCalc(1181, 47.5)); // My West Highland Way!
