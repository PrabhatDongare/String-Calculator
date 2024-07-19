import { add } from '../calculator';

test('Need to return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});