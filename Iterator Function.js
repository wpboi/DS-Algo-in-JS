function plusone(num) { //adding 1 to every digit
  console.log(num+1);
}

function isEven(num) { //checking if even
  return num%2 === 0;
}

var arr = [1,3,3,7,5,9,7]; // array

arr.forEach(plusone); // forEach

var flag = arr.some(isEven); // forSome

if(flag)
  console.log(" Some are Even ");
else
  console.log(" Nope ");
