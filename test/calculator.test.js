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
