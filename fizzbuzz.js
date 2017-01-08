// Place your FizzBuzz code here. 
var rangeLimit = 100;
var responseFor3 = 'Fizz';
var responseFor5 = 'Buzz';

//Need to figure document.write out
//document.write(what goes here?);

//Need to count 1-20 and figure out if each number is divisible by 3, 5, or both.

for (i=1; i<=rangeLimit; i++) {
  
//Check for the following:
  //Check if number can be divided by 3 and 5 w/o remainder 
  //If so, print FizzBuzz
  //We check this first so that program has the opportunity   to check other statements
 
  //Because output is no longer a string, there is no need for "".
  
  if (i%3===0 && i%5===0)
    {
      console.log(responseFor3+responseFor5);
    }
       
//Check if number can be divided by 3 w/o remainder 
//If so, print Fizz

  else if (i%3===0)
    {
      console.log(responseFor3);
    }

//Check if number can be divided by 5 w/o remainder
//If so, print Buzz

  else if (i%5===0)
    {
      console.log(responseFor5);
    }

//Check if number cannot be divided by 3 or 5
//If so, print the number
     
  else
    {
      console.log(i);
    }
 
}