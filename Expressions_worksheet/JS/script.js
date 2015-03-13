/**
 * Created by Mazur on 3/10/15.
 */

/*
    Michael Mazur
    SDF 201503
    Expressions_worksheet
 */

//Dog Years Problem Calculating Sparky's Dog Age

//Declare Actual Age
var actualAge = 3;

//Multiply Actual Age by 7 years to Calculate Dog Years
var dogAge = actualAge * 7;

//Print out actual and dog years
console.log("Sparky is " + actualAge + " human years old which is " + dogAge + " in dog years.");

//Slice of Pie Part 1 Problem

//Number of slices per pizza
var slices = 8;

//Number of People at the party

var people = 22;

//Number of Pizzas ordered

var pizzas = 9;

//Calculate total # of slices
var totalSlices = slices * pizzas;

//Calculate Slices per person

var slicesPerPerson = totalSlices / people;

//Print # of slices per person
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//Slice of Pie Part II

//Calculates amount of pizza sparky gets
var sparkysPizza = totalSlices - (Math.floor(slicesPerPerson) * people);

//print how much sparky gets
console.log("Sparky got " + sparkysPizza + " slices of pizza.");

//Average Shopping bill

//Array of 5 bills for 5 weeks
var bill = [100, 120, 170, 118, 90];

//Calculate total bill for 5 weeks
var totalBill = bill[0] + bill[1] + bill[2] + bill[3] + bill[4];

//Calculate Average bill
var averageBill = totalBill / 5;

//Print total and weekly average
console.log("You have spent a total of $" + totalBill + " on groceries over 5 weeks. That is an average of $" + averageBill + " per week.");


