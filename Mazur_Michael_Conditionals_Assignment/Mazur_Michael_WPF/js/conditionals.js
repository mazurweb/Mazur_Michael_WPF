/**
 * Created by mmazur on 3/19/2015.
 */
/*
Michael Mazur
032015 SDI
Conditionals Assignment
 */

//Health Inspection Grader

//This Calculator will prompt for 4 areas of healthy practices in restaurants and will consider if they pass or fail

//Prompt User for name of food establishment
var businessName = prompt("What is the name of the establishment you are grading today?");

//Create Prompt for 1st Area which is cleanliness user enters grade from 0-100
var cleanliness = prompt("Grade the establishments cleanliness from 0-100 (0 being the worst)");
//Convert cleanliness from string to number and resave it to cleanliness
cleanliness = Number(cleanliness);

//Create Prompt for 2nd Area which is hygiene user enters grade from 0-100
var hygiene = prompt("Grade the establishments personal hygiene of employees from 0-100 (0 being the worst)");
//Convert hygiene from string to number and resave it to hygiene
hygiene = Number(hygiene);

//Create Prompt for 3rd Area which is Pests user enters grade from 0-100
var pests = prompt("Grade the establishments pest control from 0-100 (0 being the worst)");
//Convert pests from a string to a number and resave it
pests = Number(pests);