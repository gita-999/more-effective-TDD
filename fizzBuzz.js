function fizzBuzz(a) {
    if(a < 1 || a > 100) {
      return "Error";
    }
    if(a%3 === 0 && a%5 === 0) {
      return "FizzBuzz"
    }
    if(a === 1) {
      return "1"
    }
    if(a%3 === 0) {
      return "Fizz"
    }
    if(a%5 === 0) {
      return "Buzz"
    }
   
  }
  module.exports = fizzBuzz;