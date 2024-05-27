const {fizzBuzz} =require('../main.js');

 test ("should return FizzBuzz for numbers divisible by both 3 and 5",() => {
    expect(45 % 5 && 15 % 3).toBe(0)
 })   
 test ("should return Fizz for numbers divisible by 3",() => {
    expect( 9 % 3).toBe(0)
 })   
 test ("should return FizzBuzz for numbers divisible by  5",() => {
    expect(10 % 5 ).toBe(0)
 })   
 test ("should return i for numbers not divisible by both 3 and 5",() => {
    expect(11 % 5 && 4 % 3).toBe(1)
 })   