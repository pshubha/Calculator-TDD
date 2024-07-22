import {  cleanup } from '@testing-library/react';
import { add } from './StrCalculator'

afterEach(cleanup);
// 1. simple String calculator 

test("it should return output 0 if string is empty",()=>{
    expect(add('')).toBe(0);
})

test("it should return output number itself if string contain single integer",()=>{
    expect(add('1')).toBe(1);
})

test("it should return output sum of numbers when string contains interger sepated by comma",()=>{
    expect(add("1,2")).toBe(3);
})

// 2. Allow any amount of numbers

test("it should return output sum of multiple numbers",() => {
    expect(add("1,2,3")).toBe(6);
    expect(add("2,3,4,5")).toBe(14);
})

// 3. Allow the add method to handle new lines between numbers (instead of commas).

test("it should return output sum of numbers when contains new line between numbers", ()=>{
    expect(add("1,2\n,3")).toBe(6);
    expect(add("1,2\n3\n4")).toBe(10);
})

// 4. Support different delimiters

test("it should return output sum of numbers even when contains delimiters", ()=>{
    expect(add("//;\n1;2")).toBe(3);
})

// 5. Negative number will throw an exception

test("it throw exception when contain negative number", ()=>{
    expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
})

//6. Delimiters can be of any length with the following format: “//[delimiter]\n”

test("it should return output sum of numbers even when contains delimiters with any length format", ()=>{
    expect(add("//[***]\n1***2***3")).toBe(6);
})

// 7.Allow multiple delimiters like this: “//[delim1][delim2]\n”

test("it should return output sum of numbers even when contains multiple delimiters", ()=>{
    expect(add("//[*][%]\n1*2%3")).toBe(6);
})

// 8. Numbers bigger than 1000 should be ignored

test("it should return output sum of numbers but number greater than 1000 should be ignored", ()=>{
    expect(add('2,1001')).toBe(2);
    expect(add('1,2,1001')).toBe(3);
    expect(add('1,1000')).toBe(1001);
})
