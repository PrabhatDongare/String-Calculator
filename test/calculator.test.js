import { add } from '../calculator';

test('Need to return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('Need to return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

test('Need to return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
    expect(add("1,5")).toBe(6);
});

test('Need to return the sum of multiple numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);    
});

test('Need to handle new lines between numbers', () => {
    expect(add("1\n2")).toBe(3);
    expect(add("1\n2\n3")).toBe(6);
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3,4")).toBe(10);
});

test('Need to support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//$\n1$2$3")).toBe(6);
});

test('Need to throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
});
