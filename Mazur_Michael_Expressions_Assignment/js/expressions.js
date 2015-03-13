/**
 * Created by Mazur on 3/12/15.
 */

//Michael Mazur

//SDI 032015

//Expressions Assignment

// 3-12-15

//Calculating the Perimeter of a Triangle

//Alert the user that calculations for the perimeter for a triangle is about to begin
alert("Hello!  Welcome to the Triangle Perimeter Calculator App!");

//Prompt User for the First Side of the Triangle

var side1 = prompt("What is the length of the first side?(In Inches)");

//Prompt User for the Second Side of the Triangle

var side2 = prompt("What is the length of the second side?(In Inches)");

//Prompt user for the Third Side of the Triangle

var side3 = prompt("What is the length of the third side?(Inches)");

//Variable for calculations of the perimeter of the triangle

var perimeter = Number(side1) + Number(side2) + Number(side3);

//Total of sides 1 and 2 using perimeter
var totalSides1 = perimeter - side3;
//Total of sides 2 and 3
var totalSides2 = perimeter - side1;
//Total of sides 1 and 3
var totalSides3 = perimeter - side2;

//Print the final result of the perimeter!
console.log("The Perimeter of your Triangle is " + perimeter + " Inches!");
