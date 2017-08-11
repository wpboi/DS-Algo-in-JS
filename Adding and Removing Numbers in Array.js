var numbers = [1,2,3,4,5,6,7,8,9];

numbers.splice(3,1);
console.log(numbers);

numbers.splice(3,0,10);
console.log(numbers);

function comparen(a,b) {
  return a-b;
}
numbers.sort(comparen);
console.log(numbers);