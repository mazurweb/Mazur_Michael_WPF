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
var cleanliness = prompt("Grade the establishments cleanliness with a grade from 0-100 (0 being the worst)");
//Convert cleanliness from string to number and resave it to cleanliness
cleanliness = Number(cleanliness);

//Create Prompt for 2nd Area which is hygiene user enters grade from 0-100
var hygiene = prompt("Grade the establishments personal hygiene of employees with a grade from 0-100 (0 being the worst)");
//Convert hygiene from string to number and resave it to hygiene
hygiene = Number(hygiene);

//Create Prompt for 3rd Area which is Pests user enters grade from 0-100
var pests = prompt("Grade the establishments pest control with a grade from 0-100 (0 being the worst)");
//Convert pests from a string to a number and resave it
pests = Number(pests);

//Create prompt for the 4th area which is maintenance user enters grade from 0-100
var maintenance = prompt("Grade the establishments up-to-date maintenance of equipment with a grade from 0-100");
//Convert maintenance from a string to a number and resave it
maintenance = Number(maintenance);

//Create variable that holds the Grade average of all 4 grades
var gradeAverage = (cleanliness + hygiene + pests + maintenance) / 4;

//Else if statement to determine whether or not the establishment passes the inspection or not.

/*For all grades under 70 and greater than or equal to 0 the establishment will fail the inspection.
Anything greater than or equal to 70 and less than 101 is a passing grade and the establishment will pass the inspection.
 */

if(gradeAverage < 101 && gradeAverage >=70) {
    var grade = true,
        outcome = grade ? "You Passed the Inspection!" : "You Failed the Inspection.";
    console.log(businessName + "'s final grade came out to " + gradeAverage + ". " + outcome);
}
else if(gradeAverage < 70 && gradeAverage >= 0){
    var grade = false,
        outcome = grade ? "You Passed the Inspection!" : "You Failed the Inspection.";
    console.log(businessName + "'s final grade came out to " + gradeAverage + ". " + outcome);
}
else{
    console.log("Somewhere in the grading process a wrong grade number has been inputted and couldn't get an accurate grade for the establishment");
}

//Used random names for the name.  I tried 100, 75, 50, 25 and got businessName's final grade came out to 62.5.  You Failed the Inspection.
//Also tried 100, 100, 100, 100 and got businessName's final grade came out to 100.  You Passed the Inspection!
//Also tried -100, -100, 0, 50 and got Somewhere in the grading process a wrong grade number has been inputted and couldn't get an accurate grade for the establishment.