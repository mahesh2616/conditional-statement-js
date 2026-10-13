

// Q1]Write a program to check whether a given number is positive, negative, or zero.

let num = 10

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
// Q2]Write a program to check whether a person is eligible to vote based on their age.

let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
// Q3]. Write a program to check whether a number is even or odd without using any built-in functions.

let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
// Q4].Write a program to find the greater of two numbers using if-else.
let a = 25;
let b = 15;

if (a > b) {
    console.log("Greater number:", a);
} else {
    console.log("Greater number:", b);
}
// 5]. Write a program to find the largest of three numbers using if-else if-else.

let a = 25;
let b = 50;
let c = 35;

if (a > b && a > c) {
    console.log("Largest:", a);
} else if (b > a && b > c) {
    console.log("Largest:", b);
} else {
    console.log("Largest:", c);
}
// 6].Write a program to check whether a given year is a leap year.

let year = 2024;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
// 7]. Write a program to calculate a student's grade based on marks:


let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else if (marks >= 0) {
    console.log("Grade F");
} else {
    console.log("Invalid marks");
}
// 8]. Write a program to check whether a person is eligible for a driving license based on their age.

let age = 19;

if (age >= 18) {
    console.log("Eligible for driving license");
} else {
    console.log("Not eligible for driving license");
}
// 9]Write a program to check whether a person is eligible for a driving license based on their age.

let num = 30;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}
// 10].Write a program to check whether a given character is a vowel or consonan 
let ch = "a";

if (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u"
) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}
// 11].Write a program to calculate an electricity bill using different rates based on the number of units consumed.


// Example rates:

// 0–100 units → ₹5/unit
// 101–200 → ₹7/unit
// Above 200 → ₹10/unit
let units = 250;
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Electricity Bill: ₹" + bill);

// 12]. Write a program to calculate a discount based on the purchase amount:
// Above ₹10,000 → 20%
// ₹5,000–₹10,000 → 10%
// Below ₹5,000 → No discount


let amount = 12000;
let discount;

if (amount > 10000) {
    discount = amount * 20 / 100;
} else if (amount >= 5000) {
    discount = amount * 10 / 100;
} else {
    discount = 0;
}

console.log("Discount: ₹" + discount);


// 13]. Write a program to calculate the final price after discount and display the discount amount and final amount.

let amount = 12000;
let discount;

if (amount > 10000) {
    discount = amount * 20 / 100;
} else if (amount >= 5000) {
    discount = amount * 10 / 100;
} else {
    discount = 0;
}

let finalAmount = amount - discount;

console.log("Purchase Amount: ₹" + amount);
console.log("Discount: ₹" + discount);
console.log("Final Amount: ₹" + finalAmount);
// 14]. Write a program to check whether three given sides can form a valid triangle.

let a = 5;
let b = 6;
let c = 7;

if (a + b > c && b + c > a && a + c > b) {
    console.log("Valid Triangle");
} else {
    console.log("Invalid Triangle");
}
// 15]. Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

let a = 5;
let b = 5;
let c = 5;

if (a === b && b === c) {
    console.log("Equilateral Triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}
// 16].Write a program to determine whether a triangle is acute, right-angled, or obtuse using its three sides.
 
let a = 3;
let b = 4;
let c = 5;

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Invalid Triangle");
} else {
    let x = a * a;
    let y = b * b;
    let z = c * c;

    if (x + y === z || x + z === y || y + z === x) {
        console.log("Right-angled Triangle");
    } else if (x + y > z && x + z > y && y + z > x) {
        console.log("Acute Triangle");
    } else {
        console.log("Obtuse Triangle");
    }
}
// 17]. Write a program to find the middle value among three different numbers.
let a = 10;
let b = 30;
let c = 20;

if ((a > b && a < c) || (a < b && a > c)) {
    console.log("Middle:", a);
} else if ((b > a && b < c) || (b < a && b > c)) {
    console.log("Middle:", b);
} else {
    console.log("Middle:", c);
}
// 18]Write a program to check whether a given number is a two-digit, three-digit, or other number.

let num = 125;

if (num >= 10 && num <= 99) {
    console.log("Two-digit number");
} else if (num >= 100 && num <= 999) {
    console.log("Three-digit number");
} else {
    console.log("Other number");
}
// 19]Write a program to calculate an employee's bonus based on years of experience and salary.


Example:

Experience ≥ 10 years → 20%
Experience ≥ 5 years → 10%
Below 5 years → 5%
let salary = 50000;
let experience = 8;
let bonus;

if (experience >= 10) {
    bonus = salary * 20 / 100;
} else if (experience >= 5) {
    bonus = salary * 10 / 100;
} else {
    bonus = salary * 5 / 100;
}

console.log("Bonus: ₹" + bonus);


// 20]. Write a program to determine whether an employee is eligible for a salary increment based on their performance rating.

let rating = 5;

if (rating >= 4) {
    console.log("Eligible for salary increment");
} else {
    console.log("Not eligible for salary increment");
}


// 21].Write a program to create a simple ATM withdrawal system that checks balance, withdrawal amount, and minimum balance.

let balance = 10000;
let withdrawal = 3000;
let minimumBalance = 1000;

if (withdrawal <= 0) {
    console.log("Invalid withdrawal amount");
} else if (withdrawal > balance) {
    console.log("Insufficient balance");
} else if (balance - withdrawal < minimumBalance) {
    console.log("Minimum balance must be maintained");
} else {
    balance = balance - withdrawal;
    console.log("Withdrawal successful");
    console.log("Remaining Balance:", balance);
}
// 22]. Write a program to create a login system that checks username and password using if-else.

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login successful");
} else {
    console.log("Invalid username or password");
}
// 23].Write a program to check whether a user can access a website based on their age and membership status.

let age = 25;
let isMember = true;

if (age >= 18 && isMember === true) {
    console.log("Website access granted");
} else {
    console.log("Access denied");
}
// 24]Write a program to calculate a taxi fare based on the distance travelled, using different rates for different distance ranges.


Example:

First 5 km → ₹15/km
6–15 km → ₹12/km
Above 15 km → ₹10/km
let distance = 20;
let fare;

if (distance <= 5) {
    fare = distance * 15;
} else if (distance <= 15) {
    fare = (5 * 15) + ((distance - 5) * 12);
} else {
    fare = (5 * 15) + (10 * 12) + ((distance - 15) * 10);
}

console.log("Taxi Fare: ₹" + fare);
// 25]. Write a program to calculate a movie ticket price based on age and whether it is a weekend.
let age = 20;
let weekend = true;
let price;

if (age < 12) {
    price = 100;
} else if (age >= 60) {
    price = 120;
} else {
    price = 200;
}

if (weekend === true) {
    price = price + 50;
}

console.log("Ticket Price: ₹" + price);
// 26] Write a program using switch to create a simple calculator for +, -, *, and /.

let a = 20;
let b = 10;
let operator = "+";

switch (operator) {
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        if (b !== 0) {
            console.log(a / b);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid operator");
}
// 27]Write a program using switch to display the day of the week based on a number from 1 to 7.

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// 28] Write a program using switch to display the month name and number of days based on the month number.

let month = 2;

switch (month) {
    case 1:
        console.log("January - 31 days");
        break;

    case 2:
        console.log("February - 28 days");
        break;

    case 3:
        console.log("March - 31 days");
        break;

    case 4:
        console.log("April - 30 days");
        break;

    case 5:
        console.log("May - 31 days");
        break;

    case 6:
        console.log("June - 30 days");
        break;

    case 7:
        console.log("July - 31 days");
        break;

    case 8:
        console.log("August - 31 days");
        break;

    case 9:
        console.log("September - 30 days");
        break;

    case 10:
        console.log("October - 31 days");
        break;

    case 11:
        console.log("November - 30 days");
        break;

    case 12:
        console.log("December - 31 days");
        break;

    default:
        console.log("Invalid month");
}
// 29] Write a program using switch to create a menu-driven food ordering system with different prices for different items.

let choice = 2;
let price;

switch (choice) {
    case 1:
        console.log("Pizza");
        price = 200;
        break;

    case 2:
        console.log("Burger");
        price = 120;
        break;

    case 3:
        console.log("Sandwich");
        price = 100;
        break;

    case 4:
        console.log("Pasta");
        price = 150;
        break;

    default:
        console.log("Invalid choice");
}

if (price !== undefined) {
    console.log("Price: ₹" + price);
}
// 30] Write a program using switch to convert a number from 1–5 into its corresponding English word.
let num = 3;

switch (num) {
    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;

    case 4:
        console.log("Four");
        break;

    case 5:
        console.log("Five");
        break;

    default:
        console.log("Invalid number");
}
// 31]Write a program using switch to determine whether a given character is a vowel
let ch = "e";

switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
}
// 32]Write a program using switch to calculate different area formulas based on the user's choice of shape.

let choice = 1;

switch (choice) {
    case 1:
        let side = 5;
        console.log("Square Area:", side * side);
        break;

    case 2:
        let length = 10;
        let width = 5;
        console.log("Rectangle Area:", length * width);
        break;

    case 3:
        let radius = 7;
        console.log("Circle Area:", 3.14 * radius * radius);
        break;

    case 4:
        let base = 10;
        let height = 6;
        console.log("Triangle Area:", (base * height) / 2);
        break;

    default:
        console.log("Invalid choice");
}
// 33]Write a program that accepts a temperature and unit (C, F, or K) and converts it to the other units using conditional statements.

let temperature = 100;
let unit = "C";

if (unit === "C") {
    console.log("Fahrenheit:", (temperature * 9 / 5) + 32);
    console.log("Kelvin:", temperature + 273.15);

} else if (unit === "F") {
    console.log("Celsius:", (temperature - 32) * 5 / 9);
    console.log("Kelvin:", (temperature - 32) * 5 / 9 + 273.15);

} else if (unit === "K") {
    console.log("Celsius:", temperature - 273.15);
    console.log("Fahrenheit:", (temperature - 273.15) * 9 / 5 + 32);

} else {
    console.log("Invalid unit");
}
// 34]Write a program to calculate shipping charges based on package weight and delivery type.


Example:

Weight ≤ 5 kg → ₹50
Weight ≤ 10 kg → ₹100
Above 10 kg → ₹150
Express delivery → additional ₹100
let weight = 8;
let deliveryType = "express";
let charge;

if (weight <= 5) {
    charge = 50;
} else if (weight <= 10) {
    charge = 100;
} else {
    charge = 150;
}

if (deliveryType === "express") {
    charge = charge + 100;
}

console.log("Shipping Charge: ₹" + charge);
// 35]Write a program to determine a customer's loan eligibility based on age, salary, and credit score.

let age = 30;
let salary = 50000;
let creditScore = 750;

if (age >= 21 && age <= 60 &&
    salary >= 25000 &&
    creditScore >= 700) {

    console.log("Loan Eligible");

} else {
    console.log("Loan Not Eligible");
}
// 36] Write a program to calculate income tax based on different salary ranges.


Example tax slabs:

Up to ₹2,50,000 → No tax
₹2,50,001–₹5,00,000 → 5%
₹5,00,001–₹10,00,000 → 20%
Above ₹10,00,000 → 30%
let salary = 800000;
let tax;

if (salary <= 250000) {
    tax = 0;
} else if (salary <= 500000) {
    tax = salary * 5 / 100;
} else if (salary <= 1000000) {
    tax = salary * 20 / 100;
} else {
    tax = salary * 30 / 100;
}

console.log("Income Tax: ₹" + tax);
// 37]Write a program to validate a password using conditional statements. Check whether it has the required length, number, and special character.
let password = "Hello@123";

let hasNumber = false;
let hasSpecial = false;

for (let i = 0; i < password.length; i++) {

    if (password[i] >= "0" && password[i] <= "9") {
        hasNumber = true;
    }

    if ("!@#$%^&*".includes(password[i])) {
        hasSpecial = true;
    }
}

if (password.length >= 8 && hasNumber && hasSpecial) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}
// 38]Write a program to calculate a student's result based on marks in three subjects, checking both the average and whether the student passed every subject.

let math = 80;
let science = 75;
let english = 65;

let average = (math + science + english) / 3;

if (math >= 35 && science >= 35 && english >= 35) {

    if (average >= 40) {
        console.log("Pass");
        console.log("Average:", average);
    } else {
        console.log("Fail");
    }

} else {
    console.log("Fail - Student failed in one or more subjects");
}
// 39] Write a program for a restaurant billing system that calculates the bill, applies different discounts based on the total, and adds a service charge.


Example:

// Above ₹5000 → 20% discount
// ₹2000–₹5000 → 10% discount
// Below ₹2000 → No discount
// Service charge → 5%
let bill = 6000;
let discount;
let serviceCharge;

if (bill > 5000) {
    discount = bill * 20 / 100;
} else if (bill >= 2000) {
    discount = bill * 10 / 100;
} else {
    discount = 0;
}

let amountAfterDiscount = bill - discount;

serviceCharge = amountAfterDiscount * 5 / 100;

let finalBill = amountAfterDiscount + serviceCharge;

console.log("Original Bill: ₹" + bill);
console.log("Discount: ₹" + discount);
console.log("Service Charge: ₹" + serviceCharge);
console.log("Final Bill: ₹" + finalBill);

// 40] Write a banking menu program using switch for Deposit, Withdraw, Check Balance, and Exit, with appropriate conditional checks for each operation.

let balance = 10000;

let choice = 2;
let amount = 2000;

switch (choice) {

    case 1:
        balance = balance + amount;
        console.log("Deposit Successful");
        console.log("Balance:", balance);
        break;

    case 2:
        if (amount <= 0) {
            console.log("Invalid amount");
        } else if (amount > balance) {
            console.log("Insufficient Balance");
        } else {
            balance = balance - amount;
            console.log("Withdrawal Successful");
            console.log("Balance:", balance);
        }
        break;

    case 3:
        console.log("Current Balance:", balance);
        break;

    case 4:
        console.log("Thank you for using banking service");
        break;

    default:
        console.log("Invalid choice");
}




    
