// Function to print FizzBuzz
function fizzBuzz(i) {
  
      // Check and verify whether the number is both divisible by 3 and 5
      if (i % 3 === 0 && i % 5 === 0) {
          return  "FizzBuzz";
      }
      // Verify if the number is divisible by 3
      else if (i % 3 === 0) {
          return  "Fizz";
      }
      // Check if the number is divisible by 5
      else if (i % 5 === 0) {
          return "Buzz";
      }
      // Otherwise, just print the number
      else {
          return i;
      }
  }


// Call the function to print FizzBuzz
console.log(fizzBuzz(45));