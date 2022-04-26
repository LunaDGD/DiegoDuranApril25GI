//-----------------------VERY-EASY-----------------------------------

/*
Write a function named min that takes two arguments and returns their minimum.

function minimum(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}
console.log(minimum(20, 10));
 */

//--------------------------EASY-----------------------------------
/*Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output
should look like "Hello, my name is John Doe and I'm 19 years old."
const student1 = ["Diego", "Duran", "21"];
const student2 = ["John", "Doe", "22"];
const student3 = ["Jane", "Doe", "23"];

console.log(
  `Hello, my name is ${student2[0]} ${student2[1]} and I'm ${student2[2]} years old `
);
*/

//--------------------------MEDIUM-----------------------------------
/*
MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
and its corresponding month. For example: if the user enters the number 3, then it should return the
month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


const userInput = prompt("Enter a Month Number ex: 1,2,3...");
if (userInput == 1) {
  console.log("January");
} else if (userInput == 2) {
  console.log("February");
} else if (userInput == 3) {
  console.log("March");
} else if (userInput == 4) {
  console.log("April");
} else if (userInput == 5) {
  console.log("May");
} else if (userInput == 6) {
  console.log("June");
} else if (userInput == 7) {
  console.log("July");
} else if (userInput == 8) {
  console.log("August");
} else if (userInput == 9) {
  console.log("September");
} else if (userInput == 10) {
  console.log("October");
} else if (userInput == 11) {
  console.log("November");
} else if (userInput == 12) {
  console.log("December");
} else {
  alert("Error, enter a number between 1-12 ");
}
 */

//--------------------------HARD-----------------------------------

// HARD
/*Given the information below for Tom and Jerry.
  ● Tom - height:  9in mass: 8 g
  ● Jerry - height: 10in mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
  BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
*/
const tom = {
  height: 9,
  mass: 10,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const jerry = {
  height: 10,
  mass: 45,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const tomBMI = tom.calcBMI();
const jerryBMI = jerry.calcBMI();

const trueOrFalse = tomBMI > jerryBMI ? true : false;

console.log(tomBMI);
console.log(jerryBMI);
console.log(typeof trueOrFalse);

if (tomBMI > jerryBMI) {
  console.log(`is toms bmi higher than jerry? ${trueOrFalse}`);
} else {
  console.log(`is jerrys bmi higher than tom? ${trueOrFalse}`);
}
