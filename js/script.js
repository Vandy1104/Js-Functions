console.log('Js-Functions');

//Function is a small program
//enables easy debugging
//enables team work with modular programming techniques

function displayIno() {
  document.getElementById('result').innerHTML = 'Learning JS Function </br>';
}

displayIno();

//Passing parameters in function
//name is a dummy variable or dummy parameter
function greetMe(name) {
  document.getElementById('result').innerHTML += 'Hi ' + name + ', Good Afternoon </br>';
}

greetMe('Vandy'); // actual arguement or parameter
greetMe('Yoobee');
greetMe('New Zealand');

//returning value

function totalExpense(f, t, b) {
  var gt = f + t + b;
  return gt; // returns the value to the location, where the function is called.
}

var food = 100;
var transport = 125;
var bills = 255;
var grandTotal = totalExpense(food, transport, bills);//paramters shoul corispond in order and type of data
document.getElementById('result').innerHTML += 'the total expense is ' + grandTotal;
document.getElementById('result').innerHTML += '</br> the average is' + (totalExpense(50,35,40)/3).toFixed(2);
// variable total has global scope, able to use inside and outside the function
var total = 345;
function averageExpenseTotal(total){
 var myAverage = (total/3);
 return myAverage;
}
document.getElementById('result').innerHTML += '</br> the average of the new function is ' + averageExpenseTotal(total);


function averageExpense(total) {
  var average = (total/3);
  return myAverage;
}

document.getElementById('result').innerHTML += 'The average from the new function is ' + averageExpense(total);

var myAverage = 200;//global
console.log(myAverage);
//this variable below (myAverage) is able to run seperately from the other variables with the same name because is it // NOTE: not global. Since it is stored inside a seperate function, it is considered local
function anotherFuction(){
 var myAverage = 0;
 console.log(myAverage);
}
anotherFuction();

//Time table 5

document.getElementById('tables').addEventListener('click',function(){
  for(var i = 0; i<=20; i++) {
    var mult = 5*i;
    document.getElementById('multiplication').innerHTML += '<br> 5 x ' + i + ' = ' + mult;
  }
})


// function greetMe(name[2]) {
//   document.getElementById('result').innerHTML += 'Hi ' + name + ', Good Afternoon </br>';
// }
//
// greetMe('Vandy','patrick'); // actual arguement or parameter






//James array with function
// var food = [21,45,69];
// var transport = [25,58,79];
// var bills = [48,28,49];

// for (var i = 0; i < food.length; i++) {
//   var grandTotal = totalExpense(food[i], transport[i], bills[i]);
//   document.getElementById('result').innerHTML += 'The Total expense is ' + grandTotal;
// }
