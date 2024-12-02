// Scenario 1
/**
 * Eligibility Check
Write a condition to check if a student is eligible for a scholarship. The criteria are:
- The student’s grade is A or B.
- The student’s attendance is above 75%.
Use a ternary operator to assign "Eligible" or "Not Eligible" to a variable.
 */
var student = {
    'grade' : 'B',
    'attendance' : 80
}
var eligibility = ( (student['grade'] == 'A' | student['grade'] == 'B') && student['attendance'] > 75) ? "Eligible for Scholarship" : "Not Eligible for Scholarship";
console.log(eligibility);


// Scenario 2
/**
 * Age Group Classification
Classify a person based on their age:
- If the age is less than 13, they are a “Child”.
- If the age is between 13 and 19 (inclusive), they are a “Teenager”.
- Otherwise, they are an “Adult”.
Use nested ternary operators to determine the classification.
 */
var age = 15;
var classification = (age < 13) ? "Child" : ((age >= 13 && age <= 19) ? "Teenager" : "Adult");
console.log(classification);


// Scenario 3
/**
 * Login Status
Check the login status of a user. A user is considered logged in if:
- isLoggedIn is true.
- Their session is active (sessionActive is true).
Use a ternary operator to log "Welcome Back" if the user is logged in and "Please Log In" otherwise.
 */
var userStatus = {
    'isLoggedIn' : true,
    'sessionActive' : false
}
var loginStatus = ( (userStatus['isLoggedIn'] == true && userStatus['sessionActive'] == true) ? "Welcome Back" : "Please Log In" );
console.log(loginStatus);


// Scenario 4 
/**
 * Grade Evaluation
Assign a letter grade based on a student’s score:
- Scores 90 and above: "A".
- Scores between 80 and 89: "B".
- Scores between 70 and 79: "C".
- Scores below 70: "Fail".
Use nested ternary operators to determine the grade.
 */
var score = 85;
var grade = ( (score >= 90) ? "A" : (score >= 80 && score <= 89) ? "B" : (score >= 70 && score <= 79) ? "C" : "Fail" );
console.log(`The student grade is ${grade}`);


// Scenario 5
/**
 * . Product Discount Validation
Determine the discount for a product based on the following criteria:
- If the product price is greater than $100, the discount is 20%.
- Otherwise, the discount is 10%.
Use a ternary operator to set the discount percentage.
 */
var priceInDollars = 100;
var discountPercentage = (priceInDollars > 100 ? 20 : 10);
console.log(`The discount on the product is ${discountPercentage}%`);
