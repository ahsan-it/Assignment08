
//! Ans1
var num1 = 3;
var num2 = 5;

// Perform addition
var result = num1 + num2;

// Display the result in the browser
document.write("The sum of " + num1 + " and " + num2 + " is: " + result);
// !Ans2
var num1 = 10;
var num2 = 5;

// Perform subtraction
var subtractionResult = num1 - num2;

// Perform multiplication
var multiplicationResult = num1 * num2;

// Perform division
var divisionResult = num1 / num2;

// Perform modulus
var modulusResult = num1 % num2;

// Display the results in the browser
document.write("<h2>Answer02</h2>");
document.write("<br> Subtraction: " + num1 + " - " + num2 + " = " + subtractionResult + "<br>");
document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplicationResult + "<br>");
document.write("Division: " + num1 + " / " + num2 + " = " + divisionResult + "<br>");
document.write("Modulus: " + num1 + " % " + num2 + " = " + modulusResult + "<br>");
// !Ans3
 // a. Declare a variable
 var myVariable;

 // b. Show the value of the variable after declaration
 document.write("<h2>Answer03</h2>");
 document.write("Value after variable declaration is: " + myVariable + "<br>");

 // c. Initialize the variable with some number
 myVariable = 5;

 // d. Show the initial value of the variable
 document.write("Initial value: " + myVariable + "<br>");

 // e. Increment the variable
 myVariable++;

 // f. Show the value of the variable after increment
 document.write("Value after increment is: " + myVariable + "<br>");

 // g. Add 7 to the variable
 myVariable += 7;

 // h. Show the value of the variable after addition
 document.write("Value after addition is: " + myVariable + "<br>");

 // i. Decrement the variable
 myVariable--;

 // j. Show the value of the variable after decrement
 document.write("Value after decrement is: " + myVariable + "<br>");

 // k. Show the remainder after dividing the variable's value by 3
 var remainder = myVariable % 3;

 // l. Show the remainder in the output
 document.write("The remainder is: " + remainder + "<br>");
// ! Ans4
 // Cost of one movie ticket in PKR
 var ticketPrice = 600;

 // Number of tickets to buy
 var numberOfTickets = 5;

 // Calculate the total cost
 var totalCost = ticketPrice * numberOfTickets;

 // Display the result
 document.write("<h2>Answer04</h2>");
 document.write("Cost of buying " + numberOfTickets + " movie tickets is: " + totalCost + " PKR");
// ! Ans5
  // Prompt the user for a number
  var number = parseInt(prompt("Enter a number to display its multiplication table:"));

  // Check if the input is a valid number
  if (!isNaN(number)) {
    document.write("<h2>Answer05</h2>");  
    document.write("<h2>Multiplication Table for " + number + ":</h2>");
      
      // Display the multiplication table
      for (var i = 1; i <= 10; i++) {
          var result = number * i;
          document.write(number + " x " + i + " = " + result + "<br>");
      }
  } else {
      // Display an error message if the input is not a valid number
      document.write("Invalid input. Please enter a valid number.");
  }
// !  Ans6
  // a. Store a Celsius temperature into a variable.
  var celsiusTemperature = 25;

  // b. Convert it to Fahrenheit & output "NNoC is NNoF".
  var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
  document.write("<h2>Answer06 <br> Temperature</h2>");
  document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

  // c. Now store a Fahrenheit temperature into a variable.
  var fahrenheitTemperature2 = 77;

  // d. Convert it to Celsius & output "NNoF is NNoC".
  var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
  document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");
//  ! Ans7
 // Define the prices and quantities of items
 var priceItem1 = 20; // Price of item 1
 var priceItem2 = 30; // Price of item 2
 var quantityItem1 = 3; // Ordered quantity of item 1
 var quantityItem2 = 2; // Ordered quantity of item 2

 // Define shipping charges
 var shippingCharges = 10;

 // Calculate the total cost
 var subtotalItem1 = priceItem1 * quantityItem1;
 var subtotalItem2 = priceItem2 * quantityItem2;
 var totalCost = subtotalItem1 + subtotalItem2 + shippingCharges;

 // Display the receipt in the browser
 document.write("<h2>Answer07 <br> Receipt:</h2>");
 document.write("Price of Item 1: $" + priceItem1 + "<br>");
 document.write("Ordered Quantity of Item 1: " + quantityItem1 + "<br>");
 document.write("Subtotal for Item 1: $" + subtotalItem1 + "<br><br>");

 document.write("Price of Item 2: $" + priceItem2 + "<br>");
 document.write("Ordered Quantity of Item 2: " + quantityItem2 + "<br>");
 document.write("Subtotal for Item 2: $" + subtotalItem2 + "<br><br>");

 document.write("Shipping Charges: $" + shippingCharges + "<br><br>");

 document.write("Total Cost: $" + totalCost + "<br>");
// ! Ans8
 // Store total marks and marks obtained by the student
 var totalMarks = 1000; // Replace with the actual total marks
 var marksObtained = 850; // Replace with the actual marks obtained

 // Calculate the percentage
 var percentage = (marksObtained / totalMarks) * 100;

 // Display the result in the browser
 document.write("<h2>Answer08</h2>");
 document.write("Total Marks: " + totalMarks + "<br>");
 document.write("Marks Obtained: " + marksObtained + "<br>");
 document.write("Percentage: " + percentage.toFixed(2) + "%");
//!  Ans9

        // Define the amount in US Dollars and Saudi Riyals
        var usDollars = 10;
        var saudiRiyals = 25;

        // Define the exchange rates
        var usdToPkrRate = 104.80;
        var saudiRiyalToPkrRate = 28;

        // Calculate the total in Pakistani Rupees in a single expression
        var totalPakistaniRupees = (usDollars * usdToPkrRate) + (saudiRiyals * saudiRiyalToPkrRate);

        // Display the result
        document.write("<h2>Answer09</h2>");
        document.write("Total in Pakistani Rupees: " + totalPakistaniRupees + " PKR");
        //! Ans10
                // Initialize a variable with some number
                var initialValue = 15; // You can replace this with any number

                // Perform the arithmetic operations in a single expression
                var result = ((initialValue + 5) * 10) / 2;
        
                // Display the result
                document.write("<h2>Answer10</h2>");
                document.write("Initial Value: " + initialValue + "<br>");
                document.write("Result after arithmetic operations: " + result);
// !Ans11
   // Store the current year in a variable
   var currentYear = new Date().getFullYear();

   // Store their birth year in a variable
   var birthYear = 1990; // Replace this with the actual birth year

   // Calculate their 2 possible ages based on the stored values
   var age1 = currentYear - birthYear;
   var age2 = age1 - 1; // Calculate the second age assuming the birthday hasn't occurred yet this year

   // Display the result on the screen
   document.write("<h2>Answer11</h2>");
   document.write("They are either " + age1 + " or " + age2 + " years old.");
//  !  Ans12
 // Store the radius of the circle in a variable
 var radius = 5; // Replace this with the actual radius

 // Calculate the circumference of the circle
 var circumference = 2 * Math.PI * radius;

 // Calculate the area of the circle
 var area = Math.PI * Math.pow(radius, 2);

 // Display the results
 document.write("<h2>Answer12</h2>");
 document.write("The circumference is " + circumference.toFixed(2) + "<br>");
 document.write("The area is " + area.toFixed(2));
// ! Ans13
 // Store your favorite snack into a variable
 var favoriteSnack = "chocolate";

 // Store your current age into a variable
 var currentAge = 25; // Replace this with your actual age

 // Store a maximum age into a variable
 var maximumAge = 80; // Replace this with your desired maximum age

 // Store an estimated amount per day (as a number)
 var amountPerDay = 2; // Replace this with your estimated consumption

 // Calculate how many you would eat total for the rest of your life
 var yearsRemaining = maximumAge - currentAge;
 var totalSnacksRequired = yearsRemaining * 365 * amountPerDay;

 // Display the result on the screen
 document.write("<h2>Answer13</h2>");
 document.write("You will need " + totalSnacksRequired + " " + favoriteSnack + "s to last you until the ripe old age of " + maximumAge + ".");        