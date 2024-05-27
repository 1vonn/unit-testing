const {fizzBuzz} =require('../main.js');
describe('fizzBuzz function tests', ()=>{
 test ("should return FizzBuzz for numbers divisible by both 3 and 5",() => {
    expect(fizzBuzz(45)).toBe("FizzBuzz")
 })   
}
)