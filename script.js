console.log("-----------------------------")
console.log("Question 1")
console.log("-----------------------------")

var city = prompt("Enter you city: ");

if (city.toLowerCase == "karachi"){
    alert("Welcome to the city of lights");
}else{
    alert("Nice")
}


console.log("-----------------------------")
console.log("Question 2")
console.log("-----------------------------")

var gender = prompt("Enter your gender: ");

if (gender.toLowerCase() == "male"){
    alert("Good Morning, Sir!")
}else{
    alert("Good Morning, Ma'am!")
}

console.log("-----------------------------")
console.log("Question 3")
console.log("-----------------------------")

var trafficLightColor = prompt("Enter any color of the traffic light: ")

if (trafficLightColor.toLowerCase() == "red"){
    alert("Must Stop!");
}else if(trafficLightColor.toLowerCase() == "yellow"){
    alert("Be Ready to Move!");
}else if(trafficLightColor.toLowerCase() == "green"){
    alert("Move Now!");
}else{
    alert("Please enter a valid traffic light color");
}

console.log("-----------------------------")
console.log("Question 4")
console.log("-----------------------------")

var carFuel = Number(prompt("Enter the number of litres of fuel left in the car tank: "));

if (carFuel <= 0.25){
    alert("Please Refuel the car");
}else{
    alert("Keep driving, please keep checking your fuel.");
}


console.log("-----------------------------")
console.log("Question 5")
console.log("-----------------------------")


var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
}
if (c === 13) {
    alert("Condition 2 is true");
}
if (++c < 14) {
    alert("Condition 3 is true");
}
if (c === 14) {
    alert("Condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("Car is smaller than cat");
}

console.log("-----------------------------")
console.log("Question 6")
console.log("-----------------------------")


var subject1 = prompt("Enter 1st subject name: ");
var subject2 = prompt("Enter 2nd subject name: ");
var subject3 = prompt("Enter 3rd subject name: ");

var obtMarks1 = Number(prompt("Enter obtained marks of ", subject1, ": "));
var obtMarks2 = Number(prompt("Enter obtained marks of ", subject2, ": "));
var obtMarks3 = Number(prompt("Enter obtained marks of ", subject3, ": "));

var totalMarks1 = Number(prompt("Enter total marks of ", subject1, ": "));
var totalMarks2 = Number(prompt("Enter total marks of ", subject2, ": "));
var totalMarks3 = Number(prompt("Enter total marks of ", subject3, ": "));

var percentage1 =  (obtMarks1 / totalMarks1) * 100
var percentage2 =  (obtMarks1 / totalMarks2) * 100
var percentage3 =  (obtMarks1 / totalMarks3) * 100

var grade1;
var grade2;
var grade2;
var remarks1;
var remarks2;
var remarks3;

if(percentage1 >= 80) {
    grade1 = "A-one";
    remarks1 = "Excellent"
}else if(percentage1 >= 70){
    grade1 = "A";
    remarks1 = "Good"
}else if(percentage1 >= 60){
    grade1 = "B";
    remarks1 = "You need to improve"
}else{
    grade1 = "F"
    remarks1 = "Sorry"
}


if(percentage2 >= 80) {
    grade2 = "A-one";
    remarks2 = "Excellent"
}else if(percentage2 >= 70){
    grade2 = "A";
    remarks2 = "Good"
}else if(percentage2 >= 60){
    grade2 = "B";
    remarks2 = "You need to improve"
}else{
    grade2 = "F"
    remarks2 = "Sorry"
}


if(percentage3 >= 80) {
    grade3 = "A-one";
    remarks3 = "Excellent"
}else if(percentage3 >= 70){
    grade3 = "A";
    remarks3 = "Good"
}else if(percentage3 >= 60){
    grade3 = "B";
    remarks3 = "You need to improve"
}else{ 
    grade3 = "F"
    remarks3 = "Sorry"
}

var totalObtMarks = obtMarks1 + obtMarks2 + obtMarks3;
var totalTotalMarks = totalMarks1 + totalMarks2 + totalMarks3;
var totalPercentage = (totalObtMarks / totalTotalMarks) * 100;
var totalGrade;
var totalRemarks;

if(totalPercentage >= 80){
    totalGrade = "A-one";
    totalRemarks = "Excellent";
}else if(totalPercentage >= 70){
    totalGrade = "A";
    totalRemarks = "Good"
}else if(totalPercentage >= 60){
    totalGrade = "B";
    totalRemarks = "You need to improve";
}else{
    totalGrade = "F";
    totalRemarks = "Sorry";
}


console.log("Subject | Obtained Marks | Total Marks | Percentage | Grade | Remarks");
console.log(subject1, "      ", obtMarks1, "      ", totalMarks1, "      ", percentage1.toFixed(2),"%", "      ", grade1, "      ", remarks1);
console.log(subject2, "      ", obtMarks2, "      ", totalMarks2, "      ", percentage2.toFixed(2),"%", "      ", grade2, "      ", remarks2);
console.log(subject3, "      ", obtMarks3, "      ", totalMarks3, "      ", percentage3.toFixed(2),"%", "      ", grade3, "      ", remarks3);

console.log("-------------------")

console.log("Marks Obtained: ", totalObtMarks);
console.log("Total Marks: ", totalTotalMarks);
console.log("Percentage: ", totalPercentage.toFixed(2));
console.log("Grade: ", totalGrade);
console.log("Remarks: ", totalRemarks);

console.log("-------------------")

console.log("-----------------------------")
console.log("Question 7")
console.log("-----------------------------")

var secretNum = 6;

var guess = Number(prompt("Guess a number between 1 and 10"));

if(guess === secretNum){
    alert("Bingo");
}else if(guess + 1 == secretNum){
    alert("You're close, Try again");
}else if(guess - 1 == secretNum){
    alert("You're close, Try again");
}else{
    alert("Try again");
}


console.log("-----------------------------")
console.log("Question 8")
console.log("-----------------------------")

var checkingNum = Number(prompt("Enter a number to check if it's divisble by 3 or not: "));
var checkNum = checkingNum % 3;

if(checkNum == 0){
    alert("The number is divisible by 3");
}else{
    alert("The number is not divisible by 3");
}

console.log("-----------------------------")
console.log("Question 9")
console.log("-----------------------------")

var checkEvenOdd = Number(prompt("Enter a number to check whether its Even or Odd: "));
var checkEvenOddNum = checkEvenOdd % 2;
if(checkEvenOddNum == 0){
    alert("The number is even")
}else{
    alert("The number is odd");
}

console.log("-----------------------------")
console.log("Question 10")
console.log("-----------------------------")

var temp = Number(prompt("Enter temperature to know whether it's hot outside or not (C°): "))

if(temp > 40){
    alert("It's too hot outside");
}else if(temp > 30){
    alert("The weather today is normal");
}else if(temp >= 20){
    alert("Today's weather is cool");
}else if(tempt < 20){
    alert("OMG! Today's weather is so Cool");
}


console.log("-----------------------------")
console.log("Question 11")
console.log("-----------------------------")

var num1 = Number(prompt("Enter first number: "));
var num2 = Number(prompt("Enter second number: "));
var operator = prompt("Enter operator (+, -, *, /, %): ");

if(operator == "+"){
    console.log(num1 + num2);
}else if(operator == "-"){
    console.log(num1 - num2);
}else if(operator == "*"){
    console.log(num1 * num2);
}else if(operator == "/"){
    console.log(num1 / num2);
}else if(operator == "%"){
    console.log(num1 % num2);
}else{
    console.log("Invalid operator");
}