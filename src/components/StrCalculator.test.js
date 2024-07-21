import { render, screen, cleanup } from '@testing-library/react';
import StrCalculator, { add } from './StrCalculator'

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
    throw new Error();
})

// 5. Negative number will throw an exception

test("it throw exception when contain negative number", ()=>{
    throw new Error();
})