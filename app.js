
// Chapter 6-9
// Question 1
// let s=10;
// document.write('Result: <br/>');
// document.write(`The value of a is: ${s}<br/> `);
// document.write('--------------------------------- <br/><br/>');
// document.write(`The value of a++ is: ${++s}<br/>`);
// document.write(`Now the value of a is ${s} <br/><br/>`);
// document.write(`The value of a++ is ${s++}<br/>`);
// document.write(`Now the value of a is ${s}<br/><br/>`);
// document.write(`The value of --a is ${--s}<br/>`);
// document.write(`Now the value of --a is ${s}<br/><br/>`);
// document.write(`The value of a-- is ${s--}<br/>`);
// document.write(`Now the value of a-- is ${s}<br/>`);

// Question 2
// let a=2, b=1;
// let result= --a - --b + ++b + b--;
// --a   a is decremented
//--a - --b   first both a and b is decremented then the subtraction is performed
// --a- --b + ++b   b is decremented and incremented the the sum will subtract from the decremented a
// document.write(result);
// document.write(a);
// document.write(b);

// Question 3
// let userName="User Name";
// document.write(`Hello ${userName} welcome to our website <br/>`);

// Question 5
// let t=11;
//  document.write(`Table for ${t}<br/>`);
// for (let i=1; i<=10; i++) {
//     let result=t*i;
//     document.write(`${t} x ${i} = ${result}<br/>`);
// }

// Question 6
// let subj1="English";
// let subj2="Mathematics";
// let subj3="Science";
// let totlMarks=100;
// let subj1Marks=54;
// let subj2Marks=54;
// let subj3Marks=48;
// let perSubj1=(subj1Marks/totlMarks)*100;
// let perSubj2=(subj2Marks/totlMarks)*100;
// let perSubj3=(subj3Marks/totlMarks)*100;

// document.write(`<h3>Subject  Total Marks      Obtained Marks      Percentage</h3> <br/>`);
// document.write(`${subj1}     ${totlMarks}     ${subj1Marks}     ${perSubj1}% <br/>`);
// document.write(`${subj2}     ${totlMarks}     ${subj2Marks}     ${perSubj2}% <br/>`);
// document.write(`${subj3}     ${totlMarks}     ${subj3Marks}     ${perSubj3}% <br/>`);
// document.write(`<b>Total    ${totlMarks*3}   ${subj1Marks+subj2Marks+subj3Marks} ${(perSubj1+perSubj2+perSubj3)/3}% </b>`);



//Chapter 9-11
// Q1
// let city = prompt('Enter city name');
// if (city=="Karachi"){
//     document.write('<h1>Welcome to city of lights</h1>');
// }

// Q2
// let gender=prompt('Enter your Gender:');
// if(gender=="male"){
//     document.write("<h1>Good Morning Sir</h1>");
// }
// if(gender=="female"){
//     document.write("<h1>Good Morning, Ma'am</h1>");
// }

// Q3
// let color=prompt("Enter a color of road traffic signal:");
// if(color=="red"){
//     document.write("<h1 style='color:red;'>Must Stop</h1>");
// }
// if(color=="green"){
//     document.write("<h1 style='color:green;'>Move now</h1>");
// }
// if(color=="yellow"){
//     document.write("<h1 style='color:yellow;'>Ready to move</h1>");
// }

// Q4
// let remainingFule=prompt("Remaining fule in your car in litres?")
// if(Number(remainingFule)<0.25){
//     document.write("<h1>Please refill the fule in your car</h1>");
// }

// Q5
// a. True Displayed
// b. False  do'nt display
// c. 1 condition 1 is false 
//    2 condition 2 is true
//    3 condition 3 is false
//    4 condition 1 is true
// d. The give condition is true
// e. in e always true will display
// f. always displayed because we don't give any condition


// var a=4;  //a
// if(++a===5){
//     alert("given condition for a is true");
// }
// var b= 82  //b
// if (b++===83){
//     alert("given condition for b is true");
// }
// var c=12;    //c
// if (c++===13){
//     alert("condition 1 is true");
// }
// if (c===13){
//     alert("condition 2 is true");
// }
// if (++c<14){
//     alert("condition 3 is true");
// }
// if (c===14){
//     alert("condition 4 is true");
// }
// var materialCost =20000;  //d
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost===materialCost+ laborCost){
//     alert("The total cost equals!</h1>");
// }
// if(true){                    //e
//     alert("True");
// }
// if(false){
//     alert("False");
// }
// if("cars"<"cats"){           //f
//     alert("Car is smaller than cat!");
// }

// Q6
// document.write("<h1>Mark Sheet</h1><br/><br/> <br/> <br/>");
// let totalMarksInEach=+prompt("Total marks in each subject");
// let marksObtained1=+prompt("Marks obtained Subject 1");
// let marksObtained2=+prompt("Marks obtained Subject 2");
// let marksObtained3=+prompt("Marks obtained Subject 3");
// let totalObtainedMarks=marksObtained1+marksObtained2+marksObtained3;
// let totalMarks=totalMarksInEach*3
// let percentage=(totalObtainedMarks/totalMarks)*100;
// document.write("Total marks : " + totalMarks + "<br/>");
// document.write("Marks obtained : " + totalObtainedMarks + "<br/>");
// document.write(`Percentage : ${percentage}% <br/>`);
// if (percentage >= 80 && percentage<=100) {
//     document.write("Grade : A-One <br/>");
//     document.write("Remarks : Excellent");
// }else if (percentage >=70 && percentage<=80){
//     document.write("Grade : A <br/>");
//     document.write("Remarks : Good");
// }else if(percentage >=60 && percentage<=70){
//     document.write("Grade : B <br/>");
//     document.write("Remarks : Satisfactory");
// }else{
//     document.write("Grade : Fail <br/>");
//     document.write("Remarks : You need to improve");
// }

// Q7
// let number=5;
// let guessNumber=+prompt("Guess a number between 0 to 10")
// if (guessNumber==number){
//     alert("Bingo! Correct answer");
// }
// else if(guessNumber==(number+1) || guessNumber==(number-1)){
//     alert("Close enough to the correct answer");
// }
// document.write(number); 


// Q8
// let checkNumber =+prompt("Enter a number to check if it is divisible by 3");
// if (checkNumber%3==0) {
//     alert(checkNumber + " is divisible by 3");
// }else{
//     alert(checkNumber + " is not divisible by 3");
// }

// Q9
// let chckNum =+prompt("Enter a number to check if it is even or odd");
// if (chckNum % 2 == 0) {
//     alert(chckNum + " is an even number");
// }else{
//     alert(chckNum + " is an odd number");
// }

// Q10
// let temp=prompt("Ener the Temperature:");
// if(Number(temp)>40){
//     document.write("Its too hot outside.");
// }
// else if(Number(temp)>=30 && Number(temp)<=40){
//     document.write("The Weather today is Normal.");
// }
// else if(Number(temp)>=20 && Number(temp)<=30){
//     document.write("Today's weather is Cool.");
// }
// else if(Number(temp)>=10 && Number(temp)<=20){
//     document.write("OMG! Today's weather is so Cool.");
// }

// Q11
// document.write("<h1>Calculator</h1><br/><br/> <br/> <br/> <br/>");
// let num1=+prompt("Enter first number : ");
// let num2=+prompt("Enter second number : ");
// let oprator=prompt("Operator : ");
// document.write(`<h2>First Number : ${num1}</h2>`);
// document.write(`<h2>Second Number : ${num2}</h2>`);
// document.write(`<h2>Operator : ${oprator}</h2>`);
// if (oprator=="+"){
//     document.write(`<h2>The Sum of ${num1} and ${num2} is : ${num1+num2}</h2>`);
// }else if (oprator=="-"){
//     document.write(`<h2>The Difference of ${num1} and ${num2} is : ${num1-num2}</h2>`);
// }else if (oprator=="*"){
//     document.write(`<h2>The Product of ${num1} and ${num2} is : ${num1*num2}</h2>`);
// }else if(oprator=="/"){
//     document.write(`<h2>The Division of ${num1} from ${num2} is : ${num1/num2}</h2>`);
// }else if (oprator=="%"){
//     document.write(`<h2>The Mosulus after ${num1} / ${num2} is : ${num1%num2}</h2>`);
// }else if(oprator=="**"){
//     document.write(`<h2>The Power of ${num1} to ${num2} is : ${num1**num2}</h2>`);
// }else{
//     document.write(`<h2>Invalid Operator</h2>`);
// }




//Chapter 12-13

// Q1
// let char = prompt('Enter a number, letter or character');
// let ascii = char.charCodeAt(0);
// if (ascii>=65 && ascii<=90){
//     alert('You have entered a Upper Case Letter.');
// }
// else if (ascii>=97 && ascii< 122){
//     alert('You have entered a Lower Case Letter.');
// }
// else if (ascii>=48 && ascii<=57){
//     alert('You have entered a Number.');
// }
// else{
//     alert('You have entered a Character.');
// }

// Q2
// let nm1=+prompt("Enter First Number");
// let nm2=+prompt("Enter Second Number");
// if(nm1>nm2){
//     alert(nm1 + " is greater than " + nm2);
// }
// else if(nm1<nm2){
//     alert(nm2 + " is greater than " + nm1);
// }
// else{
//     alert(nm1 + " is equal to " + nm2);
// }

// Q3
// let inputnum=+prompt("Enter a number:");
// if (inputnum>0){
//     alert("The number is positive.");
// }
// else if (inputnum<0){
//     alert("The number is negative.");
// }else{
//     alert("The number is Zero.");
// }

// Q4
// let chr=prompt("Enter a latter");
// if (chr=="a"|| chr=="e" || chr=="i" || chr=="o" || chr=="u" ){
//     document.write("You entered a vowel")
// }
// else{
//     document.write("You entered a consonant")
// }

// Q5
// let pass1=prompt("Enter a password");
// let pass2=prompt("Confirm your password");
// if (pass1=="" || pass2==""){
//     alert("Please enter your password");
// }else if(pass1==pass2){
//     alert("Correct! the password you entered matched the original password");
// }else{
//     alert("Incorrect! the password you entered did not match the original password");
// }

// Q6
// var greeting;
// var hour=11;
// if (hour<13){
//     greeting="Good Morning!";
//     document.write(greeting);
// }
// else if(hour<18){
//     greeting="Good Day!";
//     document.write(greeting);
// }
// else{
//     greeting="Good Evening!";
//     document.write(greeting);
// }

// Q7
// let time=1900;
// if (time>0 && time<1200) {
//     document.write("Good Morning!");
// }
// else if (time>=1200 && time<1700) {
//     document.write("Good Afternoon!");
// }
// else if (time>=1700 && time<2100) {
//     document.write("Good Evening!");
// }
// else {
//     document.write("Good Night!");
// }