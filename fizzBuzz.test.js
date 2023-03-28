/**
 * 阶段一：写一个程序，打印出从 1 到 100 的数字，将其中 3 的倍数替换成“Fizz”，5 的倍数替换成“Buzz”。既能被 3 整除、又能被 5 整除的数则替换成“FizzBuzz”。
 * */ 
const fizzBuzz = require('./fizzBuzz');

test('given 0 when CallFizzBuzz Then return Error', () => {
  expect(fizzBuzz(0)).toBe("Error");
});
test('given 101 when CallFizzBuzz Then return Error', () => {
  expect(fizzBuzz(101)).toBe("Error");
});
test('given 1 when CallFizzBuzz Then return 1', () => {
  expect(fizzBuzz(1)).toBe('1');
});
test('given 3 when CallFizzBuzz Then return Fizz', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});
test('given 5 when CallFizzBuzz Then return Buzz', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});
test('given 15 when CallFizzBuzz Then return FizzBuzz', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});

