


// copy an Array


const numbers = [23, 83, 61, 89, 12];

console.log(numbers);

// copy the array with adding new number 

const newNumbers = [...numbers, 6000, 90000]
console.log(newNumbers);

// now if i add new numbers in numbers then it will not show in numers

numbers.push(400000);
console.log(numbers);