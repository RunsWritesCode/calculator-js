
// const addAnimal = (animals) => {
//   animals.push('cat');
//   return animals;
// }

let animals = ['frog', 'dog', 'horse', 'cat', 'dolphin', 'cat'];



const swapCatForDog = (array) => {
  for (i = 0; i < array.length; i++) {
  array.splice((array.indexOf('cat')), 1, 'dog');
  }
  console.log(array);
};

swapCatForDog(animals);

const swapAnythingForAnything = (array, animalOut, animalIn) => {
  for (i = 0; i < array.length; i++) {
    array.splice((array.indexOf(animalOut)), 1, animalIn);
    //console.log(array);
  }
  console.log(array);
}


const anotherSwapAnythingForAnything = (array, animalOut, animalIn) => {
  for (let i = 0; i < array.length; i++) {
    if (animals[i] = animalOut) {
      array.slice(animals[i], 1, animalIn);
    }
    return array;
  }
}

swapAnythingForAnything(animals, 'horse', 'unicorn');
anotherSwapAnythingForAnything(animals, 'horse', 'unicorn');

// function getAllIndexes(arr, val) {
//   var indexes = [] i;
//   for(i = 0; i < arr.length; i++)
//       if (arr[i] === val)
//           indexes.push(i);
//   return indexes;
// }

// const getCatIndices = (array, value) => {
//   let indicies = [];
//   for (i = 0; i < array.length; i++)
//     if (array[i] === value)
//       indicies.push(i);
//   return indicies
//   console.log(indicies);
// }

// getCatIndices(animals, 'cat');
// console.log(indicies);





function getAllIndexes(arr, val) {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
      if (arr[i] === val)
          indexes.push(i);
  return indexes;
}
