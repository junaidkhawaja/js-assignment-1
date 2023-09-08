// Chapter 1

// Q1
var firstName = "Khawaja";
var lastName = "Junaid";
alert("Welcome " + firstName + " " + lastName + " to my website.")


// Q2

alert("Error! Please enter a valid password.")

//Q3

alert("Welcome to JS Land..\n Happy Coding!")

// Q4

alert("Welcome to JS Land..")
alert("Happy Coding!")

//Q5

console.log("Hello... I can run JS through my web browser's console!")


//Q6, find answer in html


// Q7, find answer in the html file


// Chapter 2

//Q1

var username;

//Q2

var myName = "Khawaja Junaid Ahmed";

//Q3

var message;
message = "Hello World";
alert(message);

//Q4

var studentName = "John Doe"
var age = "15"
var cert = "Certified Mobile Application Development"
alert(studentName)
alert(age + " years old")
alert(cert)

//Q5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

//Q6
var email = "example@example.com"
alert("My email address is " + email)

//Q7

var book = "A smarter way to learn JavaScript"
alert("I am trying to learn from the Book " + book);

//Q8
document.write("Yah! I can write HTML content through JavaScript")

//Q9

var specials = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(specials)

//Chapter 3

//Q1
var age2 = "33"
alert("I am " + age2 + " years old");

//Q2
var visits;
visits = 11
alert("You have visited this site " + visits + " times");

//Q3
var birthYear;
birthYear = 1990

document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear)

//Q4
var visitorName = "John Doe"
var product = "T-Shirt"
var quantity = 5
var store = "XYZ Clothing Store"
document.write("<br><b>" + visitorName + "</b> ordered <b>" + quantity + " " + product + "</b>(s) on " + store)

//Chapter 4

//Q1
var variable1;
var variable2;
var variable3;

//Q2

// Illegal variables
// var 2names;
// var 33players;
// var /smart;
// var \smartpeople;
// var $331;

// Legal Variables
// var fullname;
// var myCity;
// var zipcodes;
// var _name;
// var $hello;


//Q3
document.write("<br><h2>Rules for naming JS variable</h2><br>");
document.write("Variable names can only contains numbers, $ and _ .<br> For example <b>$my_1stVariable</b><br>")
document.write("Variable must begin with a letter, $ or _ . For example <b>$name, _name or name</b><br>")
document.write("Variable names are case sensitive.<br>")
document.write("Variable names should not be JS keywords.<br>")


//Chapter5

//Q1
number1 = 3;
number2 = 5;
addbothnumbers = number1 + number2;
document.write("Sum of " + number1 + " and " + number2 + " is " + addbothnumbers + "<br>");

//Q2
subbothnumbers = number1 - number2;
document.write("Substraction of " + number1 + " and " + number2 + " is " + subbothnumbers + "<br>");

mulbothnumbers = number1 * number2;
document.write("Multiplication of " + number1 + " and " + number2 + " is " + mulbothnumbers + "<br>");

modbothnumbers = number1 % number2;
document.write("Modulus of " + number1 + " and " + number2 + " is " + modbothnumbers + "<br>");


//Q3
var chap5q3;
document.write("Value after variable declaration is:" + chap5q3 + "<br>");
chap5q3 = 5;
document.write("Initial value: " + chap5q3 + "<br>")
++chap5q3
document.write("Value after increment is: " + chap5q3 + "<br>");
var chap5q3res = chap5q3 + 7
document.write("Value after addition is : " + chap5q3res + "<br>");
--chap5q3res
document.write("Value after decrement is : " + chap5q3res + "<br>");
var chap5q3div = chap5q3/3
document.write("The remainder is : " + chap5q3div + "<br>");


//Q4
var ticketprice = 600;
var ticketcury = "PKR";
var ticketqty = 5
document.write("Total cost to buy " + ticketqty + " tickets to movie is " + ticketprice*ticketqty + " " + ticketcury + "<br>");

//Q5
var table = 4;
document.write("<h2>Table of 4</h2> <br>");
document.write(table + "X" + 1 + "=" + table * 1 + "<br>");
document.write(table + "X" + 2 + "=" + table * 2 + "<br>");
document.write(table + "X" + 3 + "=" + table * 3 + "<br>");
document.write(table + "X" + 4 + "=" + table * 4 + "<br>");
document.write(table + "X" + 5 + "=" + table * 5 + "<br>");
document.write(table + "X" + 6 + "=" + table * 6 + "<br>");
document.write(table + "X" + 7 + "=" + table * 7 + "<br>");
document.write(table + "X" + 8 + "=" + table * 8 + "<br>");
document.write(table + "X" + 9 + "=" + table * 9 + "<br>");
document.write(table + "X" + 10 + "=" + table * 10 + "<br>");

//Q6
var tempc = 25;
var tempf = 70;
var textc = "<sup>0</sup>C "
var textf = "<sup>0</sup>F "

fahrenheit = (tempc * 9 / 5) + 32;
celsius = (tempf - 32) * 5 / 9;
document.write("<h2>Temprature</h2> <br>");
document.write(tempc + textc + " is " + fahrenheit + textf + "<br>");
document.write(tempf + textf + " is " + celsius + textc + "<br>");


//Q7
var item1 = 650;
var item2 = 100;
var item1qty = 3;
var item2qty = 7;
var shipping = 100;
var item1total = item1 * item1qty;
var item2total = item2 * item2qty;
document.write("<h2>Shopping Cart</h2>" + "<br>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + item1qty + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + item2qty + "<br><br>");
document.write("Total cost of your order is " + (item1total + item2total + shipping) + "<br>")

//Q8
var totalmarks = 980;
var marksobtained = 804;

document.write("<h2>Marks Sheet</h2><br />");
document.write("Total Marks: " + totalmarks + "<br>");
document.write("Marks Obtained: " + marksobtained + "<br>");
document.write("Percentage: " + marksobtained/totalmarks*100 + "% <br>");

//Q9
var usd = 10;
var sar = 25;
var usdtopkr = 104.80;
var sartopkr = 28;

document.write("<h2>Currency in PKR</h2><br>");
document.write("Total currency in PKR is: " + (usd*usdtopkr+sar*sartopkr) + "<br>");

//Q10
var primenum = 40;
document.write("<h2>Regular Calculation within single statement</h2><br>");
document.write(primenum + 5 * 10 / 2 + "<br>");

//Q11
var curyear = 2023;
var biryear = 1990;
var biryear2 = 1984;
document.write("<h2>The Age Calculator</h2><br>");
document.write("Current Year: " + curyear + "<br>");
document.write("Birth Year 1: " + biryear + "<br>");
document.write("Birth Year 2: " + biryear2 + "<br>");
document.write("They are either " + (curyear-biryear) + " or " + (curyear-biryear2) + " years old. <br>");

//Q12
var radius = 20
var circumference = ((2) * (3.142) * (radius));
var area = 3.142 * radius * radius;

document.write("<h2>The Geometrizer</h2><br>");
document.write("Radius of circle is: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

//Q13
var snack = "Chocolate Cookies";
var curage = 15;
var maxage = 65;
var snackqty = 3;

document.write("<h2>The Lifetime Supply Calculator</h2><br>");
document.write("Favorite snack: " + snack + "<br>");
document.write("Current age: " + curage + "<br>");
document.write("Estimated maximum age: " + maxage + "<br>");
document.write("Amount of snacks per day:" + snackqty + "<br>");
document.write("You will need " +  (maxage-curage)*snackqty + " " + snack + "  to last you until the ripe old age of " + maxage);

document.write("<h2>The End</h2><br>");




