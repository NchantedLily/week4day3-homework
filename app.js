// #3
var myArray = [[" hello friend", 5], ["sleepy","10"]];

// #4

function multiplyAll(arr) {
 let product = 1;
    for (let i = 0; i < arr.length; i++){
for (let j = 0; j < arr[i].length;j++) {
    product = product * arr[i][j];
} console.log(arr.length);
 }
 return product;
}
 
 multiplyAll([[5, 10], [5, 1], [3, 9]]);


 // #5

 function testGreaterThan(val) {
    if (val <= 5) {  // Change this line
      return "5 and under";
    }
  if (val > 50)
    return "That's a big number";
    console.log(testGreaterThan);
  }
  
  testGreaterThan(51);

  // #6

  function testNotEqual(val) {
    if (val !=36) { 
      return "Not Equal";
    }
    return "Equal";
    console.log(testNotEqual);
  }
  
  testNotEqual(10);
  
  
  
  function testEqual(val) {
    if (val =36) { 
      return "Equal";
    }
    return "not Equal";
    console.log(testNotEqual);
  }
  
  testEqual(36);
