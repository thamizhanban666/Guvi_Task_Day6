// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="./scripts.js"></script>
// </body>
// </html>
// scripts.js
// alert(“I’m invoked!”);

// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon  ANS: in Javascript semicolon i not mandatory
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working ANS:Javascript is a dynamic language

//Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"

//Fix the below to alert hello Guvi geek
let finame=10.5; 
finame = "Guvi";
laname = "geek"
let Name = finame+" "+laname;
alert( `hello ${Name} `);//hello Guvi geek

//Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(Number(a) + Number(b)) //adds 2 variable values

var a = 2 > 12;    // condition becomes false so else is executed
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//How to get the success in console.
let a = prompt("Enter a number?");
// //Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );//works on any number
}
else
{
 console.log( "Success" );//works on without giving any number and enter
}

//How to get the correct score in console.
let value22 = prompt('How many runs you scored in this ball');
if (value22 == 4) { //If we enter 4, it will get the result as "You hit a Four"
      console.log("You hit a Four");
} else if (value22 == 6) {// If we enter 6, it will get the result as "You hit a Six"
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");// Other than 4 and 6, it will get the else statement.
}

// You cant change the value of the msg
let message;
if (message == undefined )
{
 message = "welcome boss";
}
else
{
 message = "Go away";
}
  console.log(message);

  let message;
  let lock ;
  //Dont change any code below this 
  if (null || lock || undefined )
  {
    message = "Go away";
  }
  else
  {
   message = "welcome";
  }
    console.log(message);
    
    let message;
    let lock ;
    //Dont change any code below this
    if (lock && " " || undefined )
    {
      message = "Go away";
    }
    else
    {
     message = "welcome";
    }
    console.log(message);
    
    //You can change only 2 characters
let i = 3;
while (i) {
  console.log( i-- );
}

   //   Change the code to print 1 to 10 in 4 lines
for(let i=1;i<=10;i++)
{
console.log(i)
}

//     Change the code to print even numbers
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}

//Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`); //we have to use backtick symbole
}

//    Fix the code to disarm the bomb.
let countdown = 100;
while (countdown < 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

//    Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);  //  msg printed is hi because 1 represents true and 0 represents false. here the if condition becomes false in lemeout, so did not printed the hello

//    Whats the msg printed and why? Guess you answer before running it.
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg); //  msg printed is hi
